# Manifiesto de empaquetado de subtítulos WebVTT

Producto: **Automatiza tu Negocio en 7 Pasos**  
Fecha de corte: **2026-11-25**  
Estado global: `VERIFICADO_ESTRUCTURALMENTE — NO CARGAR COMO PISTA VISIBLE`

Este manifiesto vincula los ocho videos actuales con los ocho archivos WebVTT existentes en Drive. Es documentación de empaquetado: no autoriza carga, publicación, sustitución de originales ni activación de subtítulos en MasterStudy.

## Fuentes reutilizadas

- [Carpeta de Drive «01 — Videos y subtítulos»](https://drive.google.com/drive/folders/1ghpYEfU4SICNGPQ-Zu79aqHhjg43xbPc)
- [Entrega de los ocho VTT y método de producción](https://github.com/KatherineStehberg/ksl-orquestador/issues/127#issuecomment-7135419826)
- [QA estructural independiente de los ocho VTT](https://github.com/KatherineStehberg/ksl-orquestador/issues/127#issuecomment-7135955377)
- [Manifiesto de los ocho MP4 — PR #61](https://github.com/Language-Center-Chile/automatiza-en-pasos/pull/61)
- [Decisión editorial de videos y re-render — issue #128](https://github.com/KatherineStehberg/ksl-orquestador/issues/128)

## Regla de uso

Los MP4 actuales ya contienen subtítulos quemados en la imagen. Por eso:

1. **No activar una pista visible WebVTT junto al MP4 actual:** produciría texto duplicado.
2. Conservar cada VTT como fuente de sincronía, accesibilidad y búsqueda para el re-render.
3. Si se aprueba un MP4 sin subtítulos quemados, verificar de nuevo duración, inicio, fin y sincronía antes de asociar la pista.
4. El nombre, el ID de Drive y el SHA-256 identifican el archivo; el nombre por sí solo no basta.
5. Nunca sobrescribir ni eliminar los VTT o MP4 originales de Drive.

## Emparejamiento verificable

| Video / lección | Archivo WebVTT exacto | Drive | Bytes | SHA-256 | Cues | Fin | Hueco máx. | Estado editorial |
|---|---|---|---:|---|---:|---:|---:|---|
| 00 · Bienvenida · 56649 | `Automatiza_7_Pasos_Video_00_Bienvenida_v2_subtitulos_ES_v2.vtt` | [abrir](https://drive.google.com/file/d/1hlUW4Dbf2j4qG7VpPVUeHU6j40Zn2tG8/view) | 4.838 | `2cf860867b17ff38168b040bfd8b780b5d3e2ec4dd4c793e5b1d19536d8f40c8` | 43 | 03:40.0 | 0,0 s | `V2_CORREGIDO` |
| 01 · Diagnóstico · 56650 | `Automatiza_7_Pasos_Video_01_Diagnostico_subtitulos_ES_v2.vtt` | [abrir](https://drive.google.com/file/d/1BROaCWwfSCykxD-W9QDWj1OpgfVJyMxS/view) | 5.201 | `2be40e31b6435d946a4a87b8eb965bf7674862f2b48303f0603b764ba3a6b5d6` | 48 | 03:54.8 | 0,0 s | `V2_CORREGIDO` |
| 02 · CRM · 56652 | `Automatiza_7_Pasos_Video_02_CRM_subtitulos_ES_BORRADOR.vtt` | [abrir](https://drive.google.com/file/d/1f-t1R9VyO6uBvSLvDit758nGRWqQ9wp7/view) | 6.437 | `315aa007d8ac389cd4093c170deb8c6f05560b77785f5a91a817935d60068dcf` | 59 | 04:51.5 | 0,3 s | `BORRADOR_REVISADO_ESTRUCTURA` |
| 03 · IA aplicada · 56653 | `Automatiza_7_Pasos_Video_03_IA_Aplicada_subtitulos_ES_BORRADOR.vtt` | [abrir](https://drive.google.com/file/d/1Sr-ZUu4Adqfiq3PqLkJzqoVNj-igZ26X/view) | 6.420 | `822e0f635348581e4501a454911758a05786afbd8c40a1b9161dd518213714db` | 58 | 04:52.0 | 0,4 s | `BORRADOR_REVISADO_ESTRUCTURA` |
| 04 · n8n · 56654 | `Automatiza_7_Pasos_Video_04_n8n_subtitulos_ES_v2.vtt` | [abrir](https://drive.google.com/file/d/1cx7cPg1-3SuDNIub8ahcudAcNSM3N1sW/view) | 5.413 | `8dc86e8f9984f403c3ffa3d392a32cce58fa01896d1caa19ce468f81485435cb` | 50 | 04:10.4 | 0,0 s | `V2_CORREGIDO` |
| 05 · Captación · 56655 | `Automatiza_7_Pasos_Video_05_Captacion_subtitulos_ES_BORRADOR.vtt` | [abrir](https://drive.google.com/file/d/10XjmCwwjmt5QRpsy3MAnxZAQw3mExwyI/view) | 6.040 | `248864181bbdb608d811475d94792b3f369ccafa801124728c4a653aa67d4020` | 56 | 04:30.0 | 0,3 s | `BORRADOR_REVISADO_ESTRUCTURA` |
| 06 · MVP · 56656 | `Automatiza_7_Pasos_Video_06_MVP_subtitulos_ES_BORRADOR.vtt` | [abrir](https://drive.google.com/file/d/1Uas1Ufuvn4-EfyIpqNy4gK0BJP5UYdM8/view) | 5.474 | `95fca20cf18b61338df3fff087d204e1a490abb57dd0f7acbde974b8f19b12f9` | 50 | 04:21.5 | 0,4 s | `BORRADOR_REVISADO_ESTRUCTURA` |
| 07 · Implementación · 56657 | `Automatiza_7_Pasos_Video_07_Implementacion_subtitulos_ES_BORRADOR.vtt` | [abrir](https://drive.google.com/file/d/1kSVRf_pbRtQv_dLsdnOiTcEvmqIUUp27/view) | 10.700 | `c4e47e4951924439e27ca9d0f563367b12f2e4440cccaa14d152c213598e4c0a` | 96 | 08:02.2 | 0,2 s | `BORRADOR_REVISADO_ESTRUCTURA` |

Totales verificados: **8 archivos**, **50.523 bytes**, **460 cues** y **38:22.4** de cobertura temporal. El hueco máximo observado es **0,4 s**.

La lección `56651` no aparece en la tabla porque es la lección adicional de texto del Paso 2, no uno de los ocho videos.

## Quality gate aplicado

- [x] Ocho archivos descargados desde sus enlaces actuales de Drive.
- [x] Ocho cabeceras `WEBVTT` válidas.
- [x] Cada cue tiene inicio anterior al fin.
- [x] Sin cues desordenados ni superpuestos.
- [x] Ocho conteos de cues y tiempos finales reproducidos de forma independiente.
- [x] Ocho tamaños y SHA-256 calculados sobre los bytes descargados.
- [x] Correspondencia con las ocho lecciones de video registrada.
- [x] Regla contra subtítulos visibles duplicados explicitada.
- [ ] Escucha humana íntegra de los ocho videos.
- [ ] Aprobación editorial de los cinco archivos marcados `BORRADOR`.
- [ ] Decisión y producción del re-render sin subtítulos quemados.
- [ ] Prueba de sincronía en MasterStudy con cuenta de alumno.

## Secuencia de empaquetado reversible

1. Copiar a un directorio temporal el MP4 candidato y el VTT emparejado; no mover originales.
2. Verificar el SHA-256 del VTT contra esta tabla.
3. Si el MP4 conserva texto quemado, mantener la pista fuera de la visualización del alumno.
4. Si el MP4 es un re-render limpio, comparar duración y revisar al menos inicio, tres puntos intermedios y cierre.
5. Probar activación, cambio de idioma, avance y retorno con una cuenta de alumno autorizada.
6. Si aparece duplicación, desfase o texto incorrecto, desasociar la pista y volver al MP4 sin cambios.
7. Registrar la evidencia antes de cambiar el estado a `LISTO_PARA_PILOTO_LMS`.

## Límite de esta entrega

Este manifiesto cierra la trazabilidad documental **MP4 ↔ VTT ↔ lección**, pero no aprueba los videos, no resuelve la decisión de regrabar, no ejecuta escucha humana completa y no acredita funcionamiento en MasterStudy. La decisión editorial vigente permanece centralizada en la issue #128; este documento no crea una decisión paralela.
