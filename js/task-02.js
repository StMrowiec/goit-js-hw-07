const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerText = ingredients[i];
  ul.appendChild(li);
}
