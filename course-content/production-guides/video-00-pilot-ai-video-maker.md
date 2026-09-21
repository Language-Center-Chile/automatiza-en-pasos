# Guía de producción del piloto · Video 00

**Producto:** Automatiza tu Negocio en 7 Pasos

**Video:** 00 · Bienvenida y ruta de los 7 pasos

**Objetivo:** producir y validar un piloto antes de renderizar los ocho videos

**Estado:** listo para prueba local; requiere aprobación de voz antes del render maestro

**Salida objetivo:** 16:9, 1920 × 1080, 6:00–7:30, español de Chile o español latinoamericano

## 1. Fuentes de verdad

Usar estas fuentes sin reescribir el contenido:

1. [Guion maestro en Drive](https://drive.google.com/file/d/1jHiUztaqgClQXSJOVWqWAqdlxI410VCc/view), revisado como fuente editorial.
2. [PR #5](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/5), copia versionada del guion del Video 00.
3. [PR #4](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/4), workbook que debe aparecer en las demostraciones.
4. [`KatherineStehberg/Ai_video_maker`](https://github.com/KatherineStehberg/Ai_video_maker), en la rama `feat/personal-video-studio`, para el flujo de guion largo.

El texto que se pega en el editor debe contener **solo las secciones “Teleprompter”**, en el orden del guion maestro. No pegar instrucciones como “Visual”, criterios de aceptación, nomenclatura ni trazabilidad: el sintetizador las narraría.

## 2. Decisiones ya fijadas

| Campo del editor | Valor |
|---|---|
| Entrada | `Ya tengo el guion escrito` |
| Tipo | `Curso o lección` |
| Plataforma | `Curso/LMS` |
| Formato | `16:9` |
| Duración | `Automática` durante el borrador; `390 segundos` solo después de calibrar la voz |
| Palabras por minuto | `125` para la estimación editorial |
| Idioma | `Español` |
| Estilo visual | `minimalista` |
| Tono | `cercano, profesional, claro y práctico` |
| Público | `emprendedores, profesionales independientes y equipos de pequeñas empresas sin conocimientos técnicos previos` |
| Proveedor | `pipeline` local |
| Subtítulos | activados y quemados en la copia de revisión |
| Música | desactivada en el piloto de voz |

No usar `mock`: sirve para probar la interfaz, pero su contenido no representa el guion. No activar Gemini, un proveedor externo, Pexels ni otra API durante el piloto. Mantener el servidor en `127.0.0.1`.

## 3. Preparación verificable

Desde `KatherineStehberg/Ai_video_maker`, rama `feat/personal-video-studio`:

```powershell
npm.cmd install
npm.cmd run doctor
npm.cmd test
npm.cmd start
```

Abrir `http://127.0.0.1:4321/editor.html` y confirmar antes de continuar:

- `pipeline` aparece configurado;
- FFmpeg y ffprobe están disponibles;
- la voz detectada declara `es-CL`, español latinoamericano o español;
- no aparece una advertencia de voz inglesa o de ausencia de narración;
- la rama contiene el flujo de video largo descrito en `docs/reports/AVM-LONG-FORM.md`.

Si falta una voz española, detener la producción. Instalar o seleccionar una voz española no forma parte de esta guía y no debe resolverse usando una voz inglesa como sustituto silencioso.

## 4. Prueba de voz de 35 segundos

Crear primero un proyecto descartable llamado `LC_ATN7P_V00_PILOTO_VOZ` con el texto del bloque **Apertura**. Usar 16:9, música desactivada y duración automática.

Registrar:

| Evidencia | Resultado |
|---|---|
| Nombre y región de la voz | Pendiente |
| Palabras narradas | 63 |
| Duración medida con ffprobe | Pendiente |
| Velocidad real (`63 ÷ segundos × 60`) | Pendiente |
| Pronunciación de “Automatiza”, “negocio” y “programar” | Pendiente |
| Ruido, cortes o saturación | Pendiente |

Aceptar el piloto solo si la pronunciación es clara, no falta ninguna frase y la voz fue aprobada por Katherine. La medición anterior del editor con otro guion dio aproximadamente **166 palabras por minuto**; es una referencia del equipo, no una garantía para esta voz ni para este texto.

## 5. Borrador completo sin render

1. Crear un proyecto nuevo llamado `LC_ATN7P_V00_Bienvenida`.
2. Pegar las siete secciones de teleprompter completas.
3. Mantener la duración en `Automática` y pulsar **Crear borrador**.
4. Verificar que la fuente sea `guion-propio` y que no exista advertencia de texto truncado.
5. Revisar todas las escenas antes de aprobar el guion.

La segmentación automática puede dividir un bloque editorial en varias escenas. Eso es correcto si conserva todas las frases y mantiene esta secuencia:

| Bloque | Tiempo editorial | Título o idea en pantalla | Visual autorizado |
|---|---:|---|---|
| Apertura | 00:00–00:35 | Automatiza tu Negocio en 7 Pasos | Portada y logo aprobado |
| Qué construirás | 00:35–01:20 | Un proceso real | Tarea manual → proceso documentado → flujo probado → medición |
| Ruta de siete pasos | 01:20–03:05 | Paso 1… Paso 7 | Diagrama; resaltar solo el paso narrado |
| Cómo usar el workbook | 03:05–04:15 | Evidencia antes de “Completado” | Hojas `Ruta` y pestañas 1–7 del workbook aprobado |
| Trabajo seguro | 04:15–05:20 | Documentar → probar → medir → mejorar | Cinco reglas con iconos simples |
| Primera actividad | 05:20–06:20 | Datos ficticios primero | Ficha inicial y hoja `1 Diagnóstico` |
| Cierre | 06:20–06:45 | Siguiente: Paso 1 · Diagnóstico | Placa de cierre |

### Control de integridad del borrador

- La primera frase es “Hola, te doy la bienvenida…”.
- La última palabra narrada es “Comencemos”.
- Aparecen exactamente los pasos 1 a 7 y en ese orden.
- Se conservan “datos ficticios”, “salida humana”, “cambios pequeños y reversibles” y “mide antes de concluir”.
- No se narran timestamps, etiquetas “Visual” o “Teleprompter”, nombres de archivos ni enlaces.
- No aparecen “7 Días”, precios, checkout, datos de clientes, credenciales o resultados garantizados.

No iniciar el render completo si falla cualquiera de estos controles.

## 6. Recursos visuales del piloto

Preparar copias locales, sin datos reales, con esta nomenclatura:

| Código | Archivo de trabajo | Regla |
|---|---|---|
| V00-01 | `V00-01_portada_16x9.png` | nombre vigente y logo aprobado |
| V00-02 | `V00-02_ruta_7_pasos_16x9.png` | siete pasos legibles en móvil |
| V00-03 | `V00-03_workbook_ruta_demo.png` | versión aprobada del PR #4, datos ficticios |
| V00-04 | `V00-04_workbook_diagnostico_demo.png` | datos ficticios |
| V00-05 | `V00-05_manual_ordenado_automatizable.png` | iconos propios o de uso autorizado |
| V00-06 | `V00-06_cierre_paso_1_16x9.png` | sin precio ni llamada a pago |

Si el editor no permite asignar una imagen local a una escena, usar un fondo geométrico local como marcador y registrar la sustitución pendiente. No buscar una imagen parecida con una API durante esta prueba.

## 7. Calibración antes del render completo

Después de medir el piloto de voz:

1. volver al proyecto completo;
2. fijar duración objetivo en **390 segundos**;
3. revisar la advertencia de ajuste de tempo;
4. aceptar el ajuste solo si queda entre `0,70×` y `1,00×` y la muestra sigue siendo natural;
5. si el editor informa que no puede alcanzar 390 segundos, conservar el guion completo y aceptar una salida entre 360 y 450 segundos; no añadir relleno ni cortar texto;
6. aprobar el guion y las escenas solo después de la revisión humana.

El objetivo de 390 segundos centra la salida en 6:30. La tolerancia final sigue siendo la del guion maestro: 6:00–7:30.

## 8. Render, revisión y archivos de evidencia

El render completo se ejecuta únicamente después de aprobar la voz. Si se interrumpe, usar **Reanudar este proyecto**; no crear un segundo proyecto. Para corregir una frase o visual, regenerar solo esa escena.

Conservar localmente:

- MP4 de revisión;
- JSON del proyecto o análisis;
- subtítulos generados;
- captura de la configuración usada;
- salida de ffprobe con duración, resolución, FPS, códec y pistas de audio;
- lista de escenas regeneradas y motivo.

La copia de revisión debe llamarse `LC_ATN7P_V00_Bienvenida_REVIEW_v1.mp4`. Los nombres `MASTER` y `LMS` se reservan para una versión aprobada; el piloto no debe publicarse ni cargarse en el LMS.

## 9. Checklist de aceptación del piloto

- [ ] Voz española identificada y aprobada.
- [ ] Duración medida entre 6:00 y 7:30.
- [ ] Resolución 1920 × 1080 y formato 16:9.
- [ ] Las siete secciones aparecen completas y en orden.
- [ ] No falta ni se inventó texto del teleprompter.
- [ ] Las seis piezas visuales están presentes o marcadas explícitamente como provisionales.
- [ ] Capturas del workbook legibles y con datos ficticios.
- [ ] Subtítulos en español completos y sincronizados.
- [ ] No aparecen precios, checkout, credenciales, datos personales ni producción.
- [ ] El MP4 reproduce de principio a fin y ffprobe no informa errores.
- [ ] No se publicó, desplegó ni cargó el archivo en un servicio externo.

## 10. Puerta de decisión

**Única decisión requerida:** Katherine debe aprobar la voz española detectada en la prueba de 35 segundos como voz oficial del Video 00. Si la rechaza, se conserva todo el borrador y se cambia solo la voz antes del render completo.

## 11. Registro de ejecución

Completar después de la prueba; no declarar “aprobado” sin evidencia.

| Campo | Valor |
|---|---|
| Fecha | Pendiente |
| Rama y commit de AI Video Maker | Pendiente |
| Voz | Pendiente |
| Duración del piloto de 35 s | Pendiente |
| Duración del render completo | Pendiente |
| Cantidad de escenas | Pendiente |
| Escenas regeneradas | Pendiente |
| Resultado de ffprobe | Pendiente |
| Resultado editorial | Pendiente |
| Aprobación de voz | Pendiente |
