const openMenuLink = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav");

menu.classList.remove('main-nav--nojs');

openMenuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--open");
  menu.classList.toggle("main-nav--closed");
});
