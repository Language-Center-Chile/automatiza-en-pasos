# Módulo 3 — IA aplicada: prompts reutilizables y seguros

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Estado:** candidato para revisión editorial y carga en LMS  
**Tiempo estimado:** 55–75 minutos  
**Materiales:** Video 03, hoja `3 IA aplicada` del workbook y acceso a una herramienta de IA autorizada  
**Evidencia mínima:** cinco prompts probados, sus mejoras y una versión final de cada uno

## Antes de comenzar

Completa primero los módulos de Diagnóstico y CRM. En este paso usarás inteligencia artificial para redactar, resumir, ordenar y clasificar información ficticia. No conectarás cuentas, enviarás mensajes ni automatizarás decisiones.

Nunca pegues credenciales, claves API, datos de pago, documentos de identidad, información médica, contratos, datos privados de clientes, alumnos, proveedores o trabajadores. Si no sabes si un dato puede utilizarse, no lo ingreses. Sustitúyelo por un ejemplo inventado.

## Resultados de aprendizaje

Al finalizar podrás:

1. construir un prompt con objetivo, contexto, tarea, límites, formato y revisión;
2. distinguir el contexto permitido de los datos prohibidos;
3. registrar un resultado observado sin confundirlo con una aprobación;
4. mejorar un prompt a partir de un problema verificable;
5. revisar hechos, tono y seguridad antes de reutilizar una respuesta;
6. documentar un prompt para que otra persona pueda entenderlo y probarlo.

## Ruta del módulo

1. Comprende qué vuelve reutilizable a un prompt — 8 minutos.
2. Reconoce los ocho campos del workbook — 7 minutos.
3. Construye una primera versión con seis piezas — 10 minutos.
4. Prueba y mejora cinco casos ficticios — 25–35 minutos.
5. Aplica los cinco controles de reutilización — 7 minutos.
6. Responde el quiz y entrega la evidencia — 8 minutos.

## 1. Qué es un prompt reutilizable

Un prompt es una instrucción para una herramienta de inteligencia artificial. Un prompt reutilizable deja visibles las partes que cambian y las reglas que deben mantenerse. Otra persona debería comprender qué entrada necesita, qué salida espera y qué límites debe respetar.

`Escribe un correo` no entrega suficiente información. Una instrucción útil aclara para quién se prepara el borrador, qué contexto ficticio puede usar, qué datos debe excluir, qué formato debe devolver y qué debe revisar antes de responder.

La respuesta de una IA es un borrador. No conoce automáticamente las políticas, precios, fechas, acuerdos ni condiciones vigentes de un negocio. Una persona debe comparar el resultado con la fuente permitida antes de copiarlo, compartirlo o incorporarlo a un proceso.

## 2. Los ocho campos de la hoja `3 IA aplicada`

Completa las columnas en este orden:

| Campo | Qué registra | Criterio de calidad |
|---|---|---|
| Caso | La situación ficticia que resolverás | Es concreta y no contiene datos reales |
| Objetivo | El resultado que necesitas | Comienza con un verbo verificable |
| Contexto permitido | La información que la IA sí puede usar | Es suficiente y proviene de una fuente autorizada |
| Datos prohibidos | La información que no debe aparecer | Incluye datos sensibles y restricciones del caso |
| Prompt v1 | La primera instrucción completa | Contiene las seis piezas del método |
| Resultado observado | Lo que funcionó o falló en la respuesta | Describe hechos, no impresiones generales |
| Mejora | El cambio que aplicarás al prompt | Corrige un problema específico |
| Prompt final | La versión corregida y nuevamente probada | Respeta formato, hechos y límites |

No copies una respuesta extensa en `Resultado observado`. Registra una nota como `respetó el tono, pero inventó una fecha` o `entregó la tabla solicitada, aunque omitió una columna`. El propósito es conservar evidencia que explique por qué cambiaste el prompt.

## 3. Método de seis piezas

Construye `Prompt v1` con estas piezas:

1. **Objetivo:** declara el resultado con un verbo: redactar, resumir, clasificar, comparar o convertir.
2. **Contexto permitido:** incluye únicamente los hechos que la herramienta puede utilizar.
3. **Tarea:** explica la acción concreta que debe realizar.
4. **Límites:** indica qué no debe inventar, revelar o decidir.
5. **Formato:** define la estructura de la respuesta.
6. **Revisión:** pide comprobar los hechos y marcar lo que falta.

### Plantilla base

