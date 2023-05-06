
// Get the navbar toggle button and navbar collapse element
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add a click event listener to the toggle button
navbarToggle.addEventListener('click', () => {
  // Toggle the "show" class on the navbar collapse element
  navbarCollapse.classList.toggle('show');
});
