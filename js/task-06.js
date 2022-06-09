
const refs = {
  inputEl: document.querySelector("#validation-input"),
};

const lengthInp = refs.inputEl.attributes[2].value;
const onInputCheck = (event) => {
  let ev = event.currentTarget.value;
  if (ev.length === Number(lengthInp)) {   
    return (refs.inputEl.classList.add("valid"),
    refs.inputEl.classList.remove("invalid"))
  }
  return (
    refs.inputEl.classList.remove("valid"),
    refs.inputEl.classList.add("invalid")
  );
};
refs.inputEl.addEventListener("blur", onInputCheck);
