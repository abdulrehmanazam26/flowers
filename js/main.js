(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Real photo slots: inject <picture> (WebP + JPEG) into each
   * data-image-slot container from the assets/images.js manifest.
   * The SVG placeholder art already in that container stays in the DOM
   * as a fallback background; if the photo 404s, the overlay just
   * removes itself instead of showing a broken-image icon. */
  (window.SITE_IMAGES || []).forEach(function (photo) {
    var container = document.querySelector('[data-image-slot="' + photo.id + '"]');
    if (!container) return;

    var picture = document.createElement("picture");
    picture.className = "slot-photo";

    var img = document.createElement("img");
    img.src = photo.jpg;
    img.alt = photo.alt || "";
    img.width = photo.width;
    img.height = photo.height;
    /* Load every visible site photo up front. The old lazy-loading setup left
       the SVG placeholder on screen until a visitor scrolled to each card,
       which made the artwork visibly switch to a different image. */
    img.loading = "eager";
    img.decoding = "async";
    if (photo.priority) img.setAttribute("fetchpriority", "high");

    img.addEventListener("error", function () {
      container.classList.add("photo-fallback");
      picture.remove();
    }, { once: true });
    img.addEventListener("load", function () {
      picture.classList.add("is-loaded");
      container.classList.add("photo-ready");
    }, { once: true });

    picture.appendChild(img);
    container.appendChild(picture);
  });

  /* Mobile nav toggle */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Gallery lightbox */
  var lightbox = document.getElementById("lightbox");
  var lightboxArt = document.getElementById("lightboxArt");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var artHTML = item.querySelector(".gallery-art").innerHTML;
      lightboxArt.innerHTML = artHTML;
      lightboxCaption.textContent = item.getAttribute("data-caption") || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* Order form -> WhatsApp / Email handoff */
  var form = document.getElementById("orderForm");
  var formNote = document.getElementById("formNote");
  var WHATSAPP_NUMBER = "353877459097";
  var SHOP_EMAIL = "bloomingbridgeflorist@gmail.com";

  function buildMessage(data) {
    var lines = [
      "New order enquiry - Blooming Bridge Florist",
      "Name: " + data.name,
      "Phone: " + data.phone,
      data.email ? "Email: " + data.email : null,
      "Occasion: " + data.occasion,
      "Delivery/Collection: " + data.fulfilment,
      data.address ? "Address: " + data.address : null,
      data.message ? "Message: " + data.message : null
    ].filter(Boolean);
    return lines.join("\n");
  }

  function getFormData() {
    var fd = new FormData(form);
    return {
      name: (fd.get("name") || "").toString().trim(),
      phone: (fd.get("phone") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      occasion: (fd.get("occasion") || "").toString().trim(),
      fulfilment: (fd.get("fulfilment") || "").toString().trim(),
      address: (fd.get("address") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim()
    };
  }

  if (form) {
    form.querySelectorAll("button[type=submit]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        if (!form.reportValidity()) return;

        var data = getFormData();
        var mode = btn.getAttribute("data-mode");
        var message = buildMessage(data);

        if (mode === "whatsapp") {
          var waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
          window.open(waUrl, "_blank", "noopener");
          formNote.textContent = "Opening WhatsApp with your details filled in — just hit send.";
        } else {
          var subject = "Flower order enquiry: " + (data.occasion || "General");
          var mailUrl = "mailto:" + SHOP_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
          window.location.href = mailUrl;
          formNote.textContent = "Opening your email app with your details filled in — just hit send.";
        }
      });
    });
  }

  /*
   * NOTE for shop owner / site maintainer:
   * Replace the placeholder hrefs below with the shop's real Facebook and
   * Instagram page URLs once available (search bar, footer icons, and the
   * "Read Our Reviews on Facebook" button all use these two ids).
   */
  var FACEBOOK_URL = ""; // e.g. "https://www.facebook.com/bloomingbridgeflorist"
  var INSTAGRAM_URL = ""; // e.g. "https://www.instagram.com/bloomingbridgeflorist"

  function wireSocialLink(id, url) {
    var el = document.getElementById(id);
    if (!el) return null;
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.style.display = "none";
    }
    return el;
  }
  wireSocialLink("facebookReviewsLink", FACEBOOK_URL);
  wireSocialLink("footerFacebookLink", FACEBOOK_URL);
  wireSocialLink("footerInstagramLink", INSTAGRAM_URL);

  var reviewsCta = document.querySelector(".reviews-cta");
  if (reviewsCta && !FACEBOOK_URL) reviewsCta.style.display = "none";

  var footerSocial = document.querySelector(".footer-social");
  if (footerSocial && !FACEBOOK_URL && !INSTAGRAM_URL) {
    var socialCol = footerSocial.closest(".footer-col");
    if (socialCol) socialCol.style.display = "none";
  }
})();
