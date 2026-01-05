const btnMenu = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});