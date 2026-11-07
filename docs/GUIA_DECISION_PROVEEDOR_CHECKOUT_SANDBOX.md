# Guía de decisión del proveedor para el checkout sandbox

**Producto:** Automatiza tu Negocio en 7 Pasos

**Estado:** propuesta para piloto privado; no autoriza producción

**Fecha de revisión:** 2026-11-07

## 1. Decisión que desbloquea

Elegir un único proveedor para ejecutar el piloto privado definido en `docs/QA_CHECKOUT_SANDBOX.md`, sin cobrar dinero real ni conectar producción. Esta guía compara **Flow Sandbox** y **Transbank Webpay Plus en ambiente de integración** contra el contrato y los controles ya preparados.

La recomendación es **Flow Sandbox para el piloto**. No es una decisión comercial definitiva: es la alternativa con menor distancia respecto del diseño existente, que ya separa retorno, confirmación verificable, estado del pago, idempotencia y entrega posterior.

## 2. Límites de esta guía

- No crea cuentas ni solicita credenciales.
- No incorpora secretos al repositorio.
- No implementa endpoints ni conecta formularios.
- No cambia precio, moneda, oferta o proveedor productivo.
- No ejecuta pagos ni pruebas con tarjetas reales.
- No reemplaza los casos QA ni el runbook de entrega: los enlaza y los vuelve ejecutables después de la decisión.

## 3. Contrato mínimo ya aprobado para evaluar el proveedor

El proveedor del piloto debe permitir:

1. crear una orden única con monto, moneda, correo y referencia del producto;
2. redirigir al checkout alojado por el proveedor;
3. distinguir el retorno del navegador de la confirmación verificable del pago;
4. consultar el estado autoritativo usando un identificador del proveedor;
5. registrar los 15 campos definidos en el plan QA sin almacenar datos de tarjeta;
6. procesar confirmaciones repetidas sin duplicar acceso ni correo;
7. probar éxito, rechazo, abandono, expiración y repetición en un ambiente aislado;
8. activar el runbook de entrega solo después de un estado pagado validado en servidor.

## 4. Comparación técnica

| Criterio | Flow Sandbox | Transbank Webpay Plus — integración | Efecto en este piloto |
|---|---|---|---|
| Ambiente de prueba | Base URL separada: `https://sandbox.flow.cl/api`; requiere credenciales de una cuenta sandbox. | Ambiente de integración separado: `https://webpay3gint.transbank.cl`; SDK y documentación incluyen credenciales de integración. | Ambos aíslan producción. Transbank permite empezar antes; Flow exige una cuenta sandbox controlada. |
| Creación | `payment/create` recibe orden, asunto, monto, correo, `urlConfirmation` y `urlReturn`; devuelve URL, token y orden Flow. | `Transaction.create` recibe `buyOrder`, `sessionId`, monto y `returnUrl`; devuelve URL y token. | Ambos cubren orden y redirección. Flow refleja de forma directa los dos destinos previstos en el plan QA. |
| Redirección | Se abre `url + ?token=...`. | Se envía `token_ws` por formulario `POST` a la URL devuelta. El token de creación tiene una vida breve documentada de 5 minutos. | Requieren adaptadores diferentes; ninguno debe exponer secretos al navegador. |
| Confirmación autoritativa | Flow hace `POST` a `urlConfirmation`; el comercio usa el token para consultar `payment/getStatus`. El retorno puede ocurrir antes de la confirmación en medios asíncronos. | Webpay devuelve por `POST` al `returnUrl`; el comercio debe ejecutar `Transaction.commit(token_ws)` y validar la respuesta. | Flow separa explícitamente retorno y confirmación, igual que los controles existentes. Con Transbank habría que rediseñar esa separación. |
| Autenticación | `apiKey` más firma HMAC-SHA256 de parámetros con `secretKey`. | Headers `Tbk-Api-Key-Id` y `Tbk-Api-Key-Secret`, sobre TLS 1.2. | Ambos exigen secretos solo en servidor y rotación documentada. |
| Pruebas | Sandbox evita afectar datos reales y permite simular el flujo del proveedor. | Ambiente de integración, tarjetas de prueba y proyectos de ejemplo oficiales. | Ambos sirven para QA. Transbank documenta más artefactos de prueba listos; Flow mantiene mayor continuidad con el plan existente. |
| Paso a producción | Cambio explícito de endpoint y credenciales; fuera del alcance. | Requiere afiliación, validación formal y credenciales productivas; fuera del alcance. | El piloto no debe inferir aprobación productiva en ninguno de los dos casos. |

