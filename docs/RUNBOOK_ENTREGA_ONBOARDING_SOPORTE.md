# Runbook de entrega, onboarding y soporte

**Producto:** Automatiza tu Negocio en 7 Pasos

**Estado:** PARA REVISIÓN · piloto privado

**Corte:** 20 de octubre de 2026

**Objetivo:** definir una operación reproducible desde una orden `paid` hasta acceso comprobado, bienvenida, entrega registrada y soporte, sin conceder acceso a pagos no confirmados ni exponer datos o credenciales.

## Alcance

Este runbook comienza cuando el checkout sandbox entrega una orden verificada según el [checklist de QA del checkout](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/33). Cubre:

- alta de una identidad ficticia en un LMS privado;
- asignación del curso correcto;
- bienvenida e instrucciones de acceso;
- verificación del acceso al siguiente día hábil;
- registro de entrega e incidencias;
- reintentos, escalamiento y reversa.

No configura cuentas, contrata servicios, envía mensajes, matricula personas reales, publica contenido ni define devoluciones o condiciones legales.

## Principios no negociables

1. Sólo una orden con `payment_status=paid` y confirmación server-side válida inicia la entrega.
2. Cada orden genera como máximo una matrícula activa, una bienvenida inicial y un registro de entrega.
3. El correo identifica al destinatario, pero no funciona como clave de idempotencia.
4. Ningún mensaje contiene contraseñas, tokens, enlaces administrativos o datos de pago.
5. Un fallo de correo no revoca un acceso válido; un fallo de LMS no se oculta como entrega completa.
6. Los reintentos continúan la misma operación y no crean otra orden ni otra matrícula.
7. Toda intervención manual registra responsable, motivo, hora, resultado y evidencia redactada.
8. Las evidencias usan identidades ficticias y omiten secretos, cookies, URL firmadas y datos personales.

## Roles

| Rol | Responsabilidad | Evidencia mínima |
|---|---|---|
| Operación comercial | Confirmar que la orden corresponde al producto correcto | `order_id`, `product_id` y estado verificado |
| Administración LMS | Matricular, revisar acceso y ejecutar reversa | ID de matrícula y estado, sin credenciales |
| Soporte | Recibir, clasificar y resolver incidencias | ticket, prioridad, tiempos y resolución |
| QA | Ejecutar el recorrido y comprobar no duplicación | registro del caso y enlaces a evidencia redactada |
| Katherine | Aprobar canal y SLA del piloto | decisión registrada |

## Contrato mínimo de entrega

| Campo | Regla |
|---|---|
| `fulfillment_id` | único; formato `ATN7P-FUL-AAAA-MM-DD-NNN` |
| `test_run_id` | enlaza la ejecución con el QA de checkout |
| `order_id` | orden `paid` que origina la entrega |
| `product_id` | debe corresponder a Automatiza tu Negocio en 7 Pasos |
| `learner_ref` | identificador ficticio o seudonimizado; no incluir RUT |
| `lms_enrollment_id` | vacío hasta que el LMS confirme matrícula |
| `access_status` | `not_started`, `pending`, `granted`, `failed` o `revoked` |
| `welcome_status` | `not_sent`, `pending`, `sent` o `failed` |
| `delivery_status` | `not_started`, `pending`, `delivered` o `failed` |
| `followup_status` | `not_due`, `pending`, `confirmed`, `needs_help` o `closed` |
| `incident_id` | vacío cuando no existe incidencia |
| `attempt_count` | aumenta sólo con reintentos de la misma operación |
| `owner` | responsable actual |
| `created_at` / `updated_at` | fecha, hora y zona registradas |
| `evidence_ref` | referencia a evidencia redactada |

`delivery_status=delivered` exige `access_status=granted` y `welcome_status=sent`. La comprobación T+1 se registra por separado; no se inventa si el estudiante ficticio no inició sesión.

## Flujo operativo

### 1. Recibir evento confirmado

- Verificar `order_id`, `product_id`, `payment_status=paid` y la marca de firma válida.
- Consultar `fulfillment_id` existente antes de crear uno nuevo.
- Si producto, moneda o monto no coinciden con la orden, detener y escalar al checkout; no matricular.

### 2. Preparar identidad de prueba

- Usar únicamente el buzón ficticio autorizado para el piloto.
- Crear la identidad mediante el mecanismo de invitación o alta del LMS; no asignar una contraseña compartida.
- Registrar el `lms_enrollment_id` devuelto por la plataforma.
- Confirmar que la identidad recibe sólo el curso adquirido y ningún recurso administrativo.

### 3. Otorgar acceso