```text
Objetivo: [resultado esperado].
Contexto permitido: [información ficticia o autorizada].
Tarea: [acción concreta].
Límites: no inventes [datos]; no incluyas [datos prohibidos]; no ejecutes acciones.
Formato: [estructura, extensión y campos].
Revisión: comprueba que cada afirmación provenga del contexto. Si falta información, escribe PENDIENTE DE CONFIRMAR.
```

El formato puede ser una tabla, una lista, un borrador con asunto y cuerpo, un procedimiento numerado o una clasificación con categorías definidas. Elige una estructura que puedas revisar con facilidad.

## 4. Ejemplo resuelto

### Caso

Preparar una respuesta ficticia para una persona interesada en un curso.

### Registro inicial

- **Objetivo:** redactar un borrador claro y cordial.
- **Contexto permitido:** descripción simulada del curso y pregunta ficticia.
- **Datos prohibidos:** nombres reales, precios no aprobados, fechas, cupos y promesas de resultado.
- **Prompt v1:** `Redacta una respuesta cordial para una persona interesada en el curso. Usa la descripción entregada. Devuelve asunto y cuerpo.`
- **Resultado observado:** el borrador mantuvo un tono cordial, pero inventó una fecha de inicio y disponibilidad.
- **Mejora:** limitar los hechos y exigir una lista de datos pendientes.

### Prompt final

```text
Objetivo: redactar un borrador de respuesta para una consulta general.
Contexto permitido: usa solo la descripción ficticia del curso y la pregunta incluidas después de esta instrucción.
Tarea: responde la pregunta en lenguaje claro y cordial.
Límites: no inventes precio, fecha, cupos, disponibilidad ni resultados. No incluyas datos personales ni envíes el mensaje.
Formato: devuelve 1) asunto, 2) cuerpo de hasta 120 palabras y 3) datos que requieren revisión humana.
Revisión: comprueba que cada hecho aparezca en el contexto. Si falta información, escribe PENDIENTE DE CONFIRMAR.
```

Vuelve a probar el prompt con otra consulta ficticia. La versión final solo puede conservarse si mantiene el formato y no repite el error observado.

## 5. Actividad guiada: cinco casos ficticios

Completa cinco filas en la hoja `3 IA aplicada`. Usa estos casos o adapta el tema sin incorporar información real.

| Caso | Objetivo sugerido | Formato verificable | Riesgo que debes controlar |
|---|---|---|---|
| Respuesta a consulta | Redactar un borrador | Asunto, cuerpo y pendientes | Fechas, precios o disponibilidad inventados |
| Notas a procedimiento | Convertir notas en pasos | Lista numerada con responsable | Omitir decisiones o agregar pasos no sustentados |
| Descripción de servicio | Resumir información | Resumen de 100 palabras y límites | Beneficios o garantías inventadas |
| Ideas de contenido | Proponer tres ideas | Tabla con idea, fuente y revisión | Afirmaciones sin fuente o promesas comerciales |
| Clasificación de consultas | Clasificar ejemplos | Tabla con categoría y justificación | Categorías ambiguas o decisiones sensibles |

Para cada fila:

1. completa `Caso`, `Objetivo`, `Contexto permitido` y `Datos prohibidos` antes de abrir la herramienta;
2. escribe un `Prompt v1` con las seis piezas;
3. pruébalo solo con datos ficticios;
4. registra un `Resultado observado` concreto;
5. define una sola `Mejora` trazable;
6. crea y prueba el `Prompt final`;
7. cambia uno o dos datos ficticios y comprueba que mantiene sus límites.

No declares terminado un prompt solo porque el texto suena bien. Comprueba si responde la tarea correcta, respeta el formato, usa únicamente el contexto permitido y distingue hechos conocidos de información faltante.

## 6. Cómo mejorar el resultado

Usa el problema observado para decidir el cambio:

| Problema | Mejora posible |
|---|---|
| La respuesta es demasiado general | Añade contexto permitido o un criterio de salida. |
| Inventa fechas, precios o cifras | Limita las fuentes y exige marcar lo desconocido. |
| El formato cambia en cada prueba | Define campos, orden y extensión exactos. |
| El tono no corresponde | Usa atributos concretos: claro, cordial y sin tecnicismos. |
| Omite una restricción | Coloca los límites en una sección separada y verificable. |
| Toma una decisión que corresponde a una persona | Pide opciones o un borrador, no una decisión ni ejecución. |

Registra una mejora por iteración. `Hacerlo mejor` no sirve como evidencia. Escribe cambios como `limitar a 120 palabras`, `pedir tres columnas exactas` o `prohibir descuentos no autorizados`.

