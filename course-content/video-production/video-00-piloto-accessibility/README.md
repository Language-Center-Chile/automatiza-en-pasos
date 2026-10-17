# Paquete de locución y subtítulos — Video 00

Entregable de preproducción para el piloto de 88 segundos de **Automatiza tu Negocio en 7 Pasos**. Resuelve la ausencia de subtítulos y transcripción maestra sin simular que el audio ya existe.

## Material reutilizado

- Guion localizado del Video 00 en Google Drive.
- Inventario y matriz de producción del curso en Google Drive.
- Manifiesto de cinco escenas del piloto, incluida la locución exacta y sus límites `00:00–01:28`.
- Candidata de voz `es-CL-CatalinaNeural` y ritmo `-1 %` definidos en el manifiesto audiovisual.
- Animaciones locales de las escenas 01, 02, 04 y 05, y selección documentada de clips para las escenas 02 y 03.

## Archivos

- `voice-manifest.json`: fuente única para locución, escenas, política de subtítulos y decisión pendiente.
- `video-00-piloto-es-CL.srt`: subtítulos SubRip en español de Chile, listos para importar al montaje.
- `video-00-piloto-transcripcion.md`: transcripción accesible y notas de locución.
- `build-subtitles.cjs`: generador determinista del SRT, sin dependencias externas.
- `validate.cjs`: verificación de tiempos, legibilidad, texto exacto y estado de aprobación.

## Uso seguro

```bash
node course-content/video-production/video-00-piloto-accessibility/build-subtitles.cjs
node course-content/video-production/video-00-piloto-accessibility/validate.cjs
```

El primer comando debe regenerar el SRT sin diferencias. El segundo debe finalizar con `status: "ok"`.

## Criterios de aceptación

- Cinco escenas y duración editorial de 88 segundos.
- Locución idéntica al manifiesto audiovisual, sin omisiones ni añadidos.
- Máximo dos líneas por cue y 42 caracteres por línea.
- Máximo 18 caracteres por segundo y ningún solapamiento.
- Transcripción completa, con tiempos por escena.
- Voz y audio siguen marcados como no aprobados/no generados.

## Decisión única pendiente

Katherine debe responder: **¿Apruebas la voz `es-CL-CatalinaNeural`, ritmo `-1 %` y mezcla propuesta como estándar del piloto?**

Solo después de esa aprobación corresponde generar la locución, montar las cinco escenas y comprobar sincronía, pronunciación y mezcla. Este paquete no conecta servicios externos, no contiene credenciales y no modifica producción.
