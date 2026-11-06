# Manifiesto de producción audiovisual — Videos 00–07

**Producto:** Automatiza tu Negocio en 7 Pasos

**Versión del manifiesto:** 1.0 — para revisión

**Alcance:** preparar una cola audiovisual trazable; no autoriza render, publicación, carga al LMS, cobros ni despliegue.

## Propósito

Este manifiesto conecta los ocho guiones vigentes con sus presentaciones grabables y define un contrato único de salida para producción, subtítulos, transcripción y evidencia. No sustituye la matriz editorial de Drive, la puerta comercial del piloto ni los controles de derechos de uso.

El objetivo es impedir que producción trabaje con un guion histórico, una presentación equivocada o nombres de archivo incompatibles. Cada video conserva estado `BLOQUEADO_EDITORIAL` hasta que Katherine apruebe explícitamente el guion y la presentación correspondientes.

## Fuentes de control

- [Inventario verificable](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit)
- [Matriz editorial y de producción](https://docs.google.com/spreadsheets/d/1PiCj7lgrl_J19eUm7BERPIthUP2ABi5yepqfWgoGfxE/edit)
- [Registro de derechos, licencias y procedencia](https://docs.google.com/document/d/14IaQOCqIVbcWXB9EiG8ERwzFYpNPkoZym0saLSYwXqg/edit)
- [Guía del piloto, PR #12](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/12)
- [Puerta de calidad comercial, PR #23](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/23)
- [Paquete de locución y subtítulos del piloto, PR #31](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/31)
- [Empaquetado reproducible del piloto, PR #32](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/32)

## Estados permitidos

| Estado | Uso exacto |
|---|---|
| `BLOQUEADO_EDITORIAL` | Falta aprobación explícita del guion o de la presentación. |
| `LISTO_PARA_PILOTO` | Fuentes aprobadas; se permite producir únicamente una muestra local y privada. |
| `PILOTO_EN_QA` | Existe muestra verificable; faltan controles técnicos o revisión humana. |
| `APROBADO_PILOTO` | Las cinco puertas del PR #23 están aprobadas con evidencia. |
| `LISTO_PARA_PRODUCCION` | El patrón del piloto está aprobado y el video tiene fuentes, derechos y responsable. |
| `PRODUCIDO_NO_CARGADO` | Paquete final completo; aún no se cargó al LMS. |
| `QA_LMS_APROBADO` | Paquete probado como estudiante en espacio privado. |
| `BLOQUEADO_INCIDENCIA` | Existe un defecto o dependencia que impide avanzar. |

No usar `Aprobado`, `Listo` o `Terminado` sin el sufijo anterior y su evidencia asociada.

## Cola maestra de los ocho videos

| Orden | Video | Guion vigente | Presentación grabable | Duración objetivo | Estado inicial | Responsable siguiente |
|---:|---|---|---|---|---|---|
| 00 | Bienvenida y ruta | [Drive](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view) · [PR #5](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/5) | [PR #40](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/40) · `LC_ATN7P_PRESENTACION_VIDEO_00_BIENVENIDA_v1.pptx` | 6–7 min | `BLOQUEADO_EDITORIAL` | Katherine → Producción audiovisual |
| 01 | Diagnóstico y priorización | [Drive](https://drive.google.com/file/d/1kTiP_rHiiOlRq9uBYgnFN5UU83fNwicp/view) · [PR #6](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/6) | [PR #41](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/41) · `LC_ATN7P_PRESENTACION_VIDEO_01_DIAGNOSTICO_v1.pptx` | 8–10 min | `BLOQUEADO_EDITORIAL` | Katherine |
| 02 | CRM y ecosistema digital | [Drive](https://docs.google.com/document/d/1U-o4tym4a3LgcJARyWR801L4YUkM3awpEIujuvhho4w/edit) · [PR #7](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/7) | [PR #42](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/42) · `LC_ATN7P_PRESENTACION_VIDEO_02_CRM_v1.pptx` | 10–15 min | `BLOQUEADO_EDITORIAL` | Katherine |
| 03 | IA aplicada | [Drive](https://docs.google.com/document/d/1vmvr3ZEzOmImhSWjgoKAelUIka2X6mZ17KrUykQ75g4/edit) | [PR #43](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/43) · `LC_ATN7P_PRESENTACION_VIDEO_03_IA_APLICADA_v1.pptx` | 10–13 min | `BLOQUEADO_EDITORIAL` | Katherine |
| 04 | n8n esencial sin API | [Drive](https://drive.google.com/file/d/1XvY-OgjyEFTMsU45OcnOlWVStDvPaC7D/view) · [PR #8](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/8) | [PR #44](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/44) · `LC_ATN7P_PRESENTACION_VIDEO_04_N8N_v1.pptx` | 10–12 min | `BLOQUEADO_EDITORIAL` | Katherine |
| 05 | Captación y seguimiento | [Drive](https://drive.google.com/file/d/1fWD7HxvkITLq1KRMGEqTT1RfsGwpXQJk/view) · [PR #9](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/9) | [PR #45](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/45) · `LC_ATN7P_PRESENTACION_VIDEO_05_CAPTACION_v2.pptx` | 10–12 min | `BLOQUEADO_EDITORIAL` | Katherine |
| 06 | MVP documentado | [Drive](https://drive.google.com/file/d/1T2AeZW6q_hzDERTi3w77VFjYyPxo8AW8/view) · [PR #10](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/10) | [PR #46](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/46) · `LC_ATN7P_PRESENTACION_VIDEO_06_MVP_v2_1.pptx` | 10–12 min | `BLOQUEADO_EDITORIAL` | Katherine |
| 07 | Implementación y roadmap | [Drive](https://drive.google.com/file/d/1zgc61RtxupF9G3ey-3-K_l3gO4rBFEAr/view) · [PR #11](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/11) | [PR #48](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/48) · `LC_ATN7P_PRESENTACION_VIDEO_07_IMPLEMENTACION_v1.pptx` | 10–12 min | `BLOQUEADO_EDITORIAL` | Katherine |

## Contrato de salida por video

Reemplazar `{NN}` por `00`–`07` y `{TEMA}` por el código de la tabla siguiente. No cambiar el código de tema entre archivos del mismo paquete.

| Video | `{TEMA}` |
|---:|---|
| 00 | `BIENVENIDA` |
| 01 | `DIAGNOSTICO` |
| 02 | `CRM` |
| 03 | `IA_APLICADA` |
| 04 | `N8N` |
| 05 | `CAPTACION` |
| 06 | `MVP` |
| 07 | `IMPLEMENTACION` |

Cada paquete aceptable contiene exactamente:

1. `LC_ATN7P_V{NN}_{TEMA}_MASTER_v1.mp4` — máster de revisión.
2. `LC_ATN7P_V{NN}_{TEMA}_1080p_v1.mp4` — copia para el LMS privado.
3. `LC_ATN7P_V{NN}_{TEMA}_es-CL_v1.srt` — subtítulos sincronizados.
4. `LC_ATN7P_V{NN}_{TEMA}_transcripcion_v1.pdf` — transcripción equivalente al corte final.
5. `LC_ATN7P_V{NN}_{TEMA}_qa_v1.md` — acta técnica y humana con incidencias.
6. `LC_ATN7P_V{NN}_{TEMA}_sha256_v1.txt` — hashes de los cuatro archivos de entrega.

No sobrescribir una versión ya revisada. Un cambio posterior crea `v2`, conserva `v1` y registra el motivo en el acta QA.

## Registro mínimo del handoff

La persona que prepara un video debe completar estos campos antes de renderizar:

| Campo | Regla |
|---|---|
| Video / versión | Coincide con la cola maestra y los nombres de salida. |
| Guion aprobado | Enlace y fecha de la decisión explícita de Katherine. |
| Presentación aprobada | Enlace y fecha de la decisión explícita de Katherine. |
| Responsable de producción | Una persona identificable, no “equipo”. |
| Herramienta y versión | PowerPoint, AI Video Maker, editor u otra herramienta usada. |
| Voz | Humana o sintética; nombre/versión y aprobación del piloto. |
| Recursos externos | URL, autor, licencia, fecha de consulta y evidencia. |
| Datos mostrados | Confirmación de que son ficticios y no contienen secretos. |
| Duración objetivo | Rango de la cola maestra. |
| Destino | Solo revisión local o LMS privado; nunca producción pública. |

Si falta uno de estos campos, el estado permanece `BLOQUEADO_INCIDENCIA`.

## Secuencia de producción y evidencia

### 1. Bloqueo de fuentes

- Confirmar que guion y presentación tienen aprobación explícita.
- Descargar copias desde los enlaces de la cola y registrar sus hashes.
- Confirmar que el nombre visible es “7 Pasos” y no la nomenclatura histórica incorrecta.
- Cerrar comentarios editoriales antes de grabar; no corregir el contenido silenciosamente durante edición.

### 2. Preflight local

- Abrir la presentación en PowerPoint de escritorio y revisar las diapositivas una a una.
- Verificar fuentes, tablas, contraste, zona segura y legibilidad a 720 px de ancho.
- Confirmar permisos de micrófono y captura de pantalla.
- Sustituir cualquier cuenta, correo o registro real por datos ficticios.
- Mantener música desactivada salvo licencia y aprobación explícitas.

### 3. Piloto controlado

- Producir primero una muestra del Video 00; no iniciar el lote completo.
- Aplicar la guía del PR #12 y la puerta comercial del PR #23.
- Registrar integridad, audio/voz, subtítulos, visuales y reproducción privada.
- Solo el estado `APROBADO_PILOTO` habilita replicar voz, ritmo y tratamiento visual.

### 4. Producción individual

- Trabajar un video por vez.
- Conservar el máster y generar la copia 1080p desde ese mismo corte.
- Generar el SRT desde la locución final, no desde un borrador anterior.
- Generar la transcripción desde el mismo corte y corregir nombres técnicos.
- No declarar una demostración técnica como resultado comercial.

### 5. QA y empaquetado

- Ejecutar los controles técnicos y humanos del PR #23.
- Registrar duración, resolución, FPS, canales, sonoridad, pico y hash.
- Verificar sincronía SRT, equivalencia de transcripción y lectura móvil.
- Adjuntar evidencia de procedencia de cada recurso externo.
- Documentar incidencias abiertas, responsable y decisión de reversa.

### 6. Prueba privada en LMS

- Cargar únicamente el archivo 1080p y sus recursos en un espacio privado.
- Recorrerlo con una cuenta de alumno de prueba autorizada.
- Comprobar reproducción, controles, subtítulos, descarga permitida y continuidad del módulo.
- Retirar el paquete si falla; conservar el máster y la versión anterior.
- La prueba privada no autoriza publicación ni matriculación comercial.

## Criterio de salida de la cola

Un video sale de producción solo cuando:

- el guion y la presentación tienen aprobación explícita;
- los seis archivos del contrato existen y comparten versión;
- duración, resolución, audio y sincronía cumplen el Quality Gate;
- subtítulos y transcripción corresponden al corte final;
- los derechos de uso están documentados;
- no aparecen datos reales, secretos ni endpoints productivos;
- la revisión humana está registrada;
- el recorrido privado del LMS tiene evidencia reproducible.

Si alguno falta, registrar `BLOQUEADO_INCIDENCIA`; nunca completar la evidencia por inferencia.

## Reversa y límites

- Ningún archivo de este manifiesto se carga en producción.
- No borrar másteres, fuentes ni versiones aprobadas anteriormente.
- Para revertir, retirar el paquete candidato del espacio privado y volver a la última versión con hash verificado.
- No hacer merge, deploy, publicación, cobro, gasto, cambio de precio ni envío desde este flujo.
- La aprobación de contenido, la aprobación audiovisual, la carga al LMS y la autorización comercial son decisiones separadas.

## Decisión solicitada

Katherine debe decidir una sola cosa: **aprobar este manifiesto como fuente operativa de la cola audiovisual y autorizar que el primer trabajo sea únicamente el piloto privado del Video 00**. La aprobación no autoriza producir los otros siete videos ni publicar el piloto.
