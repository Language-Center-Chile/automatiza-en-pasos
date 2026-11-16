# QA de la serie de videos 00–07

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Versión:** 1.0 — 16 de noviembre de 2026  
**Estado global:** `NO_LISTO_PARA_LMS — QA EDITORIAL PENDIENTE`

## Propósito y alcance

Esta lista de control evalúa los ocho MP4 candidatos producidos para el curso. Verifica integridad técnica, duración, consistencia audiovisual, subtítulos visibles y correspondencia general con los guiones fuente. No autoriza publicación, carga al LMS, venta ni reemplazo de originales.

## Material revisado

### Fuentes pedagógicas

| Video | Guion fuente |
|---|---|
| 00 — Bienvenida | [Drive](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view) |
| 01 — Diagnóstico | [Drive](https://drive.google.com/file/d/1kTiP_rHiiOlRq9uBYgnFN5UU83fNwicp/view) |
| 02 — CRM | [Drive](https://docs.google.com/document/d/1U-o4tym4a3LgcJARyWR801L4YUkM3awpEIujuvhho4w/edit) |
| 03 — IA aplicada | [Drive](https://docs.google.com/document/d/1vmvr3ZEzOmImhSWjgoKAelUIka2X6mZ17KrUykQ75g4/edit) |
| 04 — n8n esencial | [Drive](https://drive.google.com/file/d/1XvY-OgjyEFTMsU45OcnOlWVStDvPaC7D/view) |
| 05 — Captación | [Drive](https://drive.google.com/file/d/1fWD7HxvkITLq1KRMGEqTT1RfsGwpXQJk/view) |
| 06 — MVP | [Drive](https://drive.google.com/file/d/1T2AeZW6q_hzDERTi3w77VFjYyPxo8AW8/view) |
| 07 — Implementación | [Drive](https://drive.google.com/file/d/1zgc61RtxupF9G3ey-3-K_l3gO4rBFEAr/view) |

### Candidatos audiovisuales

- `Automatiza_7_Pasos_Video_00_Bienvenida_1080p.mp4`
- `Automatiza_7_Pasos_Video_01_Diagnostico_1080p.mp4`
- `Automatiza_7_Pasos_Video_02_CRM_1080p.mp4`
- `Automatiza_7_Pasos_Video_03_IA_Aplicada_1080p.mp4`
- `Automatiza_7_Pasos_Video_04_n8n_1080p.mp4`
- `Automatiza_7_Pasos_Video_05_Captacion_1080p.mp4`
- `Automatiza_7_Pasos_Video_06_MVP_1080p.mp4`
- `Automatiza_7_Pasos_Video_07_Implementacion_1080p.mp4`
- `Automatiza_7_Pasos_Informe_Tecnico.json`

La búsqueda previa en Drive no encontró otro juego de MP4 finales. La revisión del repositorio tampoco encontró una matriz de QA aplicada a esta serie ya renderizada, por lo que este documento no duplica un entregable existente.

## Resultado ejecutivo

Los ocho archivos son reproducibles y técnicamente coherentes entre sí: video H.264 a 1920 × 1080 y 24 fps, audio AAC estéreo a 48 kHz, decodificación completa sin errores y subtítulos visibles durante toda la narración. Los hashes SHA-256 coinciden con el informe técnico de origen.

La serie **no debe cargarse todavía al LMS** por cuatro motivos:

1. La duración total es **38:22**, frente a un mínimo planificado de **74:00** según los guiones. Los Videos 00–06 conservan sólo entre 41,7 % y 61,1 % de la duración mínima prevista; el Video 07 conserva 80,4 %.
2. La escucha humana de pronunciación, ritmo, pausas y naturalidad de la voz sigue pendiente en 8/8 videos.
3. En las muestras visuales de 8/8 videos, la caja negra de subtítulos tapa contenido de diapositiva al menos una vez. Hay que reservar una banda inferior o reubicar el texto antes de aprobar.
4. El paquete revisado contiene MP4 con subtítulos incrustados, pero no incluye los ocho archivos SRT ni las ocho transcripciones separadas exigidas por el manifiesto de empaquetado.

## Matriz por video

| Video | Duración real | Objetivo del guion | Cobertura mínima | Decodificación | Subtítulos | Resultado editorial |
|---|---:|---:|---:|---|---|---|
| 00 | 03:40 | 06:00–07:00 | 61,1 % | Aprobada | 100 % visibles; revisar solape | No aprobado |
| 01 | 03:55 | 08:00–10:00 | 48,9 % | Aprobada | 100 % visibles; revisar solape | No aprobado |
| 02 | 04:52 | 10:00–15:00 | 48,6 % | Aprobada | 100 % visibles; revisar solape | No aprobado |
| 03 | 04:52 | 10:00–13:00 | 48,7 % | Aprobada | 100 % visibles; revisar solape | No aprobado |
| 04 | 04:10 | 10:00–12:00 | 41,7 % | Aprobada | 100 % visibles; revisar solape | No aprobado |
| 05 | 04:30 | 10:00–12:00 | 45,0 % | Aprobada | 100 % visibles; revisar solape | No aprobado |
| 06 | 04:22 | 10:00–12:00 | 43,6 % | Aprobada | 100 % visibles; revisar solape | No aprobado |
| 07 | 08:02 | 10:00–12:00 | 80,4 % | Aprobada | 100 % visibles; revisar solape | No aprobado |

La cobertura mínima compara la duración real con el extremo inferior del objetivo. No demuestra por sí sola una omisión pedagógica, pero obliga a decidir si la versión abreviada sustituye oficialmente al guion maestro o si debe volver a renderizarse con la locución completa.

## Evidencia técnica

| Control | Resultado | Evidencia |
|---|---|---|
| Archivos esperados | 8/8 | Ocho MP4 con nombres únicos 00–07 |
| Video | 8/8 aprobados | H.264, 1920 × 1080, 24 fps |
| Audio | 8/8 aprobados | AAC, estéreo, 48 kHz |
| Decodificación integral | 8/8 aprobada | `ffmpeg -v error -i <archivo> -f null -` sin errores |
| Integridad | 8/8 aprobada | SHA-256 local idéntico al informe técnico |
| Nivel medio | Coherente | −19,2 a −18,8 dB; variación máxima 0,4 dB |
| Pico máximo | Coherente | −4,1 a −3,5 dB; sin saturación indicada |
| Subtítulos visibles | 8/8, 100 % | Duración con subtítulo igual a duración narrada |
| Muestreo visual | 48 fotogramas | Seis fotogramas distribuidos por video; sin cuadros negros ni deformación |
| Variedad visual detectada | 5 escenas únicas por video | Revisar contra las ocho diapositivas previstas por presentación |
| Escucha editorial | 0/8 | Pendiente de una persona responsable |
| SRT y transcripción separada | 0/8 en el paquete revisado | Pendiente de empaquetado |

### Huellas SHA-256

| Video | SHA-256 |
|---|---|
| 00 | `9e484b51788dfe9c98c589d74cf0354604e6f58786c583550c292ae1e77ab464` |
| 01 | `50acb66631fe9d62cc6f5fa24748024edfd4bf8d008faee8a56d240895423ab4` |
| 02 | `7bedbbbafae93154fcc95af58896f47086b0e47dab81b1683ff8fea0adab29ee` |
| 03 | `ee4a03d3f98718f83e2a6975cfd9620921193ae3ed049fdcc182ec8a58110a55` |
| 04 | `a5ff22a420d395f5d07de2ab5531c3f15859136a7d8d4f4517c343fa87c63912` |
| 05 | `6dae374bca0813348b2fac23b09cc7fc5fa58623894da8a48b9d739318e6437c` |
| 06 | `b443c2f564909899b0bcbe8b57de14b23788a1a462df49da1bbe6d7a75661684` |
| 07 | `9c1c63c6ddcb998a0f6627c130bbf525fffd9d214717a1f961800ded2b40fafa` |

## Checklist de aprobación editorial

Aplicar a cada video individualmente. No aprobar la serie por arrastre.

- [ ] La locución cubre el objetivo, la actividad y la evidencia definidos en el guion maestro.
- [ ] Toda abreviación respecto del guion está identificada y aprobada.
- [ ] Pronunciación de nombres, siglas y anglicismos aprobada por escucha humana.
- [ ] Ritmo, pausas y entonación resultan naturales durante el video completo.
- [ ] No hay silencios accidentales, palabras cortadas ni artefactos de voz.
- [ ] Los subtítulos coinciden con la voz y no tapan tablas, campos, llamadas o pies de página.
- [ ] Las ocho diapositivas o escenas previstas aparecen en el orden correcto, o existe una excepción aprobada.
- [ ] Los ejemplos usan únicamente datos ficticios y no exponen credenciales, pagos ni información personal.
- [ ] Se adjuntan SRT y transcripción con la misma versión del MP4.
- [ ] Nombre, versión, duración y SHA-256 quedan registrados en el manifiesto audiovisual.
- [ ] El archivo se prueba en un curso privado del LMS, sin publicar ni otorgar acceso comercial.
- [ ] El responsable registra `APROBADO`, `FALLIDO` o `NO APLICA` con fecha y evidencia.

## Criterio de salida

Un video puede pasar a `QA_LMS_PRIVADO` sólo cuando:

1. la duración abreviada haya sido aprobada o se haya reemplazado por una versión completa;
2. la escucha editorial y la revisión visual estén aprobadas;
3. no queden solapes de subtítulos con información necesaria;
4. existan MP4, SRT, transcripción y registro de checksum de la misma versión.

Hasta entonces, conservar los ocho archivos actuales como candidatos reversibles y no sobrescribirlos.

## Decisión única para Katherine

**¿Apruebas los ocho MP4 actuales como versiones abreviadas candidatas, aun cuando suman 38:22 frente a un mínimo planificado de 74:00, para continuar con escucha editorial y corrección de subtítulos sin volver a renderizar desde los guiones completos?**

- Si aprueba: conservar estas versiones, corregir el área segura de subtítulos, completar escucha humana, SRT y transcripciones, y probar un solo video en LMS privado.
- Si no aprueba: re-renderizar individualmente desde los guiones maestros, empezando por el Video 04, que presenta la mayor diferencia proporcional.

## Riesgo y reversa

Riesgo bajo. Este documento registra evidencia y bloqueos; no modifica los MP4, Drive, LMS, landing, formulario, checkout, precios ni producción. La reversa consiste en retirar este archivo o sustituir su estado cuando exista nueva evidencia, sin borrar originales.