## 7. Cinco controles antes de reutilizar

El workbook pide responder `Sí`, `No` o `No aplica` a estas preguntas:

1. ¿El objetivo está claro?
2. ¿Se excluyeron datos sensibles?
3. ¿El resultado contiene hechos verificables?
4. ¿Una persona revisó tono y exactitud?
5. ¿Puede reutilizarse sin riesgo?

Un `No` indica que el prompt necesita ajustes antes de guardarse como versión final. `No aplica` debe incluir una breve justificación. Nunca marques como reutilizable una respuesta con hechos no verificados, datos sensibles o instrucciones que ejecuten pagos, envíos, publicaciones o decisiones críticas.

La revisión humana consiste en comparar la respuesta con el contexto autorizado, corregir errores, comprobar tono y decidir si el uso propuesto corresponde. Una lectura rápida no reemplaza esa revisión.

## 8. Evidencia de término

Entrega una copia de la hoja `3 IA aplicada` con:

1. cinco casos completamente ficticios;
2. los ocho campos completos en cada fila;
3. cinco `Prompt v1` construidos con el método;
4. cinco resultados observados concretos;
5. una mejora trazable por caso;
6. cinco prompts finales probados nuevamente;
7. los cinco controles respondidos;
8. la confirmación `No contiene datos personales reales ni credenciales`.

Nombre sugerido: `M03_IA_Aplicada_ApellidoNombre_v01.xlsx`.

## 9. Quiz de comprobación

Selecciona una respuesta por pregunta. Puntaje sugerido de aprobación: **5 de 6**.

1. ¿Qué vuelve reutilizable a un prompt?
   - A. Que sea muy extenso.
   - B. Que deje visibles entradas, reglas y formato.
   - C. Que se guarde solo en el historial del chat.

2. ¿Dónde registras que la IA inventó una fecha?
   - A. Resultado observado.
   - B. Contexto permitido.
   - C. Caso.

3. ¿Qué debes escribir cuando falta un dato solicitado?
   - A. Una estimación razonable.
   - B. El dato de otro caso.
   - C. PENDIENTE DE CONFIRMAR.

4. ¿Cuál es una mejora trazable?
   - A. Hacerlo mejor.
   - B. Limitar la respuesta a 120 palabras.
   - C. Pedir una respuesta más inteligente.

5. ¿Cuándo puede reutilizarse una respuesta?
   - A. Cuando suena profesional.
   - B. Cuando una persona verificó hechos, tono y límites.
   - C. Cuando la herramienta indica que está segura.

6. ¿Qué información se permite en este ejercicio?
   - A. Datos ficticios y contexto autorizado.
   - B. Claves API de prueba.
   - C. Datos de clientes sin nombres.

### Respuestas

1. B — otra persona puede identificar entradas, reglas y salida esperada.  
2. A — el campo conserva el problema verificable de la prueba.  
3. C — no se inventan hechos para completar un borrador.  
4. B — define un cambio específico que puede probarse.  
5. B — la revisión humana compara el resultado con la fuente permitida.  
6. A — no se ingresan datos privados, sensibles ni credenciales.

## Checklist de cierre

- [ ] Completé cinco casos ficticios.
- [ ] Usé los ocho encabezados del workbook sin renombrarlos.
- [ ] Separé contexto permitido y datos prohibidos.
- [ ] Cada Prompt v1 contiene las seis piezas.
- [ ] Registré un resultado observado concreto por caso.
- [ ] Documenté una mejora verificable por caso.
- [ ] Probé cada Prompt final con una variación ficticia.
- [ ] Respondí los cinco controles de reutilización.
- [ ] Una persona revisó hechos, tono y límites.
- [ ] Confirmé que no incluí datos reales, credenciales ni acciones automáticas.

## Fuentes y trazabilidad

- Guía LMS histórica de “Automatiza tu Negocio en 7 Pasos”.
- Video 03 — IA aplicada: prompts reutilizables y seguros, versión para revisión editorial.
- Hoja `3 IA aplicada` del workbook del curso.
- Inventario verificable y matriz de aprobación editorial en Google Drive.
- Módulos 1 y 2 como prerrequisitos pedagógicos.

## Criterio de aprobación editorial

Este módulo puede cargarse en el LMS cuando Katherine confirme que los ocho campos, los cinco casos, los cinco controles, el tratamiento de datos ficticios y el quiz representan la versión maestra del Paso 3.
