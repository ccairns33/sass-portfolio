const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

// initially menu is not shown
let showMenu = false;

let toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
