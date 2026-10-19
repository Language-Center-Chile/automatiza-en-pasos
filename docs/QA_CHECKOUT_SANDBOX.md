# QA de checkout sandbox, acceso y entrega

**Producto:** Automatiza tu Negocio en 7 Pasos

**Estado:** PARA REVISIÓN · no ejecutar en producción

**Corte:** 19 de octubre de 2026

**Objetivo:** demostrar, sin cobros reales, que una compra de prueba puede recorrer checkout, confirmación server-side, acceso, bienvenida y registro de entrega sin duplicar efectos.

## Resultado que habilita este checklist

Este documento convierte el flujo comercial ya definido —`payment_confirmed → compra registrada → acceso → bienvenida → entrega registrada`— en una prueba reproducible. No selecciona proveedor, no crea cuentas, no conecta credenciales y no autoriza publicación.

El checkout sólo puede considerarse **verificado en sandbox** cuando:

1. el servidor obtiene producto, moneda y monto desde un catálogo de prueba aprobado;
2. una confirmación válida del proveedor cambia la orden a `paid` una sola vez;
3. sólo una orden `paid` puede otorgar acceso;
4. reintentos y callbacks duplicados no duplican orden, acceso, documento ni mensaje;
5. fallos de LMS o correo quedan pendientes de reintento sin perder trazabilidad;
6. una cuenta de prueba puede entrar al curso y abrir el material de bienvenida;
7. la reversa retira el acceso de prueba y conserva el registro de auditoría.

## Límites de la prueba

- Usar exclusivamente la cuenta sandbox del proveedor que apruebe Katherine.
- Trabajar en staging o entorno privado; la landing pública debe permanecer desconectada.
- Usar una identidad ficticia y un buzón de prueba controlado por Language Center Chile.
- No usar tarjetas, transferencias, contactos, RUT, teléfonos ni datos personales reales.
- No copiar secretos, firmas, tokens, cookies ni respuestas completas del proveedor a capturas, tickets o commits.
- No enviar documentos tributarios reales, matricular alumnos reales ni activar automatizaciones productivas.
- No modificar precios. El caso de prueba usa el valor servido por el catálogo aprobado del entorno sandbox.

## Responsables y separación de funciones

| Rol | Responsabilidad | No debe hacer |
|---|---|---|
| Responsable comercial | Confirmar producto de prueba, condiciones y texto visible | Cambiar configuración técnica durante la ejecución |
| Responsable técnico | Configurar sandbox, firma, idempotencia y registros | Aprobar el resultado comercial por sí solo |
| Responsable LMS | Preparar curso y cuenta ficticia en entorno privado | Conceder acceso antes de `paid` |
| QA | Ejecutar casos, reunir evidencia y registrar desviaciones | Corregir resultados manualmente para aprobar |
| Katherine | Aprobar proveedor del piloto y cierre final | Compartir credenciales por documentos o mensajería no autorizada |

Una misma persona puede cubrir más de un rol, pero cada resultado debe conservar quién configuró, quién ejecutó y quién revisó.

## Precondiciones bloqueantes

Marcar `LISTO` sólo con evidencia verificable. Si falta una condición, detener la ejecución y registrar `BLOQUEADO`.

| ID | Precondición | Estado | Evidencia requerida |
|---|---|---|---|
| PRE-01 | Proveedor sandbox aprobado | PENDIENTE | decisión registrada y URL oficial del sandbox |
| PRE-02 | Cuenta sandbox y credenciales almacenadas fuera del repositorio | PENDIENTE | nombre del almacén o variable, nunca el valor |
| PRE-03 | URL de staging privada y separada de producción | PENDIENTE | URL o identificador interno sin secretos |
| PRE-04 | Producto de prueba y moneda `CLP` definidos en catálogo server-side | PENDIENTE | identificador y versión del catálogo |
| PRE-05 | Buzón de prueba y alumno ficticio autorizados | PENDIENTE | alias o identificador anonimizado |
| PRE-06 | Curso privado y material de bienvenida accesibles en LMS de prueba | PENDIENTE | URL interna o captura sin datos sensibles |
| PRE-07 | Firma de callback validada en servidor | PENDIENTE | prueba automatizada o registro redactado |
| PRE-08 | Clave de idempotencia persistida por orden y evento | PENDIENTE | esquema o prueba automatizada |
| PRE-09 | Reversa documentada para acceso, correo y estado de orden | PENDIENTE | procedimiento probado por QA |
| PRE-10 | Logs redactan secretos y datos personales | PENDIENTE | muestra de log con campos protegidos |

