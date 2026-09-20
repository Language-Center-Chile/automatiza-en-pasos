# Video 07 — Implementación segura, medición y roadmap de 30 días

## Ficha de producción

- Producto: Automatiza tu Negocio en 7 Pasos.
- Módulo: Paso 7 — Implementación y mejora.
- Audiencia: emprendedores y pequeñas empresas sin experiencia técnica.
- Objetivo: cerrar el ciclo con pruebas finales, medición antes/después y un roadmap de 30 días, sin activar producción.
- Duración objetivo: 10–12 minutos, incluyendo demostración y pausas.
- Prerrequisitos: Videos 00–06 y workbook, hoja “7 Implementacion”.
- Caso de práctica: recorrido ficticio desde una consulta hasta revisión humana, con landing y formulario en modo demo.
- Evidencia: matriz de seis pruebas, tabla de medición y roadmap con responsables, fechas y métricas.
- Estado: listo para revisión editorial; NO implica aprobación ni video producido.

## Guion de teleprompter

### 00:00–01:10 — Terminar significa poder demostrar

Este es el Paso 7 de Automatiza tu Negocio en 7 Pasos. Durante el curso identificaste un proceso, ordenaste información, diseñaste instrucciones, modelaste un flujo, preparaste captación y construiste un MVP demostrable.

El cierre no consiste en encender todas las herramientas. Consiste en demostrar qué funciona, registrar qué todavía no fue probado y decidir la próxima mejora con una persona responsable.

Hoy ejecutaremos una revisión final en entorno de prueba. No conectaremos producción, no enviaremos mensajes, no cobraremos y no otorgaremos accesos. Si una prueba depende de un servicio que aún no está configurado, su estado será No probado. Ese resultado es válido y más seguro que fingir una aprobación.

Abre la hoja “7 Implementacion” del workbook. Encontrarás tres bloques: Prueba final, Medición antes / después y Roadmap de 30 días.

### 01:10–02:25 — Prepara la matriz de pruebas

La tabla Prueba final usa siete columnas: Prueba final, Resultado esperado, Estado, Evidencia, Riesgo si falla, Acción de reversa y Responsable.

Antes de ejecutar, completa el resultado esperado y el responsable. No escribas “funciona” como expectativa. Describe un resultado observable, por ejemplo: “la persona llega al formulario, completa datos ficticios y recibe el aviso de modo demo sin envío”.

En Riesgo si falla anota la consecuencia real: pérdida de una consulta de prueba, duplicación, exposición de datos o bloqueo del recorrido. En Acción de reversa escribe cómo volver al estado anterior: desactivar el cambio, restaurar la copia versionada, retirar el enlace de prueba o volver al proceso manual.

Los estados disponibles son No probado, Aprobado, Fallido y No aplica. Aprobado requiere evidencia. Fallido significa que el sistema no coincidió con el resultado esperado; no significa que debas ocultar el caso.

### 02:25–04:10 — Ejecuta los tres primeros casos

La primera prueba es Recorrido principal. Abre la landing local, navega al formulario, usa Demo Persona y un correo con dominio `.test`, y observa el aviso de modo demo. El resultado esperado es completar el recorrido sin envío externo.

La segunda prueba es Dato incompleto. Deja vacío un campo obligatorio. El resultado esperado es una indicación clara y ningún procesamiento. Si el formulario continúa silenciosamente, registra Fallido y detén la prueba.

La tercera prueba es Duplicado. Repite el mismo identificador o los mismos datos ficticios. Como la landing demo no tiene almacenamiento ni deduplicación, no puedes declarar que evita duplicados. Registra No probado y explica que la prueba técnica deberá realizarse cuando exista un destino controlado.

Para cada caso guarda una captura o nota reproducible. La evidencia debe mostrar el resultado, no datos personales. Si una captura contiene una URL privada, token o contacto real, descártala y repite con información ficticia.

### 04:10–05:45 — Prueba indisponibilidad, privacidad y recuperación

La cuarta prueba es Servicio no disponible. Simula que el destino externo no existe manteniendo el formulario en modo demo. El resultado esperado es un aviso comprensible y ninguna promesa de envío. No desconectes servicios reales para crear esta evidencia.

La quinta prueba es Privacidad / permisos. Revisa archivos, capturas y variables visibles. El resultado esperado es no encontrar contraseñas, claves, tokens, listas reales o permisos excesivos. Si aparece un secreto, no lo copies en el workbook: retira el archivo de circulación, informa al responsable y rota la credencial mediante el proceso autorizado.

La sexta prueba es Recuperación. Identifica la rama y el commit de la copia. Describe cómo volver al estado anterior sin usar comandos destructivos: retirar el cambio propuesto o revertirlo mediante un commit revisable. El resultado esperado es que la versión previa siga disponible.

