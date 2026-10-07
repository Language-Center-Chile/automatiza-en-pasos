# Checklist de aceptación comercial · Video piloto 00

**Producto:** Automatiza tu Negocio en 7 Pasos

**Piloto:** Video 00 · Bienvenida y ruta de los 7 pasos

**Estado inicial:** `BLOQUEADO` hasta adjuntar evidencia y completar revisión humana

**Resultado permitido:** `APROBADO_PILOTO`, `REQUIERE_CAMBIOS` o `RECHAZADO`

## Propósito

Esta lista decide si la calidad audiovisual del Video 00 es suficiente para congelar una configuración de producción y continuar con los otros siete videos. No reemplaza la guía de producción del PR #12: esa guía explica cómo crear el piloto; este documento define cómo demostrar que el resultado tiene calidad comercial.

No se autoriza producción en lote si falta un archivo de evidencia, si existe un fallo crítico o si la revisión humana no está completa. Un MP4 que abre o pasa `ffprobe` no queda aprobado automáticamente.

## Material revisado

- Inventario verificable de Drive: los ocho videos permanecen bloqueados y sin archivos finales auditables.
- Matriz de aprobación editorial y producción: exige subtítulos, transcripción, legibilidad móvil, contraste, audio, descripción visual y evidencia.
- PR #12: guía de producción del piloto, prueba de voz y salida objetivo 1920 × 1080 de 6:00–7:30.
- `KatherineStehberg/Ai_video_maker`, rama `feat/personal-video-studio`: cola persistente, comprobación técnica con ffprobe, normalización de voz a -16 LUFS y panel local de cursos.
- Panel de revisión: `http://127.0.0.1:4321/course-production.html`.
- Reproductor WordPress previsto para el recorrido privado del curso.

La evidencia disponible confirma funcionamiento técnico parcial, no calidad comercial: el informe remoto describe un MP4 con audio, pero el archivo no está versionado ni accesible para escucharlo o verlo; la muestra visual revisada reutiliza una composición estática de monitor y tarjetas. Por eso el estado se mantiene `BLOQUEADO`.

## Paquete mínimo de evidencia

Guardar una carpeta local `LC_ATN7P_V00_QA_v1` con estos archivos, sin subir el video a producción:

| Archivo | Evidencia mínima |
|---|---|
| `LC_ATN7P_V00_Bienvenida_REVIEW_v1.mp4` | render completo, no un fragmento |
| `LC_ATN7P_V00_Bienvenida_REVIEW_v1.srt` | subtítulos editables en español |
| `LC_ATN7P_V00_Bienvenida_TRANSCRIPT_v1.txt` | transcripción equivalente al audio |
| `ffprobe.json` | duración, resolución, FPS, códecs y pistas |
| `audio-ebur128.txt` | sonoridad integrada, rango y pico real |
| `revision-visual.md` | capturas al 5 %, 25 %, 50 %, 75 % y 95 % |
| `prueba-reproduccion.md` | matriz de navegador, dispositivo y resultado |
| `licencias-visuales.csv` | fuente, autor, licencia y uso de cada recurso |
| `incidencias.md` | escena, tiempo, severidad, corrección y nueva evidencia |

Calcular y registrar SHA-256 del MP4, SRT y transcripción. Si cambia cualquiera de esos archivos, incrementar la versión y repetir los controles afectados.

## Comandos de verificación

Ejecutar sobre la misma copia que se probará en WordPress:

```bash
ffprobe -v error -show_streams -show_format -of json LC_ATN7P_V00_Bienvenida_REVIEW_v1.mp4 > ffprobe.json
ffmpeg -i LC_ATN7P_V00_Bienvenida_REVIEW_v1.mp4 -filter_complex ebur128=peak=true -f null - 2> audio-ebur128.txt
sha256sum LC_ATN7P_V00_Bienvenida_REVIEW_v1.mp4 LC_ATN7P_V00_Bienvenida_REVIEW_v1.srt LC_ATN7P_V00_Bienvenida_TRANSCRIPT_v1.txt
```

