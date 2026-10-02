# Módulo 7 — Implementación segura, medición y roadmap de 30 días

**Producto:** Automatiza tu Negocio en 7 Pasos  
**Estado:** candidato para revisión editorial y carga en LMS  
**Tiempo estimado:** 60–80 minutos  
**Materiales:** Video 07, hoja `7 Implementacion` del workbook y evidencia de los módulos 1–6  
**Evidencia mínima:** matriz de seis pruebas, medición comparable y roadmap con responsable, fecha y métrica

## Antes de comenzar

Completa primero los módulos 1–6 y trabaja únicamente con el MVP local, datos ficticios y servicios apagados. Este cierre no autoriza producción. No publiques, despliegues, conectes formularios, envíes mensajes, cobres, otorgues accesos ni uses credenciales reales.

El objetivo es demostrar qué está probado, qué falló y qué sigue pendiente. Un estado `No probado` es válido cuando falta un entorno autorizado. No lo reemplaces por `Aprobado` para completar el workbook.

## Resultados de aprendizaje

Al finalizar podrás:

1. definir resultados observables para seis pruebas finales;
2. registrar evidencia, riesgo, reversa y responsable;
3. medir un mismo caso antes y después sin inventar impacto;
4. interpretar correctamente la fórmula `Después - Antes`;
5. construir un roadmap ejecutable de 30 días;
6. aplicar una puerta de decisión antes de vender o activar producción.

## Ruta del módulo

1. Prepara la matriz de pruebas — 8 minutos.
2. Ejecuta o documenta seis casos — 20–25 minutos.
3. Completa la medición antes/después — 10–15 minutos.
4. Construye el roadmap — 12–15 minutos.
5. Revisa la puerta de decisión — 5–8 minutos.
6. Responde el quiz y entrega — 5–7 minutos.

## 1. Cerrar significa poder demostrar

Durante el curso identificaste un proceso, ordenaste información, diseñaste prompts, modelaste un flujo, preparaste captación y documentaste un MVP. El cierre no consiste en encender todas las herramientas. Consiste en presentar evidencia reproducible y una decisión clara para cada riesgo abierto.

La hoja `7 Implementacion` contiene tres bloques:

1. **Prueba final:** seis casos con riesgo y acción de reversa.
2. **Medición antes / después:** cinco filas para comparar resultados equivalentes.
3. **Roadmap de 30 días:** hasta ocho acciones priorizadas.

Completa cada bloque en ese orden. El roadmap debe responder a lo observado en las pruebas, no a una lista genérica de deseos.

## 2. Las siete columnas de la prueba final

| Columna | Qué registrar | Criterio de calidad |
|---|---|---|
| Prueba final | Uno de los seis casos definidos | Nombre sin cambios |
| Resultado esperado | Conducta visible antes de ejecutar | No escribir solo “funciona” |
| Estado | `No probado`, `Aprobado`, `Fallido` o `No aplica` | Coherente con evidencia |
| Evidencia | Captura, nota o referencia reproducible | Sin datos personales ni secretos |
| Riesgo si falla | Consecuencia concreta | Relacionada con el caso |
| Acción de reversa | Cómo regresar a un estado seguro | Reversible y no destructiva |
| Responsable | Persona o rol que decide y actúa | Identificable |

Completa `Resultado esperado`, `Riesgo si falla`, `Acción de reversa` y `Responsable` antes de ejecutar. Después registra evidencia y estado.

## 3. Las seis pruebas finales

### Prueba 1 — Recorrido principal

- **Resultado esperado:** inicio → formulario → aviso demo, sin envío externo.
- **Riesgo si falla:** recorrido interrumpido o expectativa falsa de envío.
- **Acción de reversa:** volver a la copia local versionada.
- **Evidencia:** capturas del inicio, formulario y aviso.

Usa `Demo Persona` y un correo con dominio `.test`. No conectes un destino para obtener evidencia.

### Prueba 2 — Dato incompleto

- **Resultado esperado:** validación clara y ningún procesamiento.
- **Riesgo si falla:** se aceptan datos insuficientes o se bloquea a la persona sin explicación.
- **Acción de reversa:** restaurar la validación anterior mediante un cambio revisable.
- **Evidencia:** captura del campo requerido y del aviso.

### Prueba 3 — Duplicado

- **Resultado esperado:** riesgo documentado; deduplicación no implementada en la landing demo.
- **Riesgo si falla:** una futura conexión podría duplicar consultas o mensajes.
- **Acción de reversa:** mantener envíos apagados y regresar al proceso manual.
- **Evidencia:** dos intentos ficticios y nota de limitación.

Como no existe almacenamiento, esta prueba debe permanecer `No probado`. Repetir el formulario local no demuestra idempotencia.

### Prueba 4 — Servicio no disponible

