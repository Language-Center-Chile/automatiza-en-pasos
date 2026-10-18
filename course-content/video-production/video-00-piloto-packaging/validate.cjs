#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = __dirname;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assembly-manifest.json'), 'utf8'));
const mediaRootArg = process.argv.indexOf('--media-root');
const mediaRoot = mediaRootArg >= 0 ? path.resolve(process.argv[mediaRootArg + 1] || '.') : null;
const errors = [];

function safeRelative(file) {
  return typeof file === 'string' && file.length > 0 && !path.isAbsolute(file) && !file.split(/[\\/]/).includes('..');
}

function probe(file) {
  return JSON.parse(execFileSync('ffprobe', [
    '-v', 'error', '-show_entries',
    'format=duration:stream=codec_type,codec_name,width,height,r_frame_rate,pix_fmt,sample_rate,channels',
    '-of', 'json', file
  ], { encoding: 'utf8' }));
}

const track = manifest.visualTrack;
if (!Array.isArray(track) || track.length !== 6) errors.push('La pista visual debe contener seis segmentos');

let cursor = 0;
for (const [index, segment] of track.entries()) {
  if (segment.order !== index + 1) errors.push(`${segment.id}: orden incorrecto`);
  if (segment.timelineInSeconds !== cursor) errors.push(`${segment.id}: discontinuidad en ${cursor}s`);
  if (segment.timelineOutSeconds - segment.timelineInSeconds !== segment.durationSeconds) {
    errors.push(`${segment.id}: duración inconsistente`);
  }
  if (!safeRelative(segment.source)) errors.push(`${segment.id}: ruta de entrada insegura`);
  if (!segment.origin) errors.push(`${segment.id}: falta procedencia`);
  if (segment.kind === 'licensed-stock' && !segment.license) errors.push(`${segment.id}: falta licencia`);
  cursor = segment.timelineOutSeconds;
}

if (cursor !== manifest.editorialDurationSeconds) errors.push(`La línea de tiempo termina en ${cursor}s, no en 88s`);
if (!safeRelative(manifest.narrationTrack.source)) errors.push('Ruta de narración insegura');
if (!safeRelative(manifest.subtitleTrack.source)) errors.push('Ruta de subtítulos insegura');
if (!safeRelative(manifest.output.file)) errors.push('Ruta de salida insegura');
if (manifest.output.publicationAllowed !== false) errors.push('La publicación debe permanecer bloqueada');
if (manifest.narrationTrack.approved !== false) errors.push('La voz no puede marcarse aprobada todavía');
if (manifest.reviewGate.renderBlockedUntilDecision !== true) errors.push('El render debe permanecer bloqueado hasta la decisión');
if (manifest.musicTrack.enabled !== false || manifest.musicTrack.source !== null) errors.push('El piloto no debe añadir música');

const expected = [12, 12, 11, 18, 27, 8];
if (JSON.stringify(track.map((segment) => segment.durationSeconds)) !== JSON.stringify(expected)) {
  errors.push('La distribución temporal no coincide con el storyboard');
}

const media = [];
if (mediaRoot) {
  for (const segment of track) {
    const file = path.resolve(mediaRoot, segment.source);
    if (!file.startsWith(mediaRoot + path.sep)) {
      errors.push(`${segment.id}: la ruta resuelta sale del directorio de medios`);
      continue;
    }
    if (!fs.existsSync(file)) {
      errors.push(`${segment.id}: falta ${segment.source}`);
      continue;
    }
    try {
      const data = probe(file);
      const video = data.streams.find((stream) => stream.codec_type === 'video');
      const duration = Number(data.format.duration);
      if (!video) errors.push(`${segment.id}: no contiene video`);
      if (duration + 0.05 < segment.sourceInSeconds + segment.durationSeconds) {
        errors.push(`${segment.id}: el archivo no cubre el intervalo solicitado`);
      }
      media.push({ id: segment.id, duration, codec: video?.codec_name, width: video?.width, height: video?.height });
    } catch (error) {
      errors.push(`${segment.id}: ffprobe falló (${error.message})`);
    }
  }

  const narrationFile = path.resolve(mediaRoot, manifest.narrationTrack.source);
  if (!narrationFile.startsWith(mediaRoot + path.sep) || !fs.existsSync(narrationFile)) {
    errors.push(`Falta la narración: ${manifest.narrationTrack.source}`);
  } else {
    try {
      const data = probe(narrationFile);
      const audio = data.streams.find((stream) => stream.codec_type === 'audio');
      const duration = Number(data.format.duration);
      if (!audio) errors.push('La narración no contiene una pista de audio');
      if (Math.abs(duration - manifest.editorialDurationSeconds) > 0.2) {
        errors.push(`La narración dura ${duration}s, no 88 ± 0,2s`);
      }
    } catch (error) {
      errors.push(`La narración no pasó ffprobe (${error.message})`);
    }
  }

  const subtitleFile = path.resolve(mediaRoot, manifest.subtitleTrack.source);
  if (!subtitleFile.startsWith(mediaRoot + path.sep) || !fs.existsSync(subtitleFile)) {
    errors.push(`Falta el SRT: ${manifest.subtitleTrack.source}`);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'ok',
  mode: mediaRoot ? 'contract-and-media' : 'contract-only',
  segments: track.length,
  timelineSeconds: cursor,
  stockClips: track.filter((segment) => segment.kind === 'licensed-stock').length,
  localAnimations: track.filter((segment) => segment.kind === 'local-animation').length,
  subtitles: manifest.subtitleTrack.language,
  narrationApproved: manifest.narrationTrack.approved,
  renderBlocked: manifest.reviewGate.renderBlockedUntilDecision,
  publicationAllowed: manifest.output.publicationAllowed,
  media
}, null, 2));
