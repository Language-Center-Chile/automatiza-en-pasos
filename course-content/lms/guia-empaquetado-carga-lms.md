# Guía de empaquetado y carga LMS — Automatiza tu Negocio en 7 Pasos

## Estado y alcance

- Producto: **Automatiza tu Negocio en 7 Pasos**.
- Versión de esta guía: `v1`, candidata para revisión.
- Propósito: convertir los materiales aprobados en un paquete LMS reproducible y comprobar el recorrido como estudiante.
- Alcance: preparación, carga en espacio privado o borrador, verificación y registro de evidencia.
- Fuera de alcance: publicación, cobro, cambios de precio, conexión de producción, matrícula real y envío a estudiantes.

Esta guía es neutral respecto del proveedor. Los nombres de botones cambian entre plataformas, pero el orden, los controles y la evidencia deben mantenerse. Un archivo presente en Drive o GitHub no se considera aprobado automáticamente.

## Puerta de entrada

No iniciar la carga final hasta que exista una decisión editorial registrada para cada material. Se permite montar un **módulo piloto privado** con elementos marcados `PARA_REVISION`, siempre que no se habilite acceso público.

Estados permitidos en el manifiesto:

| Estado | Significado | Uso permitido |
|---|---|---|
| `PARA_REVISION` | Existe, pero Katherine no lo ha aprobado | Vista previa privada |
| `CAMBIOS_SOLICITADOS` | Requiere corrección | No cargar como versión final |
| `APROBADO` | Contenido aprobado para empaquetar | Carga privada y QA |
| `QA_APROBADO` | Cargado y recorrido con evidencia | Candidato a publicación |
| `BLOQUEADO` | Falta archivo, permiso, licencia o decisión | Detener ese elemento |

La aprobación editorial no autoriza publicación ni venta. `QA_APROBADO` tampoco autoriza cobros reales.

## Estructura canónica del paquete

Preparar una carpeta de trabajo nueva; no mover ni renombrar los originales de Drive.

```text
LC_ATN7P_LMS_v1/
├── 00_MANIFIESTO/
│   ├── manifiesto.csv
│   ├── decisiones.md
│   └── registro-qa.md
├── 01_BIENVENIDA/
│   ├── video/
│   ├── subtitulos/
│   ├── transcripcion/
│   └── recursos/
├── 02_MODULO_01_DIAGNOSTICO/
├── 03_MODULO_02_CRM/
├── 04_MODULO_03_IA_APLICADA/
├── 05_MODULO_04_N8N/
├── 06_MODULO_05_CAPTACION/
├── 07_MODULO_06_MVP/
├── 08_MODULO_07_IMPLEMENTACION/
├── 09_EVALUACION_FINAL/
├── 10_DESCARGABLES/
├── 11_BIBLIOTECA_CASOS/
└── 12_EVIDENCIAS_QA/
```

Cada módulo debe repetir estas subcarpetas:

```text
contenido/
video/
subtitulos/
transcripcion/
descargables/
evaluacion/
evidencias/
```

No crear carpetas vacías para aparentar avance. Si falta un componente, registrarlo como `BLOQUEADO` en el manifiesto.

## Nomenclatura obligatoria

Formato general:

`LC_ATN7P_[TIPO]_[NUMERO]_[NOMBRE]_v[VERSION].[EXTENSION]`

Ejemplos:

- `LC_ATN7P_VIDEO_00_BIENVENIDA_v1.mp4`
- `LC_ATN7P_VIDEO_00_BIENVENIDA_es-CL_v1.srt`
- `LC_ATN7P_MODULO_01_DIAGNOSTICO_v1.pdf`
- `LC_ATN7P_WORKBOOK_v1.xlsx`
- `LC_ATN7P_EVALUACION_FINAL_ESTUDIANTE_v1.pdf`
- `LC_ATN7P_EVALUACION_FINAL_PAUTA_v1.pdf`

Reglas:

1. usar `7_PASOS`, nunca `7_DIAS`;
2. usar dos dígitos para videos y módulos;
3. separar versión del estudiante y pauta docente;
4. mantener `es-CL` en subtítulos;
5. incrementar la versión cuando cambia el contenido, no al copiarlo;
6. no incluir datos personales, secretos, tokens ni nombres de clientes en archivos de práctica.