- **Resultado esperado:** aviso seguro sin prometer entrega.
- **Riesgo si falla:** la persona cree que su solicitud fue enviada.
- **Acción de reversa:** retirar el destino de prueba o volver al modo demo.
- **Evidencia:** captura del mensaje local.

En esta demo sin conexión externa solo puedes revisar el mensaje local; no puedes demostrar el manejo de una caída real. Mantén este caso `No probado` hasta disponer de un sandbox autorizado con una respuesta de error simulada y verificable. No desconectes un servicio real para simular una caída.

### Prueba 5 — Privacidad / permisos

- **Resultado esperado:** archivos y capturas sin secretos ni datos reales.
- **Riesgo si falla:** exposición de credenciales, contactos o permisos excesivos.
- **Acción de reversa:** retirar el archivo de circulación e informar al responsable; una credencial expuesta se rota solo mediante el proceso autorizado.
- **Evidencia:** registro de búsqueda sin copiar valores sensibles.

### Prueba 6 — Recuperación

- **Resultado esperado:** versión previa identificable y disponible.
- **Riesgo si falla:** no existe una ruta clara para volver al estado estable.
- **Acción de reversa:** retirar el cambio propuesto o crear un commit de reversión revisable.
- **Evidencia:** rama, commit o copia limpia.

No uses `reset --hard`, force-push ni una acción destructiva como demostración.

## 4. Cómo asignar estados

- **No probado:** falta ejecución o entorno autorizado.
- **Aprobado:** el resultado real coincide con el esperado y existe evidencia.
- **Fallido:** el resultado real no coincide; necesita acción y responsable.
- **No aplica:** el caso está justificadamente fuera del alcance.

Una prueba fallida no invalida todo el trabajo. Hace visible un riesgo que debe entrar al roadmap. Una prueba diseñada, pero no ejecutada, sigue `No probado`.

## 5. Medición antes / después

La tabla usa seis columnas:

| Columna | Uso |
|---|---|
| Métrica | Variable observable |
| Antes | Resultado del proceso manual |
| Después | Resultado del MVP local |
| Unidad | Minutos, pasos, campos u otra unidad estable |
| Cambio | Fórmula `Después - Antes` |
| Interpretación | Explicación limitada a la evidencia |

### Protocolo

1. Elige un solo caso ficticio.
2. Define inicio y término de la medición.
3. Ejecuta el proceso manual y registra `Antes`.
4. Ejecuta el MVP local y registra `Después`.
5. Conserva la misma unidad y criterio.
6. Revisa el `Cambio` calculado.
7. Escribe una interpretación sin prometer resultados comerciales.

Ejemplo: si el recorrido manual toma 8 minutos y el local 6, el cambio es `-2 minutos`. Esto demuestra dos minutos menos en esa prueba, no un ahorro permanente ni un aumento de ventas.

Si falta una ejecución comparable, deja los números vacíos y escribe `Medición pendiente`. No completes datos estimados como si fueran resultados.

## 6. Roadmap de 30 días

La tabla contiene siete columnas:

| Columna | Criterio |
|---|---|
| Prioridad | `Alta`, `Media` o `Baja` |
| Acción | Entregable concreto |
| Responsable | Persona o rol con capacidad de decisión |
| Fecha objetivo | Fecha dentro de los próximos 30 días |
| Métrica | Criterio observable de término |
| Estado | `Pendiente`, `En curso` o `Completado` |
| Dependencia | Decisión o recurso previo |

### Roadmap inicial de práctica

Ejemplo ficticio: una pequeña empresa prepara un formulario de consultas. Adapta las acciones al MVP que elegiste durante el curso; estas tareas no corresponden a la operación interna de LC Chile.

| Prioridad | Acción | Responsable | Fecha objetivo | Métrica | Estado | Dependencia |
|---|---|---|---|---|---|---|
| Alta | Resolver la validación de campos incompletos | Responsable del MVP | Día 7 | Caso incompleto bloqueado con aviso claro | Pendiente | Resultado de la prueba 2 |
| Alta | Diseñar la deduplicación de consultas en sandbox | Responsable técnico | Día 14 | Regla documentada y caso repetido verificable | Pendiente | Almacenamiento de prueba autorizado |
| Alta | Probar la respuesta ante un servicio no disponible | Responsable técnico | Día 21 | Error simulado sin prometer envío exitoso | Pendiente | Sandbox autorizado |
| Media | Repetir la medición del recorrido y revisar resultados | Responsable del proceso | Día 30 | Comparación con igual caso, unidad e inicio/término | Pendiente | Casos anteriores documentados |

Sustituye `Día 7`, `Día 14`, `Día 21` y `Día 30` por fechas reales al iniciar el roadmap. No marques una acción `En curso` si su dependencia todavía está abierta.

## 7. Puerta de decisión antes de activar tu MVP

Para tu negocio de práctica, exige pruebas críticas aprobadas, riesgos abiertos con responsable, permisos revisados, recuperación documentada y medición comparable. Una decisión de activar el MVP requiere evidencia de su propio alcance.

