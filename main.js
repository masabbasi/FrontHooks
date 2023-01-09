const hamburgerMenu = document.querySelector(".hamburger__menu");
const menu = document.querySelector(".menu__right__items")
const cover = document.querySelector(".cover")

hamburgerMenu.addEventListener ("click",function(){
	hamburgerMenu.classList.toggle("hamburger__menu--open");
	menu.classList.toggle("mobile__menu--show")
	cover.classList.toggle("cover--show")
})
