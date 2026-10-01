# Módulo 6 — MVP demostrable: landing y formulario en modo local

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Estado:** candidato para revisión editorial y carga en LMS  
**Tiempo estimado:** 55–75 minutos  
**Materiales:** Video 06, hoja `6 MVP` del workbook y copia local autorizada de la landing  
**Evidencia mínima:** ficha del MVP, recorrido local, cuatro casos documentados y ocho controles QA

## Antes de comenzar

Completa primero los módulos 1–5. En esta práctica demostrarás una versión mínima de la landing y su formulario usando una copia local, datos ficticios y el modo demo. No publicarás la página, no conectarás un proveedor de formularios y no procesarás consultas reales.

La landing del repositorio es material de práctica, no una oferta comercial aprobada. Sus precios, textos, imágenes, planes, formulario, checkout y promesas quedan fuera de esta revisión. Si el formulario muestra un destino externo real, detén la prueba y registra el hallazgo sin abrirlo ni enviar información.

## Resultados de aprendizaje

Al finalizar podrás:

1. formular una pregunta pequeña que un MVP pueda responder;
2. documentar los seis campos de alcance del workbook;
3. recorrer una landing local desde el inicio hasta el formulario;
4. comprobar que el modo demo impide un envío externo;
5. registrar cuatro casos con resultado esperado, resultado real y evidencia;
6. evaluar los ocho controles QA sin confundir una prueba local con producción.

## Ruta del módulo

1. Define la pregunta y el alcance — 8 minutos.
2. Completa la ficha de seis campos — 10 minutos.
3. Prepara la copia local y los datos ficticios — 10–15 minutos.
4. Ejecuta o documenta cuatro casos — 15–20 minutos.
5. Completa los ocho controles QA — 8–12 minutos.
6. Responde el quiz y prepara la evidencia — 5–7 minutos.

## 1. Qué demuestra este MVP

Un MVP no es una versión incompleta presentada como producto final. Es una prueba acotada que responde una pregunta observable. En este módulo la pregunta es:

> ¿Una persona puede comprender la propuesta, llegar al formulario, completar datos ficticios y observar un aviso de modo demo sin que se envíe información?

El recorrido contiene cuatro puntos:

1. abrir la copia local de `index.html`;
2. reconocer el objetivo principal de la pantalla;
3. navegar hasta la sección de diagnóstico;
4. completar el formulario y observar el resultado seguro.

No agregues pagos, LMS, CRM, analítica, mensajería ni automatizaciones. Incluirlos cambiaría la pregunta y aumentaría el riesgo sin aportar evidencia a esta prueba.

## 2. Los seis campos de la hoja `6 MVP`

Completa la `Ficha del MVP` antes de abrir el formulario:

| Campo | Respuesta de práctica | Criterio de calidad |
|---|---|---|
| Problema que resuelve | Una persona interesada necesita entender la propuesta y encontrar el formulario | Necesidad concreta y observable |
| Usuario principal | Emprendedor ficticio que revisa el curso desde computador o móvil | Un usuario definido, sin datos reales |
| Entrada | Abrir una copia local de `index.html` | Punto de inicio reproducible |
| Resultado | Completar datos ficticios y observar un aviso de modo demo sin envío | Resultado visible y verificable |
| Fuera de alcance | Pagos, LMS, correo, WhatsApp, analítica, publicación y automatizaciones | Límites explícitos |
| Ubicación / enlace de prueba | Rama o carpeta local autorizada | Ruta real; no inventar URL pública |

Una buena ficha permite que otra persona comprenda qué se prueba y qué no. Si el resultado dice “landing lista”, el alcance es demasiado ambiguo. Reemplázalo por una conducta verificable.

## 3. Preparación segura de la copia local

La landing estática utiliza `index.html`, `styles.css`, `script.js` y recursos visuales. Trabaja desde una copia o rama separada y conserva el estado original.

Antes de probar:

1. confirma que no hay archivos `.env`, claves, tokens o credenciales;
2. abre `index.html` localmente o con un servidor local autorizado;
3. localiza el formulario `lead-form` y revisa su atributo `action`;
4. confirma que conserva el marcador de demostración `REEMPLAZAR_ID` o un destino local controlado;
5. revisa que `script.js` intercepte ese marcador y muestre un aviso sin enviar;
6. anota rama, commit o copia utilizada.