## Manifiesto mínimo

Crear `00_MANIFIESTO/manifiesto.csv` con una fila por archivo y estas columnas:

| Columna | Contenido |
|---|---|
| `id_activo` | Identificador estable, por ejemplo `M03-CONTENIDO` |
| `seccion_lms` | Bienvenida, Módulo 1–7, Evaluación o Biblioteca |
| `archivo` | Nombre final del archivo |
| `fuente` | URL de Drive o PR de GitHub |
| `version` | Número de versión |
| `estado_editorial` | Uno de los estados permitidos |
| `responsable` | Persona que revisa o produce |
| `licencia_autoria` | Evidencia o `PENDIENTE` |
| `checksum_sha256` | Huella calculada después de exportar |
| `destino_lms` | Unidad, lección o recurso |
| `qa` | `PENDIENTE`, `APROBADO` o `FALLIDO` |
| `evidencia` | Enlace o ruta a captura/registro |

Una fila sin fuente, estado editorial o licencia/autoría se marca `BLOQUEADO`.

## Mapeo inicial de materiales

Este mapeo identifica fuentes; no las declara aprobadas.

| Destino LMS | Fuente candidata | Estado inicial | Resultado esperado |
|---|---|---|---|
| Bienvenida | Guion Video 00, PR #5 | `PARA_REVISION` | Lección de orientación |
| Módulo 1 | PR #13 | `PARA_REVISION` | Diagnóstico y priorización |
| Módulo 2 | PR #14 | `PARA_REVISION` | CRM y ecosistema digital |
| Módulo 3 | PR #15 | `PARA_REVISION` | IA aplicada y prompts seguros |
| Módulo 4 | PR #16 | `PARA_REVISION` | n8n esencial sin API |
| Módulo 5 | PR #17 | `PARA_REVISION` | Captación y seguimiento |
| Módulo 6 | PR #18 | `PARA_REVISION` | MVP local documentado |
| Módulo 7 | PR #19 | `PARA_REVISION` | Implementación y roadmap |
| Evaluación final | PR #20 | `PARA_REVISION` | Evaluación y rúbrica final |
| Workbook | PR #4 / copia verificada en Drive | `PARA_REVISION` | Descargable central |

Los videos finales, subtítulos y transcripciones permanecen `BLOQUEADO` hasta localizar o producir archivos verificables.

## Orden de carga

### Fase 1 — Espacio privado

1. crear el curso como borrador o privado;
2. desactivar indexación, autoinscripción, certificados y notificaciones masivas;
3. usar una cuenta de prueba sin privilegios administrativos;
4. definir idioma `Español (Chile)` y zona horaria `America/Santiago`;
5. registrar el identificador interno del curso en `decisiones.md`.

### Fase 2 — Navegación

Crear en este orden:

1. Bienvenida;
2. Módulos 1 a 7;
3. Evaluación final;
4. Descargables;
5. Biblioteca de casos, inicialmente oculta.

Cada módulo debe presentar siempre:

1. objetivo y tiempo estimado;
2. video o marcador explícito `VIDEO PENDIENTE` en el piloto privado;
3. contenido de la lección;
4. actividad en el workbook;
5. evidencia requerida;
6. quiz o comprobación;
7. checklist de cierre;
8. botón o enlace al siguiente módulo.

No sustituir un video faltante por uno histórico que diga “7 Días”.

### Fase 3 — Archivos y evaluaciones

1. cargar únicamente copias exportadas desde fuentes registradas;
2. calcular SHA-256 y escribirlo en el manifiesto;
3. separar archivos del estudiante y pautas docentes;
4. restringir las pautas al rol docente;
5. configurar el workbook como descarga, no como archivo editable compartido entre estudiantes;
6. mantener intentos de prueba sin calificación oficial ni certificado;
7. utilizar los umbrales de la evaluación final solo después de la decisión editorial de Katherine.

### Fase 4 — Accesibilidad y experiencia

Para cada video final verificar:

- subtítulos `es-CL` sincronizados;
- transcripción descargable;
- audio comprensible y volumen estable;
- texto legible en móvil;
- ausencia de información sensible;
- controles de reproducción disponibles.

