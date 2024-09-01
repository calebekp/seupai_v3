// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  const transitionTexts = document.querySelectorAll(".transition-text");
  let currentIndex = 0;

  function showNextText() {
    transitionTexts[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % transitionTexts.length;
    transitionTexts[currentIndex].classList.add("active");
  }

  setInterval(showNextText, 2000);

  // Smooth scroll for menu items
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for fixed header height
        behavior: "smooth",
      });
    });
  });
});

// Animação dos números
$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).data("count"),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
