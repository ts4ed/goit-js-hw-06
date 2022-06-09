const ulEl = document.querySelector("#categories");
console.log(`Number of categories: ${ulEl.children.length}`);

const ulCh = ulEl.children;
for (let li of ulCh) {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
}
