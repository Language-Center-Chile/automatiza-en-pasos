# Automatiza tu Negocio en 7 pasos — Landing

Landing page del curso de Language Center Chile, en alianza con Aleph Server.
Sitio estático (HTML + CSS + JS), listo para GitHub Pages.

## Archivos
- `index.html` — estructura de la página.
- `styles.css` — estilos (responsive, mobile-first).
- `script.js` — acordeón FAQ, menú móvil y envío del formulario.
- `assets/` — logos (Language Center y Aleph Server).

## Publicar en GitHub Pages
1. Sube estos archivos a la raíz del repositorio de LCC.
2. En el repo: **Settings → Pages → Source: Deploy from branch → main / root**.
3. La página queda en `https://<usuario>.github.io/<repo>/`.

> Es un sitio estático: no necesita servidor. Lo único que se conecta aparte es el formulario (ver abajo).

## Conectar el formulario de leads
El formulario (sección "Agenda tu diagnóstico gratis") ya está construido. Falta apuntarlo a un destino. Elige UNA opción y reemplaza la URL del `action` en `index.html` (atributo `action="..."` del `<form id="lead-form">`):

**Opción A — Formspree (la más rápida)**
1. Crea un formulario en https://formspree.io con el correo `contacto@languagecenterchile.com`.
2. Copia la URL que te dan (formato `https://formspree.io/f/xxxxx`).
3. Pégala en el `action`. Listo: cada lead llega al correo (y a su panel/Sheet).

**Opción B — Google Sheet (la "Excel de contactos")**
1. Crea una Google Sheet.
2. Extensiones → Apps Script → publica un script `doPost` como *Web app*.
3. Pega la URL del Web app en el `action`. Cada lead se escribe como fila en la planilla.

**Opción C — n8n (coherente con la marca)**
1. Crea un *Webhook* en n8n (instancia de Aleph).
2. Conecta el webhook a Google Sheets y/o a un correo a `contacto@languagecenterchile.com`.
3. Pega la URL del webhook en el `action`.

Mientras el `action` siga con `REEMPLAZAR_ID`, el formulario muestra un aviso de "modo demo" y no envía.

## WhatsApp
El botón flotante y los enlaces de WhatsApp apuntan a `https://wa.me/56962052499` (número de Katherine, **solo para pruebas**). Antes de publicar, reemplázalo por el número definitivo (buscar `56962052499` en `index.html`).

## Pendientes de contenido
- **Logo de Language Center**: incluido. Si hay una versión con "Chile", reemplazar `assets/logo-lc.png`.
- **Ilustración del hero**: hay un marcador ("Ilustración amable"); reemplazar por la imagen final.
- **Textos**: testimonios, respuestas del FAQ y descripciones son provisionales (fase de copy).
- **Redes sociales**: los enlaces de Instagram y LinkedIn en el footer están en `#`; poner las URLs reales.

## Módulos opcionales
Las secciones **Bonos** y **Servicios / B2B** son opcionales. Para quitar cualquiera, borra su bloque `<section>...</section>` en `index.html` (las demás secciones se reconectan solas).

## Valores
Los precios son **referenciales** (pendientes de validación con datos reales de LCC), tal como están marcados en la página.

### Desarrolladores
- Tiquitia: diseño y desarrollo.

## Estado de lanzamiento

El estado comercial, los bloqueadores y el checklist de salida se mantienen en [docs/LAUNCH_READINESS.md](docs/LAUNCH_READINESS.md).

La landing permanece en preparación interna. No publicar, activar pagos ni conceder accesos hasta completar QA end-to-end y contar con aprobación final.
