const refs = {
  inpEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.inpEl.addEventListener("input", onSpanChange);
refs.spanEl.addEventListener("click", onSpanChange);

function onSpanChange(event) {
  refs.spanEl.textContent = event.currentTarget.value;
  refs.spanEl.textContent === "" ? refs.spanEl.textContent = "Anonymous" : false ;
  
}
