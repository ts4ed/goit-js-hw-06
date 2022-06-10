const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
form.addEventListener("submit", onFormSubmit);
let forms = [];

function onFormSubmit(event) {
  event.preventDefault();

  for (var i = 0; i < input.length; i++) {
    if (!input[i].value) {
      alert(`Заполните поле  ${input[i].type}`);
    }
    forms.push(`${input[i].type}: ${input[i].value}`);
  }

  console.log(forms);
  form.reset();
}
