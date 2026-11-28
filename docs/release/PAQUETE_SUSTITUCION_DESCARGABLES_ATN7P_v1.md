# Paquete de sustitución controlada de descargables

Producto: **Automatiza tu Negocio en 7 Pasos**

Estado: **PREPARADO PARA PRUEBA PRIVADA — NO PUBLICAR**

Fecha de corte: **28 de noviembre de 2026**

## Propósito

Dejar una única referencia operativa para sustituir, cuando exista autorización, los dos descargables del curso que no coinciden con sus fuentes corregidas. Este documento no autoriza cambios en WordPress, MasterStudy ni producción.

## Fuentes revisadas

- [Workbook servido actualmente por el LMS](https://languagecenterchile.com/wp-content/uploads/2026/11/Workbook-Automatiza-7-Pasos.xlsx)
- [Workbook corregido para revisión](https://chatgpt.com/library?file_id=libfile_f7ffc475d0108191bdf2511d95887167&account_id=personal)
- [Cuaderno servido actualmente por el LMS](https://languagecenterchile.com/wp-content/uploads/2026/11/Cuaderno-del-estudiante-Automatiza-7-Pasos.pdf)
- [Cuaderno maestro en Google Docs](https://docs.google.com/document/d/1FaiNYUVcwkOiHGFGvAmvcCLz8A31gfs9jvVxI6PKTnU/edit)
- [PDF privado anterior del cuaderno](https://drive.google.com/file/d/1u7DcrxMBdGog9VlBz2Jz6rTUyl7J8jEm/view)
- [Hallazgo y cotejo QA](https://github.com/KatherineStehberg/ksl-orquestador/issues/127#issuecomment-7225564161)
- [Verificación de la fórmula corregida](https://github.com/KatherineStehberg/ksl-orquestador/issues/127#issuecomment-7228786498)
- [Verificación editorial del cuaderno](https://github.com/KatherineStehberg/ksl-orquestador/issues/127#issuecomment-7229706199)

## Baseline del paquete candidato

| Recurso | Nombre de entrega | Bytes | SHA-256 | Control principal |
|---|---|---:|---|---|
| Workbook corregido | `Workbook-Automatiza-7-Pasos.xlsx` | 21.116 | `61538c4fe8213794e46b780b7eb5de2f9e50b39dbc8e85d921088a156bb88cfb` | `4 n8n esencial!I15` excluye `No aplica` y `No probado` del denominador. |
| Cuaderno exportado desde el maestro actual | `Cuaderno-del-estudiante-Automatiza-7-Pasos.pdf` | 211.405 | `c7fd7c0773d698a6904c7fbe63651228a0db020d6ff976fee0cde875c8137824` | 14 páginas A4; la entrega final reúne las evidencias en un proyecto y espera la confirmación de la actividad. |

Los nombres de entrega conservan las URL públicas actuales. Los archivos candidatos no deben sobrescribir los descargables vigentes durante la prueba privada.

## Diferencias comprobadas

### Workbook

La versión pública registrada por QA mide 21.182 bytes y tiene SHA-256 `9f2a7f87623916ce2faa1174dd1611467b90aabca7b43bba7648f48337bffe4e`. Su fórmula contabiliza `No aplica` en el denominador.

La versión candidata contiene nueve hojas y conserva el resto del libro. Su fórmula en `4 n8n esencial!I15` es:

```text
IF(COUNTIF(E16:E22,"Aprobado")+COUNTIF(E16:E22,"Fallido")=0,0,
COUNTIF(E16:E22,"Aprobado")/
(COUNTIF(E16:E22,"Aprobado")+COUNTIF(E16:E22,"Fallido")))
```

Resultados de aceptación:

| E16:E22 | Resultado esperado de I15 |
|---|---:|
| Sin pruebas ejecutadas | 0 % |
| Un `Aprobado` y un `No aplica` | 100 % |
| Un `Aprobado`, un `Fallido` y un `No probado` | 50 % |

### Cuaderno

La versión pública registrada por QA mide 209.514 bytes y tiene SHA-256 `0263e8aebcb45787879cd1138be4a261d9f8a8a1f36c51df27b330f482f347f0`.

La exportación actual del maestro abre correctamente, tiene 14 páginas A4 y no está cifrada. Sus catorce páginas fueron renderizadas e inspeccionadas. No se observaron cortes, superposiciones ni glifos rotos. Frente al PDF privado anterior, el cambio textual está limitado a la sección `Entrega final`: pide conservar el paquete hasta que la actividad esté confirmada, en vez de indicar un envío no verificado.

## Secuencia autorizable y reversible

1. Registrar la aprobación de Katherine para usar este baseline en una prueba privada.
2. Descargar los dos archivos públicos vigentes y conservarlos con fecha, bytes y SHA-256 como copia de reversa.
3. Exportar nuevamente el Google Doc maestro a PDF. Si cambia su hash, repetir el control de 14 páginas, texto final y render antes de continuar.
4. Cargar los candidatos en una ubicación privada o de staging. No reemplazar todavía las URL públicas.
5. Ingresar con un rol estudiante autorizado y descargar ambos candidatos.
6. Abrir el workbook y ejecutar los tres casos de aceptación de `I15` en una copia descartable.
7. Abrir el PDF, recorrer las catorce páginas y verificar que termina con la instrucción de conservar el proyecto hasta confirmar la actividad.
8. Registrar navegador, dispositivo, fecha, resultado, bytes y hashes obtenidos desde el LMS.
9. Solo con los controles aprobados y autorización explícita, sustituir cada archivo conservando el nombre público.
10. Volver a descargar desde las URL públicas, cotejar los hashes y probar el recorrido como estudiante.
11. Si un hash, descarga, fórmula o página no coincide, restaurar de inmediato los dos archivos respaldados. No dejar una sustitución parcial.

## Quality Gate

- [ ] Aprobación humana registrada.
- [ ] Respaldo de ambos archivos públicos con hashes.
- [ ] Workbook candidato: 21.116 bytes y hash esperado.
- [ ] PDF candidato: 14 páginas A4, hash vigente y texto final correcto.
- [ ] Prueba privada con rol estudiante.
- [ ] Tres casos de `I15` aprobados.
- [ ] Descarga del PDF y revisión de las catorce páginas aprobadas.
- [ ] Evidencia de escritorio y móvil registrada.
- [ ] Reversa probada o documentada antes de la sustitución.
- [ ] Sustitución pública autorizada por separado.

## Registro mínimo de evidencia

| Campo | Valor |
|---|---|
| Responsable | |
| Fecha y hora Chile | |
| Entorno | Privado / staging / producción |
| Rol | Estudiante autorizado |
| Navegador y dispositivo | |
| Hash workbook descargado | |
| Casos I15 | 0 % / 100 % / 50 % |
| Hash PDF descargado | |
| Páginas PDF | 14 |
| Resultado | Aprobado / Bloqueado |
| Evidencia | Enlace o identificador |
| Reversa requerida | Sí / No |

## Decisión pendiente

Katherine debe decidir si aprueba este baseline de dos archivos para una prueba privada de sustitución en el LMS. La aprobación no autoriza publicación ni reemplazo en producción.
