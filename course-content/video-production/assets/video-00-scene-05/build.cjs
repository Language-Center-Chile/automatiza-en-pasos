const fs = require('node:fs');
const path = require('node:path');

const SCENE_DIR = __dirname;
const TEMPLATE = path.join(SCENE_DIR, 'route.template.html');

function validate(spec) {
  if (!spec || typeof spec !== 'object') throw Error('Expected a JSON object');
  for (const key of ['id', 'course', 'title', 'subtitle', 'closing']) {
    if (typeof spec[key] !== 'string' || !spec[key].trim()) throw Error(`Missing ${key}`);
  }
  if (!Array.isArray(spec.steps) || spec.steps.length !== 7 || spec.steps.some(step => typeof step !== 'string' || !step.trim())) {
    throw Error('steps must contain seven nonempty strings');
  }
  if (spec.steps.some(step => step.length > 24)) throw Error('step text exceeds 24 characters');
  if (spec.title.length > 70 || spec.subtitle.length > 95 || spec.course.length > 42 || spec.closing.length > 80) {
    throw Error('Scene copy is too long for Full HD layout');
  }
  if (spec.lang !== 'es') throw Error('lang must be es');
  if (!Number.isFinite(spec.duration) || spec.duration < 6 || spec.duration > 15) throw Error('duration must be 6–15 seconds');
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
  const template = fs.readFileSync(TEMPLATE, 'utf8');
  const safeSpec = JSON.stringify(spec).replace(/</g, '\\u003c');
  return template
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
