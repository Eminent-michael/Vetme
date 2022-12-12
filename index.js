// Hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

document.querySelector(".send-msg").addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});