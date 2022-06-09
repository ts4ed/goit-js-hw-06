const form = document.querySelector(".login-form");
const input = document.querySelectorAll('input')
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const mail = formElement.email.value;
  const password = formElement.password.value;
  let forms = {
    mail: '',
    password: '',
  };
  
  for (var i = 0; i < input.length; i++) {
    if (!input[i].value) {
      alert(`Заполните поле  ${input[i].type}`);
    }
  }

  if ((mail !== "") & (password !== "")) {
    forms.mail = `"${mail}"`;
    forms.password = `"${password}"`;
    console.log(forms);
  }

  form.reset();
}