- Cambiar `access_status` a `pending` antes del intento.
- Asignar el curso privado y esperar confirmación del LMS.
- Cambiar a `granted` sólo con ID de matrícula y evidencia de acceso.
- Si falla, mantener `delivery_status=pending`, crear incidencia y aplicar el plan de reintento.

### 4. Enviar bienvenida

- Enviar sólo después de `access_status=granted`.
- Usar el mensaje aprobado de este runbook y un enlace de acceso del alumno, nunca un enlace administrativo.
- Registrar ID o fecha del mensaje, no su contenido completo si contiene datos personales.
- Un reintento reutiliza `fulfillment_id` y actualiza `attempt_count`.

### 5. Registrar entrega

- Confirmar una matrícula y una bienvenida para la orden.
- Cambiar `delivery_status` a `delivered`.
- Programar la comprobación T+1 día hábil.
- Conservar la relación `order_id → fulfillment_id → lms_enrollment_id`.

### 6. Comprobar acceso

- Verificar que la identidad ficticia puede iniciar sesión y abrir Bienvenida.
- Confirmar que el workbook o material inicial puede abrirse sin permisos de edición del original.
- Registrar `confirmed` si el recorrido funciona o `needs_help` si requiere intervención.
- No marcar actividad, evaluación ni avance como completados en nombre del alumno.

## Mensajes candidatos

### Bienvenida después de acceso confirmado

**Asunto:** Tu acceso a Automatiza tu Negocio en 7 Pasos

Hola, {{nombre}}:

Tu acceso a **Automatiza tu Negocio en 7 Pasos** ya está disponible. El objetivo no es automatizar todo de una vez: comenzarás identificando un proceso acotado, documentándolo y probándolo de forma medible.

1. Ingresa mediante el enlace de acceso: {{enlace_alumno}}.
2. Revisa Bienvenida y la ruta del curso.
3. Guarda una copia del workbook antes de completar el Paso 1.
4. Usa datos ficticios durante las prácticas y no ingreses credenciales ni información sensible.

Si no puedes acceder, responde a este mensaje indicando sólo el código {{fulfillment_id}}. No envíes contraseñas ni datos de pago.

Language Center Chile

### Comprobación T+1 día hábil

**Asunto:** ¿Pudiste ingresar al curso?

Hola, {{nombre}}:

Queremos confirmar que pudiste abrir **Automatiza tu Negocio en 7 Pasos** y revisar el material de Bienvenida. Si necesitas ayuda, responde indicando el código {{fulfillment_id}} y cuál de estas situaciones ocurrió:

- no recibí la invitación;
- el enlace no abre;
- puedo ingresar, pero no veo el curso;
- no puedo abrir el material inicial.

No envíes contraseñas, códigos de verificación ni datos de pago.

### Recepción de una incidencia

**Asunto:** Recibimos tu solicitud de acceso

Hola, {{nombre}}:

Registramos tu solicitud con el código {{incident_id}}. Revisaremos el acceso asociado a {{fulfillment_id}} y responderemos dentro del plazo de soporte aprobado para el piloto. No es necesario repetir la compra ni crear otra cuenta.

### Resolución

**Asunto:** Acceso revisado · {{incident_id}}

Hola, {{nombre}}:

La revisión de tu acceso finalizó. Estado: {{resultado_claro}}.

Próximo paso: {{accion_estudiante}}.

Si el problema continúa, responde en el mismo hilo con el código {{incident_id}}. No compartas contraseñas ni datos de pago.

## Incidencias y escalamiento

| Prioridad | Ejemplo | Acción inicial | Objetivo interno del piloto | Escalamiento |
|---|---|---|---|---|
| P1 | acceso concedido sin pago confirmado; exposición de credencial; acceso administrativo | detener entrega, preservar evidencia y limitar acceso | atención inmediata durante la ventana de prueba | Katherine y responsable técnico |
| P2 | orden pagada sin matrícula; curso equivocado; duplicado; LMS caído | abrir incidencia y bloquear nuevos reintentos automáticos | primera revisión dentro de 1 día hábil | soporte y administración LMS |
| P3 | invitación no recibida; enlace vencido; duda de navegación | verificar identidad ficticia, reenviar invitación segura y registrar | primera respuesta dentro de 1 día hábil | soporte |

Los tiempos anteriores son objetivos internos de prueba, no una promesa pública. El SLA comercial sólo se publica después de aprobación.

## Reintentos y recuperación

