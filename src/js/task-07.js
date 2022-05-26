const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("change", onEvent);

refs.input.addEventListener("change", onEvent);
function onEvent() {
  refs.span.style.fontSize = `${refs.input.value}px`;
}

// function onEvent() {
//   if (refs.input.value <= 25) {
//     return (refs.span.style.fontSize = "10px");
//   }
//   if ((refs.input.value > 25) & (refs.input.value <= 50)) {
//     return (refs.span.style.fontSize = "20px");
//   }
//   if ((refs.input.value > 50) & (refs.input.value <= 75)) {
//     return (refs.span.style.fontSize = "30px");
//   }
//   if (refs.input.value > 75) {
//     return (refs.span.style.fontSize = "40px");
//   }
// }
