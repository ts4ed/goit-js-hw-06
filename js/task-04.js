const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const btnEl = document.querySelectorAll("#counter > button");
const decEl = btnEl[0];
const incEl = btnEl[1];
const valueEl = document.querySelector("#value");

incEl.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
  // console.log(valueEl.textContent);
});

decEl.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
  // console.log(valueEl.textContent);
});
