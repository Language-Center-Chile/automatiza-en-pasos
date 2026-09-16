# Video 06 — MVP demostrable: landing y formulario en modo local

## Ficha de producción

- Producto: Automatiza tu Negocio en 7 Pasos.
- Módulo: Paso 6 — MVP y documentación.
- Audiencia: emprendedores y pequeñas empresas sin experiencia técnica.
- Objetivo: definir una versión mínima demostrable, recorrerla en local y documentar su alcance, evidencia y reversibilidad.
- Duración objetivo: 10–12 minutos, incluyendo demostración y pausas.
- Prerrequisitos: Videos 00–05 y workbook, hoja “6 MVP”.
- Demostración: copia local de la landing estática del curso, con formulario en modo demo y sin destino externo.
- Evidencia: ficha del MVP, recorrido local, checklist QA y ubicación versionada.
- Estado: listo para revisión editorial; NO implica aprobación ni video producido.

## Guion de teleprompter

### 00:00–01:10 — Un MVP demuestra una idea pequeña

Este es el Paso 6 de Automatiza tu Negocio en 7 Pasos. Ya diseñaste un recorrido de captación y seguimiento. Ahora elegirás la parte mínima que puede mostrarse y probarse sin construir todo el sistema.

Un MVP no es un producto incompleto presentado como terminado. Es una versión acotada que permite comprobar una pregunta concreta. En esta demostración la pregunta será: ¿una persona puede entender la propuesta, llegar al formulario y completar sus campos en una copia local?

No publicaremos la landing, no conectaremos el formulario y no procesaremos datos reales. Usaremos la landing estática existente como material de práctica. El resultado será una prueba local documentada, no un sitio listo para vender.

Abre la hoja “6 MVP” del workbook. Tiene una ficha de alcance y un checklist QA. Completarás ambos con evidencia observable.

### 01:10–02:30 — Define el alcance antes de editar

La Ficha del MVP contiene seis respuestas: Problema que resuelve, Usuario principal, Entrada, Resultado, Fuera de alcance y Ubicación / enlace de prueba.

En Problema que resuelve escribe: “Una persona interesada necesita entender la propuesta y encontrar un formulario”. En Usuario principal: “Emprendedor ficticio que revisa el curso desde computador o móvil”.

La Entrada será abrir una copia local de la landing. El Resultado será llegar al formulario, completar datos ficticios y recibir un aviso de modo demo sin envío. En Fuera de alcance registra pagos, acceso al curso, correos, WhatsApp, analítica, publicación y automatizaciones.

La Ubicación / enlace de prueba será la carpeta local o rama separada donde vive la copia. No escribas una URL pública si no existe. Una ruta verificable es mejor que un enlace inventado.

Este alcance cabe en una sesión y responde una sola pregunta. Si empiezas a agregar pagos, LMS, CRM o diseño final, ya no estás probando el mismo MVP.

### 02:30–03:45 — Reconoce el recorrido de la landing

La landing de práctica usa tres archivos principales: index.html para la estructura, styles.css para la presentación y script.js para las interacciones. También contiene una carpeta de recursos visuales.

Abre index.html en un navegador local. No necesitas un servidor productivo para observar la página. Identifica el encabezado, la propuesta principal, la explicación del programa, los planes, las preguntas frecuentes y la sección de diagnóstico.

Nuestro recorrido tiene cuatro puntos: comprender el objetivo, usar un botón que lleve a la sección de diagnóstico, completar el formulario con datos ficticios y observar el mensaje de modo demo.

No evalúes todavía si todos los textos, precios o imágenes están aprobados. El contenido comercial final pertenece a otra revisión. En este MVP solo verificaremos comprensión básica, navegación y comportamiento seguro del formulario.

### 03:45–05:10 — Prueba el formulario sin enviar

En la copia de práctica, el formulario contiene campos visibles como nombre, email, WhatsApp y una descripción opcional. Para la prueba usa Demo Persona, demo@example.test, +56 9 0000 0000 y “Consulta ficticia”. El dominio `.test` indica que no es una dirección operativa.

Antes de presionar el botón, revisa el atributo action del formulario. Debe conservar un marcador de modo demo o un destino local controlado. Si ves una URL productiva, una automatización o una cuenta real, detén la prueba y solicita revisión.

Envía el formulario en modo local. El resultado esperado no es registrar un lead: es impedir el envío y mostrar un aviso claro de demostración. Guarda una captura del mensaje, sin datos personales.

