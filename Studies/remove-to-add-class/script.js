const menuItems = document.querySelectorAll(".menu-container-item");

menuItems.forEach((items) => {
  items.addEventListener("click", () => {
    removeActiveClasses();
    items.classList.add("active");
  });
});

function removeActiveClasses() {
  menuItems.forEach((items) => {
    items.classList.remove("active");
  });
}
