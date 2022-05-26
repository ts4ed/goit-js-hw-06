const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createEL = ingredients.map((ingredien) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredien;
  liEl.classList = "item";
  return liEl;
});

const ulEl = document.querySelector("#ingredients");
ulEl.append(...createEL);
