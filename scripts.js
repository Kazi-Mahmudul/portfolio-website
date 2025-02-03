document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".projects-carousel", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false, 
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoHeight: false, 
      allowTouchMove: false, 
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
              allCards.forEach(c => c.style.height = "500px");
              swiper.update();
          } else {
              allCards.forEach((c) => {
                  c.classList.remove("expanded");
                  c.querySelector(".more-text").style.display = "none";
                  c.querySelector(".read-more-btn").textContent = "Read More";
                  c.style.height = "500px"; 
              });

              moreText.style.display = "inline";
              button.textContent = "Read Less";
              card.classList.add("expanded");
              card.style.height = "auto";

              setTimeout(() => swiper.update(), 300);
          }
      });
  });
});