| Fallo | Reintento seguro | Límite del piloto | Salida |
|---|---|---:|---|
| LMS temporalmente no disponible | repetir alta con el mismo `fulfillment_id` y consultar matrícula antes de crear | 3 | incidencia P2 y operación manual controlada |
| correo temporalmente no disponible | reenviar el mismo mensaje sin crear otra matrícula | 3 | incidencia P3 |
| callback duplicado | reconocer evento ya procesado; no repetir entrega | 0 efectos nuevos | registrar duplicado |
| invitación vencida | revocar invitación anterior y emitir una nueva para la misma matrícula | 1 | incidencia P3 |
| curso incorrecto | retirar asignación incorrecta y asignar el curso aprobado | 1 | incidencia P2 y retest completo |

La operación manual controlada exige orden `paid`, responsable identificado, captura redactada del antes y después y actualización del mismo `fulfillment_id`.

## Matriz de QA de entrega

| ID | Caso | Resultado esperado | Evidencia | Estado |
|---|---|---|---|---|
| FUL-01 | orden pagada válida | una matrícula, una bienvenida y entrega registrada | línea de tiempo y acceso ficticio | NO PROBADO |
| FUL-02 | orden pendiente o fallida | cero matrículas y cero mensajes | conteos y estado de orden | NO PROBADO |
| FUL-03 | evento duplicado | cero efectos adicionales | IDs y conteos antes/después | NO PROBADO |
| FUL-04 | LMS no disponible | entrega pendiente, incidencia y reintento sin duplicado | ticket e historial | NO PROBADO |
| FUL-05 | correo no disponible | acceso conservado, bienvenida pendiente y reintento seguro | estados y conteos | NO PROBADO |
| FUL-06 | curso incorrecto | acceso incorrecto retirado y curso correcto asignado | historial de asignaciones | NO PROBADO |
| FUL-07 | invitación vencida | nueva invitación para la misma matrícula | IDs de invitación y matrícula | NO PROBADO |
| FUL-08 | comprobación T+1 | acceso y Bienvenida verificables o incidencia abierta | resultado de inicio de sesión | NO PROBADO |
| FUL-09 | reversa | acceso ficticio revocado sin borrar auditoría | estado final e historial | NO PROBADO |
| FUL-10 | privacidad de evidencia | ninguna evidencia contiene secretos o datos reales | revisión por segunda persona | NO PROBADO |

## Registro de ejecución

| Campo | Valor |
|---|---|
| `test_run_id` | |
| `fulfillment_id` | |
| Commit / versión | |
| LMS y entorno | |
| Buzón de prueba | |
| Ejecuta | |
| Revisa | |
| Casos ejecutados | |
| Incidencias | |
| Resultado global | NO PROBADO |
| Reversa completada | NO |
| Evidencia | |

## Puerta de aceptación

El circuito queda **APROBADO PARA PILOTO PRIVADO** únicamente cuando:

- FUL-01 a FUL-10 tienen evidencia y estado `APROBADO`;
- una orden no confirmada produce cero accesos y mensajes;
- una orden válida produce exactamente una matrícula y una bienvenida;
- la comprobación T+1 distingue `confirmed` de `needs_help`;
- la reversa retira el acceso ficticio sin borrar el historial;
- soporte conoce el canal, SLA, responsable y procedimiento de escalamiento aprobados;
- una segunda persona confirma que las evidencias no contienen datos ni secretos.

Esto no autoriza venta pública, matrículas reales, cobros, emisión tributaria ni publicación del curso.

## Trazabilidad de fuentes

- [Material de bienvenida histórico](https://docs.google.com/document/d/1wVdB0wh_UNGS3oNaHGgIZ6OEp0AA_t6o/edit): orientación inicial, acceso al LMS y checklist de comienzo. Se corrigieron el nombre “7 Días” y referencias obsoletas; no se modificó el original.
- [Paquete comercial vigente](https://docs.google.com/document/d/1hLnS3ajc3kV1ftPf08ld_xDt1AS1BbwbyNLf7zLz9a8/edit): WF-04, mensaje base, comprobación T+1 y objetivo interno de primera respuesta.
- [Inventario verificable](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit): entrega automatizada faltante y soporte pendiente de canal, SLA y responsable.
- [PR #33](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/33): contrato previo de pago confirmado, idempotencia y QA sandbox.

## Decisión pendiente de Katherine

**¿Se aprueba `contacto@languagecenterchile.com` como canal de soporte y un SLA de primera respuesta de un día hábil para el piloto privado?**

Si se aprueba, registrar el buzón como canal operativo y asignar una persona responsable antes de ejecutar FUL-01. Si no se aprueba, definir un único canal y plazo alternativos; ninguna plantilla debe enviarse antes de esa decisión.