No cambies el marcador por una cuenta real para completar la actividad. Si el destino no es reconocible, trátalo como no autorizado y detén la prueba.

### Datos ficticios

| Campo | Valor de práctica |
|---|---|
| Nombre | Demo Persona |
| Email | `demo@example.test` |
| WhatsApp | `+56 9 0000 0000` |
| Caso o descripción | Consulta ficticia |

El dominio `.test` y el número reservado para demostración reducen el riesgo de contactar a una persona real. No reutilices capturas que contengan contactos de clientes.

## 4. Recorrido guiado

### Paso 1 — Comprensión

Abre la página y escribe, con tus palabras, qué ofrece y cuál parece ser el siguiente paso. Esta observación prueba comprensión básica; no valida que la promesa comercial esté aprobada.

### Paso 2 — Navegación

Usa un botón interno que apunte a `#diagnostico`. Confirma que la vista llega a la sección esperada y que el formulario es visible. Registra cualquier enlace roto como `Fallido`; no lo ocultes cambiando el recorrido.

### Paso 3 — Formulario completo

Completa los campos obligatorios con los datos ficticios. Antes de presionar el botón, vuelve a revisar el destino. El resultado esperado es un aviso de demostración y ningún envío.

### Paso 4 — Validación incompleta

Deja vacío un campo obligatorio. El navegador o el script debe impedir continuar y señalar qué falta. Una pantalla bloqueada, un envío silencioso o un mensaje que no explica la acción siguiente no cumple el criterio.

## 5. Cuatro casos obligatorios

Registra `Resultado esperado` antes de ejecutar y `Resultado real` después. Usa los estados `No probado`, `Aprobado`, `Fallido` o `No aplica`.

### Caso 1 — Recorrido feliz

- **Acción:** inicio → diagnóstico → datos ficticios → botón del formulario.
- **Resultado esperado:** aviso de modo demo; ningún envío externo.
- **Evidencia:** capturas del inicio, formulario y aviso, más ruta local.

### Caso 2 — Campo obligatorio vacío

- **Acción:** omitir un dato marcado como requerido.
- **Resultado esperado:** indicación clara y ningún envío.
- **Evidencia:** captura del mensaje de validación y nombre del campo.

### Caso 3 — Destino no autorizado

- **Acción:** inspeccionar y detectar una URL externa distinta del marcador demo.
- **Resultado esperado:** prueba detenida y hallazgo registrado sin visitar la URL.
- **Evidencia:** archivo y línea o fragmento no sensible; no copiar tokens.

### Caso 4 — Repetibilidad

- **Acción:** repetir las instrucciones en otra ventana o entregarlas a otra persona.
- **Resultado esperado:** mismo recorrido y mismo aviso de modo demo.
- **Evidencia:** registro de la segunda ejecución y diferencias observadas.

Si no ejecutas un caso, mantenlo `No probado`. Diseñar un caso no demuestra que el comportamiento exista.

## 6. Checklist QA del MVP

El workbook contiene cuatro columnas: `Control`, `Estado`, `Evidencia` y `Responsable`. Completa los ocho controles exactos:

| Control | Evidencia esperada | Responsable sugerido |
|---|---|---|
| Se entiende el objetivo | Explicación breve de una segunda persona o nota de observación | Revisión editorial |
| Navegación o recorrido completo | Capturas o registro desde inicio hasta formulario | QA |
| Campos y mensajes funcionan | Casos completo e incompleto con resultado observado | QA |
| Los errores tienen salida segura | Mensaje útil, sin envío silencioso ni bloqueo | QA |
| No contiene secretos ni datos reales | Búsqueda documentada y capturas con datos ficticios | Revisión técnica |
| Existe respaldo o control de versiones | Rama, commit o copia limpia identificada | Responsable técnico |
| Otra persona puede repetir la prueba | Instrucciones y segunda ejecución | QA |
| Cambios se pueden revertir | Commit reversible o copia original preservada | Responsable técnico |

Usa `Aprobado` únicamente cuando la evidencia coincide con el control. `No aplica` no sustituye una prueba pendiente. El estado de cada fila describe esta copia local, no la preparación general del producto para vender.

## 7. Uso opcional de un asistente de código

La prueba puede completarse manualmente. Si utilizas un asistente, limita primero su tarea a inspección:

