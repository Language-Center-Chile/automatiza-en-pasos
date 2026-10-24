/* Automatiza tu Negocio en 7 pasos — interacciones */
(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    // Cerrar el menú al tocar un enlace
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Acordeón FAQ ---------- */
  var items = document.querySelectorAll(".faq__item");
  function setOpen(item, open) {
    var btn = item.querySelector(".faq__q");
    var panel = item.querySelector(".faq__a");
    item.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : null;
  }
  items.forEach(function (item) {
    var btn = item.querySelector(".faq__q");
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      items.forEach(function (other) { if (other !== item) setOpen(other, false); });
      setOpen(item, !isOpen);
    });
    // Estado inicial
    if (item.classList.contains("is-open")) setOpen(item, true);
  });

  function createRequestId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return "req_" + window.crypto.randomUUID();
    }
    return "req_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 14);
  }

  /* ---------- Formulario de leads ---------- */
  var form = document.getElementById("lead-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    var requestId = null;
    var submitting = false;
    var submitButton = form.querySelector("button[type='submit'], input[type='submit']");

    function setSubmitting(value) {
      submitting = value;
      form.setAttribute("aria-busy", value ? "true" : "false");
      if (submitButton) submitButton.disabled = value;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitting) return;
      status.className = "form__status";

      // Validación básica
      if (!form.checkValidity()) {
        status.textContent = "Revisa los campos obligatorios, por favor.";
        status.classList.add("err");
        form.reportValidity();
        return;
      }

      // ¿El formulario todavía no está conectado a un destino?
      if (form.action.indexOf("REEMPLAZAR") !== -1) {
        status.textContent = "El registro todavía no está habilitado. Puedes escribir a contacto@languagecenterchile.com.";
        status.classList.add("err");
        return;
      }

      // El mismo identificador se conserva si el usuario reintenta este envío.
      if (!requestId) requestId = createRequestId();
      var data = new FormData(form);
      data.set("request_id", requestId);

      var controller = typeof AbortController === "function" ? new AbortController() : null;
      var timeoutId = controller ? setTimeout(function () { controller.abort(); }, 12000) : null;
      var options = {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      };
      if (controller) options.signal = controller.signal;

      setSubmitting(true);
      status.textContent = "Enviando…";
      fetch(form.action, options)
        .then(function (res) {
          if (res.ok) return res;
          var error = new Error("bad response");
          error.status = res.status;
          throw error;
        })
        .then(function () {
          form.reset();
          requestId = null;
          status.textContent = "¡Listo! Recibimos tus datos, te contactamos pronto.";
          status.classList.add("ok");
        })
        .catch(function (error) {
          if (error && error.status === 422) {
            status.textContent = "Revisa los datos ingresados antes de volver a intentar.";
          } else if (error && error.name === "AbortError") {
            status.textContent = "El envío tardó demasiado. Intenta nuevamente con los mismos datos.";
          } else {
            status.textContent = "No pudimos enviar el formulario. Intenta de nuevo o escribe a contacto@languagecenterchile.com.";
          }
          status.classList.add("err");
        })
        .then(function () {
          if (timeoutId) clearTimeout(timeoutId);
          setSubmitting(false);
        });
    });
  }
})();