### Referencia: cierre comercial del curso LC Chile

La siguiente lista pertenece al producto educativo de LC Chile y sirve como ejemplo de una puerta comercial más amplia. No es una tarea del alumno ni reemplaza los criterios del MVP de su negocio.

El producto no está listo para vender hasta que exista evidencia de:

- ocho guiones aprobados y ocho videos finales accesibles;
- bienvenida y siete módulos cargados y navegables;
- workbook, evaluaciones y descargables probados;
- derechos de uso, subtítulos y transcripciones verificados;
- landing y formulario finales aprobados;
- precio y condiciones aprobados por la responsable del producto;
- checkout y pago probados en sandbox;
- acceso, onboarding y entrega confirmados;
- canal de soporte, responsable y límites definidos;
- recorrido completo desde landing hasta materiales documentado.

La aprobación editorial no autoriza pagos. Una prueba de pago no autoriza publicación. Mantén cada decisión separada y registra responsable y evidencia.

## 8. Evidencia de término

Entrega:

1. seis pruebas con resultado esperado, estado, evidencia, riesgo, reversa y responsable;
2. al menos una medición comparable o una justificación `Medición pendiente`;
3. roadmap con cuatro o más acciones;
4. responsables, fechas, métricas y dependencias explícitas;
5. lista de riesgos abiertos;
6. confirmación escrita: `No activé producción, pagos, envíos ni accesos`;
7. ubicación del workbook y evidencias sin datos reales.

Nombre sugerido: `M07_Implementacion_Roadmap_ApellidoNombre_v01.xlsx`. Las capturas pueden reunirse en `M07_Evidencia_Final_ApellidoNombre_v01.pdf`.

## 9. Quiz de comprobación

Selecciona una respuesta por pregunta. Puntaje sugerido de aprobación: **5 de 6**.

1. ¿Qué estado corresponde a una prueba diseñada, pero no ejecutada?
   - A. Aprobado.
   - B. No probado.
   - C. Completado.

2. ¿Qué significa la fórmula `Después - Antes`?
   - A. El cambio entre mediciones comparables.
   - B. El porcentaje de ventas.
   - C. La calidad general del producto.

3. ¿Qué demuestra repetir datos en una landing sin almacenamiento?
   - A. Que la deduplicación funciona.
   - B. Que el checkout está listo.
   - C. Que la deduplicación sigue pendiente de una prueba técnica.

4. ¿Qué debe incluir una acción del roadmap?
   - A. Solo una idea general.
   - B. Responsable, fecha, métrica, estado y dependencia.
   - C. Una promesa comercial.

5. ¿Qué acción de reversa es segura para un cambio versionado?
   - A. Eliminar el repositorio.
   - B. Force-push de la rama principal.
   - C. Retirar el cambio o crear una reversión revisable.

6. ¿Cuándo puede aprobarse la activación del MVP?
   - A. Cuando termina el módulo.
   - B. Cuando la landing abre localmente.
   - C. Cuando las pruebas críticas, permisos, recuperación y riesgos del alcance tienen evidencia y aprobación.

### Respuestas

1. B — sin ejecución no existe evidencia de aprobación.  
2. A — la interpretación depende también de la unidad.  
3. C — la demo no implementa idempotencia.  
4. B — esos campos convierten la acción en verificable.  
5. C — la reversa debe ser trazable y no destructiva.  
6. C — completar el módulo no demuestra que el MVP esté listo para activarse.

## Checklist de cierre

- [ ] Completé las siete columnas de las seis pruebas.
- [ ] Definí resultados esperados antes de ejecutar.
- [ ] Usé estados coherentes con la evidencia.
- [ ] Documenté riesgo y reversa para cada prueba.
- [ ] Medí el mismo caso con la misma unidad o declaré el bloqueo.
- [ ] Interpreté el cambio sin inventar impacto comercial.
- [ ] Creé al menos cuatro acciones para los próximos 30 días.
- [ ] Asigné responsable, fecha, métrica y dependencia.
- [ ] Revisé la puerta de decisión antes de vender.
- [ ] Confirmé que no activé producción, pagos, envíos ni accesos.

## Fuentes y trazabilidad

- Video 07 — Implementación segura, medición y roadmap de 30 días, en Google Drive.
- Hoja `7 Implementacion` del workbook verificado.
- Guía LMS histórica de “Automatiza tu Negocio en 7 Pasos”.
- Registro RPM-2026-015 e inventario verificable del producto.
- Módulo 6 — MVP documentado, como prerrequisito pedagógico.
- Los originales de Drive permanecen sin modificaciones.

## Criterio de aprobación editorial

Este módulo puede cargarse en el LMS cuando Katherine confirme que las seis pruebas, las tablas de medición y roadmap, la puerta de decisión y los límites de entorno representan la versión maestra del Paso 7.