```text
Inspecciona esta copia local. No instales dependencias, no uses credenciales,
no conectes servicios y no publiques. Propón una lista de comprobación para
el recorrido inicio a formulario. No modifiques archivos hasta mostrar el plan.
```

Si luego autorizas un cambio pequeño, especifica un solo archivo, revisa el diff y ejecuta las validaciones disponibles. El asistente no decide qué precios, datos, testimonios o promesas pueden publicarse.

## 8. Evidencia de término

Entrega:

1. ficha con los seis campos completos;
2. ubicación exacta de la copia o rama usada;
3. instrucciones breves para abrirla;
4. los cuatro casos con resultado esperado, real, estado y evidencia;
5. los ocho controles QA con responsable;
6. capturas sin datos personales;
7. confirmación escrita: `El formulario permaneció en modo demo y no envié datos`;
8. lista de elementos fuera de alcance.

Nombre sugerido: `M06_MVP_Documentado_ApellidoNombre_v01.xlsx`. Las capturas pueden reunirse en `M06_MVP_Evidencia_ApellidoNombre_v01.pdf`.

## 9. Quiz de comprobación

Selecciona una respuesta por pregunta. Puntaje sugerido de aprobación: **5 de 6**.

1. ¿Qué pregunta responde este MVP?
   - A. Si el checkout puede cobrar.
   - B. Si una persona entiende la propuesta, llega al formulario y obtiene un aviso demo.
   - C. Si la landing está lista para publicar.

2. ¿Qué debe aparecer en `Ubicación / enlace de prueba`?
   - A. Una URL pública inventada.
   - B. La ruta local o rama real utilizada.
   - C. La contraseña del hosting.

3. ¿Qué haces si el formulario apunta a un destino externo no autorizado?
   - A. Envías datos ficticios para comprobarlo.
   - B. Reemplazas el destino por una cuenta propia.
   - C. Detienes la prueba y registras el hallazgo.

4. ¿Cuándo corresponde marcar un control `Aprobado`?
   - A. Cuando existe evidencia que coincide con el criterio.
   - B. Cuando el diseño se ve completo.
   - C. Cuando el caso aún no se ejecuta.

5. ¿Qué demuestra el caso de repetibilidad?
   - A. Que otra ejecución puede seguir los mismos pasos y obtener el mismo resultado.
   - B. Que la landing puede desplegarse.
   - C. Que los precios están aprobados.

6. ¿Qué queda fuera de alcance?
   - A. La ficha y el checklist.
   - B. El recorrido local.
   - C. Pagos, LMS, publicación y conexiones externas.

### Respuestas

1. B — la pregunta se limita a comprensión, navegación y modo demo.  
2. B — la ubicación debe ser real y verificable.  
3. C — no se abre ni prueba un destino no autorizado.  
4. A — el estado depende de evidencia observable.  
5. A — repetir no equivale a publicar.  
6. C — esos componentes requieren decisiones y pruebas separadas.

## Checklist de cierre

- [ ] Definí una sola pregunta verificable para el MVP.
- [ ] Completé los seis campos exactos del workbook.
- [ ] Trabajé desde una copia local o rama separada.
- [ ] Confirmé el modo demo antes de usar el formulario.
- [ ] Utilicé únicamente datos ficticios.
- [ ] Registré los cuatro casos con evidencia honesta.
- [ ] Completé los ocho controles y asigné responsables.
- [ ] Documenté una segunda ejecución o la dejé `No probado`.
- [ ] Identifiqué cómo revertir cualquier cambio.
- [ ] Confirmé que no publiqué, conecté servicios ni envié datos.

## Fuentes y trazabilidad

- Guía LMS histórica de “Automatiza tu Negocio en 7 Pasos”.
- Video 06 — MVP demostrable: landing y formulario en modo local, disponible en Google Drive.
- Hoja `6 MVP` del workbook verificado del curso.
- Landing estática base y landing candidata del PR #3, usadas solo como referencia.
- Módulo 5 — Captación y seguimiento, como prerrequisito pedagógico.
- Inventario verificable y checklist de revisión de Katherine en Google Drive.

## Criterio de aprobación editorial

Este módulo puede cargarse en el LMS cuando Katherine confirme que la pregunta del MVP, los seis campos, cuatro casos, ocho controles y límites de modo local representan la versión maestra del Paso 6.
