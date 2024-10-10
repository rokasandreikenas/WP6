const fruitList = document.getElementById("fruit-list");
const fruits = [
  "Banana 1.5e/kg",
  "Kiwi 4e/kg",
  "Watermeleon 1e/kg",
  "Apple 0.99e/kg",
];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];

  const fruitListItem = document.createElement("li");
  fruitListItem.textContent = fruit;

  fruitList.append(fruitListItem);
}
