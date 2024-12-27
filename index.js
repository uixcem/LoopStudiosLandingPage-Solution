const isMobileView = window.innerWidth < 480;

if (isMobileView) {
  document.querySelector(".mobileMenu").style.display = "block";
  document.querySelector(".icon-hamburger").style.display = "block";
  document.querySelector(".icon-close").style.display = "none";
  document.querySelector(".mobileMenu").style.backgroundColor = "transparent";
  document.querySelector(".mobileMenu__links").style.display = "none";
  document.querySelector(".nav__logo--img").style.display = "none";
} else {
  document.querySelector(".mobileMenu").style.display = "none";
}

document.querySelector(".icon-hamburger").addEventListener("click", () => {
  document.querySelector(".icon-hamburger").style.display = "none";
  document.querySelector(".icon-close").style.display = "block";
  document.querySelector(".mobileMenu").style.backgroundColor = "black";
  document.querySelector(".mobileMenu__links").style.display = "block";
  document.querySelector(".mobileMenu__links").style.marginTop = "10rem";
  document.querySelector(".nav__logo--img").style.display = "block";
});

document.querySelector(".icon-close").addEventListener("click", () => {
  document.querySelector(".icon-hamburger").style.display = "block";
  document.querySelector(".icon-close").style.display = "none";
  document.querySelector(".mobileMenu").style.backgroundColor = "transparent";
  document.querySelector(".mobileMenu__links").style.display = "none";
  document.querySelector(".nav__logo--img").style.display = "none";
});