## Contrato mínimo de trazabilidad

Cada ejecución debe registrar estos campos sin incluir secretos:

| Campo | Regla |
|---|---|
| `test_run_id` | único, formato `ATN7P-SBX-AAAA-MM-DD-NNN` |
| `order_id` | creado por el servidor; nunca reutilizado entre compras |
| `provider_payment_id` | identificador sandbox; vacío hasta recibirlo |
| `product_id` | corresponde al producto de prueba aprobado |
| `expected_amount` | leído del catálogo server-side |
| `confirmed_amount` | devuelto por el proveedor y comparado en servidor |
| `currency` | `CLP` |
| `payment_status` | `created`, `pending`, `paid`, `failed`, `cancelled` o `expired` |
| `signature_verified` | booleano; debe ser `true` para aceptar confirmación |
| `access_status` | `not_granted`, `pending`, `granted`, `failed` o `revoked` |
| `welcome_status` | `not_sent`, `pending`, `sent` o `failed` |
| `delivery_status` | `not_started`, `pending`, `delivered` o `failed` |
| `attempt_count` | aumenta con cada reintento controlado |
| `created_at` / `updated_at` | fecha y hora con zona registrada |
| `evidence_ref` | enlace a evidencia redactada; nunca contiene credenciales |

No usar el correo como identificador de idempotencia. El mismo alumno ficticio puede tener más de una orden; cada orden conserva su propio historial.

## Invariantes de seguridad

- El navegador no decide el monto confirmado ni el estado `paid`.
- Sólo un callback con firma válida, orden existente, moneda y monto coincidentes puede confirmar el pago.
- `paid` no vuelve a `pending`; una devolución o reversa usa un evento separado y auditable.
- `access_status=granted` exige `payment_status=paid`.
- El mismo `provider_payment_id` o `event_id` no produce efectos más de una vez.
- Reintentar acceso o bienvenida reutiliza la orden existente; no crea otra compra.
- Un fallo no concede acceso por defecto ni oculta el estado pendiente.

## Matriz de pruebas obligatorias

Usar `NO PROBADO`, `APROBADO`, `FALLIDO`, `BLOQUEADO` o `NO APLICA`. `APROBADO` siempre exige evidencia.

| ID | Caso | Preparación / estímulo | Resultado esperado | Evidencia mínima | Estado |
|---|---|---|---|---|---|
| SBX-01 | Compra aprobada | Iniciar una compra con identidad y medio sandbox válidos | Una orden pasa a `paid`; se concede un acceso, se envía una bienvenida y se registra una entrega | línea de tiempo de la orden, captura de acceso y mensaje recibido, todo redactado | NO PROBADO |
| SBX-02 | Pago pendiente | Usar el caso sandbox pendiente | No se concede acceso ni se envía bienvenida; la orden queda `pending` | estado de orden y ausencia de efectos | NO PROBADO |
| SBX-03 | Pago rechazado | Usar el caso sandbox rechazado | Orden `failed`; sin acceso, documento ni bienvenida | estado final y conteo de efectos en cero | NO PROBADO |
| SBX-04 | Cancelación o abandono | Salir del proveedor antes de confirmar | Orden `cancelled` o `expired` según contrato; sin acceso | redirección, estado y ausencia de efectos | NO PROBADO |
| SBX-05 | Firma inválida | Enviar callback de prueba con firma alterada | Respuesta rechazada; orden sin cambio; alerta o log redactado | código de respuesta y evento de seguridad | NO PROBADO |
| SBX-06 | Monto o moneda incorrectos | Confirmar un valor distinto al esperado | Confirmación rechazada y acceso bloqueado | comparación server-side y estado sin cambio | NO PROBADO |
| SBX-07 | Callback duplicado | Repetir el mismo evento válido | Segunda recepción queda registrada como duplicada; los efectos siguen en uno | conteos de orden, acceso, bienvenida y entrega | NO PROBADO |
| SBX-08 | Doble clic / reintento de checkout | Enviar dos veces la creación desde la misma sesión | No hay doble cobro; cada respuesta queda asociada de forma inequívoca a una orden | IDs, claves de idempotencia y conteo de intentos | NO PROBADO |
| SBX-09 | Evento fuera de orden | Procesar `pending` después de `paid` | La orden permanece `paid`; no se revierte ni repite efectos | historial de estados | NO PROBADO |
| SBX-10 | LMS no disponible | Simular fallo de alta después de `paid` | Pago queda confirmado; acceso `failed` o `pending`; se crea incidencia y reintento controlado | orden, incidencia y reintento sin nueva compra | NO PROBADO |
| SBX-11 | Correo no disponible | Simular fallo de bienvenida con acceso concedido | Acceso sigue trazable; bienvenida queda `failed` o `pending`; reintento no duplica acceso | estados y conteos antes/después | NO PROBADO |
| SBX-12 | Recuperación y reversa | Recuperar SBX-10 o SBX-11 y luego revocar el alumno ficticio | El reintento completa sólo el efecto pendiente; la reversa retira acceso y conserva auditoría | registro de recuperación, revocación y estado final | NO PROBADO |

