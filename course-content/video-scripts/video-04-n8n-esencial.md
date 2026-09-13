# Video 04 — n8n esencial: primer flujo sin API

## Ficha de producción

- Producto: Automatiza tu Negocio en 7 Pasos.
- Módulo: Paso 4 — n8n esencial.
- Audiencia: emprendedores y pequeñas empresas sin experiencia técnica.
- Objetivo: diseñar un flujo manual, validar su entrada y observar tanto el camino válido como el rechazo controlado.
- Duración objetivo: 10–12 minutos, incluyendo demostración y pausas.
- Prerrequisitos: Videos 00–03 y workbook, hoja “4 n8n esencial”.
- Herramienta: instancia de práctica existente y autorizada. No instalar, contratar ni cambiar infraestructura durante la clase.
- Evidencia: diagrama, ejecución válida, dato incompleto rechazado y prueba de repetición documentada.
- Estado: listo para revisión editorial; NO implica aprobación ni video producido.

## Guion de teleprompter

### 00:00–01:00 — Del proceso al flujo

Este es el Paso 4 de Automatiza tu Negocio en 7 Pasos. Hasta ahora identificaste un proceso, organizaste información y preparaste instrucciones para inteligencia artificial. Hoy convertirás una parte pequeña de ese proceso en un flujo que puedas observar y probar.

Usaremos n8n, pero no conectaremos correo, CRM, pagos ni una API. Trabajaremos con datos ficticios y un disparador manual. El resultado será una demostración de cómo entra información, cómo se valida y cómo cambia el recorrido cuando falta un dato.

Abre la hoja “4 n8n esencial” del workbook. Si todavía no tienes una instancia de práctica autorizada, sigue la demostración y completa el diseño. No compres una suscripción ni modifiques un servidor para continuar.

### 01:00–02:15 — Tres conceptos para entender el lienzo

Un workflow, o flujo de trabajo, es una secuencia de pasos conectados. Un nodo representa una tarea dentro de esa secuencia. Un disparador define cuándo comienza.

En esta práctica, el nodo Manual Trigger permite iniciar una ejecución mediante el botón Execute Workflow. No responde a una agenda ni recibe eventos externos. Esto nos permite decidir cuándo probar y revisar los resultados sin activar un sistema productivo.

Las conexiones llevan información de un nodo al siguiente. Para observarla, abre cada nodo y compara su entrada y su salida. No necesitas memorizar código: necesitas reconocer qué dato llega, qué operación se realiza y qué dato continúa.

Antes de ejecutar cualquier ejemplo ajeno, revisa sus nodos. Un disparador manual no vuelve seguro un flujo que contiene envíos, borrados o conexiones reales. Nuestro ejemplo no incluye ninguna de esas acciones.

### 02:15–03:30 — Diseña antes de configurar

En el workbook encontrarás nueve columnas: Flujo, Disparador, Entrada, Validación, Acción, Salida, Manejo de error, Responsable humano y Evidencia.

Escribe como nombre “Clasificar consulta ficticia”. El disparador será manual. La entrada tendrá un identificador y un interés. La validación comprobará que ambos textos estén completos. La acción consistirá únicamente en preparar un resultado dentro de n8n.

Para la salida válida escribiremos LISTO_PARA_REVISION. Si falta información, escribiremos DATO_INCOMPLETO. En Manejo de error registra que el caso se detiene para revisión humana y no se envía ningún mensaje. Asigna una persona o rol responsable y deja espacio para las capturas.

Este mapa es importante: la tecnología debe representar una decisión que ya entiendes, no ocultarla detrás de botones.

### 03:30–05:10 — Construye la entrada ficticia

En un flujo nuevo agrega un Manual Trigger y conecta un nodo Edit Fields, también conocido como Set. Renombra ese segundo nodo como “Entrada ficticia”.

Selecciona el modo JSON Output y utiliza el pequeño objeto que aparece en pantalla: lead_id con valor DEMO-001, e interes con valor Curso. Son dos campos inventados, no un contacto real.

