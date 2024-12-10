// Toggle theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}


// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Navbar for mobile
function myFunction() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Show "Scroll to Top" button
window.onscroll = function () {
  const btn = document.getElementById("scrollToTopBtn");
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

