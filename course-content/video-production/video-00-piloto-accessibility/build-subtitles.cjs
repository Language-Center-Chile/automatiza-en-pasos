#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const manifestPath = path.join(root, 'voice-manifest.json');
const outputPath = path.join(root, 'video-00-piloto-es-CL.srt');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const GAP_MS = manifest.subtitlePolicy.gapMilliseconds;
const START_PAD_MS = 250;
const END_PAD_MS = 350;

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function formatTimestamp(milliseconds) {
  const hours = Math.floor(milliseconds / 3_600_000);
  const minutes = Math.floor((milliseconds % 3_600_000) / 60_000);
  const seconds = Math.floor((milliseconds % 60_000) / 1_000);
  const millis = milliseconds % 1_000;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')},${String(millis).padStart(3, '0')}`;
}

const cues = [];

for (const scene of manifest.scenes) {
  const captionText = normalize(scene.captions.flat().join(' '));
  if (captionText !== normalize(scene.text)) {
    throw new Error(`${scene.id}: los subtítulos no reproducen exactamente la locución`);
  }

  const startMs = scene.startSeconds * 1000 + START_PAD_MS;
  const endMs = scene.endSeconds * 1000 - END_PAD_MS;
  const availableMs = endMs - startMs - GAP_MS * (scene.captions.length - 1);
  const weights = scene.captions.map((lines) => lines.join(' ').length);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let cursor = startMs;

  scene.captions.forEach((lines, index) => {
    const isLast = index === scene.captions.length - 1;
    const duration = isLast
      ? endMs - cursor
      : Math.round((availableMs * weights[index]) / totalWeight);
    cues.push({
      sceneId: scene.id,
      startMs: cursor,
      endMs: cursor + duration,
      lines
    });
    cursor += duration + GAP_MS;
  });
}

const srt = cues
  .map((cue, index) => [
    String(index + 1),
    `${formatTimestamp(cue.startMs)} --> ${formatTimestamp(cue.endMs)}`,
    ...cue.lines
  ].join('\n'))
  .join('\n\n') + '\n';

fs.writeFileSync(outputPath, srt, 'utf8');
console.log(`Generados ${cues.length} cues en ${path.basename(outputPath)}`);