Ejecuta el flujo y abre la salida de Entrada ficticia. Debes reconocer los dos campos y sus valores. Si aparece un error de JSON, revisa comillas, comas y llaves antes de continuar. No cambies configuraciones globales para resolver un error de escritura.

Observa también que el ejemplo es una simulación. No hemos recibido un formulario ni registrado una oportunidad en el CRM. Solo hemos creado una entrada controlada para aprender a probar.

Pausa el video y comprueba que tu entrada coincida con la demostración.

### 05:10–06:50 — Divide el recorrido con IF

Conecta la entrada a un nodo IF. Este nodo evalúa condiciones y separa el recorrido según su resultado.

Agrega una condición de tipo texto para lead_id y selecciona “is not empty”. Usa una expresión que lea el valor del nodo anterior. Agrega la misma condición para interes y combina ambas con AND: queremos que las dos se cumplan.

En la salida verdadera conecta otro Edit Fields, llamado “Resultado válido”. Configúralo para devolver un campo estado con el texto LISTO_PARA_REVISION. En la salida falsa conecta “Revisión de dato”, que devuelve estado DATO_INCOMPLETO y motivo Revisar entrada.

No conectes después un envío. La palabra listo significa que una persona puede revisar el resultado; no autoriza una comunicación ni una compra.

Esta comprobación básica detecta un texto vacío. No valida identidad, correo, consentimiento ni calidad completa del dato. Un sistema real necesitaría reglas adicionales.

### 06:50–08:15 — Prueba el camino válido y el rechazo

Antes de cada ejecución escribe el resultado esperado en el workbook.

Primero conserva DEMO-001 y Curso. Ejecuta todo el flujo. El resultado esperado es que llegue a Resultado válido y aparezca LISTO_PARA_REVISION. Abre la salida y registra lo que realmente ocurrió. Guarda una captura sin datos privados.

Ahora cambia interes por un texto vacío. Ejecuta nuevamente desde el inicio. El resultado esperado es la salida falsa con DATO_INCOMPLETO. Este rechazo es un resultado correcto, no una prueba fallida: evitamos continuar con información incompleta.

Si ambos casos recorren la misma rama, revisa las condiciones, los nombres de campo y la combinación AND. También confirma que estás mirando la ejecución nueva y no un resultado anterior.

Una pantalla verde solo demuestra que los nodos ejecutaron. La prueba se aprueba cuando el resultado real coincide con el esperado.

### 08:15–09:30 — Repetición y límites de la práctica

Restaura la entrada válida y ejecuta dos veces con el mismo identificador. El flujo producirá dos resultados porque no guarda un registro persistente de eventos procesados.

Anota esta limitación en Evento duplicado. Para esta simulación, esperamos dos ejecuciones sin efecto externo. No afirmes que el flujo evita duplicados: no lo hace.

Cuando un sistema crea registros o envía mensajes, necesita una estrategia de idempotencia: reconocer un evento ya procesado y evitar repetir su efecto. Ese control requiere diseño y pruebas específicas antes de conectar servicios reales. Hoy no lo implementaremos ni modificaremos bases de datos.

Distingue también un rechazo de validación de una falla técnica. Un campo vacío debe tomar la rama prevista. Un nodo que no puede ejecutar requiere diagnóstico; no debe ignorarse para que el flujo parezca funcionar.

### 09:30–10:45 — Evidencia y cierre

Completa la tabla Pruebas del flujo: Caso, Dato de prueba, Resultado esperado, Resultado real, Estado y Evidencia o nota. Usa los estados disponibles: No probado, Aprobado, Fallido o No aplica.

Documenta Camino feliz, Dato incompleto y Evento duplicado. No marques Aprobado sin ejecutar y observar el caso. Si solo seguiste el diseño, conserva No probado y explica qué falta.

El workbook incluye una tasa calculada, pero no reemplaza la revisión de cada fila. Una tasa alta no significa que el sistema esté listo para producción ni que tenga controles suficientes contra duplicados.

Guarda el diagrama y las evidencias. No publiques el flujo, no agregues un webhook productivo y no conectes credenciales. En el Paso 5 diseñaremos captación y seguimiento, conservando los mismos límites: alcance claro, datos ficticios, revisión humana y pruebas antes de activar.

