const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {build, validate} = require('./build.cjs');
const sample = require('./spec.json');

const fresh = () => structuredClone(sample);
const fakeGsap = '<script>/*! GSAP test fixture */ window.gsap={};</script>';

test('requires three concise title lines and an opening-safe duration', () => {
  const missing = fresh();
  missing.titleLines.pop();
  assert.throws(() => validate(missing), /three/);

  const long = fresh();
  long.titleLines[0] = 'x'.repeat(25);
  assert.throws(() => validate(long), /24/);

  const duration = fresh();
  duration.duration = 16;
  assert.throws(() => validate(duration), /8–15/);
});

test('builds a self-contained deterministic Spanish opening', () => {
  const html = build(fresh(), fakeGsap);
  assert.match(html, /window\.duration = spec\.duration/);
  assert.match(html, /window\.renderAt/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /Pausa \/ Play/);
  assert.doesNotMatch(html, /<script[^>]+src=/);
  for (const line of sample.titleLines) assert.ok(html.includes(line));
});

test('committed HTML retains the licensed GSAP source and scene contract', () => {
  const html = fs.readFileSync(path.join(__dirname, 'animation.html'), 'utf8');
  assert.match(html, /GSAP 3\.15\.0/);
  assert.match(html, /window\.duration = spec\.duration/);
  assert.match(html, /"duration":12/);
  assert.match(html, /Automatiza/);
  assert.doesNotMatch(html, /<script[^>]+src=/);
});

test('serializes user copy without allowing a closing script tag', () => {
  const spec = fresh();
  spec.titleLines[0] = '</script><x>';
  const html = build(spec, fakeGsap);
  assert.doesNotMatch(html, /<\/script><x>/);
  assert.match(html, /\\u003c\/script>/);
});
