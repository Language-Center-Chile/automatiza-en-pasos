# Plantilla n8n — captación en sandbox

**Producto:** Automatiza tu Negocio en 7 Pasos

**Estado:** candidato inactivo; no autoriza producción

**Alcance:** recibir leads ficticios desde la landing candidata, validarlos y guardarlos en una Data Table aislada

**Dependencia:** ejecutar después el checklist de `docs/QA_FORMULARIO_CAPTACION_SANDBOX.md` del PR #36

## Qué resuelve

La plantilla transforma el destino pendiente del formulario en un circuito verificable sin correo, CRM, campañas, pagos ni otros efectos secundarios:

1. acepta sólo `POST` mediante un Webhook de n8n;
2. vuelve a validar en servidor los campos del formulario del PR #35;
3. normaliza nombre y correo, limita longitudes y valida las opciones visibles;
4. ignora y reporta campos inesperados sin almacenarlos;
5. genera `lead_id` a partir de `request_id`, sin derivarlo del correo;
6. ejecuta un `upsert` por `request_id` para mantener una sola fila por solicitud lógica;
7. responde `202` sin PII o `422` con los nombres de los campos inválidos;
8. mantiene deshabilitado el guardado de datos de ejecución y un timeout de 60 segundos.

No se encontró en Drive ni en los repositorios un workflow n8n equivalente que pudiera reutilizarse. El contrato sí reutiliza el paquete comercial vigente, el formulario candidato del PR #35 y el QA del PR #36.

## Archivos

| Archivo | Uso |
|---|---|
| `workflow.json` | Workflow importable, deliberadamente inactivo y bloqueado por dos marcadores |
| `fixtures.json` | Ocho solicitudes ficticias: válidas, manipuladas y límites |
| `validate.cjs` | Verificación local de estructura, seguridad, contrato e idempotencia determinista |

## Barreras de seguridad

- `active` está en `false`.
- `REEMPLAZAR_DATA_TABLE_ID` impide guardar hasta seleccionar una tabla aislada.
- `REEMPLAZAR_ORIGEN_LANDING_SANDBOX` impide aceptar un origen sin decidirlo expresamente.
- No hay URL de webhook, credencial, token, correo real ni destino externo versionado.
- El workflow no envía emails, WhatsApp, tareas, cobros ni eventos de analítica.
- Los datos de ejecución manual, exitosa y fallida quedan configurados para no persistir; la tabla sigue siendo el único destino de prueba.
- Las respuestas añaden `Cache-Control: no-store` y nunca devuelven nombre, correo, teléfono o mensaje.

Estas barreras no sustituyen la revisión de la configuración global de la instancia n8n.

## Preparación aislada

No activar el workflow. En un proyecto privado de n8n destinado a pruebas:

1. Importar `workflow.json`.
2. Crear una Data Table vacía llamada `lc_automatiza_leads_sandbox`.
3. Crear exactamente estas columnas:

| Columna | Tipo | Obligatoria | Nota |
|---|---|---:|---|
| `lead_id` | String | Sí | Identificador técnico determinista |
| `request_id` | String | Sí | Columna de coincidencia para `upsert` |
| `received_at` | DateTime | Sí | UTC ISO 8601 |
| `fuente` | String | Sí | Siempre `landing_7_pasos` |
| `nombre` | String | Sí | 2–100 caracteres |
| `email` | String | Sí | Normalizado a minúsculas |
| `whatsapp` | String | No | 7–30 caracteres permitidos |
| `tipo_negocio` | String | No | Opción exacta del PR #35 |
| `plan_interes` | String | No | Opción exacta del PR #35 |
| `mensaje` | String | No | Máximo 1.000 caracteres; texto plano |
| `consentimiento_contacto` | String | Sí | Siempre `si` |
| `consent_version` | String | Sí | Candidato `candidate_pr35_2026-10-21` |

4. En `Guardar lead idempotente`, seleccionar la tabla recién creada. No pegar su ID en el repositorio.
5. En el Webhook, sustituir el origen permitido por la URL local o preview exacta de la landing candidata.
6. Confirmar que la instancia no guarda datos de ejecución y que sólo el equipo de prueba puede ver la tabla.
7. Usar exclusivamente la **Test URL** del Webhook durante una sesión manual; n8n mantiene URLs de prueba y producción separadas.
8. Conectar temporalmente una copia local de la landing. No modificar ni publicar la landing real.

## Validación antes de importar

Desde la raíz del repositorio:

```bash
node automation/n8n/lead-capture-sandbox/validate.cjs
```

Resultado esperado:

```text
OK: plantilla inactiva, 6 nodos, 8 casos y deduplicación determinista verificadas.
```

El validador comprueba JSON válido, workflow inactivo, ausencia de endpoints y credenciales, marcadores obligatorios, esquema de doce columnas, `upsert` por `request_id`, respuestas sin caché, ocho fixtures y repetición determinista del mismo identificador.

## Prueba manual mínima

Después de aprobar las diez precondiciones del PR #36, iniciar una escucha temporal con **Listen for test event** y enviar sólo datos ficticios:

```bash
curl --fail-with-body \
  -X POST 'PEGAR_SOLO_TEST_URL_LOCAL' \
  -H 'Content-Type: application/json' \
  -H 'X-Request-Id: qa-idempotencia-0001' \
  --data '{"nombre":"QA Formulario 001","email":"qa+captacion@example.invalid","consentimiento_contacto":"si"}'
```

Repetir la misma solicitud con igual `X-Request-Id`. El resultado aceptable es una sola fila con el mismo `lead_id`; no se permite ningún mensaje o acción adicional. Completar después los dieciocho casos del PR #36, incluidos logs, fallos, eliminación y limpieza final.

## Reversa

1. Detener la escucha de prueba y comprobar que el workflow continúa inactivo.
2. Desconectar la copia local de la landing.
3. Eliminar todas las filas ficticias y confirmar conteo cero.
4. Eliminar las ejecuciones de prueba si la instancia conservó alguna contra la configuración prevista.
5. Eliminar la Data Table y el workflow importado si no continúan al piloto.
6. Conservar únicamente evidencia redactada y los identificadores técnicos no personales.

## Límites conocidos

- La estructura se valida sin importar ni ejecutar en una instancia real de n8n; compatibilidad final depende de la versión instalada.
- El `upsert` evita más de una fila por `request_id`, pero la landing aún debe crear y reutilizar el mismo ID al reintentar.
- El texto de consentimiento sigue siendo candidato hasta aprobación de Katherine.
- No se ha ejecutado ninguna prueba con red, almacenamiento, credenciales o datos reales.

## Decisión única pendiente

Katherine debe aprobar **importar esta plantilla inactiva en un proyecto privado de n8n y usar una Data Table interna aislada como almacén temporal del piloto**. Sin esa aprobación no se reemplazan los marcadores ni se inicia la escucha de prueba.
