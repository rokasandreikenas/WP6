// i, j, k
// let i = 0; inicializavimas
// i < 10; 0 < 10
// i++ yra tas pats kas i = i + 1; 0 = 0 + 1
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("------");
for (let i = 1; i < 10; i++) {
  console.log(i);
}
console.log("------");
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}
console.log("------");
for (let i = 0; i < 10; i += 3) {
  console.log(i);
}
console.log("------");

const products = ["Laptop", "Smartphone", "Tablet", "Smartwatch"]; // masyvas arba array

console.log(products[0]);
console.log(products[2]);
console.log(products[3]);

const fruits = ["Apple", "Banana", "Kiwi", "Ananas"];
// fruits[1]
// fruits[0]
console.log("------");

console.log(products.length);
console.log(fruits.length);

console.log(fruits[2]);
const lastFruit = fruits[fruits.length - 1];

console.log("------");
// products.length = 4

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  // products[0]
  // products[1]
  // products[2]
  // products[3]
}
console.log("------");
const totalPages = 5;

for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
  console.log("Page " + pageNumber);
}

console.log("------");
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];

const emailAddresses = [];

for (let i = 0; i < users.length; i++) {
  emailAddresses.push(users[i].email);
}

console.log(emailAddresses);
