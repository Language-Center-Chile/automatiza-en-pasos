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
  // Un mailto NO prueba envío ni llegada: la persona decide si envía el correo.
  var DESTINO = "contacto@languagecenterchile.com";
  var ASUNTO = "[Automatiza 7 Pasos] Solicitud de información";
  var form = document.getElementById("lead-form");
  var status = document.getElementById("form-status");

  // Campaña: solo se aceptan valores conocidos (allowlist). Cualquier otro valor se
  // registra como "otro", para no copiar al correo texto arbitrario de la URL.
  var CAMPANA_PERMITIDA = {
    utm_source: /^(instagram|facebook|linkedin|whatsapp|email|google|web)$/,
    utm_medium: /^(social|email|organic|referral|qr)$/,
    utm_campaign: /^(automatiza_7_pasos_launch)$/,
    utm_content: /^(post(0[1-9]|1[0-2])|leadmagnet_checklist|nurture_d([0-9]|[1-2][0-9]))$/
  };

  function origenCampana() {
    var params = new URLSearchParams(window.location.search);
    var partes = [];
    Object.keys(CAMPANA_PERMITIDA).forEach(function (k) {
      if (!params.has(k)) return;
      var v = String(params.get(k) || "").trim().toLowerCase();
      partes.push(k + "=" + (CAMPANA_PERMITIDA[k].test(v) ? v : "otro"));
    });
    return partes.length ? partes.join(" · ") : "directo";
  }

  function valor(nombre) {
    var campo = form.elements[nombre];
    return campo && campo.value ? String(campo.value).trim() : "";
  }

  if (form && status) {
    // Con JavaScript se usa la validación propia con mensaje en pantalla.
    // Sin JavaScript, el HTML conserva la validación nativa (required + consentimiento).
    form.noValidate = true;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";

      if (!form.checkValidity()) {
        status.textContent = "Revisa los campos obligatorios y la autorización, por favor.";
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
