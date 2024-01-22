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
