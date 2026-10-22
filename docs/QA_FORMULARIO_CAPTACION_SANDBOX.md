# QA del formulario de captación en sandbox

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Estado:** Candidato para revisión; ninguna prueba autoriza producción  
**Alcance:** desde el envío del formulario hasta el registro verificable de un lead ficticio y su eliminación  
**Fuente de interfaz:** PR #35 — formulario con consentimiento  
**Regla:** usar exclusivamente identidades ficticias y un destino aislado

## Objetivo

Comprobar que el formulario comercial recibe sólo los datos previstos, exige consentimiento, informa correctamente los fallos, evita registros duplicados, no expone datos personales en logs y permite eliminar toda evidencia de prueba antes de conectar producción.

Este checklist no selecciona proveedor, crea credenciales, habilita envíos, modifica precios ni autoriza campañas.

## Material cotejado

1. [Inventario verificable del producto](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit).
2. [Paquete comercial y operación](https://docs.google.com/document/d/1hLnS3ajc3kV1ftPf08ld_xDt1AS1BbwbyNLf7zLz9a8/edit): teléfono opcional, captura mínima, seguimiento y prohibición de enviar PII a analítica.
3. PR #3 — landing candidata sin captura activa.
4. PR #35 — nombre, correo y consentimiento obligatorios; WhatsApp y contexto opcionales; destino todavía bloqueado.
5. PR #33 — convenciones de trazabilidad, idempotencia, evidencia y reversa usadas en el checkout sandbox.

No se encontró en Drive ni en los PR un QA operativo equivalente para el formulario comercial.

## Contrato del formulario

| Campo | Entrada | Obligatorio | Regla mínima en servidor |
|---|---|---:|---|
| `nombre` | texto | Sí | Recortar espacios; 2–100 caracteres |
| `email` | email | Sí | Recortar, normalizar dominio y validar formato |
| `consentimiento_contacto` | `si` | Sí | Rechazar ausencia o valor distinto de `si` |
| `whatsapp` | teléfono | No | Vacío permitido; conservar sólo si pasa validación acordada |
| `tipo_negocio` | selección | No | Aceptar sólo valores conocidos |
| `plan_interes` | selección | No | Aceptar sólo valores conocidos |
| `mensaje` | texto | No | Máximo 1.000 caracteres; tratar siempre como texto |
| `lead_id` | servidor | Sí | Único, no derivado del email |
| `received_at` | servidor | Sí | UTC ISO 8601 |
| `fuente` | servidor | Sí | Valor fijo `landing_7_pasos` |
| `request_id` | servidor/cabecera | Sí | Permite idempotencia y búsqueda sin exponer PII |

El servidor no debe confiar en `required`, listas de opciones ni límites del navegador: debe volver a validar cada campo.

## Datos ficticios autorizados

- Nombre: `QA Formulario 001`
- Email: `qa+captacion@example.invalid`
- WhatsApp: `+56 9 0000 0000`
- Mensaje: `Prueba controlada; no contactar`
- Empresa o actividad: `Negocio ficticio QA`

No usar clientes, alumnos, proveedores, teléfonos, correos ni mensajes reales.

## Precondiciones bloqueantes

- [ ] `PRE-01` Rama y commit exactos del formulario registrados.
- [ ] `PRE-02` Texto de consentimiento aprobado para la prueba.
- [ ] `PRE-03` Endpoint HTTPS aislado; nunca producción.
- [ ] `PRE-04` Almacén de prueba vacío y con acceso restringido.
- [ ] `PRE-05` Secretos sólo en el gestor de credenciales; ninguno en HTML, capturas o repositorio.
- [ ] `PRE-06` Logs configurados sin nombre, email, teléfono, mensaje ni cuerpo completo.
- [ ] `PRE-07` Mensajes, automatizaciones comerciales y cobros deshabilitados.
- [ ] `PRE-08` Procedimiento de eliminación y responsable definidos.
- [ ] `PRE-09` Navegador de escritorio y móvil disponibles.
- [ ] `PRE-10` Registro de evidencias creado sin datos reales.

Si una precondición falla, registrar `BLOQUEADO` y no ejecutar casos posteriores.

## Matriz de pruebas

Estados permitidos: `NO_PROBADO`, `APROBADO`, `FALLIDO`, `BLOQUEADO`, `NO_APLICA`.

| ID | Prioridad | Prueba | Resultado esperado | Evidencia mínima | Estado |
|---|---|---|---|---|---|
| CAP-01 | P0 | Envío mínimo: nombre, email y consentimiento | Una respuesta de éxito y un solo registro con `lead_id`, `request_id`, `received_at` y `fuente` | Respuesta sin PII + fila redactada | NO_PROBADO |
| CAP-02 | P1 | Envío con todos los opcionales | Se conservan únicamente los siete campos permitidos y los cuatro generados por servidor | Esquema redactado | NO_PROBADO |
| CAP-03 | P0 | Nombre vacío desde navegador | El navegador impide el envío y muestra validación | Captura sin datos | NO_PROBADO |
| CAP-04 | P0 | Email con formato inválido | El navegador impide el envío; no se crea registro | Captura + conteo 0 | NO_PROBADO |
| CAP-05 | P0 | Consentimiento sin marcar | El navegador impide el envío; no se crea registro | Captura + conteo 0 | NO_PROBADO |
| CAP-06 | P0 | Solicitud manipulada sin consentimiento | El servidor rechaza con 4xx; no registra ni dispara acciones | Código y `request_id` | NO_PROBADO |
| CAP-07 | P1 | Campo inesperado `precio` o `rol` | Se rechaza o ignora según política documentada; nunca se almacena | Esquema final | NO_PROBADO |
| CAP-08 | P0 | Doble clic o dos solicitudes simultáneas | Se crea un solo lead; la segunda respuesta es idempotente | Conteo 1 + mismo resultado lógico | NO_PROBADO |
| CAP-09 | P0 | Repetición del mismo `request_id` | No duplica el registro ni ejecuta efectos secundarios | Consulta por `request_id` | NO_PROBADO |
| CAP-10 | P1 | Mismo email en una solicitud nueva | Se aplica la regla comercial documentada sin sobrescribir silenciosamente | Antes/después redactado | NO_PROBADO |
| CAP-11 | P0 | Endpoint inaccesible o timeout | La interfaz muestra error honesto; no anuncia éxito | Captura + consola sin secretos | NO_PROBADO |
| CAP-12 | P0 | Respuesta 500 del servidor | La interfaz mantiene los datos para reintento controlado y no muestra éxito | Captura + código 500 | NO_PROBADO |
| CAP-13 | P1 | Espacios, mayúsculas y campos opcionales vacíos | Normalización determinista; vacíos no se convierten en valores falsos | Registro redactado | NO_PROBADO |
| CAP-14 | P0 | Mensaje con HTML/JavaScript de prueba | Se trata como texto; no se ejecuta ni altera la interfaz o el destino | Captura segura + valor escapado | NO_PROBADO |
| CAP-15 | P1 | Mensaje de más de 1.000 caracteres | El servidor rechaza con 4xx y explicación segura | Código + longitud | NO_PROBADO |
| CAP-16 | P0 | Revisión de logs y analítica | No aparecen nombre, email, teléfono, mensaje, consentimiento ni cuerpo completo | Extracto redactado | NO_PROBADO |
| CAP-17 | P0 | Solicitud de eliminación por `lead_id` | Se elimina el registro y se conserva sólo evidencia no personal del procedimiento | Conteo 0 + acta redactada | NO_PROBADO |
| CAP-18 | P0 | Limpieza final del sandbox | Quedan cero leads, archivos, correos o tareas de prueba; secretos rotados si se expusieron | Inventario final | NO_PROBADO |

## Recorrido de ejecución

1. Registrar versión, navegador, responsable y hora de inicio.
2. Ejecutar `CAP-03` a `CAP-05` antes de habilitar temporalmente el endpoint.
3. Ejecutar `CAP-01`, verificar el contrato y conservar sólo evidencia redactada.
4. Ejecutar `CAP-06` a `CAP-16`, deteniendo la sesión ante cualquier fallo P0.
5. Ejecutar `CAP-17` y confirmar que el lead ya no puede recuperarse desde el destino de prueba.
6. Ejecutar `CAP-18`, deshabilitar el endpoint y volver a colocar el formulario en modo bloqueado.
7. Adjuntar el registro final y la decisión `APTO_PARA_PILOTO` o `NO_APTO`.

## Registro de evidencia

| Campo | Valor |
|---|---|
| Fecha y hora | |
| Rama / commit | |
| Entorno | |
| Responsable | |
| Endpoint identificado por alias, no URL secreta | |
| Navegador escritorio / móvil | |
| Casos aprobados / fallidos / bloqueados | |
| Fallos P0 | |
| Evidencia almacenada en | |
| Eliminación confirmada por | |
| Resultado final | |

La evidencia debe ocultar email, teléfono, URL privada, token, cabeceras de autorización, cookies y cuerpo completo de las solicitudes.

## Puerta de aceptación

El formulario queda **APTO_PARA_PILOTO** sólo si:

- las diez precondiciones están aprobadas;
- los trece casos P0 están aprobados;
- no existe ningún registro duplicado ni efecto comercial;
- consentimiento y finalidad quedan almacenados de forma verificable;
- logs y analítica no contienen PII;
- `CAP-17` y `CAP-18` confirman eliminación completa;
- el endpoint vuelve a quedar deshabilitado después de la sesión.

Cualquier fallo P0 produce `NO_APTO`. No se corrige durante la misma sesión sin registrar una nueva versión y repetir desde `CAP-01`.

## Reversa

1. Deshabilitar el endpoint o restaurar `REEMPLAZAR_ID`.
2. Revocar credenciales temporales.
3. Eliminar leads, ejecuciones, archivos y mensajes ficticios.
4. Confirmar conteo cero en destino, colas y reintentos.
5. Conservar únicamente el acta redactada y los identificadores técnicos no personales.
6. Registrar causa, responsable y siguiente versión.

## Decisión única pendiente

Katherine debe confirmar si el piloto usará **un webhook n8n aislado conectado a un almacén de prueba** como destino temporal del formulario. Hasta esa aprobación, todos los casos permanecen `NO_PROBADO`.
