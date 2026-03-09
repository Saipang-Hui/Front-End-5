document.addEventListener("DOMContentLoader", ()=> {
// first layer arrow function
// define variables for css selectors

const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
// add event into toggle button
toggleButton.addEventListener("click", ()=>{
    // second layer arrow function
    // add active class into mobile-menu-list
  mobileMenu.classList.toggle("active");
});

});

// Feb 24 .//