En Windows PowerShell, usar `Get-FileHash -Algorithm SHA256` para los tres archivos. No corregir metadatos manualmente para hacer pasar el control: regenerar o remultiplexar una copia nueva y conservar el original de revisión.

## Puerta 1 · Integridad técnica

- [ ] MP4 H.264 con audio AAC o formato equivalente aceptado por el WordPress objetivo.
- [ ] Resolución 1920 × 1080, relación 16:9 y FPS estable de 25 o 30.
- [ ] Duración entre 6:00 y 7:30, medida con ffprobe.
- [ ] Existe al menos una pista de video y una pista de audio.
- [ ] El archivo reproduce de principio a fin, permite avanzar y volver atrás y no presenta cuadros negros, congelamientos o corrupción.
- [ ] Primera frase, última frase y siete bloques coinciden con el guion maestro.
- [ ] No se narran instrucciones de producción, timestamps, enlaces, nombres de archivo ni etiquetas como “Visual”.
- [ ] Hashes y versión de los tres archivos quedan registrados.

**Fallo crítico:** ausencia de audio, archivo corrupto, resolución incorrecta, texto truncado o contenido distinto del guion aprobado.

## Puerta 2 · Voz y audio

- [ ] Katherine escucha primero la muestra de 35 segundos y luego el piloto completo con audífonos.
- [ ] Voz española natural y estable; no suena inglesa, metálica, entrecortada ni acelerada artificialmente.
- [ ] Pronunciación correcta de “Automatiza”, “negocio”, “workbook”, “diagnóstico” y los siete pasos.
- [ ] Ninguna palabra está cortada al inicio o final de una escena.
- [ ] No existen silencios inesperados mayores a dos segundos ni saltos bruscos entre escenas.
- [ ] Sonoridad integrada objetivo: `-16 LUFS ± 1 LU`; pico real máximo: `-1 dBTP`.
- [ ] No hay clipping, chasquidos, zumbido, respiraciones sintéticas dominantes o variaciones perceptibles de volumen.
- [ ] La narración se entiende en audífonos, altavoces de notebook y un teléfono al 50 % de volumen.
- [ ] Si se añade música después del piloto de voz, no compite con la narración y se repite esta puerta completa.

**Fallo crítico:** voz ininteligible, idioma o acento incorrecto para el producto, saturación, cortes, volumen insuficiente o desincronización perceptible.

## Puerta 3 · Subtítulos y sincronía

- [ ] El SRT contiene toda la narración y no añade instrucciones no habladas.
- [ ] Inicio y cierre de cada subtítulo coinciden con el audio; desfase tolerable máximo: 300 ms en inicio, mitad y final.
- [ ] Máximo dos líneas simultáneas y lectura cómoda; corregir bloques que superen 20 caracteres por segundo.
- [ ] Ortografía, tildes, puntuación y nombres del producto están revisados manualmente.
- [ ] El texto quemado, si existe, no tapa el workbook, logos, controles ni información demostrada.
- [ ] Existe una transcripción equivalente, seleccionable y separada del video.
- [ ] Una prueba con sonido silenciado permite comprender el objetivo, los siete pasos y la actividad inicial.

**Fallo crítico:** frases faltantes, desfase creciente, subtítulos ilegibles o contradicción entre voz, subtítulo y visual.

## Puerta 4 · Calidad visual y ritmo

