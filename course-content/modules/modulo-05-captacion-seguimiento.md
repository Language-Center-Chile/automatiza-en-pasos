# Módulo 5 — Captación y seguimiento con control humano

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Estado:** candidato para revisión editorial y carga en LMS  
**Tiempo estimado:** 55–75 minutos  
**Materiales:** Video 05 y hoja `5 Captacion` del workbook  
**Evidencia mínima:** recorrido de cuatro momentos, tres mensajes en borrador, cuatro casos simulados y cinco controles QA

## Antes de comenzar

Completa primero los módulos 1–4. En esta práctica diseñarás un recorrido de captación con datos ficticios y envíos apagados. No conectarás formularios, correo, WhatsApp, calendarios, CRM, pagos ni servicios externos. Tampoco crearás campañas, contratarás planes o importarás contactos.

El objetivo es demostrar que una consulta puede avanzar hasta un próximo paso claro sin perder consentimiento, condición de salida ni revisión humana. Si una acción no se ejecuta en un entorno autorizado de prueba, mantenla como `No probado`. Un documento completo no equivale a una automatización autorizada.

## Resultados de aprendizaje

Al finalizar podrás:

1. diseñar un recorrido desde el ingreso hasta el segundo seguimiento;
2. registrar cada momento con los nueve campos del workbook;
3. redactar tres mensajes breves sin promesas ni datos sensibles;
4. identificar consentimiento, espera, salida y responsable humano;
5. simular cuatro casos sin realizar envíos;
6. evaluar cinco controles QA sin confundir diseño con ejecución.

## Ruta del módulo

1. Define el alcance y el próximo paso — 7 minutos.
2. Completa los nueve campos para cuatro momentos — 15–20 minutos.
3. Redacta los tres mensajes — 10–15 minutos.
4. Simula cuatro casos — 12–18 minutos.
5. Registra los cinco controles QA — 6–8 minutos.
6. Responde el quiz y prepara la evidencia — 5–7 minutos.

## 1. El recorrido mínimo

Trabajarás con cuatro momentos:

1. **Ingreso:** llega una consulta ficticia y se registra el dato mínimo.
2. **Confirmación:** se acusa recibo y se explica que habrá revisión humana.
3. **Seguimiento 1:** se formula una pregunta breve para comprender el objetivo.
4. **Seguimiento 2:** se ofrece continuar con una persona o cerrar el recorrido.

El recorrido no busca maximizar mensajes. Busca llevar a la persona al siguiente paso apropiado con una salida clara. Define antes de escribir:

- **Entrada:** consulta ficticia recibida por un canal de prueba.
- **Próximo paso:** revisión humana o cierre del seguimiento.
- **Condición de salida:** petición de cierre, falta de consentimiento, dato insuficiente o derivación a una persona.
- **Responsable:** rol que revisa excepciones y decide si corresponde continuar.

No supongas consentimiento solo porque existe un dato de contacto. Registra el origen y el estado del consentimiento según la política aprobada para el canal. Si existe duda, detén el recorrido y solicita revisión.

## 2. Los nueve campos de la hoja `5 Captacion`

Completa una fila por momento:

| Campo | Qué debes documentar | Criterio de calidad |
|---|---|---|
| Momento | `Ingreso`, `Confirmación`, `Seguimiento 1` o `Seguimiento 2` | Uno de los cuatro momentos definidos |
| Canal | `Formulario`, `Email`, `WhatsApp`, `Calendario` o `Notificación interna` | Canal de prueba, no conexión real |
| Objetivo | Resultado observable de ese momento | Una finalidad, no una lista de tareas |
| Mensaje / acción | Texto que vería la persona o acción interna | Breve, verificable y sin promesas |
| Dato mínimo | Solo lo necesario para avanzar | No incluir contraseñas, pagos ni datos sensibles |
| Consentimiento | `Requerido`, `Obtenido` o `No aplica` | Estado explícito, no inferido |
| Espera | Intervalo antes del siguiente momento | Definido y sujeto a aprobación |
| Condición de salida | Cuándo detener o derivar | Acción inequívoca |
| Responsable | Persona o rol que revisa | Dueño humano identificable |

### Ejemplo completo con datos ficticios

