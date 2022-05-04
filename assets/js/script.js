"use strict"

/** navbar toggle */
const navbar = document.querySelector("[data-navbar]");
const navToggle =  document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");
const navbarLink = document.querySelectorAll("[data-nav-link]");

console.log(navToggle);
const navToggleFunc = function(){
    navToggle.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

}

navToggle.addEventListener('click', navToggleFunc);
overlay.addEventListener('click', navToggleFunc);


for(var i =0; i < navbarLink.length; i++){
    navbarLink[i].addEventListener("click", navToggleFunc)
}