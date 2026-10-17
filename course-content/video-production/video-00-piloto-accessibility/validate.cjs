#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'voice-manifest.json'), 'utf8'));
const srt = fs.readFileSync(path.join(root, 'video-00-piloto-es-CL.srt'), 'utf8').trim();
const transcript = fs.readFileSync(path.join(root, 'video-00-piloto-transcripcion.md'), 'utf8');
const errors = [];

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function parseTimestamp(value) {
  const match = value.match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/);
  if (!match) throw new Error(`Marca de tiempo inválida: ${value}`);
  const [, hours, minutes, seconds, millis] = match.map(Number);
  return hours * 3_600_000 + minutes * 60_000 + seconds * 1_000 + millis;
}

const cues = srt.split(/\n\s*\n/).map((block) => {
  const lines = block.split('\n');
  const timing = lines[1]?.match(/^(.+) --> (.+)$/);
  if (!timing) throw new Error(`Bloque SRT inválido: ${block}`);
  return {
    index: Number(lines[0]),
    startMs: parseTimestamp(timing[1]),
    endMs: parseTimestamp(timing[2]),
    lines: lines.slice(2)
  };
});

let maxCps = 0;
let longestLine = 0;

cues.forEach((cue, index) => {
  if (cue.index !== index + 1) errors.push(`Cue ${index + 1}: numeración incorrecta`);
  if (cue.startMs >= cue.endMs) errors.push(`Cue ${cue.index}: duración no positiva`);
  if (index > 0 && cue.startMs <= cues[index - 1].endMs) errors.push(`Cue ${cue.index}: solapamiento`);
  if (cue.lines.length < 1 || cue.lines.length > manifest.subtitlePolicy.maxLinesPerCue) {
    errors.push(`Cue ${cue.index}: debe tener una o dos líneas`);
  }
  for (const line of cue.lines) {
    longestLine = Math.max(longestLine, line.length);
    if (line.length > manifest.subtitlePolicy.maxCharactersPerLine) {
      errors.push(`Cue ${cue.index}: línea de ${line.length} caracteres`);
    }
  }
  const visibleCharacters = cue.lines.join(' ').length;
  const cps = visibleCharacters / ((cue.endMs - cue.startMs) / 1000);
  maxCps = Math.max(maxCps, cps);
  if (cps > manifest.subtitlePolicy.maxCharactersPerSecond + 0.01) {
    errors.push(`Cue ${cue.index}: ${cps.toFixed(2)} caracteres por segundo`);
  }
});

if (cues.at(-1).endMs > manifest.durationSeconds * 1000) {
  errors.push('Los subtítulos exceden la duración editorial');
}

const srtText = normalize(cues.flatMap((cue) => cue.lines).join(' '));
const narrationText = normalize(manifest.scenes.map((scene) => scene.text).join(' '));
if (srtText !== narrationText) errors.push('El SRT no coincide exactamente con la locución');

for (const scene of manifest.scenes) {
  if (!transcript.includes(scene.text)) {
    errors.push(`${scene.id}: texto ausente en la transcripción`);
  }
}

const boundaries = manifest.scenes.map((scene) => [scene.startSeconds, scene.endSeconds]);
const expectedBoundaries = [[0, 12], [12, 35], [35, 53], [53, 80], [80, 88]];
if (JSON.stringify(boundaries) !== JSON.stringify(expectedBoundaries)) {
  errors.push('Los límites de escenas no coinciden con el piloto aprobado');
}

if (manifest.voice.approved || manifest.voice.audioGenerated) {
  errors.push('El paquete no puede marcar voz aprobada ni audio generado antes de la decisión');
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'ok',
  scenes: manifest.scenes.length,
  cues: cues.length,
  durationSeconds: manifest.durationSeconds,
  words: narrationText.split(' ').length,
  longestLine,
  maxCharactersPerSecond: Number(maxCps.toFixed(2)),
  exactTextMatch: true,
  overlaps: 0,
  voiceApproved: manifest.voice.approved,
  audioGenerated: manifest.voice.audioGenerated
}, null, 2));
