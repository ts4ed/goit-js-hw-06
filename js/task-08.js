const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const mail = formElement.email.value;
  const password = formElement.password.value;
  const forms = [];
  if (mail === "") {
    alert(`Вы не заполнили поле "Email"`);
  }
  if (password === "") {
    alert(`Вы не заполнили поле "Password"`);
  }
  if ((mail !== "") & (password !== "")) {
    forms.push(`Mail: ${mail}`, `Password: ${password}`);
    console.log(forms);
  }

  form.reset();
}
