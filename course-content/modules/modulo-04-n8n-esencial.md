# Módulo 4 — n8n esencial: primer flujo sin API

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Estado:** candidato para revisión editorial y carga en LMS  
**Tiempo estimado:** 55–75 minutos  
**Materiales:** Video 04, hoja `4 n8n esencial` del workbook y una instancia de práctica autorizada  
**Evidencia mínima:** diagrama, una ejecución válida, un rechazo controlado y una prueba de repetición documentada

## Antes de comenzar

Completa primero los módulos 1–3. En esta práctica construirás un flujo manual con datos ficticios. No conectarás correo, CRM, pagos, formularios, webhooks ni API. Tampoco instalarás servicios, contratarás planes o cambiarás infraestructura.

Si no tienes una instancia de n8n autorizada, completa el diseño y conserva los casos como `No probado`. No uses credenciales ajenas ni transformes una simulación en una conexión real para terminar la actividad.

## Resultados de aprendizaje

Al finalizar podrás:

1. distinguir un workflow, un nodo, un disparador, una entrada y una salida;
2. diseñar un flujo mínimo antes de configurarlo;
3. construir una entrada ficticia con dos campos;
4. separar el camino válido y el rechazo mediante un nodo IF;
5. comparar el resultado esperado con el resultado real;
6. documentar la repetición sin afirmar que existe deduplicación.

## Ruta del módulo

1. Reconoce los elementos del lienzo — 7 minutos.
2. Completa el diseño en el workbook — 8 minutos.
3. Construye el flujo de cinco nodos — 20–25 minutos.
4. Ejecuta o documenta tres casos — 15–20 minutos.
5. Revisa evidencia, límites y resultado — 5–8 minutos.
6. Responde el quiz y entrega — 5–7 minutos.

## 1. Conceptos básicos

- **Workflow:** secuencia completa de pasos conectados.
- **Nodo:** tarea dentro del flujo.
- **Disparador:** condición que inicia una ejecución.
- **Entrada:** datos que recibe un nodo.
- **Salida:** datos que entrega después de operar.
- **Rama:** recorrido que sigue la información según una condición.
- **Ejecución:** registro de una prueba concreta del flujo.

Usaremos `Manual Trigger` para iniciar cada prueba de manera deliberada. Un disparador manual no vuelve seguro un flujo que contenga envíos, borrados o conexiones reales. Por eso este ejercicio no incorpora acciones externas.

## 2. Los nueve campos de la hoja `4 n8n esencial`

Antes de abrir n8n, documenta el diseño:

| Campo | Contenido de esta práctica | Criterio de calidad |
|---|---|---|
| Flujo | Clasificar consulta ficticia | Nombre breve y específico |
| Disparador | Manual Trigger | No responde a eventos externos |
| Entrada | `lead_id` e `interes` ficticios | Campos y tipos identificados |
| Validación | Ambos textos no están vacíos | Regla observable |
| Acción | Preparar un resultado dentro de n8n | Sin envíos ni cambios externos |
| Salida | `LISTO_PARA_REVISION` o `DATO_INCOMPLETO` | Estados inequívocos |
| Manejo de error | Detener y enviar a revisión humana | No ignora fallas |
| Responsable humano | Persona o rol que revisa | Responsabilidad explícita |
| Evidencia | Capturas o nota de lo observado | Permite reconstruir la prueba |

El diseño describe lo que el flujo debe hacer. La evidencia demuestra lo que realmente ocurrió. No marques una prueba como aprobada solo porque el diagrama parece correcto.

## 3. Flujo de práctica

El flujo contiene cinco nodos:

```text
Manual Trigger → Entrada ficticia (Edit Fields) → IF
                                                   ├─ true  → Resultado válido (Edit Fields)
                                                   └─ false → Revisión de dato (Edit Fields)
```

No agregues nodos de correo, mensajería, almacenamiento, pago, borrado, formulario, webhook o API.

### Paso 1: crea el flujo

1. Crea un workflow nuevo en la instancia autorizada.
2. Mantén el nodo `Manual Trigger`.
3. Añade `Edit Fields`, también llamado `Set` en algunas versiones.
4. Renómbralo `Entrada ficticia`.
5. Conecta `Manual Trigger` con `Entrada ficticia`.

