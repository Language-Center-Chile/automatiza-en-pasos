# Documentación de empaquetado — piloto del Video 00

Plan de montaje reproducible para convertir los recursos ya preparados del **Video 00 — Bienvenida** en una única copia de revisión de 88 segundos. Esta documentación no descarga clips, sintetiza voz, renderiza ni publica; define exactamente qué debe entrar al montaje y qué evidencia debe salir.

## Material revisado y reutilizado

- Inventario verificable y matriz de producción en Google Drive.
- Storyboard de 22 escenas y manifiesto del piloto de los PR #24–#25.
- Animaciones locales de los PR #26–#28 y #30.
- Selección y licencia documentada de Pexels del PR #29.
- Paquete de locución, transcripción y SRT del PR #31.
- Contrato de AI Video Maker del PR #2: clips con movimiento, voces Edge y MP4 final.

No apareció en Drive un MP4 final, una narración aprobada ni una documentación de montaje equivalente.

## Entregable

`assembly-manifest.json` es la fuente única para la línea de tiempo, entradas, procedencia, formato de salida, bloqueo de publicación y evidencia de QA. `validate.cjs` comprueba el contrato y, cuando se proporcionan medios, ejecuta `ffprobe` sobre cada entrada.

### Línea de tiempo

| Tiempo | Recurso | Duración |
|---|---|---:|
| 00:00–00:12 | Apertura animada local | 12 s |
| 00:12–00:24 | Pexels 6699597, desde 00:02 | 12 s |
| 00:24–00:35 | Transición local de tarea a proceso | 11 s |
| 00:35–00:53 | Pexels 7279475, desde 00:01.500 | 18 s |
| 00:53–01:20 | Observar · ordenar · probar · medir | 27 s |
| 01:20–01:28 | Tu ruta en 7 pasos | 8 s |

Total exacto: **88 segundos**.

## Carpeta de trabajo esperada

```text
input/video-00/
├── scene-01-opening.mp4
├── scene-02-pexels-6699597.mp4
├── scene-02-transition.mp4
├── scene-03-pexels-7279475.mp4
├── scene-04-method.mp4
├── scene-05-route.mp4
└── voice-es-CL-CatalinaNeural-rate-minus-1.wav
```

Los clips Pexels y los renders temporales no deben versionarse. Deben conservarse sus URL, licencia, autor, fecha de obtención, SHA-256, `ffprobe` y contact sheet.

## Preflight

Validar únicamente el contrato versionado:

```bash
node course-content/video-production/video-00-piloto-packaging/validate.cjs
```

Validar también los seis recursos cuando existan en un workspace local:

```bash
node course-content/video-production/video-00-piloto-packaging/validate.cjs --media-root .
```

El segundo comando debe fallar si falta un archivo, si una entrada no contiene video o si no cubre el intervalo solicitado. Una salida `status: "ok"` valida disponibilidad y estructura; no reemplaza la revisión visual y auditiva.

## Secuencia de montaje controlada

1. Registrar la decisión pendiente en el manifiesto antes de generar voz o descargar clips.
2. Descargar los dos clips seleccionados en la carpeta temporal ignorada y guardar evidencia de procedencia.
3. Renderizar las cuatro animaciones locales según sus especificaciones originales.
4. Generar una única narración WAV a 48 kHz; no alterar el texto maestro.
5. Ejecutar el preflight completo y corregir cualquier falta.
6. Recortar, normalizar y concatenar los seis segmentos en el orden del manifiesto.
7. Mezclar solo la narración; la música permanece desactivada.
8. Exportar una copia H.264/yuv420p con subtítulos incrustados y el SRT lateral.
9. Medir duración, resolución, FPS, audio y decodificación completa.
10. Revisar cuadro a cuadro los intervalos Pexels y comprobar escritorio y móvil.

## Quality Gate

- Duración: `88,0 ± 0,2 s`.
- Imagen: `1920×1080`, `24 fps`, H.264, `yuv420p`.
- Audio: AAC estéreo, 48 kHz, objetivo `-16 LUFS`, pico verdadero máximo `-1 dBTP`.
- Voz clara, sin cortes ni pronunciaciones defectuosas.
- Cero logos, nombres, montos, correos o datos identificables en los clips.
- Los 23 cues coinciden con la narración; SRT lateral presente.
- Copia marcada para revisión; publicación y producción en lote bloqueadas.

## Decisión única pendiente

**¿Apruebas usar los clips Pexels 6699597 y 7279475 junto con la voz `es-CL-CatalinaNeural` a ritmo `-1 %` para el montaje piloto de 88 segundos?**

Una aprobación habilita solamente el montaje local de revisión. No autoriza publicación, despliegue, producción en lote ni cobros.
