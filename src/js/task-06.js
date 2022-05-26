const refs = {
  inputEl: document.querySelector("#validation-input"),
};

const onInputCheck = (event) =>
  event.currentTarget.value.length <= lengthInp
    ? refs.inputEl.classList.add("valid")
    : refs.inputEl.classList.add("invalid");

const lengthInp = refs.inputEl.attributes[2].value;
refs.inputEl.addEventListener("blur", onInputCheck);

// function onInputCheck(event) {
//   if (event.currentTarget.value.length <= lengthInp) {
//     return refs.inputEl.classList.add("valid");
//   }
//   if (event.currentTarget.value.length > lengthInp) {
//     return refs.inputEl.classList.add("invalid");
//   }
// }
