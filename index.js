// =======================================common script
const sections = document.querySelectorAll(
  ".firstsection, .secondsection, .thirdsection, .fifthsection, .seventhsection "
);
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// -----------------------------------

function myMenuFunction() {
  document.getElementById("menuIcon").classList.toggle("d-none");
  document.getElementById("crossIcon").classList.toggle("d-none");
  document.getElementById("navMenu").classList.toggle("show");
}

function myMenuFunction() {
  var menuIcon = document.getElementById("menuIcon");
  var crossIcon = document.getElementById("crossIcon");
  var i = document.getElementById("navMenu");

  if (i.className === "nav-menu") {
    i.className += " responsive";
    menuIcon.style.display = "none";
    crossIcon.style.display = "inline-block";
  } else {
    i.className = "nav-menu";
    menuIcon.style.display = "inline-block";
    crossIcon.style.display = "none";
  }
}

//=======================preloader=======================

window.onload = function () {
  var preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
};
