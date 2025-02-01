document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper.js with locked layout
  const swiper = new Swiper(".projects-carousel", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false, // Prevent looping issues
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoHeight: false, // Disable auto height to prevent shifting
      allowTouchMove: false, // Prevent user dragging from breaking layout
      breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
      },
  });

  // Read More Button Functionality
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const card = button.closest(".project-card");
          const moreText = card.querySelector(".more-text");
          const allCards = document.querySelectorAll(".project-card");

          if (moreText.style.display === "inline") {
              moreText.style.display = "none";
              button.textContent = "Read More";
              card.classList.remove("expanded");

              // Restore all cards to the same height
              allCards.forEach(c => c.style.height = "500px");

              // 🔹 Force Swiper to not adjust its layout
              swiper.update();
          } else {
              // Close all expanded cards before opening a new one
              allCards.forEach((c) => {
                  c.classList.remove("expanded");
                  c.querySelector(".more-text").style.display = "none";
                  c.querySelector(".read-more-btn").textContent = "Read More";
                  c.style.height = "500px"; // Reset height
              });

              moreText.style.display = "inline";
              button.textContent = "Read Less";
              card.classList.add("expanded");

              // Expand height only for the clicked card
              card.style.height = "auto";

              // 🔹 Prevent Swiper from shifting slides
              setTimeout(() => swiper.update(), 300); // Delayed update prevents shifting
          }
      });
  });
});
