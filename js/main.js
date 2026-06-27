/* Saffron Table — site interactions */
(function () {
  "use strict";

  /* ----- Mobile nav ----- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close menu after clicking a link (mobile)
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- Current year in footer ----- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ----- Reservation: min date = today ----- */
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  /* ----- Reservation form validation ----- */
  const form = document.getElementById("reserveForm");
  const success = document.getElementById("formSuccess");

  function setError(input, message) {
    const field = input.closest(".field");
    const err = field ? field.querySelector(".field__error") : null;
    if (field) field.classList.toggle("field--invalid", Boolean(message));
    if (err) err.textContent = message || "";
  }

  const validators = {
    name: function (v) {
      return v.trim().length >= 2 ? "" : "Please enter your name.";
    },
    email: function (v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address.";
    },
    date: function (v) {
      return v ? "" : "Pick a date.";
    },
    time: function (v) {
      return v ? "" : "Pick a time.";
    },
    guests: function (v) {
      return v ? "" : "How many guests?";
    },
  };

  function validateField(input) {
    const fn = validators[input.name];
    if (!fn) return true;
    const msg = fn(input.value);
    setError(input, msg);
    return !msg;
  }

  if (form) {
    // Live-clear errors as the user fixes them
    Object.keys(validators).forEach(function (name) {
      const input = form.elements[name];
      if (input) {
        input.addEventListener("input", function () {
          if (input.closest(".field").classList.contains("field--invalid")) {
            validateField(input);
          }
        });
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      let firstInvalid = null;

      Object.keys(validators).forEach(function (name) {
        const input = form.elements[name];
        if (input && !validateField(input)) {
          valid = false;
          if (!firstInvalid) firstInvalid = input;
        }
      });

      if (!valid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (success) {
        const nameSpan = document.getElementById("successName");
        if (nameSpan) nameSpan.textContent = form.elements["name"].value.trim().split(" ")[0];
        success.hidden = false;
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }

  /* ----- Reveal-on-scroll ----- */
  const revealTargets = document.querySelectorAll(
    ".highlight, .about__text, .about__media, .menu__col, .gallery__item, .visit__info, .visit__map, .form"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