## Demostración exacta

Cinco nodos, sin API ni credenciales:

Manual Trigger → Entrada ficticia (Edit Fields) → IF
- true → Resultado válido (Edit Fields)
- false → Revisión de dato (Edit Fields)

Entrada ficticia, modo JSON Output:

```json
{"lead_id":"DEMO-001","interes":"Curso"}
```

IF:
- String: `{{ $json.lead_id }}` → is not empty.
- String: `{{ $json.interes }}` → is not empty.
- Combinación: AND.
- Mantener los dos campos como texto.

Resultado válido, modo JSON Output:

```json
{"estado":"LISTO_PARA_REVISION"}
```

Revisión de dato, modo JSON Output:

```json
{"estado":"DATO_INCOMPLETO","motivo":"Revisar entrada"}
```

## Casos y criterios de aceptación

| Caso | Entrada | Resultado esperado | Evidencia |
|---|---|---|---|
| Camino feliz | DEMO-001 / Curso | Rama true, LISTO_PARA_REVISION | Captura de salida y ejecución |
| Dato incompleto | DEMO-001 / texto vacío | Rama false, DATO_INCOMPLETO | Captura; rechazo controlado |
| Evento duplicado | Entrada válida ejecutada dos veces | Dos resultados sin efecto externo; deduplicación NO implementada | Dos ejecuciones y nota de limitación |

No confundir el diseño con evidencia de ejecución. Este documento entrega el guion y sus fixtures; la ejecución en una instancia de n8n y su captura quedan pendientes de producción.

## Recursos visuales

- V04-01: título Paso 4 — n8n esencial.
- V04-02: flujo, nodo y disparador manual.
- V04-03: nueve columnas del workbook.
- V04-04: entrada ficticia y salida observable.
- V04-05: IF, dos condiciones y AND.
- V04-06: comparación del camino válido y dato incompleto.
- V04-07: dos ejecuciones; límite de duplicados explícito.
- V04-08: pruebas, evidencias y límites antes del Paso 5.

## Archivos esperados y QA de producción

- `LC_ATN7P_V04_N8N_MASTER_v1.mp4`
- `LC_ATN7P_V04_N8N_1080p_v1.mp4`
- `LC_ATN7P_V04_N8N_es-CL_v1.srt`
- `LC_ATN7P_V04_N8N_transcripcion_v1.pdf`
- Capturas del flujo y de las tres pruebas.

- [ ] Katherine aprueba el texto como guion maestro.
- [ ] Demostración ejecutada en una instancia de práctica autorizada.
- [ ] Lectura y demostración duran 10–12 minutos; las pausas del alumno no se cuentan.
- [ ] Nueve campos y seis columnas de pruebas coinciden con el workbook.
- [ ] Todas las entradas son ficticias.
- [ ] No hay nodos de API, envío, pago, borrado ni credenciales.
- [ ] Se muestran ambas ramas y la limitación de duplicados.
- [ ] Subtítulos sincronizados, audio claro y celdas legibles en móvil.
- [ ] La transcripción corresponde al video final.
- [ ] No se declara listo para producción ni libre de errores.

## Fuentes y trazabilidad

- [Inventario verificable](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit), consultado el 13-sep-2026: cuatro guiones existentes; cuatro faltantes.
- [Guía LMS histórica](https://docs.google.com/document/d/1xO4rogKVLc0ctrSseAdGH742hlVoi5Q5/edit): ruta esencial sin API antes de webhooks e integraciones.
- [Workbook, PR #4](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/4): hoja “4 n8n esencial”, diseño y casos de pruebas.
- [Video 03 existente en Drive](https://docs.google.com/document/d/1vmvr3ZEzOmImhSWjgoKAelUIka2X6mZ17KrUykQ75g4/edit): continuidad; no se duplica ni incorpora material confidencial de otros cursos.
- Documentación oficial consultada el 13-sep-2026: [Manual Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger/), [Edit Fields](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/) y [IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/).
- Los originales de Drive permanecen sin modificaciones.
