# Manifiesto de empaquetado de videos verificados

Producto: **Automatiza tu Negocio en 7 Pasos**

Fecha de corte: **2026-11-19**

Estado global: `NO_LISTO_PARA_LMS`

Alcance: inventario operativo de los MP4 reales para empaquetado privado. No autoriza carga, publicación ni sustitución de originales.

## Propósito

Este documento instancia con archivos reales la guía de empaquetado del PR #21, el manifiesto WordPress del PR #22 y el manifiesto audiovisual del PR #49. Corrige una brecha de trazabilidad: el inventario de Drive aún registra los videos como no localizados, aunque ya existen ocho MP4 verificables y una versión corregida del Video 00.

No reemplaza esas fuentes. Define qué archivo entra en la cola de empaquetado, cuál se conserva solo como respaldo y qué bloquea cada carga al LMS.

## Fuentes revisadas

- [Inventario verificable de Drive](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit)
- [Matriz de carga LMS y prueba piloto](https://docs.google.com/spreadsheets/d/1q4Ek4Vl2PX7zQW9LlB8K3YY1iGj23bOYhJWCkss6TaQ/edit)
- [Guía de empaquetado y carga segura — PR #21](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/21)
- [Manifiesto de carga WordPress — PR #22](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/22)
- [Manifiesto de producción audiovisual — PR #49](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/49)
- [QA de la serie de ocho videos — PR #58](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/58)
- [QA del Video 00 v2 — PR #59](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/59)
- [Plantilla de re-render para Videos 01–07 — PR #60](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/60)
- `Automatiza_7_Pasos_Informe_Tecnico.json`, generado el 15-11-2026.

## Reglas de selección

1. Un archivo se identifica por nombre exacto y SHA-256; el nombre por sí solo no basta.
2. `CANDIDATO_TECNICO_PREFERIDO` permite revisión privada, pero no carga al LMS.
3. `BLOQUEADO_RERENDER_ZONA_SEGURA` impide empaquetar el MP4 como activo del estudiante.
4. La versión anterior nunca se sobrescribe: se conserva como respaldo hasta aprobar la nueva.
5. Los SRT y las transcripciones son archivos separados obligatorios; los subtítulos incrustados en el MP4 no los sustituyen.
6. Ningún video pasa a `LISTO_PARA_PILOTO_LMS` sin escucha humana, revisión pedagógica, QA visual, SRT, transcripción y verificación de derechos.

## Manifiesto de archivos reales

| Video / módulo | Archivo candidato exacto | Duración | SHA-256 | Estado de empaquetado | Bloqueos antes del LMS |
|---|---|---:|---|---|---|
| 00 · Bienvenida | `Automatiza_7_Pasos_Video_00_Bienvenida_v2_1080p.mp4` | 03:40 | `bb49d2e57a447ea917c3cdb5ab08267f11c7df6573d9ae03945c1ce771dbfa83` | `CANDIDATO_TECNICO_PREFERIDO` | Escucha humana; aprobación pedagógica y de duración abreviada; SRT; transcripción; derechos; piloto privado |
| 01 · Diagnóstico y priorización | `Automatiza_7_Pasos_Video_01_Diagnostico_1080p.mp4` | 03:55 | `50acb66631fe9d62cc6f5fa24748024edfd4bf8d008faee8a56d240895423ab4` | `BLOQUEADO_RERENDER_ZONA_SEGURA` | Versión v2 según PR #60; escucha humana; aprobación pedagógica y de duración; SRT; transcripción; derechos |
| 02 · CRM y ecosistema digital | `Automatiza_7_Pasos_Video_02_CRM_1080p.mp4` | 04:52 | `7bedbbbafae93154fcc95af58896f47086b0e47dab81b1683ff8fea0adab29ee` | `BLOQUEADO_RERENDER_ZONA_SEGURA` | Versión v2; escucha humana; aprobación pedagógica y de duración; SRT; transcripción; derechos |
| 03 · IA aplicada | `Automatiza_7_Pasos_Video_03_IA_Aplicada_1080p.mp4` | 04:52 | `ee4a03d3f98718f83e2a6975cfd9620921193ae3ed049fdcc182ec8a58110a55` | `BLOQUEADO_RERENDER_ZONA_SEGURA` | Versión v2; escucha humana; aprobación pedagógica y de duración; SRT; transcripción; derechos |
| 04 · n8n esencial | `Automatiza_7_Pasos_Video_04_n8n_1080p.mp4` | 04:10 | `a5ff22a420d395f5d07de2ab5531c3f15859136a7d8d4f4517c343fa87c63912` | `BLOQUEADO_RERENDER_ZONA_SEGURA` | Versión v2; escucha humana; aprobación pedagógica y de duración; SRT; transcripción; derechos |
| 05 · Captación y seguimiento | `Automatiza_7_Pasos_Video_05_Captacion_1080p.mp4` | 04:30 | `6dae374bca0813348b2fac23b09cc7fc5fa58623894da8a48b9d739318e6437c` | `BLOQUEADO_RERENDER_ZONA_SEGURA` | Versión v2; escucha humana; aprobación pedagógica y de duración; SRT; transcripción; derechos |
| 06 · MVP documentado | `Automatiza_7_Pasos_Video_06_MVP_1080p.mp4` | 04:22 | `b443c2f564909899b0bcbe8b57de14b23788a1a462df49da1bbe6d7a75661684` | `BLOQUEADO_RERENDER_ZONA_SEGURA` | Versión v2; escucha humana; aprobación pedagógica y de duración; SRT; transcripción; derechos |
| 07 · Implementación y roadmap | `Automatiza_7_Pasos_Video_07_Implementacion_1080p.mp4` | 08:02 | `9c1c63c6ddcb998a0f6627c130bbf525fffd9d214717a1f961800ded2b40fafa` | `BLOQUEADO_RERENDER_ZONA_SEGURA` | Versión v2; escucha humana; aprobación pedagógica y de duración; SRT; transcripción; derechos |

Duración total de los ocho candidatos seleccionados: **38:22**. El total es técnicamente verificable, pero permanece por debajo del mínimo planificado de 74:00; la aceptación de versiones abreviadas es una decisión editorial independiente.

### Respaldo explícito

`Automatiza_7_Pasos_Video_00_Bienvenida_1080p.mp4` se conserva como respaldo de la primera versión, con SHA-256 `9e484b51788dfe9c98c589d74cf0354604e6f58786c583550c292ae1e77ab464`. No debe entrar al paquete del estudiante mientras la v2 siga siendo el candidato técnico preferido.

## Contrato del paquete por video

Cada carpeta de video debe contener exactamente estas seis piezas antes de una prueba privada:

1. `video-XX-vN-1080p.mp4`
2. `video-XX-vN-es-CL.srt`
3. `video-XX-vN-transcripcion-es-CL.md`
4. `video-XX-vN-qa.md`
5. `video-XX-vN-derechos.md`
6. `video-XX-vN-checksum.sha256`

Los nombres de distribución se generan al copiar a un paquete de revisión; nunca se renombran ni eliminan los originales de la Biblioteca.

## Paquete piloto recomendado

El primer piloto debe limitarse a **Bienvenida + Módulo 1**. No se deben empaquetar los Módulos 2–7 en paralelo hasta cerrar el recorrido mínimo.

| Componente | Fuente prevista | Estado actual | Criterio de entrada al piloto |
|---|---|---|---|
| Video 00 | MP4 v2 de este manifiesto | Candidato técnico | Escucha, pedagogía, duración, SRT, transcripción y derechos aprobados |
| Módulo 0 | Contenido de Bienvenida del PR #39 | Para revisión | Aprobación editorial y enlaces internos verificados |
| Video 01 | MP4 actual; futura v2 según PR #60 | Bloqueado | Re-render con zona segura y QA equivalente al Video 00 v2 |
| Módulo 1 | Contenido del PR #13 | Para revisión | Aprobación editorial y actividad alineada al workbook |
| Evaluación 1 | Documento de Drive | Para revisión | Umbral, respuesta y registro de resultado probados en espacio privado |
| Workbook | PR #4 / copia de revisión en Drive | Para revisión | Duplicación, apertura y permisos probados con cuenta ficticia |
| Guía de acceso | PR #57 | Bloqueado por configuración | Enlace, canal y SLA aprobados y probados |

## Secuencia segura y reversible

1. Copiar, no mover, los archivos seleccionados a un directorio temporal privado.
2. Verificar cada SHA-256 contra este manifiesto.
3. Añadir SRT, transcripción, QA, derechos y checksum sin alterar el MP4 fuente.
4. Construir solo Bienvenida + Módulo 1 en un LMS privado.
5. Probar con una cuenta ficticia: acceso, reproducción, subtítulos, descarga, evaluación y registro de avance.
6. Si falla una puerta, retirar el paquete temporal y conservar los originales sin cambios.
7. Solo después de aprobar el piloto, repetir de forma individual para Módulos 2–7.

## Quality Gate del manifiesto

- [x] Ocho módulos de video mapeados una sola vez.
- [x] Ocho nombres exactos y ocho SHA-256 completos.
- [x] Video 00 v2 seleccionado; Video 00 v1 conservado como respaldo.
- [x] Siete videos bloqueados explícitamente hasta re-render con zona segura.
- [x] Duración total registrada y diferencia respecto del plan declarada.
- [x] Seis archivos obligatorios definidos por paquete.
- [x] Piloto limitado a Bienvenida + Módulo 1.
- [x] Reversa sin borrar ni sobrescribir originales.
- [x] Cero precios, credenciales, endpoints, alumnos reales o autorizaciones de publicación.
- [ ] Escucha y aprobación humana.
- [ ] Ocho SRT y ocho transcripciones separadas.
- [ ] Evidencia de derechos completa.
- [ ] Prueba privada de alumno.

## Decisión única pendiente

**Katherine: ¿apruebas que el primer paquete privado se limite a Bienvenida + Módulo 1 y que los Módulos 2–7 permanezcan fuera del LMS hasta que ese piloto complete reproducción, subtítulos, descarga, evaluación y registro de avance?**

Esta aprobación no autoriza carga inmediata, publicación, cobro, despliegue ni uso de datos reales.
