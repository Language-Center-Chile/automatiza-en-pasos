# QA del Video 00 v2 — Bienvenida

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Entregable:** checklist de QA y selección de candidato audiovisual  
**Fecha:** 17 de noviembre de 2026  
**Estado:** `CANDIDATO_TECNICO_PREFERIDO — QA EDITORIAL PENDIENTE`

## Objetivo

Determinar si la versión 2 del Video 00 corrige el solape de subtítulos detectado en la primera versión y puede convertirse en el candidato oficial para el piloto privado del LMS. Esta revisión no autoriza publicación, carga, venta, reemplazo ni eliminación de archivos.

## Material revisado

- [Guion maestro del Video 00 en Drive](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view).
- [Video 00 v1](https://chatgpt.com/library?file_id=libfile_3961560a95d48191bbf2af974151a547&account_id=personal): `Automatiza_7_Pasos_Video_00_Bienvenida_1080p.mp4`.
- [Video 00 v2](https://chatgpt.com/library?file_id=libfile_8df829b3e6048191bef0adeab25a123a&account_id=personal): `Automatiza_7_Pasos_Video_00_Bienvenida_v2_1080p.mp4`.
- [Informe técnico de la serie original](https://chatgpt.com/library?file_id=libfile_8369eca2fe9c819196f9a47902c25715&account_id=personal).
- Checklist de QA de los Videos 00–07 preparado en el PR #58.
- Preflight de derechos del piloto documentado en el PR #56.

La búsqueda previa en Drive y GitHub no encontró otra revisión aplicada específicamente a `Bienvenida_v2`.

## Resultado

La v2 corrige el problema visual principal de la v1: reduce la presentación dentro del cuadro de 1920 × 1080, reserva una banda inferior oscura y coloca allí los subtítulos. En los seis fotogramas distribuidos a lo largo del video, el texto hablado ya no tapa tablas, instrucciones, llamadas ni pies de página.

La v2 pasa a ser el **candidato técnico preferido**, pero todavía no está aprobada para LMS porque:

1. dura 03:40 frente al objetivo editorial de 06:00–07:00;
2. la pista de audio fue regenerada y su contenido binario difiere de la v1, por lo que exige escucha humana completa;
3. no se localizó un archivo SRT separado ni una transcripción asociada específicamente a esta versión;
4. aún falta confirmar que la locución abreviada conserva el objetivo, la actividad y la evidencia mínima del guion maestro.

## Comparación v1 / v2

| Control | Video 00 v1 | Video 00 v2 | Resultado |
|---|---|---|---|
| Duración | 03:40.083 | 03:40.083 | Sin cambio |
| Video | H.264, 1920 × 1080, 24 fps | H.264, 1920 × 1080, 24 fps | Conforme |
| Audio | AAC, estéreo, 48 kHz | AAC, estéreo, 48 kHz | Formato conforme |
| Tamaño | 8.389.269 bytes | 8.105.671 bytes | Archivo distinto |
| SHA-256 | `9e484b51788dfe9c98c589d74cf0354604e6f58786c583550c292ae1e77ab464` | `bb49d2e57a447ea917c3cdb5ab08267f11c7df6573d9ae03945c1ce771dbfa83` | Versiones distinguibles |
| Hash de audio decodificado | `2741082206e6fe87f152ebd2049312209a669f7c79fbefea1b7751aaec6adeb8` | `6b33ce0197a801ff0b1dddc0585934c323aefc5d5263252e3e50764acaa40244` | Escucha obligatoria |
| Nivel medio v2 | — | −19,2 dB | Coherente con la serie |
| Pico v2 | — | −3,9 dB | Sin saturación indicada |
| Subtítulos | Superpuestos al contenido | En banda inferior reservada | Corregido en la muestra |
| Decodificación completa v2 | — | Sin errores | Aprobada |
| Duración objetivo | 06:00–07:00 | 06:00–07:00 | Aún no cumplida |

El SSIM global entre ambas imágenes es 0,796217. Esto confirma que la v2 contiene un cambio visual sustantivo y no es sólo una recompresión con otro nombre.

## Evidencia de validación

| Prueba | Resultado |
|---|---|
| Integridad del contenedor v2 | Aprobada |
| Decodificación completa con FFmpeg | Aprobada, sin errores |
| Resolución, códec y frecuencia | Aprobados |
| Audio: formato y niveles | Aprobados técnicamente |
| Seis fotogramas distribuidos | Aprobados visualmente |
| Banda segura para subtítulos | Presente en 6/6 muestras |
| Texto de diapositiva visible | Sin solape en 6/6 muestras |
| Comparación de versiones | Hashes, audio y video distintos |
| Escucha humana integral | Pendiente |
| Correspondencia completa con el guion | Pendiente |
| SRT y transcripción versionados | No localizados |
| Prueba en LMS privado | No ejecutada |

## Checklist previo al piloto

- [ ] Katherine aprueba la v2 como candidato oficial y conserva la v1 sólo como respaldo.
- [ ] Una persona escucha el video completo y aprueba pronunciación, ritmo, pausas y naturalidad.
- [ ] La locución se coteja contra objetivo, actividad y evidencia del guion maestro.
- [ ] Se aprueba explícitamente la duración abreviada o se solicita ampliar la locución.
- [ ] Se genera SRT es-CL con el mismo identificador de versión.
- [ ] Se genera transcripción accesible con el mismo identificador de versión.
- [ ] Se registran nombre, duración, checksum y responsable en el manifiesto audiovisual.
- [ ] Se prueba la reproducción en escritorio y móvil dentro de un curso LMS privado.
- [ ] Se conserva la v1 sin sobrescribirla hasta cerrar el piloto.

## Criterio de salida

El archivo podrá cambiar a `QA_LMS_PRIVADO` sólo cuando la duración abreviada, la escucha humana y la correspondencia pedagógica estén aprobadas; además, deben existir SRT y transcripción de la misma versión. La corrección de la zona segura, por sí sola, no equivale a video final.

## Decisión única para Katherine

**¿Apruebas `Automatiza_7_Pasos_Video_00_Bienvenida_v2_1080p.mp4` como candidato oficial del Video 00, manteniendo la v1 únicamente como respaldo y dejando pendiente la decisión separada sobre ampliar su duración?**

## Próximo paso si se aprueba

Aplicar la misma banda segura a los Videos 01–07, uno por uno, sin cambiar su contenido; después repetir decodificación, muestreo visual y escucha humana antes de empaquetarlos.

## Riesgo y reversa

Riesgo bajo. Este documento registra una selección técnica y no modifica ni elimina videos, Drive, LMS, landing, formulario, checkout, precios o producción. La reversa consiste en mantener la v1 como candidato activo mientras se corrige o descarta la v2.
