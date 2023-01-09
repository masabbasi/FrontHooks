const hamburgerMenu = document.querySelector(".hamburger__menu");
const menu = document.querySelector(".menu__right__items");
const cover = document.querySelector(".cover");
const logo = document.querySelector(".menu__right img");
const themeBtn = document.querySelector(".light-mode-btn");
const darkThemeIcon = `<svg class="light-mode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-blue-500 w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;

const lightThemeIcon = `<svg class="light-mode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round"
	d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
</path>
</svg>`;

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger__menu--open");
  menu.classList.toggle("mobile__menu--show");
  cover.classList.toggle("cover--show");
});

if (localStorage.getItem("theme") === "dark-theme") {
  document.documentElement.classList.add("dark-theme");
  logo.src = "./files/favicon-darkmode.png";
  themeBtn.innerHTML = lightThemeIcon;
}

themeBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-theme");
  if (document.documentElement.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
    logo.src = "./files/favicon-darkmode.png";
    this.innerHTML = lightThemeIcon;
  } else {
    localStorage.setItem("theme", "light-theme");
    logo.src = "./files/favicon.png";
    this.innerHTML = darkThemeIcon;
  }
});

console.log(logo);
