// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Obsługa kafelków językowych na stronie głównej
  document.querySelectorAll("[data-lang-link]").forEach(card => {
    card.addEventListener("click", () => {
      const lang = card.getAttribute("data-lang-link");
      if (lang) {
        window.location.href = `./${lang}/`;
      }
    });
  });
});

// Funkcja do ewentualnego użycia gdziekolwiek:
// np. <button onclick="goToLang('en')">English</button>
function goToLang(langCode) {
  window.location.href = `../${langCode}/`;
}
