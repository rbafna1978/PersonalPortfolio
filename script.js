document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.getElementById("hamburger");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  if (themeToggle) {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      body.classList.add("light");
    }
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light");
      const theme = body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("theme", theme);
      themeToggle.classList.add("spin");
      setTimeout(() => themeToggle.classList.remove("spin"), 500);
    });
  }
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("show"));
  });
  document.querySelectorAll(".toggle-details").forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      details.classList.toggle("open");
    });
  });
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
    });
  }
});
