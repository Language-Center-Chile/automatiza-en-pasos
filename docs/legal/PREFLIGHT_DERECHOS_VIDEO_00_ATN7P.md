# Preflight de derechos y procedencia — Video 00

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Entregable:** checklist de QA previo al piloto privado del Video 00  
**Versión:** 0.1 — PARA REVISIÓN  
**Fecha de corte:** 2026-11-14  
**Estado global:** `BLOQUEADO_DERECHOS`  

> Este documento organiza evidencia conocida y faltante. No acredita autoría, titularidad, licencia ni permiso; no reemplaza la plantilla de declaración del PR #55 ni asesoría jurídica. Ningún campo se marca aprobado por inferencia.

## 1. Alcance exacto

Este preflight cubre únicamente el piloto privado de:

- `Video 00 — Bienvenida y ruta de los 7 pasos`;
- el guion de Drive y del PR #5;
- la presentación grabable del PR #40;
- las capturas del workbook requeridas por el guion;
- voz, imagen, música, subtítulos, transcripción y archivos de salida que todavía deben producirse.

No autoriza grabar, publicar, cargar al LMS, matricular, cobrar, desplegar ni reutilizar el paquete en otros videos.

## 2. Fuentes revisadas

- [Inventario verificable de Drive](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit)
- [Registro de derechos, licencias y procedencia](https://docs.google.com/document/d/14IaQOCqIVbcWXB9EiG8ERwzFYpNPkoZym0saLSYwXqg/edit)
- [Matriz editorial y de producción](https://docs.google.com/spreadsheets/d/1PiCj7lgrl_J19eUm7BERPIthUP2ABi5yepqfWgoGfxE/edit)
- [Guion vigente del Video 00 en Drive](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view)
- [PR #5 — guion versionado](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/5)
- [PR #40 — presentación grabable](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/40)
- [PR #49 — manifiesto audiovisual](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/49)
- [PR #55 — plantilla de declaración y autorización](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/55)

## 3. Estados permitidos

| Estado | Significado verificable |
|---|---|
| `VERIFICADO` | Existe evidencia accesible, coincidente con la versión candidata y revisada. |
| `REQUIERE_QA` | El activo existe, pero falta aprobación, firma, licencia o cotejo final. |
| `FALTA` | No se localizó la evidencia o el activo requerido. |
| `BLOQUEADO` | No puede avanzar sin una decisión, permiso o responsable externo. |
| `NO_APLICA` | El componente queda excluido explícitamente del piloto. |

## 4. Inventario del paquete candidato

| ID | Activo o componente | Grupo | Evidencia localizada | Estado | Falta exacta para cerrar |
|---|---|---|---|---|---|
| V00-D01 | Guion `Video 00 — Bienvenida y ruta de los 7 pasos` | R-01 | Drive + PR #5; 724 palabras; siete bloques; seis recursos visuales | `REQUIERE_QA` | Aprobación editorial explícita y declaración firmada de autoría, titularidad y uso educativo/comercial. |
| V00-D02 | Presentación `LC_ATN7P_PRESENTACION_VIDEO_00_BIENVENIDA_v1.pptx` | R-07 | PR #40; 8 diapositivas; 8 notas; SHA-256 declarado `51eef714bdbf5e8732a0c73ea6044643d997acf00af7ca31e973cf4e9bac4bce` | `REQUIERE_QA` | Aprobación visual, declaración firmada y cotejo del hash contra la copia exacta usada para grabar. |
| V00-D03 | Diagrama de evolución: tarea → proceso → flujo → medición | R-07 | Construido en la presentación con texto y formas editables, según PR #40 | `REQUIERE_QA` | Incluirlo expresamente en la declaración del paquete y confirmar que no incorpora iconos o plantillas externas. |
| V00-D04 | Diagrama de los siete pasos | R-07 | Construido en la presentación del PR #40 | `REQUIERE_QA` | Incluirlo expresamente en la declaración del paquete y cotejar la versión final. |
| V00-D05 | Tabla y demostración de la hoja `Ruta` | R-02 / R-07 | Presentación con tabla nativa; workbook relacionado en PR #4 | `BLOQUEADO` | Usar la versión aprobada del workbook, registrar su hash y generar una captura únicamente con datos ficticios. |
| V00-D06 | Captura de la hoja `1 Diagnóstico` | R-02 / R-07 | Requerida por el guion; no localizada como archivo final | `FALTA` | Generar desde la versión aprobada del workbook, ocultar metadatos y registrar hash. |
| V00-D07 | Portada y placa de cierre | R-07 / R-09 | Presentes como composición editable en PR #40 | `REQUIERE_QA` | Confirmar identidad visual, autoría y que la copia final no añada recursos históricos. |
| V00-D08 | Logo de Language Center Chile | R-09 | Solicitado por el guion; PR #40 declara no reutilizar logos de procedencia incierta | `NO_APLICA` | Mantener fuera del piloto. Si se incorpora después, adjuntar archivo maestro y autorización de marca antes de grabar. |
| V00-D09 | Tipografía Aptos | R-07 / R-10 | Política tipográfica declarada en PR #40 | `REQUIERE_QA` | Registrar software y versión de edición, procedencia de la fuente y condiciones aplicables al archivo distribuido. |
| V00-D10 | Voz de narración | R-08 | No se asignó intérprete ni proveedor TTS | `BLOQUEADO` | Identificar voz humana o sintética; adjuntar autorización o términos, herramienta, plan, versión y uso permitido. |
| V00-D11 | Imagen de presentador/a | R-08 | El guion sugiere plano medio; no hay persona ni autorización asignada | `BLOQUEADO` | Identificar a la persona y adjuntar autorización de imagen, voz y usos; o cambiar a captura sin persona. |
| V00-D12 | Música y efectos | R-08 | El manifiesto #49 exige mantener música desactivada salvo licencia y aprobación | `NO_APLICA` | Mantener el piloto sin música ni efectos externos. Cualquier incorporación reabre este control. |
| V00-D13 | Subtítulos `LC_ATN7P_V00_BIENVENIDA_es-CL_v1.srt` | R-08 | Nombre definido en PR #49; archivo final inexistente | `FALTA` | Generar desde el corte final, revisar manualmente y registrar hash. |
| V00-D14 | Transcripción `LC_ATN7P_V00_BIENVENIDA_transcripcion_v1.pdf` | R-08 | Nombre definido en PR #49; archivo final inexistente | `FALTA` | Generar desde el mismo corte final, revisar equivalencia y registrar hash. |
| V00-D15 | Máster y copia 1080p | R-08 | Nombres definidos en PR #49; archivos finales inexistentes | `FALTA` | Producir sólo después de cerrar los bloqueos y registrar hashes de ambas salidas. |
| V00-D16 | Marcas o interfaces de terceros | R-10 | El guion no exige mostrar interfaces conectadas; el workbook es el único apoyo de pantalla | `NO_APLICA` | No añadir logos, capturas o interfaces externas durante edición. Si se añaden, registrar fuente, permiso y versión. |
| V00-D17 | Datos, nombres y ejemplos | R-11 | Guion y manifiesto exigen datos ficticios | `REQUIERE_QA` | Revisar cuadro a cuadro que no existan correos, nombres, IDs, cuentas, metadatos o credenciales reales. |
| V00-D18 | Herramientas de IA o generación | R-07 / R-08 | La presentación fue procesada con una herramienta de creación/importación; plan y versión no constan en PR #40 | `REQUIERE_QA` | Registrar herramienta, plan, versión, fecha, aporte humano, insumos y términos consultados en la copia del PR #55. |

## 5. Baseline visual permitido para el piloto

Para reducir el riesgo, la primera muestra debe limitarse a:

1. texto y formas editables de la presentación del PR #40;
2. una tabla nativa sin datos personales;
3. capturas nuevas del workbook aprobado con un caso ficticio;
4. voz identificada y autorizada;
5. pantalla limpia, sin logos, fotografías, música, efectos, iconos de stock ni interfaces de terceros.

La edición no debe “mejorar” el piloto añadiendo recursos externos sin reabrir este preflight.

## 6. Evidencia que debe acompañar la grabación

Crear una carpeta privada `V00_DERECHOS_EVIDENCIA_v1` y conservar, sin reemplazar originales:

1. copia exacta del guion aprobado;
2. copia exacta de la presentación aprobada;
3. copia del workbook utilizado para las capturas;
4. hashes SHA-256 de las tres fuentes;
5. copia completada y firmada de la plantilla del PR #55;
6. autorización de voz e imagen o términos del proveedor TTS;
7. registro de la herramienta de edición y, si corresponde, de IA;
8. capturas finales del workbook con datos ficticios;
9. acta QA con incidencias y decisión de reversa;
10. hashes de máster, copia 1080p, SRT y transcripción.

No guardar credenciales, documentos de identidad completos ni datos personales innecesarios en el repositorio. La evidencia sensible debe permanecer en una ubicación privada autorizada; este checklist sólo registra su existencia y responsable.

## 7. Quality Gate antes de grabar

| Control | Resultado inicial | Evidencia o incidencia |
|---|---|---|
| Guion aprobado por Katherine | `FALLA` | Matriz editorial mantiene el Video 00 pendiente. |
| Presentación aprobada por Katherine | `FALLA` | PR #40 permanece en borrador. |
| Declaración del PR #55 completada y firmada | `FALLA` | Plantilla disponible; copia firmada no localizada. |
| Autor y titular identificados | `FALLA` | No completar por inferencia. |
| Uso educativo y comercial autorizado | `FALLA` | No se localizó autorización firmada. |
| Fuentes de grabación identificadas por versión y hash | `PARCIAL` | Presentación tiene hash declarado; faltan copia cotejada, guion y workbook. |
| Capturas con workbook aprobado y datos ficticios | `FALLA` | No existe paquete final de capturas. |
| Voz y, si aplica, imagen autorizadas | `FALLA` | Responsable no asignado. |
| Música, efectos y recursos externos excluidos | `PASA_CONDICIÓN` | Deben permanecer ausentes en el corte candidato. |
| Herramientas y condiciones de uso registradas | `FALLA` | Faltan plan, versión y fecha. |
| Datos personales y secretos ausentes | `PENDIENTE` | Requiere revisión cuadro a cuadro del corte final. |
| Salidas finales y hashes completos | `FALLA` | El video, SRT y transcripción todavía no existen. |

**Resultado inicial:** 0 controles cerrados sin condición; 1 pasa condicionado; 1 parcial; 9 fallan y 1 permanece pendiente. El Video 00 no está autorizado para grabación ni venta.

## 8. Secuencia de desbloqueo

1. Katherine decide si acepta el baseline visual limitado de la sección 5.
2. Katherine aprueba o solicita cambios al guion y a la presentación en sus fuentes de control.
3. La persona con facultad completa y firma una copia de la plantilla del PR #55 para V00-D01 a V00-D09.
4. Producción identifica voz, imagen y herramientas; adjunta sus permisos o términos.
5. Se generan capturas del workbook aprobado con datos ficticios y hashes.
6. QA vuelve a ejecutar los doce controles de la sección 7.
7. Sólo con todos los controles aplicables en `PASA` se puede producir una muestra local y privada.

Un piloto privado aprobado técnicamente no autoriza publicación, venta ni producción de los Videos 01–07.

## 9. Reversa

- Si aparece un activo sin procedencia, retirar ese activo del proyecto y volver a la última fuente con hash verificado.
- Si cambia el guion, la presentación, el workbook, la voz o la herramienta, crear una nueva versión del preflight.
- No sobrescribir ni borrar la evidencia anterior.
- Si no puede demostrarse el permiso, sustituir el recurso por texto, formas propias o silencio antes de continuar.

## 10. Decisión única solicitada

**Katherine: ¿apruebas que el piloto del Video 00 use exclusivamente el guion de Drive/PR #5 y la presentación del PR #40, con texto, formas y capturas ficticias del workbook, sin logo, fotografías, iconos externos, música, efectos ni interfaces de terceros?**

Esta aprobación sólo fija el baseline de activos. La grabación sigue bloqueada hasta completar firma, voz, herramientas, capturas y los controles aplicables.