No necesitas provocar una caída real ni ejecutar una reversa en producción. Debes demostrar que existe un camino de recuperación seguro y asignado.

### 05:45–07:05 — Mide sin inventar impacto

La tabla Medición antes / después utiliza seis columnas: Métrica, Antes, Después, Unidad, Cambio e Interpretación.

Elige una métrica que puedas observar con el mismo caso. Por ejemplo, minutos para recorrer manualmente una consulta ficticia, cantidad de campos copiados o número de pasos hasta asignar revisión humana.

Realiza primero el recorrido manual de práctica y registra el valor en Antes. Luego ejecuta el MVP local y registra el valor en Después. La fórmula calcula Cambio como Después menos Antes. Un número negativo puede significar menos tiempo; un número positivo no siempre significa mejora.

No uses cifras inventadas como resultado comercial. Si no pudiste ejecutar ambas mediciones con el mismo criterio, deja las celdas vacías y escribe “medición pendiente” en Interpretación. Una demostración técnica no prueba aumento de ventas, ahorro permanente ni satisfacción del cliente.

### 07:05–08:30 — Construye un roadmap que se pueda ejecutar

El Roadmap de 30 días usa siete columnas: Prioridad, Acción, Responsable, Fecha objetivo, Métrica, Estado y Dependencia.

Registra cuatro acciones de ejemplo. Prioridad Alta: aprobar editorialmente los ocho guiones. Prioridad Alta: grabar un video piloto y validar audio, pantalla, subtítulos y duración. Prioridad Alta: cargar un módulo piloto en el LMS elegido y recorrerlo como estudiante. Prioridad Media: preparar el checkout sandbox y documentar una compra de prueba sin cobro real.

Asigna un responsable por acción, una fecha dentro de los próximos treinta días y una métrica observable. Evita “avanzar curso”; escribe “un video piloto aprobado”, “un módulo navegable” o “una compra sandbox documentada”.

En Dependencia anota la decisión que debe ocurrir antes. Si no se ha elegido LMS o proveedor de pago, no presentes la carga o el checkout como tarea ejecutable.

### 08:30–09:40 — Define la puerta antes de producción

Antes de activar producción, reúne la evidencia en una puerta de decisión. Deben existir guiones aprobados, videos finales, descargables probados, módulo piloto navegable, landing revisada, formulario con destino autorizado, checkout sandbox, entrega de acceso y QA del circuito completo.

Cada elemento debe tener responsable y evidencia. Si uno falta, el estado general no es listo para vender. Puede ser listo para revisión, listo para piloto o bloqueado por decisión.

La aprobación de contenido no autoriza pagos. Una prueba de pago no autoriza publicación. Un formulario funcional no autoriza almacenar información sin reglas. Mantén estas decisiones separadas para saber exactamente qué se aprobó.

En esta lección, el resultado correcto es un paquete verificable y una lista clara de pendientes, no una activación apresurada.

### 09:40–10:50 — Cierre del curso

Completa la evidencia mínima: checklist final en entorno de prueba y roadmap con responsable, fecha y métrica. Cambia el Estado del módulo a Completado solo cuando esas evidencias existan; no porque terminaste de ver el video.

Guarda la matriz, medición y roadmap junto al workbook. Usa nombres claros y conserva la versión anterior. No publiques enlaces, no hagas merge, deploy, cobros ni envíos desde esta actividad.

Al terminar, podrás explicar qué parte del sistema está demostrada, qué riesgos siguen abiertos y cuál es la próxima acción durante treinta días. Esa trazabilidad convierte una colección de herramientas en un proyecto que se puede revisar, mejorar y eventualmente vender.

El siguiente paso fuera del contenido es producir y validar los ocho videos, cargar un módulo piloto y ejecutar el circuito comercial completo en sandbox antes de solicitar autorización para publicar.

## Demostración exacta

### Matriz de seis pruebas

| Prueba final | Resultado esperado de práctica | Estado inicial | Evidencia mínima | Acción de reversa |
|---|---|---|---|---|
| Recorrido principal | Inicio → formulario → aviso demo, sin envío | No probado | Capturas del recorrido | Volver a la copia versionada |
| Dato incompleto | Validación clara y ningún procesamiento | No probado | Captura del campo y aviso | Restaurar validación anterior |
| Duplicado | Riesgo documentado; deduplicación no implementada | No probado | Dos intentos ficticios y nota | Mantener envíos apagados |
| Servicio no disponible | Aviso seguro sin prometer entrega | No probado | Captura del modo demo | Retirar destino de prueba |
| Privacidad / permisos | Sin secretos ni datos reales | No probado | Registro de revisión | Retirar archivo y rotar credencial si corresponde |
| Recuperación | Versión previa identificable | No probado | Rama y commit | Revertir mediante cambio revisable |

