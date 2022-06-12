const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
form.addEventListener("submit", onFormSubmit);
let obj = {};
let forms = [];

function onFormSubmit(event) {
  event.preventDefault();

  for (var i = 0; i < input.length; i++) {
    if (!input[i].value ) {
      return alert(`Заполните все поля`);
    }
    if (!forms.includes(`${input[i].type}: ${input[i].value}`)) {
     forms.push(`${input[i].type}: ${input[i].value}`);
    }
    obj = Object.assign({}, forms);
  }
  
  console.log(obj);
  obj = {};
  forms = [];

  form.reset();
}
