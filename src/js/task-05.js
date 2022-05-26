const refs = {
  inpEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.inpEl.addEventListener("input", onSpanChange);
refs.spanEl.addEventListener("click", onSpanChange);

function onSpanChange(event) {
  refs.spanEl.textContent = event.currentTarget.value;
  if (refs.spanEl.textContent === "") {
    return (refs.spanEl.textContent = "Anonymous");
  }
}
