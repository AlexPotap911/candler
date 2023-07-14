const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".menu__list-header");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});
