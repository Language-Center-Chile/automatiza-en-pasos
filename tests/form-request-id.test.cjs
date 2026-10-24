'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync(require('node:path').join(__dirname, '..', 'script.js'), 'utf8');

function flush() {
  return new Promise((resolve) => setImmediate(resolve));
}

function response(ok, status) {
  return Promise.resolve({ ok, status });
}

function boot(options = {}) {
  const calls = [];
  const classes = [];
  const submitButton = { disabled: false };
  const status = {
    className: '',
    textContent: '',
    classList: { add: (value) => classes.push(value) },
  };
  const form = {
    action: options.action || 'https://sandbox.invalid/webhook-test/form',
    fields: options.fields || { nombre: 'QA Formulario', email: 'qa@example.invalid', consentimiento_contacto: 'si' },
    attributes: {},
    resetCount: 0,
    reportCount: 0,
    checkValidity: () => options.valid !== false,
    reportValidity() { this.reportCount += 1; },
    reset() { this.resetCount += 1; },
    querySelector() { return submitButton; },
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, listener) { if (name === 'submit') this.submit = listener; },
  };
  class FakeFormData {
    constructor(sourceForm) { this.values = new Map(Object.entries(sourceForm.fields)); }
    set(name, value) { this.values.set(name, value); }
    get(name) { return this.values.get(name); }
  }
  let uuidIndex = 0;
  const uuids = ['00000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-000000000002'];
  const fetchImpl = options.fetch || (() => response(true, 202));
  const context = {
    document: {
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById(id) {
        if (id === 'lead-form') return form;
        if (id === 'form-status') return status;
        return null;
      },
    },
    window: { crypto: { randomUUID: () => uuids[uuidIndex++] } },
    FormData: FakeFormData,
    AbortController,
    fetch(url, requestOptions) {
      calls.push({ url, options: requestOptions, requestId: requestOptions.body.get('request_id') });
      return fetchImpl(url, requestOptions, calls.length);
    },
    setTimeout,
    clearTimeout,
    Date,
    Math,
    Error,
  };
  vm.runInNewContext(source, context, { filename: 'script.js' });
  function submit() { form.submit({ preventDefault() {} }); }
  return { calls, classes, form, status, submit, submitButton };
}

(async function run() {
  const blocked = boot({ action: 'https://formspree.io/f/REEMPLAZAR_ID' });
  blocked.submit();
  assert.equal(blocked.calls.length, 0, 'El marcador debe impedir cualquier envío');
  assert.match(blocked.status.textContent, /todavía no está habilitado/);

  const invalid = boot({ valid: false });
  invalid.submit();
  assert.equal(invalid.calls.length, 0, 'La validación del navegador debe ocurrir antes del envío');
  assert.equal(invalid.form.reportCount, 1);

  const outcomes = [Promise.reject(new Error('offline')), response(true, 202), response(true, 202)];
  const retry = boot({ fetch: () => outcomes.shift() });
  retry.submit();
  await flush();
  await flush();
  assert.equal(retry.calls.length, 1);
  assert.equal(retry.form.resetCount, 0, 'Un fallo conserva los datos del formulario');
  assert.equal(retry.submitButton.disabled, false, 'El formulario vuelve a habilitarse tras el fallo');

  retry.submit();
  await flush();
  await flush();
  assert.equal(retry.calls.length, 2);
  assert.equal(retry.calls[0].requestId, retry.calls[1].requestId, 'El reintento conserva request_id');
  assert.equal(retry.form.resetCount, 1, 'El éxito limpia el formulario una sola vez');

  retry.submit();
  await flush();
  await flush();
  assert.notEqual(retry.calls[1].requestId, retry.calls[2].requestId, 'Un envío nuevo obtiene otro request_id');

  let release;
  const pending = new Promise((resolve) => { release = resolve; });
  const doubleClick = boot({ fetch: () => pending });
  doubleClick.submit();
  doubleClick.submit();
  assert.equal(doubleClick.calls.length, 1, 'Dos submit simultáneos producen una sola solicitud');
  assert.equal(doubleClick.form.attributes['aria-busy'], 'true');
  assert.equal(doubleClick.submitButton.disabled, true);
  release({ ok: true, status: 202 });
  await flush();
  await flush();
  assert.equal(doubleClick.form.attributes['aria-busy'], 'false');

  const rejected = boot({ fetch: () => response(false, 422) });
  rejected.submit();
  await flush();
  await flush();
  assert.match(rejected.status.textContent, /Revisa los datos ingresados/);
  assert.equal(rejected.form.resetCount, 0);

  console.log('OK: bloqueo, validación, request_id estable, reintento, doble clic y error 422 verificados.');
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
