console.log("Hello my name is Rokas"); // This is my test code

// console.log("Hello Mario");

/* 
    Ilgas komentaras
    per kelias eilutes
*/

// camelCase - pirmoji raidė visada mažoji, o sekančios iš didžiosios

const firstName = "Rokas"; // tekstas (String)
const lastName = "Andreikenas";

const fullName = firstName + " " + lastName;

var dogName = "Smikis"; // senovinis, nebenaudojamas
let age = 30; // naujovinis, naudojam kai reikia priskirti is naujo reiksme
const catName = "Pilkis"; // naujovinis, naudojam kai nereikia priskirti naujos reiksmes

const discount = 0.5; // skaičius (Number)

const isAdult = false; // negiamas (Boolean)

const isAlive = true; // teigiamas (Boolean)

const itemX = null; // tuščia, nėra reikšmės

const itemY = undefined; // nėra apibrėžtas reikšmė

console.log(fullName);
let itemZ;
console.log(itemZ);

itemZ = "Veliau priskirta reiksme";
console.log(itemZ);

let itemA = null;
console.log(itemA);

// Reference types

// masyvai
const array = [1, 2, 3];
const names = ["Rokas", "Tadas", "Tomas"];
const fruits = ["Apple", "Banana", "Kiwi"];

console.log(fruits);

// objektai
const animalX = { name: "Smikis", age: 3, color: "marble" };
const animalY = { name: "Pilkis", age: 60, color: "grey" };

console.log(animalX);

// objektu masyvai
const items = [
  { name: "iPhone 16", price: 1200, color: "black" },
  { name: "iPhone 16 Pro", price: 1400, color: "white" },
];

console.log(items);

// 1 uzduotis

const shopName = "Maxima";
const peopleCount = 500;
const consentWithPrivacyPolicy = true;

const test = "Rokas";

// If (sąlygos)

let animalCount = 49;

if (animalCount > 50) {
  console.log("Zoologijos sode yra daug gyvūnų");
} else {
  console.log("Zoologios sode yra mažai gyvūnų");
}

let personAge = 18;

if (personAge >= 18) {
  console.log("Prašome užeiti");
} else {
  console.log("Į klubą neįleisim... :)");
}

const yearsOfExperience = 11;

if (yearsOfExperience < 2) {
  // iki 2
  console.log("Atlygis iki 1500e");
} else if (yearsOfExperience < 5) {
  // nuo 2 iki 5
  console.log("Atlygis iki 3000e");
} else if (yearsOfExperience < 10) {
  // nuo 5 iki 10
  console.log("Atlygis nuo 3500e");
} else {
  // nuo 10
  console.log("Atlygis nuo 5000e");
}

const maternityLeaveInYears = 5;

if (maternityLeaveInYears === 0) {
  console.log("Išmoka 80proc.");
} else if (maternityLeaveInYears === 1) {
  console.log("Išmoka 50proc.");
} else if (maternityLeaveInYears === 2) {
  console.log("Išmoka 30proc.");
} else {
  console.log("Nepriklauso");
}

const champYears = 3;

if (champYears !== 4) {
  console.log("Šiais metais nevyksta čempionatas");
} else {
  console.log("Vyksta");
}

// && and (ir)

let number = 10;
let number2 = 20;
let value = 15;

if (value > number && value < number2) {
  console.log("The value is between 10 and 20");
} else {
  console.log("The value is not in range");
}

// || or (arba)

let month = 1; // sausis

if (month === 1 || month === 2 || month === 3) {
  console.log("Ziema");
}

let sum = 10 + 5; // 15
let substraction = sum - 7; // 8
let multi = sum * substraction; // 15 * 8
let division = 6 / 3;
