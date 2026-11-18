# Plantilla de re-render con zona segura — Videos 01–07

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Tipo de entregable:** plantilla de producción y QA audiovisual  
**Versión:** 1.0 — 18 de noviembre de 2026  
**Estado:** `LISTA_PARA_APROBACION — NO EJECUTADA`

## Propósito

Estandarizar la corrección visual de los Videos 01–07 para que los subtítulos no tapen tablas, instrucciones, fórmulas ni pies de página. La plantilla replica la geometría ya comprobada en el Video 00 v2 y separa la corrección visual de cualquier cambio editorial de duración o narración.

No se debe aplicar esta plantilla sobre el MP4 final con subtítulos ya incrustados. El re-render debe partir de la presentación limpia, la pista de voz aprobada y los cues de subtítulos editables.

## Material revisado

- Inventario verificable y matrices de carga LMS de Google Drive.
- Guiones maestros de los Videos 00–07 en Drive.
- Presentaciones grabables documentadas en los PR #40–#48.
- MP4 originales de los Videos 00–07 y su informe técnico.
- [Video 00 v2](https://chatgpt.com/library?file_id=libfile_8df829b3e6048191bef0adeab25a123a&account_id=personal), usado como patrón visual comprobado.
- [Video 01 v1](https://chatgpt.com/library?file_id=libfile_02b2dae7ee688191a3d771bef700c3af&account_id=personal), usado como caso de control.
- QA general de la serie en el PR #58 y QA del Video 00 v2 en el PR #59.

La búsqueda en Drive y GitHub no encontró otra plantilla que defina medidas, entradas, salidas y aceptación para este re-render.

## Hallazgo de referencia

El Video 00 v2 usa un lienzo de 1920 × 1080 con la diapositiva escalada a 1664 × 936, centrada horizontalmente y alineada arriba. Esto deja:

- 128 px de margen a izquierda y derecha;
- 144 px de banda inferior;
- fondo `#091E31` — RGB `9, 30, 49`;
- subtítulos situados dentro de la banda inferior, separados del contenido pedagógico.

En seis fotogramas distribuidos a lo largo del Video 00 v2, la banda estuvo presente y el texto no tapó contenido. En el Video 01 v1, seis muestras confirmaron que la caja negra se superpone a contenido al menos una vez; por eso no debe considerarse final para LMS.

## Alcance de la plantilla

| Video | Archivo actual preservado | Salida candidata |
|---|---|---|
| 01 — Diagnóstico | `Automatiza_7_Pasos_Video_01_Diagnostico_1080p.mp4` | `Automatiza_7_Pasos_Video_01_Diagnostico_v2_1080p.mp4` |
| 02 — CRM | `Automatiza_7_Pasos_Video_02_CRM_1080p.mp4` | `Automatiza_7_Pasos_Video_02_CRM_v2_1080p.mp4` |
| 03 — IA aplicada | `Automatiza_7_Pasos_Video_03_IA_Aplicada_1080p.mp4` | `Automatiza_7_Pasos_Video_03_IA_Aplicada_v2_1080p.mp4` |
| 04 — n8n | `Automatiza_7_Pasos_Video_04_n8n_1080p.mp4` | `Automatiza_7_Pasos_Video_04_n8n_v2_1080p.mp4` |
| 05 — Captación | `Automatiza_7_Pasos_Video_05_Captacion_1080p.mp4` | `Automatiza_7_Pasos_Video_05_Captacion_v2_1080p.mp4` |
| 06 — MVP | `Automatiza_7_Pasos_Video_06_MVP_1080p.mp4` | `Automatiza_7_Pasos_Video_06_MVP_v2_1080p.mp4` |
| 07 — Implementación | `Automatiza_7_Pasos_Video_07_Implementacion_1080p.mp4` | `Automatiza_7_Pasos_Video_07_Implementacion_v2_1080p.mp4` |

Los siete originales se conservan como respaldo. No se sobrescriben, renombran ni eliminan.

## Paquete de entrada obligatorio por video

Antes de renderizar deben existir y coincidir:

1. presentación grabable aprobada, sin subtítulos incrustados;
2. pista de narración WAV o equivalente sin compresión destructiva adicional;
3. SRT es-CL o archivo de cues editable;
4. guion maestro y código de versión;
5. nombre del responsable editorial;
6. decisión registrada sobre conservar o ampliar la duración;
7. evidencia de autoría o licencia de voz, tipografías, imágenes y música, si existieran.

Si falta uno de estos elementos, el estado es `BLOQUEADO_ENTRADA`; no se reconstruye desde el MP4 actual ni se inventan subtítulos mediante OCR.

## Especificación del lienzo

| Propiedad | Valor obligatorio |
|---|---|
| Lienzo final | 1920 × 1080 px |
| Relación | 16:9 |
| Frecuencia | 24 fps constantes |
| Área de diapositiva | 1664 × 936 px |
| Posición de diapositiva | X = 128, Y = 0 |
| Banda inferior | X = 0–1919, Y = 936–1079 |
| Color de fondo | `#091E31` |
| Códec de video | H.264, perfil compatible con navegador |
| Formato de píxel | yuv420p |
| Códec de audio | AAC, estéreo, 48 kHz |
| Optimización web | metadatos al inicio — `faststart` o equivalente |

La presentación debe escalarse proporcionalmente. No estirar, recortar ni cambiar su relación de aspecto.

## Especificación de subtítulos

- Ubicar todo subtítulo dentro de la banda inferior de 144 px.
- Usar texto blanco o blanco cálido con contraste suficiente sobre `#091E31`.
- Mantener al menos 24 px de separación superior e inferior.
- Mantener al menos 192 px de margen lateral.
- Limitar a dos líneas simultáneas.
- Evitar líneas de una sola palabra cuando puedan resegmentarse.
- Sin caja negra adicional sobre la diapositiva.
- No depender sólo del color para distinguir hablante o énfasis.
- Conservar un SRT separado aunque el MP4 incluya subtítulos visibles.
- Todo cambio de texto requiere cotejo contra la voz; no corregir contenido sólo en pantalla.

## Política de contenido

Este re-render es **visual**. Por defecto:

- conserva la pista de narración aprobada;
- conserva el orden y el tiempo de las diapositivas;
- no amplía ni acorta el contenido;
- no añade música, imágenes, animaciones o efectos;
- no cambia precios, marcas, ejemplos, resultados ni instrucciones.

Si Katherine solicita ampliar la duración para acercarla al guion maestro, eso se registra como una versión editorial separada y exige nueva escucha, nuevos subtítulos y nuevo QA. No mezclar ambas decisiones en el mismo render sin aprobación.

## Archivos de salida por video

Cada paquete v2 debe incluir:

1. `..._v2_master.mp4`;
2. `..._v2_1080p.mp4`;
3. `..._v2_es-CL.srt`;
4. `..._v2_transcripcion.pdf`;
5. `..._v2_informe_tecnico.json`;
6. una hoja de evidencia con SHA-256, duración, responsable y estado.

Los seis archivos deben compartir el mismo identificador de versión.

## Controles automáticos

| Control | Criterio de aprobación |
|---|---|
| Decodificación | FFmpeg completa sin errores |
| Video | H.264, 1920 × 1080, 24 fps constantes |
| Audio | AAC, 48 kHz, estéreo |
| Lienzo | Diapositiva 1664 × 936 en X=128, Y=0 |
| Banda inferior | 144 px y color de fondo coherente |
| Integridad | SHA-256 calculado y registrado |
| Nomenclatura | ID, número, slug y versión coinciden |
| SRT | Archivo válido, ordenado y sin tiempos negativos |
| Paquete | Seis salidas presentes y versionadas |
| Seguridad | Sin credenciales, datos personales o destinos productivos |

Como referencia de consistencia con la serie actual, el audio puede revisarse alrededor de −20 a −18 dB de nivel medio y sin picos superiores a −3 dBFS. Esta referencia no sustituye la escucha humana.

## Controles visuales y editoriales

Aplicar a cada video individualmente:

- [ ] Revisar seis fotogramas distribuidos: inicio, 20 %, 40 %, 60 %, 80 % y cierre.
- [ ] Confirmar que ningún subtítulo invade la diapositiva.
- [ ] Confirmar que tablas, fórmulas, llamadas y pies de página siguen legibles.
- [ ] Ver el video completo en escritorio.
- [ ] Ver el video completo en una ventana móvil o reproductor estrecho.
- [ ] Escuchar pronunciación, ritmo, pausas, artefactos y palabras cortadas.
- [ ] Comparar SRT con voz y guion.
- [ ] Confirmar que la actividad y la evidencia mínima siguen presentes.
- [ ] Registrar `APROBADO`, `FALLIDO` o `NO APLICA` con evidencia.
- [ ] Probar sólo en LMS privado después de aprobar todos los controles anteriores.

## Secuencia de trabajo

1. Empezar por el Video 01 como piloto de la plantilla.
2. Generar sólo su paquete v2.
3. Ejecutar controles automáticos, visuales y de escucha.
4. Comparar con el Video 00 v2 y registrar diferencias.
5. Si aprueba, procesar 02–07 individualmente; no hacer un lote irreversible.
6. Mantener todas las versiones v1 hasta cerrar el QA de la serie.

## Evidencia técnica utilizada

| Archivo | Duración | Tamaño | SHA-256 |
|---|---:|---:|---|
| Video 00 v2 | 220,083333 s | 8.105.671 bytes | `bb49d2e57a447ea917c3cdb5ab08267f11c7df6573d9ae03945c1ce771dbfa83` |
| Video 01 v1 | 234,708333 s | 9.198.127 bytes | `50acb66631fe9d62cc6f5fa24748024edfd4bf8d008faee8a56d240895423ab4` |

Ambos archivos decodificaron completamente sin errores durante esta revisión.

## Criterio de cierre

La plantilla queda aplicada cuando el Video 01 v2 cuenta con seis salidas versionadas, cero solapes en el muestreo, escucha humana aprobada y reproducción correcta en LMS privado. Sólo entonces se reutiliza para 02–07.

## Decisión única para Katherine

**¿Apruebas esta geometría —diapositiva 1664 × 936 en la parte superior y banda inferior de 144 px— como estándar para re-renderizar los Videos 01–07 sin cambiar todavía su narración ni duración?**

## Riesgo y reversa

Riesgo bajo. La plantilla no ejecuta renders ni modifica archivos existentes. La reversa consiste en no adoptarla y conservar las versiones actuales; los originales permanecen intactos. No publica, despliega, cobra, cambia precios, conecta servicios ni modifica producción.
