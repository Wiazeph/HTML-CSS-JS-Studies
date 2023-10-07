const password = document.getElementById("password");
let strength = document.getElementById("strength");

strength.innerText = "Uncertain";

password.addEventListener("input", (e) => {
  const length = e.target.value.length;

  if (length === 0) {
    strength.innerText = "Uncertain";
    strength.style.color = "rgb(243 244 246)";
  } else if (length <= 10) {
    strength.innerText = "Weak";
    strength.style.color = "rgb(253 224 71)";
  } else {
    strength.innerText = "Strong";
    strength.style.color = "rgb(74 222 128)";
  }
});
