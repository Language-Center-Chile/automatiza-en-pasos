# Módulo 1 · Diagnóstico y priorización

**Producto:** Automatiza tu Negocio en 7 Pasos

**Estado:** candidato para revisión y carga en LMS

**Duración estimada:** 45–60 minutos

**Evidencia de término:** inventario de procesos, mapa del proceso seleccionado y priorización completa en el workbook

## Antes de comenzar

Necesitas:

- haber completado la ficha inicial de la hoja `Ruta`;
- una copia del [workbook práctico del curso](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/4);
- el [Video 01 · Diagnóstico y priorización](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/6), cuando esté aprobado y disponible en el LMS;
- un proceso que conozcas bien y datos ficticios para los ejemplos.

No conectes herramientas ni uses datos personales, credenciales, cobros o sistemas de producción durante este módulo.

## Qué aprenderás

Al finalizar podrás:

1. reconocer un proceso repetitivo con inicio, pasos y resultado;
2. registrar entre tres y cinco procesos con una línea base aproximada;
3. describir el proceso actual sin reemplazarlo todavía por una versión ideal;
4. comparar candidatos según impacto, riesgo de error y esfuerzo;
5. elegir un primer piloto acotado, medible y reversible.

## Ruta del módulo

| Etapa | Actividad | Tiempo sugerido |
|---|---|---:|
| 1 | Ver el Video 01 | 10 min |
| 2 | Crear el inventario de procesos | 10 min |
| 3 | Mapear el proceso actual | 15 min |
| 4 | Priorizar y justificar la elección | 10 min |
| 5 | Completar el quiz y revisar la evidencia | 10 min |

## 1. Identifica procesos, no áreas

Un proceso es una secuencia de acciones que transforma una entrada en un resultado. Debe tener un inicio y un final reconocibles.

Escribe acciones concretas:

| Demasiado amplio | Proceso observable |
|---|---|
| Ventas | Registrar una consulta y asignar seguimiento |
| Administración | Consolidar comprobantes para el cierre mensual |
| Atención al cliente | Clasificar una solicitud y responder su recepción |
| Marketing | Programar y revisar una publicación semanal |

Busca tareas que:

- ocurren con frecuencia;
- siguen reglas relativamente claras;
- consumen tiempo de manera repetida;
- producen errores o retrasos observables;
- pueden probarse sin afectar producción.

Una tarea rara, cambiante o dependiente de criterio experto puede requerir mejoras, pero no suele ser el mejor primer piloto.

## 2. Construye una línea base aproximada

Abre la hoja `1 Diagnostico`. En las filas 8 a 15 registra entre tres y cinco procesos.

Completa estas columnas:

| Campo | Qué registrar |
|---|---|
| Proceso | Acción concreta que se repite |
| Frecuencia/semana | Cantidad aproximada de ejecuciones semanales |
| Minutos/vez | Tiempo promedio por ejecución |
| Impacto (1–5) | Cuánto mejoraría el resultado si el proceso fuera más consistente |
| Riesgo de error (1–5) | Qué tan problemáticos son hoy los errores o retrasos |
| Esfuerzo (1–5) | Dificultad prevista para documentar, probar e integrar la mejora |

El workbook calcula:

```text
Horas/mes = frecuencia semanal × minutos por vez × 4,33 ÷ 60

Puntaje de prioridad = (impacto + riesgo de error) × máximo(horas/mes, 0,5) ÷ esfuerzo
```

Las horas mensuales son una estimación inicial. El puntaje sirve para comparar, pero no toma la decisión por ti.

### Ejemplo con datos ficticios

| Proceso | Frecuencia/semana | Minutos/vez | Impacto | Riesgo | Esfuerzo | Horas/mes | Puntaje |
|---|---:|---:|---:|---:|---:|---:|---:|
| Registrar consulta y asignar seguimiento | 15 | 8 | 4 | 4 | 2 | 8,7 | 34,8 |
| Consolidar reporte mensual | 1 | 90 | 5 | 3 | 4 | 6,5 | 13,0 |
| Actualizar disponibilidad semanal | 5 | 10 | 3 | 2 | 1 | 3,6 | 18,0 |

El primer proceso obtiene el puntaje más alto, pero solo debería elegirse si puede probarse con datos ficticios, existe una persona responsable y las reglas son suficientemente claras.

## 3. Mapea el proceso actual

Elige un candidato y completa los cinco campos de la sección `Proceso seleccionado`:

1. **Nombre:** una acción concreta.
2. **Entrada:** información o material necesario para iniciar.
3. **Pasos actuales:** secuencia real, incluidos controles, esperas y excepciones.
4. **Resultado / salida:** resultado que debe quedar listo.
5. **Responsable humano:** persona que revisa el resultado y resuelve excepciones.

Describe cómo funciona hoy. No dibujes todavía la versión ideal.

### Ejemplo resuelto

| Campo | Ejemplo ficticio |
|---|---|
| Nombre | Registrar una consulta y asignar seguimiento |
| Entrada | Nombre ficticio, correo de prueba y motivo de contacto |
| Pasos actuales | Recibir, revisar campos, pedir información faltante, registrar, confirmar recepción y asignar tarea |
| Resultado / salida | Consulta completa y tarea asignada |
| Responsable humano | Persona que revisa duplicados, dudas y excepciones |

Una persona que no conoce el proceso debe poder leer el mapa y explicar qué entra, qué ocurre y qué resultado se espera.

## 4. Elige un piloto seguro

Antes de decidir, responde estas preguntas:

- ¿Las reglas son suficientemente claras?
- ¿Puedo probarlo con datos ficticios?
- ¿Hay una persona responsable de revisar el resultado?
- ¿Puedo medir el antes y el después?
- ¿Puedo detener o revertir la prueba?
- ¿Está fuera de pagos, credenciales y decisiones irreversibles?

Si dos procesos tienen puntajes similares, comienza por el de menor riesgo y prueba más reversible.

Completa esta frase en tus notas del módulo:

> Quiero mejorar **[nombre del proceso]** desde **[disparador]** hasta **[resultado]**, manteniendo revisión humana en **[decisión o excepción]**. Mediré **[indicador]** antes y después de la prueba.

Indicadores posibles:

- minutos por ejecución;
- cantidad de casos procesados;
- registros incompletos;
- duplicados;
- retrabajos;
- casos derivados a revisión humana.

No declares ahorro ni mejora económica antes de medir una línea base y ejecutar una prueba comparable.

## 5. Evidencia que debes entregar

Tu entrega contiene una copia del workbook con:

- tres a cinco procesos completos en la tabla de priorización;
- frecuencia, minutos, impacto, riesgo y esfuerzo para cada candidato;
- un proceso seleccionado;
- los cinco campos de su mapa actual;
- una frase de alcance;
- al menos un indicador para comparar antes y después.

Usa esta nomenclatura:

`LC_ATN7P_M01_Diagnostico_[NombreProyecto]_v1.xlsx`

No incluyas información personal o confidencial en el nombre ni dentro del archivo.

## Quiz breve

Selecciona una respuesta por pregunta.

### 1. ¿Cuál es el mejor ejemplo de proceso observable?

- A. Ventas
- B. Mejorar la empresa
- C. Registrar una consulta y asignar seguimiento
- D. Innovación

### 2. ¿Para qué sirve el puntaje de prioridad?

- A. Para decidir automáticamente qué proceso activar
- B. Para comparar candidatos y apoyar una revisión humana
- C. Para calcular ahorro garantizado
- D. Para reemplazar la evaluación de riesgos

### 3. ¿Qué debes describir en “Pasos actuales”?

- A. La versión ideal del proceso
- B. Solo las tareas que quieres automatizar
- C. La secuencia real, incluidos controles y excepciones
- D. Las herramientas que comprarás

### 4. ¿Qué proceso conviene evitar como primer piloto?

- A. Uno frecuente y medible
- B. Uno con reglas claras y datos ficticios
- C. Uno reversible con responsable humano
- D. Uno que procesa pagos reales y decisiones irreversibles

### 5. ¿Cuándo puedes afirmar que hubo una mejora?

- A. Cuando el puntaje es alto
- B. Cuando una herramienta lo promete
- C. Después de comparar una línea base con una prueba equivalente
- D. Antes de ejecutar el piloto

### 6. ¿Qué evidencia mínima cierra este módulo?

- A. Una cuenta nueva en una herramienta
- B. Un mapa del proceso y la matriz de priorización
- C. Una automatización activa
- D. Un presupuesto de software

## Respuestas y retroalimentación

| Pregunta | Respuesta | Por qué |
|---|---|---|
| 1 | C | Nombra una acción con inicio y resultado reconocibles. |
| 2 | B | El puntaje orienta la comparación; la decisión sigue requiriendo revisión humana. |
| 3 | C | El diagnóstico debe representar el proceso real antes de diseñar mejoras. |
| 4 | D | Pagos y decisiones irreversibles quedan fuera del primer piloto. |
| 5 | C | Una afirmación necesita medición antes/después bajo condiciones comparables. |
| 6 | B | La guía LMS y el workbook exigen mapa y matriz como evidencia mínima. |

Resultado sugerido: aprobar el quiz con al menos 5 de 6 respuestas correctas. Si obtienes menos, revisa las secciones 2 a 4 antes de marcar el módulo como completado.

## Checklist de cierre

- [ ] Registré entre tres y cinco procesos concretos.
- [ ] Completé todos los campos usados por las fórmulas.
- [ ] Revisé el puntaje junto con riesgo, privacidad e impacto en clientes.
- [ ] Describí el proceso actual en los cinco campos exactos del workbook.
- [ ] Definí una prueba acotada, medible y reversible.
- [ ] Elegí al menos un indicador de línea base.
- [ ] Usé datos ficticios o anonimizados.
- [ ] Guardé una copia con la nomenclatura indicada.
- [ ] Obtuve al menos 5 de 6 respuestas correctas.

Cuando tengas todas las evidencias, cambia `Estado del módulo` de `En curso` a `Completado`. Continúa con el Módulo 2 solo si otra persona puede revisar y entender tu mapa y tu decisión.

## Fuentes y trazabilidad

- [Guion del Video 01 en Drive](https://drive.google.com/file/d/1kTiP_rHiiOlRq9uBYgnFN5UU83fNwicp/view): objetivo, secuencia didáctica, actividad y seguridad.
- [Guía LMS histórica](https://docs.google.com/document/d/1xO4rogKVLc0ctrSseAdGH742hlVoi5Q5/edit): estructura del Día 1, quiz, mapa y matriz como evidencia.
- [Workbook práctico · PR #4](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/4): nombres de campos, rangos de entrada y fórmulas.
- [Guion versionado · PR #6](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/6): continuidad editorial y criterios del Paso 1.
- [Inventario verificable](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit): estado de materiales y faltantes del producto.

Los archivos de origen se consultaron sin modificarlos. Este módulo no activa ninguna automatización ni reemplaza la aprobación editorial, la carga en LMS o la prueba con participantes.