- [ ] La identidad usa nombre vigente, logo aprobado y paleta de Language Center Chile; no aparecen “7 Días”, precios ni marcas de prueba.
- [ ] Texto principal legible en un teléfono en orientación horizontal sin ampliar la pantalla.
- [ ] Ningún texto sale de zona segura, se corta o pierde contraste.
- [ ] No se repite la misma composición en más de dos escenas consecutivas.
- [ ] No pasan más de 20 segundos con un fondo esencialmente estático sin cambio relevante, demostración, énfasis o movimiento útil.
- [ ] Se combinan al menos cuatro tipos de recurso: portada o presentador, diagrama, captura guiada del workbook y apoyo visual o iconográfico.
- [ ] Cada visual explica la frase actual; no se usan imágenes decorativas genéricas para aparentar dinamismo.
- [ ] Las capturas del workbook usan datos ficticios, cursor o resaltado visible y zoom suficiente.
- [ ] Transiciones no distraen, no parpadean y no ocultan contenido importante.
- [ ] Los cinco fotogramas de evidencia permiten comprobar variedad, legibilidad y consistencia.
- [ ] Todo recurso externo tiene procedencia y licencia registradas antes de aprobar.

**Fallo crítico:** monotonía visual sostenida, texto ilegible en móvil, captura con datos reales, recurso sin derechos o composición que no acompaña la narración.

## Puerta 5 · Reproducción en WordPress

Probar una carga privada o staging; no publicar ni matricular alumnos reales.

| Entorno | Abrir | Reproducir con audio | Pausa/reanuda | Buscar tiempo | Subtítulos | Pantalla completa | Resultado |
|---|---|---|---|---|---|---|---|
| Chrome escritorio | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| Safari o navegador WebKit | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| Android | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| iPhone/iPad | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |

- [ ] El video se abre desde el recorrido real del módulo, no únicamente desde una URL técnica.
- [ ] Un clic o toque inicia audio y video; no se interpreta como defecto el bloqueo de autoplay con sonido del navegador.
- [ ] Controles visibles y utilizables con mouse, teclado y tacto.
- [ ] Pausa, reanudación y búsqueda temporal conservan audio y subtítulos sincronizados.
- [ ] El video se adapta al ancho móvil sin recortar controles ni contenido.
- [ ] Al volver al módulo, el reproductor no queda duplicado ni reproduce audio oculto.
- [ ] La cuenta ficticia autorizada accede y una sesión no autorizada no obtiene el archivo privado.

**Fallo crítico:** pantalla negra, audio ausente tras interacción, controles inutilizables, enlace roto, acceso público involuntario o pérdida de sincronía al buscar.

## Clasificación de incidencias

| Severidad | Definición | Acción |
|---|---|---|
| Crítica | Impide comprender, reproducir, acceder con seguridad o demostrar derechos | Rechazar; no producir otros videos |
| Alta | Voz poco natural, desfase, texto ilegible o monotonía sostenida | Corregir escena o configuración y repetir la puerta |
| Media | Error localizado que no impide comprender | Corregir antes del master |
| Baja | Preferencia estética sin efecto funcional | Registrar; resolver si mejora coherencia |

No se permite compensar un fallo crítico con una puntuación promedio. Cada puerta se aprueba de forma independiente.

## Acta de aceptación

| Campo | Resultado |
|---|---|
| Commit de AI Video Maker | Pendiente |
| Versión del MP4 | Pendiente |
| SHA-256 del MP4 | Pendiente |
| Voz y región | Pendiente |
| Duración | Pendiente |
| Sonoridad / pico real | Pendiente |
| Incidencias críticas abiertas | Pendiente |
| Puertas aprobadas | 0/5 |
| Revisión completa de Katherine | Pendiente |
| Estado final | `BLOQUEADO` |

Cambiar el estado a `APROBADO_PILOTO` únicamente cuando las cinco puertas estén aprobadas, no existan incidencias críticas o altas abiertas y Katherine haya visto y escuchado el video completo. Ese estado autoriza reutilizar la configuración aprobada para producir el siguiente video; no autoriza publicar, vender ni cargar los ocho videos en masa.

## Decisión única pendiente

Katherine debe aprobar o rechazar **la voz y el ritmo visual del Video 00 como referencia de calidad para los otros siete videos** después de revisar el piloto completo y su evidencia. Si lo rechaza, se corrige el piloto; no se inicia la producción en lote.
