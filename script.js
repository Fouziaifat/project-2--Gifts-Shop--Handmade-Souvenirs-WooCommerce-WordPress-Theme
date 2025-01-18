//website link - https://preview.themeforest.net/item/gifts-shop-responsive-woocommerce-wordpress-theme/full_screen_preview/20131278 //

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Toggle icon between menu and close icons
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const headerBoxes = document.querySelectorAll(".image-demo");
headerBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundPosition = "center bottom";
  });
  box.addEventListener("mouseleave", () => {
    box.style.backgroundPosition = "center top";
  });
});
