const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-overlay");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("d-none");
});