Para cada documento verificar:

- apertura en computador y móvil;
- títulos y orden de lectura claros;
- tablas legibles;
- enlaces funcionales;
- nombre “7 Pasos” consistente.

## Prueba del módulo piloto

Usar Bienvenida + Módulo 1 como piloto privado. Crear una cuenta ficticia, por ejemplo `alumno.prueba+atn7p@example.test`, sin correo real ni datos personales.

Ejecutar y registrar:

| Prueba | Resultado esperado | Evidencia |
|---|---|---|
| Acceso | La cuenta entra solo al curso de prueba | Captura sin datos sensibles |
| Inicio | Bienvenida explica ruta, tiempo y reglas | Captura de la lección |
| Navegación | Se avanza y retrocede sin enlaces rotos | Registro de pasos |
| Descarga | Workbook abre y conserva hojas/fórmulas | SHA-256 y captura |
| Actividad | La evidencia puede adjuntarse con archivo ficticio | Confirmación del LMS |
| Quiz | Puntaje y retroalimentación coinciden con la clave | Resultado de prueba |
| Restricción | La pauta docente no es visible al alumno | Captura del rol alumno |
| Móvil | No hay desbordes ni controles inaccesibles | Capturas móvil |
| Reingreso | El progreso se conserva al cerrar sesión | Registro antes/después |
| Salida | No se envían cobros, certificados ni mensajes reales | Log de notificaciones |

Si una prueba falla, registrar `FALLIDO`, conservar la evidencia y no ampliar la carga a los módulos 2–7.

## QA del curso completo

Cuando el piloto esté aprobado, repetir el recorrido con todos los módulos y comprobar:

- [ ] ocho secciones de aprendizaje: Bienvenida + Módulos 1–7;
- [ ] objetivos, tiempos, actividades y evidencias coherentes;
- [ ] descargables correctos y sin archivos duplicados;
- [ ] claves y pautas ocultas al rol estudiante;
- [ ] enlaces internos y externos válidos;
- [ ] progreso, reingreso y finalización correctos;
- [ ] evaluación final configurada según decisión aprobada;
- [ ] certificados y automatizaciones todavía desactivados;
- [ ] permisos de docentes, revisores y alumno de prueba mínimos;
- [ ] evidencias guardadas en `12_EVIDENCIAS_QA`;
- [ ] registro de derechos completo para cada recurso visual, audio y documento;
- [ ] ninguna lección pública ni indexada.

## Reversa segura

Ante un error:

1. ocultar la lección o volverla a borrador;
2. retirar el archivo afectado sin borrar su fuente original;
3. registrar el fallo y la versión en `registro-qa.md`;
4. restaurar la última copia cuyo checksum esté aprobado;
5. repetir solo las pruebas afectadas y una prueba de navegación completa;
6. no reutilizar enlaces de acceso concedidos por error; revocar la cuenta ficticia si corresponde.

No eliminar cursos, matrículas ni evidencias reales durante una prueba. Si la plataforma no permite reversa granular, detener la carga y documentar el bloqueo.

## Criterio de cierre de este entregable

La documentación de empaquetado se considera utilizable cuando:

1. la estructura de carpetas está aceptada;
2. el manifiesto contiene todos los activos candidatos;
3. cada activo tiene fuente, estado, responsable y licencia/autoría;
4. Katherine elige el LMS o confirma el LMS existente;
5. se puede cargar Bienvenida + Módulo 1 en privado sin inventar archivos faltantes;
6. existe un registro reproducible de las diez pruebas del piloto.

## Decisión única pendiente

**Katherine debe confirmar qué plataforma LMS se usará para el piloto privado.**

Hasta esa decisión, esta guía permite ordenar y validar el paquete local, pero no ejecutar la carga real.

## Fuentes de trazabilidad

- Guía LMS histórica: https://docs.google.com/document/d/1xO4rogKVLc0ctrSseAdGH742hlVoi5Q5/edit
- Inventario verificable: https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit
- Readiness comercial: PR #2.
- Workbook: PR #4.
- Guiones: PR #5–#11 y fuente del Video 03 en Drive.
- Módulos: PR #13–#19.
- Evaluación final: PR #20.

Los originales de Drive permanecen sin modificaciones.