### Paso 2: configura la entrada

Selecciona `JSON Output` y usa:

```json
{"lead_id":"DEMO-001","interes":"Curso"}
```

Ejecuta hasta este nodo. La salida debe contener los dos campos como texto. Si aparece un error de JSON, revisa comillas, comas y llaves. No cambies configuraciones globales para corregir un error de escritura.

### Paso 3: añade la validación

1. Conecta un nodo `IF` después de `Entrada ficticia`.
2. Agrega una condición de texto para `{{ $json.lead_id }}` con `is not empty`.
3. Agrega otra para `{{ $json.interes }}` con `is not empty`.
4. Combina ambas condiciones con `AND`.

La condición comprueba únicamente que los textos no estén vacíos. No verifica identidad, consentimiento, formato de correo ni calidad completa del dato.

### Paso 4: configura ambas ramas

En la rama verdadera conecta un nodo `Edit Fields` llamado `Resultado válido`:

```json
{"estado":"LISTO_PARA_REVISION"}
```

En la rama falsa conecta otro `Edit Fields` llamado `Revisión de dato`:

```json
{"estado":"DATO_INCOMPLETO","motivo":"Revisar entrada"}
```

`LISTO_PARA_REVISION` indica que una persona puede revisar el resultado. No autoriza un envío, una compra ni una publicación.

## 4. Las seis columnas de prueba

La tabla `Pruebas del flujo` utiliza:

| Columna | Qué debes registrar |
|---|---|
| Caso | Nombre estable de la prueba |
| Dato de prueba | Entrada exacta utilizada |
| Resultado esperado | Qué rama y salida deberían aparecer |
| Resultado real | Qué ocurrió en la ejecución observada |
| Estado | `No probado`, `Aprobado`, `Fallido` o `No aplica` |
| Evidencia / nota | Captura, referencia o limitación |

Escribe el resultado esperado antes de ejecutar. Después registra el resultado real. Una pantalla verde solo confirma que los nodos pudieron ejecutarse. La prueba se aprueba cuando el resultado real coincide con el esperado.

El workbook calcula una `Tasa aprobada`, pero esa cifra no demuestra que el flujo esté listo para producción. Debes revisar cada fila, los casos pendientes y los riesgos no cubiertos.

## 5. Tres casos obligatorios

### Caso 1: Camino feliz

- **Dato de prueba:** `{"lead_id":"DEMO-001","interes":"Curso"}`
- **Resultado esperado:** rama `true` y estado `LISTO_PARA_REVISION`.
- **Evidencia:** salida del último nodo y referencia de la ejecución.

Ejecuta el workflow completo. Abre la salida de `Resultado válido` y compara los campos con el resultado esperado.

### Caso 2: Dato incompleto

- **Dato de prueba:** `{"lead_id":"DEMO-001","interes":""}`
- **Resultado esperado:** rama `false`, estado `DATO_INCOMPLETO` y motivo `Revisar entrada`.
- **Evidencia:** salida del rechazo controlado.

Un dato incompleto que toma la rama falsa representa una validación correcta. Si ambas entradas recorren la misma rama, revisa nombres de campo, expresiones, tipos de texto y combinación `AND`.

### Caso 3: Evento duplicado

- **Dato de prueba:** ejecuta dos veces la entrada válida con `DEMO-001`.
- **Resultado esperado:** dos resultados sin efecto externo.
- **Evidencia:** dos ejecuciones y nota `Deduplicación no implementada`.

Este flujo no almacena identificadores procesados. Por eso repite el resultado. No marques este caso como prueba de deduplicación. Un sistema real que crea registros o envía mensajes necesita idempotencia y pruebas específicas antes de conectarse a servicios.

## 6. Diagnóstico básico

| Situación | Qué revisar |
|---|---|
| JSON inválido | Comillas dobles, comas y llaves |
| Campo vacío toma la rama verdadera | Expresión, operador y combinación AND |
| No aparece el nodo esperado | Conexión de las ramas true y false |
| El resultado parece antiguo | Abre la ejecución más reciente |
| El nodo no ejecuta | Lee el error; no lo ocultes ni lo conviertas en aprobado |

