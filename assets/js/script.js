const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let hamburger = document.getElementById("hamburger");
let navMenu = document.querySelector("ul");

function openMenu() {
  hamburger.classList.add("active");
  navMenu.classList.add("active");
}

let navLink = document.getElementsByClassName("nav-item");
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
