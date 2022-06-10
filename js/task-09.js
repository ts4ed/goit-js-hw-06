const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", changeBg);

// function getRandomHexColor() {
//   return (
//     (bodyEl.style.backgroundColor = `#${Math.floor(
//       Math.random() * 16777215
//     ).toString(16)}`),
//     (spanEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(
//       16
//     )}`)
//   );
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

function changeBg() {
  let color = getRandomHexColor()
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}

