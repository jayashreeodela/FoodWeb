// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector(".carousel-track");
//   const prev = document.querySelector(".carousel-btn.prev");
//   const next = document.querySelector(".carousel-btn.next");

//   if (track && prev && next) {
//     prev.addEventListener("click", () => {
//       track.scrollBy({ left: -320, behavior: "smooth" });
//     });

//     next.addEventListener("click", () => {
//       track.scrollBy({ left: 320, behavior: "smooth" });
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prev = document.querySelector(".carousel-btn.prev");
  const next = document.querySelector(".carousel-btn.next");
  const cards = document.querySelectorAll(".feature-card");

  if (track && prev && next && cards.length > 0) {
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginRight || 0);

    const scrollAmount = cardWidth * 3;

    prev.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    next.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});
