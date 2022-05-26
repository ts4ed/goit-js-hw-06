const ulEl = document.querySelector("#categories");
console.log(`Number of categories: ${ulEl.children.length}`);

const firstLiEl = ulEl.children[0];
console.log(`Category: ${firstLiEl.firstElementChild.textContent}`);
console.log(`Elements: ${firstLiEl.lastElementChild.children.length}`);

const secondLiEl = ulEl.children[1];
console.log(`Category: ${secondLiEl.firstElementChild.textContent}`);
console.log(`Elements: ${secondLiEl.lastElementChild.children.length}`);

const lastLiEl = ulEl.children[2];
console.log(`Category: ${lastLiEl.firstElementChild.textContent}`);
console.log(`Elements: ${lastLiEl.lastElementChild.children.length}`);