| Momento | Canal | Objetivo | Mensaje / acción | Dato mínimo | Consentimiento | Espera | Condición de salida | Responsable |
|---|---|---|---|---|---|---|---|---|
| Ingreso | Formulario | Registrar consulta de prueba | Crear registro `DEMO-LEAD-005` | Nombre ficticio y objetivo | Requerido | Inmediata | Dato mínimo incompleto | Revisión comercial |
| Confirmación | Email | Confirmar recepción | Usar Mensaje 1 sin enviarlo | Nombre ficticio y referencia | Obtenido | Según política aprobada | Solicitud de no continuar | Revisión comercial |
| Seguimiento 1 | Email | Comprender la necesidad | Usar Mensaje 2 sin enviarlo | Objetivo o proceso | Obtenido | Según política aprobada | Respuesta o solicitud de cierre | Revisión comercial |
| Seguimiento 2 | Email | Resolver el próximo paso | Usar Mensaje 3 sin enviarlo | Decisión de continuar o cerrar | Obtenido | No aplica | `CONTINUAR` o `CERRAR` | Revisión comercial |

Los intervalos del ejemplo quedan sujetos a una decisión comercial. No inventes una frecuencia ni la conviertas en automatización activa.

## 3. Tres mensajes en borrador

Usa un nombre ficticio y conserva los mensajes fuera de cualquier canal conectado.

### Mensaje 1 — Confirmación

> Hola, Demo Persona. Recibimos tu consulta de prueba. Una persona revisará la información antes de continuar. Si prefieres no seguir, indícalo en tu respuesta.

Este mensaje confirma recepción. No promete plazo, cupo, resultado ni contacto automático.

### Mensaje 2 — Calificación

> Para preparar la revisión, ¿qué objetivo o proceso te gustaría mejorar? No compartas contraseñas, datos de pago ni información sensible.

La pregunta solicita solo el dato necesario para comprender la necesidad. Una respuesta vacía o sensible debe salir del recorrido normal y pasar a revisión.

### Mensaje 3 — Próximo paso

> Gracias. Responde `CONTINUAR` si deseas que una persona revise el próximo paso, o `CERRAR` si prefieres terminar el seguimiento.

Las palabras de acción deben interpretarse únicamente dentro de una implementación aprobada. En esta práctica se registran como resultados simulados.

## 4. Cuatro casos simulados

Registra cada caso antes de asignar un estado. Usa `No probado`, `Aprobado`, `Fallido` o `No aplica`.

### Caso 1 — Camino feliz

- **Entrada:** `DEMO-LEAD-005`, nombre ficticio y objetivo válido.
- **Resultado esperado:** recorre los cuatro momentos, conserva consentimiento y termina en revisión humana.
- **Evidencia:** tabla completada y transcripción de los tres mensajes.

### Caso 2 — Dato incompleto

- **Entrada:** `DEMO-LEAD-006` sin objetivo.
- **Resultado esperado:** no prepara seguimiento; marca el dato faltante y deriva a revisión.
- **Evidencia:** nota con el campo ausente y la condición de salida aplicada.

### Caso 3 — Solicitud de cierre

- **Entrada:** `DEMO-LEAD-007` responde `CERRAR`.
- **Resultado esperado:** detiene el recorrido y no crea seguimientos posteriores.
- **Evidencia:** registro del cierre simulado y responsable informado.

### Caso 4 — Evento repetido

- **Entrada:** dos registros idénticos para `DEMO-LEAD-008`.
- **Resultado esperado:** identificar el riesgo de duplicado sin afirmar que está resuelto.
- **Evidencia:** nota `Deduplicación no implementada; envío real No probado`.

El cuarto caso no demuestra idempotencia. Como no existe una implementación conectada ni un registro persistente, el control `No se envían mensajes duplicados` debe permanecer `No probado`.

## 5. QA de captación

La hoja contiene cinco controles:

| Control | Qué observar | Estado inicial |
|---|---|---|
| El destino es de prueba | Identificadores y canales no corresponden a personas reales | No probado |
| Los campos mínimos llegan completos | Cada registro contiene solo lo necesario para decidir | No probado |
| El usuario recibe confirmación | El resultado observado coincide con el Mensaje 1 aprobado | No probado |
| Existe salida o contacto humano | `CERRAR` detiene y `CONTINUAR` deriva a una persona | No probado |
| No se envían mensajes duplicados | Un evento repetido no produce un segundo envío | No probado |

