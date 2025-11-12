const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

const mobileLinks = document.querySelectorAll(".mobile-nav a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});
