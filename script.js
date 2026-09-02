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

  /* ---------- Formulario de leads ---------- */
  var form = document.getElementById("lead-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";

      // Validación básica
      if (!form.checkValidity()) {
        status.textContent = "Revisa los campos obligatorios, por favor.";
        status.classList.add("err");
        form.reportValidity();
        return;
      }

      // ¿El formulario todavía no está conectado a un destino?
      if (form.action.indexOf("REEMPLAZAR_ID") !== -1) {
        status.textContent = "El registro todavía no está habilitado. Puedes escribir a contacto@languagecenterchile.com.";
        status.classList.add("err");
        return;
      }

      // Envío real (Formspree o endpoint compatible con fetch + JSON)
      var data = new FormData(form);
      status.textContent = "Enviando…";
      fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.textContent = "¡Listo! Recibimos tus datos, te contactamos pronto.";
            status.classList.add("ok");
          } else {
            throw new Error("bad response");
          }
        })
        .catch(function () {
          status.textContent = "No pudimos enviar el formulario. Intenta de nuevo o escribe a contacto@languagecenterchile.com.";
          status.classList.add("err");
        });
    });
  }
})();
