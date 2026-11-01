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

  /* ---------- Formulario "Solicitar información" (destino: correo) ---------- */
  // Decisión de Katherine (01-11-2026): las solicitudes llegan a contacto@languagecenterchile.com.
  // El sitio no envía datos a terceros: arma un mailto y abre el programa de correo de la persona.
  var DESTINO = "contacto@languagecenterchile.com";
  var ASUNTO = "[Automatiza 7 Pasos] Solicitud de información";
  var form = document.getElementById("lead-form");
  var status = document.getElementById("form-status");

  // Parámetros de campaña (sin datos personales) para medir el origen de la solicitud.
  function origenCampana() {
    var params = new URLSearchParams(window.location.search);
    var claves = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
    var partes = [];
    claves.forEach(function (k) {
      var v = params.get(k);
      if (v) partes.push(k + "=" + v.slice(0, 60));
    });
    return partes.length ? partes.join(" · ") : "directo";
  }

  function valor(nombre) {
    var campo = form.elements[nombre];
    return campo && campo.value ? String(campo.value).trim() : "";
  }

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";

      if (!form.checkValidity()) {
        status.textContent = "Revisa los campos obligatorios, por favor.";
        status.classList.add("err");
        form.reportValidity();
        return;
      }

      var mensaje = valor("mensaje");
      if (mensaje.length > 1000) mensaje = mensaje.slice(0, 1000) + "…";

      var lineas = [
        "Hola, quiero recibir información sobre «Automatiza tu Negocio en 7 Pasos».",
        "",
        "Nombre: " + valor("nombre"),
        "Correo: " + valor("email"),
        "WhatsApp (opcional): " + (valor("whatsapp") || "—"),
        "Tipo de negocio: " + (valor("tipo_negocio") || "—"),
        "Interés: " + (valor("plan_interes") || "—"),
        "Proceso que me gustaría automatizar: " + (mensaje || "—"),
        "",
        "Consentimiento: autorizo el uso de estos datos solo para responder esta solicitud y dar seguimiento sobre el programa.",
        "Origen: " + origenCampana()
      ];

      var enlace = "mailto:" + DESTINO +
        "?subject=" + encodeURIComponent(ASUNTO) +
        "&body=" + encodeURIComponent(lineas.join("\n"));

      status.textContent = "Se abrirá tu correo con la solicitud lista. Revísala y presiona Enviar. Si no se abre, escríbenos a " + DESTINO + ".";
      status.classList.add("ok");
      window.location.href = enlace;
    });
  }
})();
