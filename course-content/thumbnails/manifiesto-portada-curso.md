# Manifiesto de portada del curso — Automatiza tu Negocio en 7 Pasos

**Versión vigente:** v2, lista para prueba autorizada con rol estudiante  
**Uso previsto:** imagen destacada y tarjeta del curso en MasterStudy  
**Actualización:** 27-11-2026  

## Motivo

La tarjeta del curso apareció sin imagen en la vista de estudiante. En el diseño v1 el título quedaba fuera del recorte central. El [encargo de v2](https://github.com/KatherineStehberg/ksl-orquestador/issues/127#issuecomment-7224691297) especifica el título centrado para que se lea en la tarjeta.

## Archivos

| Archivo | Ubicación | Especificación | SHA-256 |
| --- | --- | --- | --- |
| `LC_ATN7P_PORTADA_CURSO_v2.png` | [Google Drive](https://drive.google.com/file/d/1TLBOxXp6eNiNwX9r81SBRIEZIsf93Q5n/view) | PNG RGB, 2560 × 1440, 942 340 bytes | `9ed62a29abdfb7b73c6ea921d1735cdf5f5a8969c4c2e79cb2a42bd0b998c13c` |
| Fuente editable | [Google Slides](https://docs.google.com/presentation/d/1ZJ7745wPnJNbLELBa6jnBvjNJXaLIL3mwcVWDQXFwfc/edit) | Diapositiva 1, v2. Diapositiva 2, historial v1. | — |
| `LC_ATN7P_PORTADA_CURSO_v1.png` | [Google Drive](https://drive.google.com/file/d/1be4joLsV5645SexaiG4kYHKuv6EIEN6e/view) | PNG RGBA, 2560 × 1440. Versión de archivo. | `ca8fddaec7bf93a0cb001cbce7d706d523936c6b5b281bf8126fde4356f87e5e` |

Carpeta oficial: [02 — Imágenes y miniaturas](https://drive.google.com/drive/folders/1Br1nYRIoee4_vyx_YdCm51QVWhMBmcWy).

## Validación de v2

- La diapositiva 1, exportada de Slides a PDF, se rasterizó a 2560 × 1440. El título se renderizó desde el texto del PDF y el fondo conserva la resolución de origen.
- En el recorte cuadrado centrado de 130 × 130 y en la vista rectangular de 200 × 113 se leen las tres líneas completas del título.
- La imagen muestra el título grande y centrado sobre una franja azul oscuro semitransparente, con el fondo y los íconos de la v1.

## Prueba reversible en MasterStudy

1. Conservar la imagen actual, si aparece una durante la revisión, antes de sustituirla.
2. Cargar el PNG únicamente en un curso privado o entorno de prueba.
3. Abrir `Enrolled Courses` con el rol estudiante autorizado.
4. Verificar encuadre, título, contraste y ausencia de recortes en escritorio y móvil.
5. Si falla cualquier control, restaurar la imagen anterior o dejar la tarjeta sin publicar y registrar la evidencia.

La comprobación en MasterStudy requiere una sesión autorizada con rol estudiante. Registrar escritorio y móvil en [#127](https://github.com/KatherineStehberg/ksl-orquestador/issues/127).
