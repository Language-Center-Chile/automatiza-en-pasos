const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const spec = require('./spec.json');
const html = fs.readFileSync(path.join(__dirname, 'animation.html'), 'utf8');
const scene = fs.readFileSync(path.join(__dirname, 'scene.js'), 'utf8');

test('keeps the eleven-second Full HD scene contract', () => {
  assert.equal(spec.duration, 11);
  assert.equal(spec.fps, 24);
  assert.equal(spec.width, 1920);
  assert.equal(spec.height, 1080);
  assert.equal(spec.audio, 'none');
  assert.match(html, /window\.duration\s*=\s*spec\.duration/);
  assert.match(html, /window\.renderAt\s*=\s*renderAt/);
  assert.match(scene, /const W=1920,H=1080,D=11/);
});

test('contains the complete Spanish transformation narrative', () => {
  for (const copy of [
    'De repetitivo a claro y medible',
    'Tarea repetida',
    'Proceso visible',
    'Entrada',
    'Acción',
    'Evidencia',
    'Elige una tarea · ordena el proceso · define cómo medirlo'
  ]) assert.ok((html + scene).includes(copy), `Missing copy: ${copy}`);
  assert.match(html, /<html lang="es-CL">/);
});

test('is offline, deterministic and motion-preference aware', () => {
  assert.match(html, /<script src="scene\.js"><\/script>/);
  assert.doesNotMatch(html, /https?:\/\//);
  assert.doesNotMatch(scene, /https?:\/\//);
  assert.match(html, /prefers-reduced-motion: reduce/);
  assert.match(html, /location\.search\.includes\('capture'\)/);
  assert.match(html, /Pausa \/ Play/);
  assert.match(html, /Reiniciar/);
});

test('does not introduce commercial or production-sensitive claims', () => {
  const all = JSON.stringify(spec).toLowerCase();
  for (const forbidden of ['precio', 'checkout', 'pago', 'garantiza', 'credencial']) {
    assert.ok(!all.includes(forbidden), `Forbidden term: ${forbidden}`);
  }
});
