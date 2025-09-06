// Year update
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
const root = document.documentElement;
document.getElementById("theme-toggle").addEventListener("click", () => {
  root.classList.toggle("light");
});

// Simple form status
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector(".form-status").textContent = "Message sent!";
});
