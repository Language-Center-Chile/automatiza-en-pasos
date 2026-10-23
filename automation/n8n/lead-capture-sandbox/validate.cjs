'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const workflowPath = path.join(root, 'workflow.json');
const fixturesPath = path.join(root, 'fixtures.json');
const workflowText = fs.readFileSync(workflowPath, 'utf8');
const workflow = JSON.parse(workflowText);
const fixtures = JSON.parse(fs.readFileSync(fixturesPath, 'utf8'));

assert.equal(workflow.active, false, 'La plantilla debe permanecer inactiva');
assert.match(workflow.name, /Sandbox \(INACTIVO\)$/);
assert.equal(Array.isArray(workflow.nodes), true);
assert.equal(workflow.nodes.length, 6);
assert.equal(new Set(workflow.nodes.map((node) => node.id)).size, workflow.nodes.length, 'IDs de nodos únicos');
assert.equal(new Set(workflow.nodes.map((node) => node.name)).size, workflow.nodes.length, 'Nombres de nodos únicos');
assert.equal(workflow.nodes.some((node) => Object.hasOwn(node, 'credentials')), false, 'No se permiten credenciales');
assert.equal(/https?:\/\//i.test(workflowText), false, 'No se permiten endpoints reales en la plantilla');
assert.equal(/REEMPLAZAR_DATA_TABLE_ID/.test(workflowText), true, 'Debe bloquearse con ID de tabla pendiente');
assert.equal(/REEMPLAZAR_ORIGEN_LANDING_SANDBOX/.test(workflowText), true, 'Debe bloquearse con origen pendiente');

const webhook = workflow.nodes.find((node) => node.type === 'n8n-nodes-base.webhook');
assert.ok(webhook, 'Falta Webhook');
assert.equal(webhook.parameters.httpMethod, 'POST');
assert.equal(webhook.parameters.responseMode, 'responseNode');

const table = workflow.nodes.find((node) => node.type === 'n8n-nodes-base.dataTable');
assert.ok(table, 'Falta Data Table');
assert.equal(table.parameters.operation, 'upsert');
assert.deepEqual(table.parameters.columns.matchingColumns, ['request_id']);
const requiredColumns = [
  'lead_id', 'request_id', 'received_at', 'fuente', 'nombre', 'email',
  'whatsapp', 'tipo_negocio', 'plan_interes', 'mensaje',
  'consentimiento_contacto', 'consent_version',
];
assert.deepEqual(Object.keys(table.parameters.columns.value), requiredColumns);

const settings = workflow.settings || {};
assert.equal(settings.saveManualExecutions, false);
assert.equal(settings.saveDataSuccessExecution, 'none');
assert.equal(settings.saveDataErrorExecution, 'none');
assert.ok(settings.executionTimeout <= 60);

const validatorNode = workflow.nodes.find((node) => node.name === 'Validar y normalizar');
assert.ok(validatorNode, 'Falta nodo de validación');
const runCodeNode = new Function('$input', validatorNode.parameters.jsCode);

function materializeBody(rawBody) {
  const body = { ...rawBody };
  if (body.mensajeRepeat) {
    body.mensaje = body.mensajeRepeat.character.repeat(body.mensajeRepeat.count);
    delete body.mensajeRepeat;
  }
  return body;
}

function execute(body, headers = {}) {
  const input = { first: () => ({ json: { body, headers } }) };
  const result = runCodeNode(input);
  assert.equal(Array.isArray(result), true);
  assert.equal(result.length, 1);
  return result[0].json;
}

for (const fixture of fixtures) {
  const output = execute(materializeBody(fixture.body));
  assert.equal(output.valid, fixture.expectValid, fixture.name);
  if (fixture.expectInvalidField) {
    assert.ok(output.response.invalid_fields.includes(fixture.expectInvalidField), fixture.name);
    assert.equal(output.status_code, 422, fixture.name);
  }
  if (fixture.expectIgnoredField) {
    assert.ok(output.ignored_fields.includes(fixture.expectIgnoredField), fixture.name);
    assert.equal(Object.hasOwn(output, fixture.expectIgnoredField), false, fixture.name);
  }
  for (const [key, value] of Object.entries(fixture.expect || {})) {
    assert.equal(output[key], value, `${fixture.name}: ${key}`);
  }
}

const firstAttempt = execute({
  nombre: 'QA Idempotencia',
  email: 'qa+idempotencia@example.invalid',
  consentimiento_contacto: 'si',
}, { 'x-request-id': 'qa-idempotencia-0001' });
const secondAttempt = execute({
  nombre: 'QA Idempotencia',
  email: 'qa+idempotencia@example.invalid',
  consentimiento_contacto: 'si',
}, { 'x-request-id': 'qa-idempotencia-0001' });
assert.equal(firstAttempt.request_id, secondAttempt.request_id);
assert.equal(firstAttempt.lead_id, secondAttempt.lead_id, 'El mismo request_id debe producir el mismo lead_id');

const responseNodes = workflow.nodes.filter((node) => node.type === 'n8n-nodes-base.respondToWebhook');
assert.equal(responseNodes.length, 2);
assert.ok(responseNodes.every((node) => /no-store/.test(JSON.stringify(node.parameters.options))));

console.log(`OK: plantilla inactiva, ${workflow.nodes.length} nodos, ${fixtures.length} casos y deduplicación determinista verificadas.`);
