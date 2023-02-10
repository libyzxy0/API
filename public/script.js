let navToggleBtn = document.querySelector("[data-sidebar-toggle]");
let header = document.querySelector("[data-sidebar]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
});
