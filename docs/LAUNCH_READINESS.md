# Estado de lanzamiento — Automatiza tu Negocio en 7 Pasos

**Corte:** 2 de septiembre de 2026  
**Proyecto:** LC-DIG-001  
**Nombre comercial vigente:** Automatiza tu Negocio en 7 Pasos  
**Estado:** preparación interna; no apto todavía para publicación, cobro ni entrega automática

## Objetivo de esta rama

Convertir el repositorio en una fuente técnica y comercial trazable, sin publicar la landing ni activar cuentas externas. La integración a `main`, el despliegue y el primer cobro requieren QA end-to-end y aprobación expresa de Katherine Stehberg.

## Decisiones vigentes

| Tema | Decisión |
|---|---|
| Oferta principal | Plan Pro: $89.000 CLP lanzamiento / $129.000 CLP normal |
| Plan Basic | Mantener oculto hasta que existan y se verifiquen los ocho videos MVP |
| Empresa | B2B Pro desde $850.000 CLP + IVA, hasta 10 personas; venta mediante diagnóstico y cotización |
| Implementación | Desde $1.800.000 CLP + IVA como referencia interna; no publicar automáticamente |
| Aleph Server | Stand by; retirar de marca, metadatos, oferta, testimonios, footer y promesas |
| Captura y cobro | Comenzar apagados; activar solo después de configurar destinos autorizados y superar QA |
| Publicación | Prohibida hasta completar el checklist de salida y recibir aprobación final |

## Activos ya existentes

No se deben rehacer desde cero. El inventario histórico confirma:

- PDF del curso;
- presentación PPTX y versión en Slides;
- documento de bienvenida;
- landing y material visual;
- guía de 70 herramientas;
- guiones para ocho videos MVP;
- mapa de siete módulos LMS;
- copy de tres piezas de lanzamiento;
- especificación de checkout, pago, acceso y pruebas end-to-end.

El trabajo pendiente es producir, verificar, empaquetar y conectar estos activos.

## Brechas de la landing actual

| Severidad | Hallazgo en `main` | Cierre requerido |
|---|---|---|
| Bloqueante | Aleph figura como alianza activa | Retirar todas las referencias antes de publicación |
| Bloqueante | Basic se describe como 100% grabado, pero no hay videos verificados | Ocultar Basic |
| Bloqueante | Formulario usa `REEMPLAZAR_ID` | Conectar un destino de prueba autorizado o mantener desactivado |
| Alto | Testimonios y casos no están verificados | Retirar hasta contar con evidencia y autorización |
| Alto | WhatsApp corresponde a un número de prueba | Sustituir por canal oficial aprobado o mantener oculto |
| Alto | CTA de inscripción no está conectado a checkout | Diferenciar interés/diagnóstico de compra real |
| Medio | Enlaces sociales apuntan a `#` | Reemplazar por destinos reales u ocultarlos |
| Medio | Hero conserva un marcador de ilustración | Sustituir por activo final aprobado |

## Backlog de cierre

### P0 — Producto entregable

- [ ] Grabar ocho videos: bienvenida + pasos 1 a 7.
- [ ] Editar, subtitular y revisar los ocho videos.
- [ ] Exportar plantillas y workbooks en formatos probados y duplicables.
- [ ] Elegir plataforma LMS y duración de acceso.
- [ ] Cargar y probar un módulo piloto.
- [ ] Montar los siete módulos y validar navegación completa.

### P0 — Landing y captación segura

- [ ] Retirar Aleph y cualquier marca no autorizada.
- [ ] Ocultar Basic y concentrar la oferta en Pro.
- [ ] Retirar testimonios no verificables.
- [ ] Separar CTA de interés, diagnóstico B2B y compra.
- [ ] Definir correo y WhatsApp oficiales de ventas/soporte.
- [ ] Conectar el formulario en un entorno de prueba.
- [ ] Incorporar consentimiento y política de privacidad.
- [ ] Probar navegación móvil, teclado, contraste, enlaces y captura.

### P0 — Pago, acceso y soporte

- [ ] Elegir proveedor de pago y cuenta receptora.
- [ ] Confirmar tratamiento tributario y emisión de boleta/factura.
- [ ] Definir términos, devoluciones, soporte y tiempos de respuesta.
- [ ] Montar sandbox de pago.
- [ ] Probar pago → validación → documento → matrícula → bienvenida.
- [ ] Probar duplicados, monto incorrecto, pago pendiente, firma inválida y caída de LMS.
- [ ] Verificar que ningún fallo conceda acceso ni duplique efectos.

### P1 — Lanzamiento

- [ ] Diseñar carrusel “7 señales”.
- [ ] Diseñar carrusel “Mapa rápido”.
- [ ] Producir reel “Automatizar no es comprar más herramientas”.
- [ ] Preparar ventana de lanzamiento y tablero de métricas.
- [ ] Ejecutar revisión final y obtener aprobación expresa.

## Criterio de listo para vender

El producto se considera listo únicamente cuando:

1. existen ocho videos revisados;
2. los siete módulos están cargados y navegables;
3. cada descargable abre, se duplica y coincide con el módulo;
4. landing, consentimiento y captura superan QA;
5. una compra sandbox completa el circuito sin intervención manual oculta;
6. los fallos no conceden acceso ni duplican órdenes, documentos o correos;
7. soporte y devoluciones tienen responsable y plazo;
8. Katherine aprueba publicación y primer cobro real.

## Evidencia técnica actual

- PR #1 agrega CI para sintaxis JavaScript, recursos locales, `alt`, campos del formulario, anclas, IDs duplicados y `noopener`.
- CI “Static Landing” #6 está verde en el HEAD revisado.
- Este gate técnico no convierte por sí solo el producto en apto para venta.
