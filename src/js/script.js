// MENU MOBİLE
const navLinks = document.getElementById("nav-links");
function onToggleMenu(e) {
  // console.log(e.name);
  e.name = e.name === "menu-outline" ? "close" : "menu-outline";
  navLinks.classList.toggle("active");
}

gsap.registerPlugin(ScrollTrigger);
// SHİP ===========================================
gsap.to(".ship", {
  x: 550,
  duration: 8,
  scrollTrigger: {
    trigger: ".shipStart",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "restart pause resume complete",
    scrub: 3,
  },
});

// fOOTER LOGO ===========================================
gsap.to(".footerLogo", {
  rotate: 90,
  repeat: 500,
  duration: 1,
  scrollTrigger: {
    trigger: ".footerLogo",
    toggleActions: "restart pause resume complete",
  },
});

// ROTATİON ===========================================
// const rotateDiv = document.querySelector(".rotate-div");

// gsap.to(rotateDiv, {
//   rotation: 360, // 360 derece döndür
//   duration: 0.5, // animasyon süresi
//   ease: "power2.out", // animasyon eğrisi
// });

// rotateDiv.addEventListener("mouseenter", () => {
//   gsap.to(rotateDiv, { rotation: 360, duration: 0.5 });
// });

// rotateDiv.addEventListener("mouseleave", () => {
//   gsap.to(rotateDiv, { rotation: 0, duration: 0.5 });
// });

// OUR SERVİCES HOVER JS ==============================

// var services = document.getElementById("services");

// const onmouseoverBG = () => {
//   services.classList.remove("bg-[url('../assets/Rectangle2.png')]");
//   services.classList.add("bg-[url('../assets/Rectangle1.png')]");
//   console.log('değişti');
// }

// const mouseoutBG = () => {
//   services.classList.remove("bg-[url('../assets/Rectangle1.png')]");
//   services.classList.add("bg-[url('../assets/Rectangle2.png')]");
//   console.log('eski haline döndü');
// }

const services = document.getElementById("services");
const hoverRight = document.getElementById("hoverRight");
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");
const textRight = document.getElementById("textRight");
const textLeft = document.getElementById("textLeft");

hoverRight.addEventListener("mouseover", function () {
  services.style.backgroundImage = "url('../assets/Rectangle1.png')";

  rightButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  textRight.classList.add("font-bold");
  textLeft.classList.remove("font-bold");
});

hoverRight.addEventListener("mouseout", function () {
  services.style.backgroundImage = "url('../assets/Rectangle2.png')";

  rightButton.classList.add("hidden");
  leftButton.classList.remove("hidden");
  textRight.classList.remove("font-bold");
  textLeft.classList.add("font-bold");
});


