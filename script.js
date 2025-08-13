
const lightBtn = document.getElementById("lightModeBtn");
const darkBtn = document.getElementById("darkModeBtn");
const body = document.body;

lightBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
});

darkBtn.addEventListener("click", () => {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
});


