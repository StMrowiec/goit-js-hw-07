const categories = document.getElementsByTagName("h2");
const elements = document.getElementsByTagName("ul");

function showDetail(array, elements) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Category: ${array[i].innerText}`);
    console.log(`Elements: ${elements[i + 1].children.length}`);
    console.log("");
  }
}

console.log(`Number of categories: ${categories.length}`);
console.log("");

showDetail(categories, elements);
