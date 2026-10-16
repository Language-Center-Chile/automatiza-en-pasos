# Video 00 · Escena 02 · De repetitivo a claro y medible

Transición gráfica local de 11 segundos para **Automatiza tu Negocio en 7
Pasos**. Completa el tramo final de la escena 02 después del clip documental de
12 segundos y muestra el cambio desde una tarea repetida hacia un proceso con
entrada, acción y evidencia.

No contiene datos personales, precios, pagos, credenciales ni promesas de
resultado.

## Material reutilizado

- [Inventario vigente de Drive](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit): no registra una animación final equivalente.
- [Guion maestro del Video 00](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view).
- Estudio UX/UI histórico de Drive: se reutilizó el principio de mostrar una
  transformación profesional, humana y tangible sin saturar la pantalla.
- Storyboard dinámico del PR #24 y manifiesto de producción del PR #25.
- Selección audiovisual del PR #29: define 12 segundos de clip y esta transición
  local de 11 segundos para completar la escena 02.
- Animaciones de las escenas 01, 04 y 05, reutilizadas como continuidad de
  marca, tipografía, resolución y ritmo.

La pieza usa texto y dibujo vectorial propios. No incorpora imágenes, clips ni
recursos remotos.

## Archivos

- `spec.json`: contrato editorial y técnico.
- `scene.js`: función de dibujo compartida por el navegador y el render de QA.
- `animation.html`: previsualización con pausa, reinicio y `window.renderAt(t)`.
- `animation.test.cjs`: pruebas de contenido, autonomía y seguridad editorial.
- `render.cjs`: render determinista de fotogramas y MP4 de control.
- `qa.json`: evidencia del render comprobado.

## Reconstrucción

```bash
NODE_PATH="$CODEX_PRIMARY_RUNTIME_NODE_MODULES" node render.cjs salida/
```

El MP4, los 264 fotogramas y las capturas son artefactos temporales de QA; no
se versionan.

## Evidencia de QA

- cuatro pruebas automatizadas aprobadas;
- cinco capturas revisadas en `0`, `1.1`, `4.4`, `7.15` y `9.9` segundos;
- 264 fotogramas y 264 hashes distintos;
- interfaz y contenido en español;
- MP4 de control: 1920 × 1080, H.264, `yuv420p`, 24 fps, 264 cuadros;
- duración medida: 11 segundos;
- decodificación completa con FFmpeg: sin errores;
- SHA-256 del MP4:
  `b987dcd35d46490b6272bdfeb920b114b49fdda0189238a3201ea22d591a8f87`;
- audio: ninguno; la narración permanece como pista separada durante el montaje.

## Dependencia y aprobación

Este recurso está apilado sobre el PR #29 y debe revisarse después de los PR
#24–#29. Completa el faltante local declarado por #29; no descarga ni versiona
los clips de Pexels.

Antes de ensamblar el piloto, Katherine debe aprobar una sola decisión:
**usar esta transición como los últimos 11 segundos de la escena 02**.