Después deja vacío un campo obligatorio. El navegador o el script debe impedir continuar y explicar qué falta. Registra el resultado real; no cambies la validación solo para obtener una pantalla verde.

### 05:10–06:25 — Usa un asistente de código con límites

La guía histórica propone Claude Code como apoyo para crear una landing. En este curso es opcional: el MVP puede revisarse manualmente. Si usas un asistente de código, dale un alcance explícito y revisa cada cambio.

Un prompt seguro para esta práctica es: “Inspecciona esta copia local. No instales dependencias, no uses credenciales, no conectes servicios y no publiques. Propón una lista de comprobación para el recorrido inicio a formulario. No modifiques archivos hasta mostrar el plan”.

Si después autorizas un cambio pequeño, hazlo en una rama separada y pide modificar solo el archivo necesario. Revisa el diff antes de aceptar. Ejecuta las validaciones del repositorio y conserva la posibilidad de revertir el commit.

Un asistente puede acelerar la inspección, pero no decide qué promesa comercial es válida, qué datos se pueden recopilar ni cuándo publicar. Esas decisiones requieren responsable humano.

### 06:25–07:45 — Completa el checklist con evidencia

El Checklist QA del MVP contiene ocho controles. Se entiende el objetivo se prueba pidiendo a otra persona que explique qué ofrece la pantalla y cuál es el siguiente paso.

Navegación o recorrido completo se prueba desde el inicio hasta el formulario. Campos y mensajes funcionan se prueba con el caso completo y el campo obligatorio vacío. Los errores tienen salida segura se verifica observando que no haya envío silencioso, pantalla bloqueada o instrucción confusa.

No contiene secretos ni datos reales se comprueba buscando credenciales, tokens, contactos reales y valores privados en los archivos y capturas. Existe respaldo o control de versiones se demuestra con la rama y el commit.

Otra persona puede repetir la prueba requiere instrucciones breves: cómo abrir la copia, qué datos ficticios usar y qué resultado esperar. Cambios se pueden revertir exige identificar el commit o conservar una copia limpia.

La tabla usa cuatro columnas exactas: Control, Estado, Evidencia y Responsable. Usa No probado, Aprobado, Fallido o No aplica. No marques Aprobado sin evidencia.

### 07:45–09:05 — Ejecuta cuatro casos pequeños

Caso uno: recorrido feliz. Abre la página, identifica la propuesta, navega al formulario, completa datos ficticios y observa el aviso de modo demo.

Caso dos: campo obligatorio vacío. El resultado esperado es una indicación clara y ningún envío.

Caso tres: destino no autorizado. Simula la revisión encontrando una URL externa en action. No la ejecutes; el resultado esperado es detener la prueba y registrar el hallazgo.

Caso cuatro: repetibilidad. Entrega las instrucciones a otra persona o ejecútalas en una ventana nueva. El resultado esperado es llegar a la misma pantalla y obtener el mismo aviso.

Anota resultado esperado, resultado real y evidencia. Si solo diseñaste el caso y no lo ejecutaste, conserva No probado. Una captura sin pasos reproducibles no basta para cerrar el control.

### 09:05–10:30 — Cierre y paso siguiente

Tu entrega contiene la Ficha del MVP, el checklist con evidencia y una ubicación versionada. También debe declarar qué permanece fuera de alcance.

Este ejercicio no aprueba la landing comercial. No valida precios, testimonios, imágenes finales, proveedor del formulario, pago, acceso, protección de datos ni publicación. Esos elementos necesitan decisiones y pruebas propias.

Guarda las capturas con nombres claros y sin información real. No hagas merge, deploy ni conexión externa desde la lección. Si utilizaste un asistente, conserva el diff y registra qué revisó una persona.

En el Paso 7 reunirás las evidencias de todos los módulos, ejecutarás pruebas finales y crearás un roadmap de treinta días. El objetivo no será activar todo de golpe, sino distinguir qué está aprobado, qué falló y qué decisión falta antes de vender.

## Demostración exacta

Ficha del MVP:

| Campo | Respuesta de práctica |
|---|---|
| Problema que resuelve | Entender la propuesta y encontrar el formulario |
| Usuario principal | Emprendedor ficticio en computador o móvil |
| Entrada | Abrir copia local de `index.html` |
| Resultado | Completar datos ficticios y observar aviso de modo demo |
| Fuera de alcance | Pagos, LMS, correo, WhatsApp, analítica, publicación y automatizaciones |
| Ubicación / enlace de prueba | Rama o carpeta local; no inventar URL pública |

