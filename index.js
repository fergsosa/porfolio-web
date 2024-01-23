import toggleTheme from "./js/toggleTheme.js";
import scrollSpy from "./js/scrollEspia.js";
import contactFormValidations from "./js/validacionForm.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  scrollSpy();
  contactFormValidations();
});

// toggleTheme(".btn-theme-dark", "dark-mode");