Distingue un rechazo previsto de una falla técnica. `DATO_INCOMPLETO` es una salida controlada. Un nodo que no puede ejecutar necesita diagnóstico y debe registrarse como `Fallido` o `No probado`, según corresponda.

## 7. Evidencia de término

Entrega:

1. los nueve campos del diseño completos;
2. el diagrama con cinco nodos y dos ramas;
3. los tres casos registrados en las seis columnas de prueba;
4. evidencia del camino feliz y del dato incompleto, si ejecutaste el flujo;
5. dos ejecuciones o una nota clara sobre el evento duplicado;
6. estados que distingan lo ejecutado de lo pendiente;
7. confirmación escrita: `No usa API, credenciales, webhooks ni datos reales`.

Nombre sugerido: `M04_n8n_Esencial_ApellidoNombre_v01.xlsx`. Las capturas pueden incorporarse a un PDF llamado `M04_n8n_Evidencia_ApellidoNombre_v01.pdf`.

## 8. Quiz de comprobación

Selecciona una respuesta por pregunta. Puntaje sugerido de aprobación: **5 de 6**.

1. ¿Qué inicia el flujo de esta práctica?
   - A. Un webhook público.
   - B. Manual Trigger.
   - C. Una agenda automática.

2. ¿Qué condición utiliza el nodo IF?
   - A. Que ambos textos no estén vacíos.
   - B. Que exista un correo real.
   - C. Que el lead tenga autorización comercial.

3. ¿Qué significa `LISTO_PARA_REVISION`?
   - A. El mensaje puede enviarse automáticamente.
   - B. El sistema está listo para producción.
   - C. Una persona puede revisar el resultado.

4. ¿Cuándo se marca una prueba como `Aprobado`?
   - A. Cuando el resultado real coincide con el esperado.
   - B. Cuando todos los nodos aparecen verdes.
   - C. Cuando el diseño está completo.

5. ¿Qué demuestra ejecutar dos veces `DEMO-001`?
   - A. Que existe deduplicación.
   - B. Que el flujo repite el resultado y falta idempotencia.
   - C. Que la segunda ejecución debe eliminarse.

6. Si no tienes una instancia autorizada, ¿qué corresponde hacer?
   - A. Contratar una para terminar el curso.
   - B. Usar credenciales compartidas.
   - C. Completar el diseño y mantener los casos como `No probado`.

### Respuestas

1. B — cada ejecución se inicia deliberadamente.  
2. A — ambas condiciones de texto se combinan con `AND`.  
3. C — no autoriza ninguna acción externa.  
4. A — la evidencia debe coincidir con la expectativa definida.  
5. B — la práctica no implementa deduplicación.  
6. C — no se compran servicios ni se usan accesos no autorizados.

## Checklist de cierre

- [ ] Completé los nueve campos de diseño.
- [ ] El flujo contiene exactamente cinco nodos.
- [ ] La entrada usa solo `lead_id` e `interes` ficticios.
- [ ] El IF comprueba ambos campos con `AND`.
- [ ] Configuré o documenté las ramas verdadera y falsa.
- [ ] Registré los tres casos en las seis columnas de prueba.
- [ ] Comparé resultado esperado y resultado real.
- [ ] Dejé `No probado` todo caso que no ejecuté.
- [ ] Documenté que la deduplicación no está implementada.
- [ ] Confirmé que no usé API, credenciales, webhooks ni datos reales.

## Fuentes y trazabilidad

- Guía LMS histórica de “Automatiza tu Negocio en 7 Pasos”.
- Video 04 — n8n esencial: primer flujo sin API, versión para revisión editorial.
- Hoja `4 n8n esencial` del workbook del curso.
- Inventario verificable y matriz de aprobación editorial en Google Drive.
- Módulo 3 — IA aplicada, como prerrequisito pedagógico.

## Criterio de aprobación editorial

Este módulo puede cargarse en el LMS cuando Katherine confirme que los nueve campos, las seis columnas de prueba, los tres casos, el límite de duplicados y el quiz representan la versión maestra del Paso 4.
