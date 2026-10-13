const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {build, validate} = require('./build.cjs');
const sample = require('./spec.json');

const fresh = () => structuredClone(sample);
const fakeGsap = '<script>/*! GSAP test fixture */ window.gsap={};</script>';

test('requires exactly seven readable steps and an eight-second-safe duration', () => {
  const short = fresh();
  short.steps.pop();
  assert.throws(() => validate(short), /seven/);

  const long = fresh();
  long.steps[2] = 'x'.repeat(25);
  assert.throws(() => validate(long), /24/);

  const duration = fresh();
  duration.duration = 16;
  assert.throws(() => validate(duration), /6–15/);
});

test('builds one self-contained deterministic Spanish animation', () => {
  const html = build(fresh(), fakeGsap);
  assert.match(html, /window\.duration = spec\.duration/);
  assert.match(html, /window\.renderAt/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /Pausa \/ Play/);
  assert.doesNotMatch(html, /<script[^>]+src=/);
  for (const step of sample.steps) assert.ok(html.includes(step));
});

test('committed HTML retains the licensed GSAP source and scene contract', () => {
  const html = fs.readFileSync(path.join(__dirname, 'animation.html'), 'utf8');
  assert.match(html, /GSAP 3\.15\.0/);
  assert.match(html, /window\.duration = spec\.duration/);
  assert.match(html, /"duration":8/);
  assert.match(html, /Medir y mejorar/);
  assert.doesNotMatch(html, /<script[^>]+src=/);
});

test('serializes user copy without allowing a closing script tag', () => {
  const spec = fresh();
  spec.title = '</script><x>';
  const html = build(spec, fakeGsap);
  assert.doesNotMatch(html, /<\/script><x>/);
  assert.match(html, /\\u003c\/script>/);
});
