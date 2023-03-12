const boxes = document.getElementById("boxes");
const createButton = document.getElementsByTagName("button")[0];
const destroyButton = document.getElementsByTagName("button")[1];
let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = document.getElementsByTagName("input");
  for (let i = 0; i < amount[0].value; i++) {
    size += 10;
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  size = 30;
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
