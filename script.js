/* ---------------------------------------------------
   SCROLL REVEAL
--------------------------------------------------- */
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 300;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

/* ---------------------------------------------------
   NAV ACTIVE HIGHLIGHT
--------------------------------------------------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNav() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 650;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

/* ---------------------------------------------------
   MOBILE NAV MENU TOGGLE
--------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ---------------------------------------------------
   ROLE TEXT SWITCHING
--------------------------------------------------- */
const roleText = document.getElementById("role-text");
const roles = ["Student", "Software Engineer"];
let index = 0;

function changeRole() {
  roleText.classList.add("fade");

  setTimeout(() => {
    index = (index + 1) % roles.length;
    roleText.textContent = roles[index];
    roleText.classList.remove("fade");
  }, 500);
}

setInterval(changeRole, 3000);

/* ---------------------------------------------------
   INIT ON LOAD + SCROLL
--------------------------------------------------- */
window.addEventListener("scroll", () => {
  reveal();
  updateActiveNav();
});

reveal();
updateActiveNav();
