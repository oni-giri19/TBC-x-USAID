//Scroll for tranparent header
const header = document.querySelector(".site-header");
// Listen for the scroll event
window.addEventListener("scroll", () => {
  // Get the scroll position
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Add or remove the 'transparent' class based on the scroll position
  if (scrollPosition > 0) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});
//sidebar toggle when screen is 700px and less
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const dropdown = document.querySelector(".dropdown-menu");
toggleBtn.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});
closeBtn.addEventListener("click", function () {
  dropdown.classList.remove("active");
});
//partners section carousel logic
const carousel = document.querySelector(".carousel");
let currentIndex = 0;

function showSlide(index) {
  currentIndex = index;
  const translateValue = -index * carousel.clientWidth + "px";
  carousel.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}
// Auto-play carousel
setInterval(() => {
  nextSlide();
}, 10000); // Change slide every 10 seconds
