const STORAGE_KEY = "landing-page-theme";

const body = document.body;
const toggleButton = document.querySelector("#theme-toggle");

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
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function saveTheme(mode) {
  window.localStorage.setItem(STORAGE_KEY, mode);
}

if (toggleButton) {
  const initialTheme = loadTheme();
  setTheme(initialTheme);

  toggleButton.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  });
}
