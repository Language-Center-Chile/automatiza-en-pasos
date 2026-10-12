# Video 00 · Escena 01 · Apertura animada

Entregable editable y autocontenido para abrir el piloto de **Automatiza tu
Negocio en 7 Pasos**. Presenta el nombre del curso y convierte los siete pasos
en una ruta visual antes de entrar a cámara.

## Fuentes reutilizadas

- [Guion Video 00 en Drive](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view).
- Storyboard dinámico del Video 00 (PR #24).
- Manifiesto de producción de las escenas 01–05 (PR #25).
- Sistema de animación y render reproducible de `KatherineStehberg/Ai_video_maker`
  (PR #4), reutilizado sin incorporar clips, voces ni material de terceros.
- Paleta institucional de Language Center Chile: `#003366`, `#0055A4`,
  `#00AEEF` y blanco.

## Archivos

- `spec.json`: texto, idioma y duración de la escena.
- `opening.template.html`: fuente editable del diseño.
- `build.cjs`: genera el HTML final e incrusta una copia autorizada de GSAP.
- `animation.html`: pieza final autocontenida, lista para previsualizar o
  renderizar.
- `build.test.cjs`: pruebas de estructura, determinismo y serialización segura.
- `qa.json`: evidencia reproducible del render de control.

## Reconstrucción

La variable `LC_GSAP_SOURCE` debe apuntar a un HTML local creado con la skill
`lc-course-animations` que ya contenga GSAP. El comando no descarga recursos:

```bash
LC_GSAP_SOURCE=/ruta/four-step.html \
node build.cjs spec.json animation.html
```

El generador se niega a sobrescribir un archivo existente. Para reconstruir,
se debe indicar una nueva ruta de salida y comparar el resultado antes de
reemplazar `animation.html`.

## Contrato y controles

- lienzo: 1920 × 1080;
- duración: 12 segundos;
- contrato: `window.duration` y `window.renderAt(t)`;
- controles locales: pausa/play y reinicio;
- movimiento reducido: muestra el estado final sin reproducción automática;
- dependencias de red: ninguna;
- audio: ninguno; la mezcla se realiza en el ensamblaje del piloto.

## Evidencia de QA

- cinco capturas: `0`, `1.2`, `4.8`, `7.8` y `10.8` segundos;
- los cinco hashes de fotograma son diferentes;
- MP4 de control: H.264, `yuv420p`, 1920 × 1080, 24 fps;
- duración medida: 12 segundos;
- cuadros: 288;
- decodificación completa con FFmpeg: sin errores;
- SHA-256 del MP4 de control:
  `2779017f9f9cf7c9e69ec278c35ce98648ea1607cc85dc250d22776d5bd16227`.

El MP4 y las capturas son artefactos temporales de QA y no se versionan. Así se
mantiene el repositorio liviano y el resultado se puede regenerar desde la
fuente editable y la evidencia registrada.

## Criterio de aprobación

Antes de ensamblar los 88 segundos del piloto, Katherine debe aprobar una sola
decisión: **usar esta apertura y su metáfora de ruta como lenguaje visual para
las escenas 01–05**.
