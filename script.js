const STORAGE_KEY = "landing-page-theme";

const body = document.body;
const toggleButton = document.querySelector("#theme-toggle");
const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#site-nav");
const yearEl = document.querySelector("#year");
const backToTop = document.querySelector("#back-to-top");

function setTheme(mode) {
  const isDark = mode === "dark";
  body.classList.toggle("dark-mode", isDark);

  if (toggleButton) {
    toggleButton.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    toggleButton.setAttribute("aria-pressed", String(isDark));
  }
}

function loadTheme() {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function saveTheme(mode) {
  window.localStorage.setItem(STORAGE_KEY, mode);
}

if (toggleButton) {
  setTheme(loadTheme());
  toggleButton.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 250);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function attachFormHandler(formId, messageId, successMessage) {
  const form = document.querySelector(formId);
  const message = document.querySelector(messageId);
  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = "Please complete all required fields with valid information.";
      return;
    }

    message.textContent = successMessage;
    form.reset();
  });
}

attachFormHandler("#newsletter-form", "#newsletter-message", "Thanks for subscribing! We'll keep you posted.");
attachFormHandler("#contact-form", "#contact-message", "Thanks! Your message has been received.");
