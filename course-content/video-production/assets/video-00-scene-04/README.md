# Video 00 · Escena 04 · Observar, ordenar, probar y medir

Animación didáctica autocontenida para **Automatiza tu Negocio en 7 Pasos**.
Recorre las cuatro acciones de la narración y termina con una práctica breve.
No contiene datos personales, precios, pagos, credenciales ni promesas de
resultado.

## Material reutilizado

- [Inventario vigente de Drive](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit): no registra una animación final equivalente.
- [Guion maestro del Video 00](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view).
- Storyboard dinámico del PR #24: escena 04, duración editorial de 27 segundos.
- Manifiesto del PR #25: gráfico local obligatorio para esta escena.
- Apertura animada del PR #26 y ruta del PR #27, utilizadas como continuidad
  tipográfica y de marca.
- Paquete `lc_atn7p_v00_escena_04` del PR `KatherineStehberg/Ai_video_maker#5`,
  que permanecía fuera del repositorio del curso.

La pieza utiliza SVG, CSS y texto propios. No incorpora imágenes, clips, datos
personales ni recursos remotos.

## Archivos

- `spec.json`: contenido editable y duración.
- `four-step.template.html`: composición editable con GSAP incorporado.
- `build.cjs`: validación y construcción determinista.
- `build.test.cjs`: pruebas de contenido, autonomía y serialización segura.
- `animation.html`: salida final con pausa, reinicio y `window.renderAt(t)`.
- `qa.json`: evidencia del render comprobado.

## Reconstrucción

```bash
node build.cjs spec.json salida/animation.html
```

El generador se detiene antes de sobrescribir una salida existente. El HTML
versionado ya está listo para previsualización y render sin conexión de red.

## Evidencia de QA

- cinco capturas revisadas en `0`, `2.7`, `10.8`, `17.55` y `24.3` segundos;
- cinco hashes de fotograma distintos;
- búsqueda temporal hacia atrás sin acumulación de estados;
- interfaz y contenido en español;
- MP4 de control: 1920 × 1080, H.264, `yuv420p`, 24 fps, 648 cuadros;
- duración medida: 27 segundos;
- decodificación completa con FFmpeg: sin errores;
- SHA-256:
  `67c4e51f72e5882fd9ec36de93af2eac6bcd99a2ae19e075a63f95aa1d9408d5`;
- audio: ninguno; la narración permanece como pista separada durante el montaje.

El MP4 y las capturas son artefactos temporales de QA y no se versionan.

## Dependencia y aprobación

Este recurso está apilado sobre el PR #27 y debe revisarse después de los PR
#24–#27. El orden técnico de revisión no cambia el orden de reproducción:
esta pieza sigue siendo la escena 04 y la ruta del PR #27 sigue siendo la 05.
Antes de montar el piloto de 88 segundos, Katherine debe aprobar una sola
decisión: **usar esta composición como transición central de la escena 04**.
