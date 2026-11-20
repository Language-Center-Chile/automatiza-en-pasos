# Preflight aplicado para re-render — Video 01

**Producto:** Automatiza tu Negocio en 7 Pasos

**Video:** 01 — Diagnóstico y priorización

**Fecha de corte:** 20 de noviembre de 2026

**Estado:** `BLOQUEADO_ENTRADA — NO RENDERIZAR`

## Objetivo

Aplicar al Video 01 la plantilla de re-render del PR #60 y determinar, con evidencia, si ya existen todas las entradas necesarias para generar una versión v2 con zona segura para subtítulos.

Este checklist no renderiza, no reconstruye el video desde el MP4 actual y no declara listo un activo que todavía carece de fuentes editables.

## Material revisado

- [Guion maestro del Video 01 en Drive](https://drive.google.com/file/d/1kTiP_rHiiOlRq9uBYgnFN5UU83fNwicp/view).
- [Presentación grabable del Video 01 — PR #41](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/41).
- [Video 01 actual](https://chatgpt.com/library?file_id=libfile_02b2dae7ee688191a3d771bef700c3af&account_id=personal).
- Informe técnico de los ocho MP4, generado el 15 de noviembre de 2026.
- [QA general de la serie — PR #58](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/58).
- [QA del Video 00 v2 — PR #59](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/59).
- [Plantilla de re-render con zona segura — PR #60](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/60).
- [Manifiesto de empaquetado de videos verificados — PR #61](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/61).

Se buscaron en Drive, la Biblioteca y el repositorio archivos de audio, WAV, SRT, cues editables o transcripción específicos del Video 01. No se localizó una fuente separada y verificable para esos componentes.

## Activos localizados

| Componente | Evidencia | Identidad | Estado |
|---|---|---|---|
| Guion maestro | Drive | `02_Guion_Video_01_Diagnostico_PARA_REVISION.md` | `EXISTE_PARA_REVISION` |
| Presentación limpia | PR #41 | `LC_ATN7P_PRESENTACION_VIDEO_01_DIAGNOSTICO_v1.pptx` | `EXISTE_PARA_REVISION` |
| SHA-256 de presentación | PR #41 | `27182e73880969e7bc0420e46cb30a9344e77d4338a947e5305bcd2a74d8b89d` | `VERIFICADO` |
| Blob Git de presentación | PR #41 | `19983f18baadbc4dd5b0d37cfabe4441a875185f` | `VERIFICADO` |
| MP4 de referencia | Biblioteca | `Automatiza_7_Pasos_Video_01_Diagnostico_1080p.mp4` | `EXISTE_REFERENCIA` |
| SHA-256 del MP4 | Informe técnico | `50acb66631fe9d62cc6f5fa24748024edfd4bf8d008faee8a56d240895423ab4` | `VERIFICADO` |
| Duración del MP4 | Informe técnico | 03:54.708 | `VERIFICADO` |
| Video del MP4 | Informe técnico | H.264, 1920 × 1080, 24 fps | `VERIFICADO` |
| Audio incrustado | Informe técnico | AAC, estéreo, 48 kHz | `VERIFICADO_SOLO_REFERENCIA` |

El MP4 actual sirve para comparar duración, voz y sincronía. No es una fuente limpia para reconstruir la imagen porque contiene subtítulos superpuestos al contenido.

## Puertas de entrada del PR #60

| Puerta obligatoria | Estado | Evidencia / falta exacta |
|---|---|---|
| Presentación grabable sin subtítulos | `PARA_REVISION` | Existe en PR #41; falta aprobación editorial como fuente visual |
| Pista de narración separada | `FALTA` | Sólo se verificó audio AAC incrustado en el MP4 |
| SRT o cues editables es-CL | `FALTA` | No localizado en Drive, Biblioteca o repositorio |
| Guion maestro y versión | `PARA_REVISION` | Existe en Drive; falta aprobación editorial |
| Responsable editorial | `DEFINIDO` | Katherine |
| Decisión sobre duración de 03:55 | `PENDIENTE` | No consta aprobación de la versión abreviada |
| Evidencia de derechos del paquete | `PENDIENTE` | Falta preflight específico de voz y cualquier recurso externo del Video 01 |

Resultado: **1 de 7 puertas está definida, 2 existen pero requieren revisión y 4 faltan o requieren decisión**. El estado correcto continúa siendo `BLOQUEADO_ENTRADA`.

## Qué no debe hacerse

- No escalar ni recortar el MP4 actual para simular una versión v2.
- No eliminar los subtítulos quemados mediante recorte, desenfoque u OCR.
- No inventar un SRT a partir de fotogramas.
- No regenerar narración antes de decidir si se conserva la versión abreviada.
- No sobrescribir el MP4 actual, la presentación o el guion.
- No procesar los Videos 02–07 antes de cerrar este piloto.

## Recuperación segura de fuentes

1. Buscar el proyecto exacto del Video 01 en AI Video Maker por título y fecha de exportación.
2. Exportar o copiar, sin mover originales:
   - pista de narración limpia;
   - archivo de cues o SRT editable;
   - configuración de escenas y tiempos;
   - identificador de voz y ritmo;
   - versión del proyecto.
3. Calcular SHA-256 de cada archivo recuperado.
4. Cotejar la narración con el MP4 actual y el guion maestro.
5. Si el proyecto no contiene esas fuentes, registrar `FUENTE_NO_RECUPERABLE`; no regenerarlas automáticamente.
6. Sólo con las siete puertas resueltas, aplicar la geometría del PR #60 al Video 01.

## Salidas previstas, todavía no generadas

| Salida | Nombre previsto | Estado |
|---|---|---|
| Máster limpio | `Automatiza_7_Pasos_Video_01_Diagnostico_v2_master.mp4` | `NO_GENERADO` |
| MP4 1080p | `Automatiza_7_Pasos_Video_01_Diagnostico_v2_1080p.mp4` | `NO_GENERADO` |
| Subtítulos | `Automatiza_7_Pasos_Video_01_Diagnostico_v2_es-CL.srt` | `NO_GENERADO` |
| Transcripción | `Automatiza_7_Pasos_Video_01_Diagnostico_v2_transcripcion.pdf` | `NO_GENERADO` |
| Informe técnico | `Automatiza_7_Pasos_Video_01_Diagnostico_v2_informe_tecnico.json` | `NO_GENERADO` |
| Evidencia | `Automatiza_7_Pasos_Video_01_Diagnostico_v2_evidencia.md` | `NO_GENERADO` |

## Quality Gate previo al render

- [x] Video, duración y checksum de referencia identificados.
- [x] Guion maestro localizado.
- [x] Presentación limpia localizada y distinguible por checksum.
- [x] Salidas v2 nombradas sin sobrescribir v1.
- [ ] Presentación aprobada como fuente visual.
- [ ] Narración separada recuperada y cotejada.
- [ ] SRT o cues editables recuperados y cotejados.
- [ ] Duración abreviada aprobada o nueva locución autorizada.
- [ ] Derechos de voz y recursos documentados.
- [ ] Siete puertas de entrada cerradas.

## Criterio de salida

Este preflight cambia a `LISTO_PARA_RENDER_PILOTO` únicamente cuando las siete puertas estén cerradas con evidencia. El MP4 actual permanece como respaldo y referencia; no se modifica ni elimina.

## Decisión única para Katherine

**¿Apruebas usar la presentación del PR #41 y la narración actual de 03:55 como base del piloto visual del Video 01, sin ampliar todavía el contenido, siempre que primero se recuperen la pista de voz y los cues editables desde AI Video Maker?**

Si la respuesta es negativa o las fuentes no se recuperan, el video permanece bloqueado y cualquier regeneración deberá plantearse como una versión editorial separada.

## Riesgo y reversa

Riesgo bajo y reversible. Este checklist añade un único archivo documental; no genera medios, no modifica Drive, no conecta servicios y no cambia LMS, landing, formulario, checkout, precios o producción.
