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