### Medición de práctica

1. Elegir una sola Métrica.
2. Ejecutar el mismo caso manual y registrar Antes.
3. Ejecutar el MVP local y registrar Después.
4. Mantener la misma Unidad.
5. Revisar el Cambio calculado.
6. Escribir una Interpretación limitada a lo observado.

Si falta una ejecución comparable, no completar números ficticios.

### Roadmap inicial de 30 días

| Prioridad | Acción | Métrica | Estado | Dependencia |
|---|---|---|---|---|
| Alta | Aprobar editorialmente los ocho guiones | 8 guiones aprobados | Pendiente | Revisión de Katherine |
| Alta | Grabar y validar un video piloto | 1 paquete de video, SRT y transcripción aprobado | Pendiente | Guion maestro aprobado |
| Alta | Cargar y probar un módulo piloto | 1 recorrido alumno documentado | Pendiente | Decisión de LMS y acceso |
| Media | Ejecutar checkout sandbox | 1 compra de prueba documentada, sin cobro real | Pendiente | Proveedor y flujo aprobados |

## Casos y criterios de aceptación

| Resultado | Criterio |
|---|---|
| Matriz final | Seis pruebas con expectativa, estado, evidencia, riesgo, reversa y responsable |
| Medición | Antes y Después comparables, misma unidad e interpretación limitada |
| Roadmap | Acciones con prioridad, responsable, fecha, métrica, estado y dependencia |
| Seguridad | Sin producción, credenciales, datos reales, cobros, envíos o despliegue |

No confundir un módulo completado con un producto publicado. El producto sigue requiriendo producción audiovisual, empaquetado, sandbox y autorización final.

## Recursos visuales

- V07-01: título Paso 7 — implementación y mejora.
- V07-02: tres bloques del cierre: pruebas, medición y roadmap.
- V07-03: siete columnas exactas de Prueba final.
- V07-04: Recorrido principal, Dato incompleto y Duplicado.
- V07-05: Servicio no disponible, Privacidad / permisos y Recuperación.
- V07-06: Medición antes/después sin cifras inventadas.
- V07-07: siete columnas y cuatro acciones del roadmap.
- V07-08: puerta de decisión antes de vender.

## Archivos esperados y QA de producción

- `LC_ATN7P_V07_IMPLEMENTACION_MASTER_v1.mp4`
- `LC_ATN7P_V07_IMPLEMENTACION_1080p_v1.mp4`
- `LC_ATN7P_V07_IMPLEMENTACION_es-CL_v1.srt`
- `LC_ATN7P_V07_IMPLEMENTACION_transcripcion_v1.pdf`
- Capturas de la matriz, medición y roadmap.

- [ ] Katherine aprueba el texto como guion maestro.
- [ ] La lectura y demostración duran 10–12 minutos; las pausas del alumno no se cuentan.
- [ ] Las seis pruebas y sus nombres coinciden con el workbook.
- [ ] Las columnas de pruebas, medición y roadmap coinciden con el workbook.
- [ ] Los estados reflejan evidencia real; lo no ejecutado sigue No probado.
- [ ] La medición usa el mismo caso y unidad antes/después.
- [ ] El roadmap incluye responsable, fecha, métrica y dependencia.
- [ ] No hay producción, credenciales, datos reales, cobros, envíos ni despliegue.
- [ ] Se muestra una acción de reversa para cada prueba.
- [ ] Subtítulos sincronizados, audio claro y tablas legibles en móvil.
- [ ] La transcripción corresponde al video final.

## Fuentes y trazabilidad

- [Inventario verificable](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit), revisado el 20-sep-2026: no se encontró un guion independiente y verificable para el Video 07.
- [Guía LMS histórica](https://docs.google.com/document/d/1xO4rogKVLc0ctrSseAdGH742hlVoi5Q5/edit): implementación, pruebas, medición y roadmap, consolidados aquí como un cierre esencial.
- [Registro RPM-2026-015](https://docs.google.com/document/d/10Aei9unL3D5RYTdbxPjxWij7rsvvTxTF-GeY21AGrCs/edit): nomenclatura oficial y continuidad del paquete comercial.
- [Workbook, PR #4](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/4): hoja “7 Implementacion”, seis pruebas, medición y roadmap.
- [Video 06, PR #10](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/10): continuidad pedagógica desde el MVP local documentado.
- Los originales de Drive permanecen sin modificaciones.