Una revisión documental puede confirmar que el diseño incluye un control, pero no que el sistema lo ejecuta. Sin una prueba autorizada del canal, conserva `No probado` en confirmación y duplicados. Usa `No aplica` solo cuando el control realmente no corresponde al alcance, no para ocultar una prueba pendiente.

## 6. Evidencia de término

Entrega:

1. los nueve campos completos para los cuatro momentos;
2. los tres mensajes en borrador, sin envío;
3. los cuatro casos con entrada, resultado esperado, resultado real y estado;
4. los cinco controles QA con evidencia o limitación;
5. una condición de salida y un responsable humano por momento;
6. confirmación escrita: `No conecté canales ni usé datos reales`;
7. nota explícita si consentimiento, frecuencia o deduplicación siguen pendientes.

Nombre sugerido: `M05_Captacion_Seguimiento_ApellidoNombre_v01.xlsx`. Si incorporas capturas de una prueba autorizada, guárdalas en `M05_Captacion_Evidencia_ApellidoNombre_v01.pdf` y oculta cualquier dato identificable que no sea necesario.

## 7. Quiz de comprobación

Selecciona una respuesta por pregunta. Puntaje sugerido de aprobación: **5 de 6**.

1. ¿Cuál es el último momento del recorrido?
   - A. Ingreso.
   - B. Confirmación.
   - C. Seguimiento 2.

2. ¿Cómo se trata el consentimiento?
   - A. Se infiere al existir un correo.
   - B. Se registra explícitamente como `Requerido`, `Obtenido` o `No aplica`.
   - C. Se omite en una simulación.

3. ¿Qué solicita el Mensaje 2?
   - A. Una contraseña.
   - B. Datos de pago.
   - C. El objetivo o proceso que se desea mejorar.

4. ¿Qué debe ocurrir ante `CERRAR`?
   - A. Detener el seguimiento.
   - B. Enviar otra confirmación.
   - C. Cambiar el canal.

5. ¿Qué demuestra el caso de evento repetido en esta práctica?
   - A. Que la deduplicación funciona.
   - B. Que existe un riesgo pendiente por probar.
   - C. Que el segundo registro puede borrarse.

6. ¿Cuándo puede marcarse `El usuario recibe confirmación` como `Aprobado`?
   - A. Cuando el mensaje está bien redactado.
   - B. Cuando existe evidencia de una prueba autorizada y el resultado coincide.
   - C. Cuando el recorrido tiene cuatro momentos.

### Respuestas

1. C — el segundo seguimiento resuelve continuar o cerrar.  
2. B — el consentimiento se registra, no se presume.  
3. C — solicita únicamente información mínima sobre la necesidad.  
4. A — la salida debe ser efectiva y verificable.  
5. B — no existe implementación de deduplicación en este ejercicio.  
6. B — un borrador no prueba la entrega del mensaje.

## Checklist de cierre

- [ ] Documenté los cuatro momentos del recorrido.
- [ ] Completé los nueve campos para cada momento.
- [ ] Usé únicamente personas e identificadores ficticios.
- [ ] Redacté exactamente tres mensajes sin enviarlos.
- [ ] Registré consentimiento, espera y condición de salida.
- [ ] Asigné un responsable humano identificable.
- [ ] Simulé los cuatro casos y registré su resultado.
- [ ] Revisé los cinco controles QA sin inventar evidencia.
- [ ] Dejé como `No probado` todo control no ejecutado.
- [ ] Confirmé que no conecté canales ni usé datos reales.

## Fuentes y trazabilidad

- Guía LMS histórica de “Automatiza tu Negocio en 7 Pasos”.
- Video 05 — Captación y seguimiento, versión para revisión editorial en Google Drive.
- Hoja `5 Captacion` del workbook del curso.
- Inventario verificable y matriz de aprobación editorial en Google Drive.
- Módulo 4 — n8n esencial, como prerrequisito pedagógico.

## Criterio de aprobación editorial

Este módulo puede cargarse en el LMS cuando Katherine confirme que los cuatro momentos, nueve campos, tres mensajes, cuatro casos, cinco controles QA y criterio de consentimiento representan la versión maestra del Paso 5.