## Guion de ejecución del recorrido feliz

1. Registrar `test_run_id`, commit o versión desplegada, proveedor y responsables.
2. Abrir la landing de staging en una sesión limpia.
3. Confirmar que el entorno se identifica como prueba y que no enlaza a producción.
4. Elegir el producto de prueba y avanzar al checkout sandbox.
5. Verificar que producto, moneda y monto visibles coinciden con el catálogo server-side.
6. Completar el pago con datos oficiales de prueba del proveedor.
7. Esperar el callback; no cambiar el estado manualmente.
8. Verificar firma, monto, moneda, transición a `paid` e idempotencia.
9. Confirmar un solo acceso al curso privado.
10. Confirmar una sola bienvenida y el enlace correcto al material inicial.
11. Iniciar sesión como alumno ficticio y abrir el curso y el material de bienvenida.
12. Guardar evidencia redactada y ejecutar la reversa del alumno ficticio.

## Registro por ejecución

| Campo | Valor |
|---|---|
| `test_run_id` | |
| Fecha, hora y zona | |
| Commit / versión | |
| Proveedor y entorno | |
| Ejecuta | |
| Revisa | |
| Casos ejecutados | |
| Resultado global | NO PROBADO |
| Incidencias | |
| Evidencia | |
| Reversa completada | NO |

## Puerta de salida

El checkout sandbox queda **APROBADO PARA INTEGRACIÓN PRIVADA** sólo si:

- PRE-01 a PRE-10 están `LISTO`;
- SBX-01 a SBX-12 están `APROBADO` o tienen un `NO APLICA` justificado y aprobado;
- no hay secretos ni datos personales en repositorio, logs o evidencias;
- los conteos de acceso, bienvenida y entrega son exactamente uno en el recorrido feliz y cero en pagos no confirmados;
- la reversa fue ejecutada y revisada;
- cada incidencia tiene responsable, severidad y criterio de retest.

Este resultado **no** autoriza producción. Habilitar checkout público, procesar el primer cobro real, emitir documentos tributarios o matricular personas reales requiere un control de cambio separado y aprobación expresa.

## Reversa y recuperación

Si cualquier caso falla:

1. desactivar la ruta de staging al proveedor sin borrar evidencia;
2. conservar la landing pública sin enlace de checkout;
3. revocar únicamente el acceso de la identidad ficticia usada en la prueba;
4. cancelar tareas de reintento pendientes del `test_run_id`;
5. rotar credenciales por el procedimiento autorizado si hubo exposición;
6. registrar causa, alcance, responsable y condición de retest;
7. repetir sólo desde una versión identificada y una orden nueva.

No eliminar órdenes ni logs de auditoría para “limpiar” una prueba fallida.

## Trazabilidad de fuentes

- [Paquete comercial vigente](https://docs.google.com/document/d/1hLnS3ajc3kV1ftPf08ld_xDt1AS1BbwbyNLf7zLz9a8/edit): flujo de estados, WF-03, WF-04, onboarding y regla de no publicar checkout antes del smoke end-to-end.
- [Inventario verificable](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit): estado `CHECKOUT — FALTA` y bloqueos de callback, acceso, idempotencia y entrega.
- [PR #2 — readiness de lanzamiento](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/2): casos de monto incorrecto, pago pendiente, firma inválida, duplicados y caída de LMS.
- [PR #3 — landing candidata](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/3): mantiene captura y checkout desconectados hasta QA y aprobación.

La implementación Flow hallada en otro producto de Language Center Chile no se reutiliza aquí: pertenece a un repositorio y arquitectura distintos. Este checklist conserva el contrato neutral al proveedor y prohíbe reutilizar credenciales entre productos.

## Decisión pendiente de Katherine

**¿Se aprueba Flow Sandbox como proveedor del piloto de checkout sin cobro real?**

Si la respuesta es sí, completar PRE-01 con la URL oficial del sandbox y asignar responsables técnico y comercial. Si la respuesta es no, registrar un único proveedor alternativo antes de iniciar PRE-02; el resto del checklist no cambia.
