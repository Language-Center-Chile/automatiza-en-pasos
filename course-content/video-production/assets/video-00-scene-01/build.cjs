const fs = require('node:fs');
const path = require('node:path');

const HERE = __dirname;
const TEMPLATE = path.join(HERE, 'opening.template.html');

function validate(spec) {
  if (!spec || typeof spec !== 'object') throw Error('Expected a JSON object');
  for (const key of ['id', 'course', 'eyebrow', 'subtitle', 'closing']) {
    if (typeof spec[key] !== 'string' || !spec[key].trim()) throw Error(`Missing ${key}`);
  }
  if (!Array.isArray(spec.titleLines) || spec.titleLines.length !== 3 || spec.titleLines.some(line => typeof line !== 'string' || !line.trim())) {
    throw Error('titleLines must contain three nonempty strings');
  }
  if (spec.titleLines.some(line => line.length > 24)) throw Error('title line exceeds 24 characters');
  if (spec.course.length > 42 || spec.eyebrow.length > 32 || spec.subtitle.length > 64 || spec.closing.length > 52) {
    throw Error('Scene copy is too long for Full HD layout');
  }
  if (spec.lang !== 'es') throw Error('lang must be es');
  if (!Number.isFinite(spec.duration) || spec.duration < 8 || spec.duration > 15) throw Error('duration must be 8–15 seconds');
  return spec;
}

function extractGsap(html) {
  const start = html.indexOf('<script>/*!');
  const end = html.indexOf('</script>', start);
  if (start < 0 || end < 0) throw Error('Embedded GSAP source was not found');
  return html.slice(start, end + '</script>'.length);
}

function build(spec, gsapScript) {
  validate(spec);
  if (typeof gsapScript !== 'string' || !gsapScript.includes('GSAP')) throw Error('A licensed embedded GSAP script is required');
  const safeSpec = JSON.stringify(spec).replace(/</g, '\\u003c');
  return fs.readFileSync(TEMPLATE, 'utf8')
    .replace('{{GSAP_SCRIPT}}', gsapScript)
    .replace('{{SPEC_JSON}}', safeSpec);
}

if (require.main === module) {
  const [input, output] = process.argv.slice(2);
  const gsapSource = process.env.LC_GSAP_SOURCE;
  if (!input || !output || !gsapSource) {
    throw Error('Usage: LC_GSAP_SOURCE=/path/to/four-step.html node build.cjs spec.json output.html');
  }
  if (fs.existsSync(output)) throw Error('Output exists; use a new path');
  const gsapScript = extractGsap(fs.readFileSync(gsapSource, 'utf8'));
  fs.mkdirSync(path.dirname(path.resolve(output)), {recursive: true});
  fs.writeFileSync(output, build(JSON.parse(fs.readFileSync(input, 'utf8')), gsapScript));
  console.log(path.resolve(output));
}

module.exports = {build, extractGsap, validate};
