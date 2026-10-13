# Video 00 · Escena 05 · Tu ruta en 7 pasos

Animación didáctica autocontenida para **Automatiza tu Negocio en 7 Pasos**.
Presenta una ruta continua numerada del 1 al 7 y cierra las primeras cinco
escenas del piloto sin repetir la composición de cuatro tarjetas de la escena
04.

## Material reutilizado

- [Inventario vigente de Drive](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit): no registra una animación final equivalente.
- [Guion maestro del Video 00](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view).
- Storyboard dinámico del PR #24: escena 05, `01:20–01:28`.
- Manifiesto del PR #25: gráfico local obligatorio y duración de ocho segundos.
- Apertura animada del PR #26, utilizada como continuidad tipográfica y de marca.
- Paquete local `lc_atn7p_v00_escena_05`, commit de origen
  `e9bb3fe55628db9532358322f9480b65181b7cfc`, que no había podido publicarse
  en el repositorio del generador.

La pieza utiliza SVG, CSS y texto propios. No incorpora imágenes, clips, datos
personales ni recursos remotos.

## Archivos

- `spec.json`: contenido, siete pasos y duración.
- `route.template.html`: composición editable de la ruta.
- `build.cjs`: validación e incorporación de una copia autorizada de GSAP.
- `build.test.cjs`: pruebas de estructura, autonomía y serialización segura.
- `animation.html`: salida final con pausa, reinicio y `window.renderAt(t)`.
- `qa.json`: evidencia del render comprobado.

## Reconstrucción

`LC_GSAP_SOURCE` debe apuntar a un HTML local creado con la skill
`lc-course-animations` que ya contenga GSAP:

```bash
LC_GSAP_SOURCE=/ruta/four-step.html \
node build.cjs spec.json salida/animation.html
```

El generador se detiene antes de sobrescribir una salida existente. El HTML
versionado ya está listo para previsualización y render sin conexión de red.

## Evidencia de QA

- cinco capturas revisadas en `0`, `0.8`, `3.2`, `5.2` y `7.2` segundos;
- cinco hashes de fotograma distintos;
- búsqueda temporal hacia atrás sin acumulación de estados;
- movimiento reducido: composición final estática;
- MP4 de control: 1920 × 1080, H.264, `yuv420p`, 24 fps, 192 cuadros;
- duración medida: ocho segundos;
- decodificación completa con FFmpeg: sin errores;
- SHA-256:
  `e4f80de9b8152a9f88831f3e2c336e43db61c86f4dcfc8b92bdc4ada5d32c9c2`;
- audio: ninguno; la narración permanece como pista separada durante el montaje.

El MP4 y las capturas son artefactos temporales de QA y no se versionan.

## Dependencia y aprobación

Este recurso está apilado sobre el PR #26 y debe revisarse después de los PR
#24–#26. Antes de montar el piloto de 88 segundos, Katherine debe aprobar una
sola decisión: **usar esta ruta como cierre visual de las escenas 01–05**.
