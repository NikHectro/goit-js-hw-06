function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const colorNumber = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", changeBgc);

function changeBgc(event) {
  const colorHex = getRandomHexColor();
  bodyEl.style.backgroundColor = colorHex;
  colorNumber.textContent = colorHex;
}