// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const contEl = document.querySelector("#controls");
const inputEl = contEl.children[0];
const btnCreateEl = contEl.children[1];
const btnDestroyEl = contEl.children[2];
const boxEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", create);
btnDestroyEl.addEventListener("click", destroy);




// Подскажите каким еще способом можно решить эту задачу?
// При решении пришлось гуглить и искать подсказки для этой функции
function createBoxes(value) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < value; i += 1) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `margin-top: 10px; margin-left: auto; margin-right: auto; width: ${size}px; height: ${size}px; 
      background-color: #${Math.floor(Math.random() * 16777215).toString(16)}`;
    fragment.appendChild(div);
  }
  boxEl.appendChild(fragment);
}

function create() {
  const value = inputEl.value;
  createBoxes(value);
}

function destroy() {
  boxEl.textContent = "";
}
