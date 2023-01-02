const toggler = document.querySelector("#hamburger");

toggler.addEventListener("click", () => {
  const isValue = toggler.classList.toggle("active");

  if (isValue) {
    document.querySelector("#body").style.overflowY = "hidden";
  } else {
    document.querySelector("#body").style.overflowY = "auto";
  }
});