## 5. Resultado de la evaluación

### Recomendación: Flow Sandbox

Flow Sandbox es la opción recomendada para el piloto porque:

- su modelo distingue `urlConfirmation` de `urlReturn`;
- obliga a consultar el estado con `payment/getStatus` antes de entregar;
- permite conservar sin cambios conceptuales los controles de confirmación repetida e idempotencia;
- encaja con la puerta ya definida entre “pago confirmado” y “entrega iniciada”;
- reduce el trabajo previo a la primera corrida de los 12 casos QA.

### Cuándo preferir Transbank en una revisión posterior

Transbank debe reevaluarse si la estrategia comercial exige Webpay Plus directo, si ya existe afiliación productiva o si se decide aceptar el trabajo adicional de adaptar el contrato al paso `commit`. Su ambiente de integración y credenciales de prueba son adecuados, pero esa ventaja no compensa el cambio de flujo para este piloto específico.

## 6. Preparación reversible del piloto Flow

Una vez aprobada la decisión, la siguiente ejecución puede preparar —sin publicar— la implementación sandbox con este orden:

1. Crear una cuenta exclusiva de sandbox bajo control de Language Center Chile.
2. Guardar `FLOW_API_KEY` y `FLOW_SECRET_KEY` solo en el gestor de secretos del entorno de prueba; nunca en Git, Drive o capturas.
3. Implementar un adaptador de servidor con tres operaciones: crear pago, recibir confirmación y consultar estado.
4. Usar identificadores únicos internos y del proveedor; persistir el evento antes de iniciar entrega.
5. Tratar `urlReturn` solo como experiencia de usuario; nunca como prueba suficiente de pago.
6. Aceptar confirmaciones repetidas y entregar una sola vez usando la clave de idempotencia del contrato.
7. Ejecutar los 12 casos de `docs/QA_CHECKOUT_SANDBOX.md` con datos ficticios.
8. Activar `docs/RUNBOOK_ENTREGA_ONBOARDING_SOPORTE.md` únicamente cuando la evidencia sea completa.

## 7. Evidencia obligatoria y puerta de salida

El piloto se considera aprobado solo si existe una bitácora con:

- ID interno y `commerceOrder` únicos;
- token/ID del proveedor parcialmente enmascarado;
- estado consultado al servidor del proveedor;
- hora de creación, confirmación y entrega;
- resultado de los 12 casos QA;
- prueba de confirmación repetida sin segunda entrega;
- prueba de rechazo, abandono y expiración sin acceso;
- confirmación de que producción y cobros reales permanecieron desconectados.

Se debe detener la prueba si falta una credencial sandbox, una URL usa dominio productivo, el monto difiere del contrato, la confirmación no puede verificarse en servidor o una repetición produce una segunda entrega.

## 8. Decisión única pendiente

**Katherine: ¿apruebas Flow Sandbox como proveedor exclusivo del piloto privado de checkout, manteniendo producción, precios y credenciales productivas desconectados?**

## 9. Fuentes oficiales consultadas

- Flow, [Quickstart](https://developers.flow.cl/docs/quick-start).
- Flow, [Referencia de la API](https://developers.flow.cl/api).
- Flow, [Confirmación de orden](https://developers.flow.cl/docs/tutorial-basics/order-confirmation).
- Flow, [Finalización de orden](https://developers.flow.cl/docs/tutorial-basics/order-finished).
- Transbank Developers, [Cómo empezar](https://transbankdevelopers.com/documentacion/como_empezar).
- Transbank Developers, [Webpay Plus](https://transbankdevelopers.com/documentacion/webpay-plus).
- Transbank Developers, [Referencia API de Webpay](https://transbankdevelopers.com/referencia/webpay).

La documentación se verificó el 2026-11-07. Antes de implementar, se deben revisar nuevamente los endpoints y requisitos oficiales por si cambian.