Datos ficticios:

| Campo | Valor |
|---|---|
| Nombre | Demo Persona |
| Email | demo@example.test |
| WhatsApp | +56 9 0000 0000 |
| Caso | Consulta ficticia |

Prompt opcional para inspección:

```text
Inspecciona esta copia local. No instales dependencias, no uses credenciales,
no conectes servicios y no publiques. Propón una lista de comprobación para
el recorrido inicio a formulario. No modifiques archivos hasta mostrar el plan.
```

## Casos y criterios de aceptación

| Caso | Acción | Resultado esperado | Evidencia |
|---|---|---|---|
| Recorrido feliz | Inicio → diagnóstico → datos ficticios | Aviso de modo demo; ningún envío | Capturas del inicio, formulario y aviso |
| Campo obligatorio vacío | Omitir un dato requerido | Mensaje claro; ningún envío | Captura de validación |
| Destino no autorizado | Detectar URL externa en `action` | Prueba detenida y hallazgo registrado | Nota con archivo y línea, sin abrir URL |
| Repetibilidad | Seguir instrucciones en otra ventana o persona | Mismo recorrido y resultado | Registro de segunda ejecución |

No confundir la copia local con una landing aprobada. Este documento entrega el guion y el protocolo; la revisión comercial y la publicación quedan fuera de alcance.

## Recursos visuales

- V06-01: título Paso 6 — MVP y documentación.
- V06-02: pregunta del MVP y límites de alcance.
- V06-03: seis campos exactos de la Ficha del MVP.
- V06-04: recorrido inicio → formulario → aviso demo.
- V06-05: datos ficticios y campo obligatorio vacío.
- V06-06: prompt de inspección y diff revisable.
- V06-07: ocho controles exactos del checklist QA.
- V06-08: cuatro casos, evidencia y pendientes antes de publicar.

## Archivos esperados y QA de producción

- `LC_ATN7P_V06_MVP_MASTER_v1.mp4`
- `LC_ATN7P_V06_MVP_1080p_v1.mp4`
- `LC_ATN7P_V06_MVP_es-CL_v1.srt`
- `LC_ATN7P_V06_MVP_transcripcion_v1.pdf`
- Capturas locales del recorrido y del checklist.

- [ ] Katherine aprueba el texto como guion maestro.
- [ ] La lectura y demostración duran 10–12 minutos; las pausas del alumno no se cuentan.
- [ ] Los seis campos y ocho controles coinciden con el workbook.
- [ ] Se ejecutan o se marcan honestamente los cuatro casos.
- [ ] Todos los datos son ficticios y el formulario permanece en modo demo.
- [ ] No se instalan dependencias ni se conectan servicios.
- [ ] No hay credenciales, tokens, contactos ni pagos reales.
- [ ] La evidencia identifica rama, commit y resultado observado.
- [ ] Otra persona puede repetir el recorrido.
- [ ] Subtítulos sincronizados, audio claro y pantalla legible en móvil.
- [ ] La transcripción corresponde al video final.

## Fuentes y trazabilidad

- [Inventario verificable](https://docs.google.com/document/d/1BWr9EmF1SgXUV05PJv-8WOAXVsKIpqXox0B6wQi2WqI/edit), revisado el 16-sep-2026: no se encontró un archivo independiente y verificable para el Video 06.
- [Guía LMS histórica](https://docs.google.com/document/d/1k7KXYUmcdLYqLQav3Fkc-QbYvKWfi_dJ/edit): landing, formulario, HTML/CSS, asistente de código y control de versiones, consolidados aquí como un solo MVP esencial.
- [Paquete comercial vigente](https://docs.google.com/document/d/1hLnS3ajc3kV1ftPf08ld_xDt1AS1BbwbyNLf7zLz9a8/edit): continuidad del circuito comercial, sin activar pagos ni entrega.
- [Workbook, PR #4](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/4): hoja “6 MVP”, seis campos y ocho controles QA.
- [Landing candidata, PR #3](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/3): referencia revisable separada; este guion no modifica sus archivos.
- [Video 05, PR #9](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/9): continuidad pedagógica desde el recorrido de captación.
- Los originales de Drive permanecen sin modificaciones.
