const nameElementById = document.getElementById("name");
const nameElementByQuerySelector = document.querySelector("#name"); // pagal id

const listItem = document.querySelector(".list-item"); // pagal klasę
const allListItems = document.querySelectorAll(".list-item"); // pagal klasę visi elementai

const heading = document.querySelector("h1"); // pagal elemento tipą

console.log(nameElementById);
console.log(nameElementByQuerySelector);
console.log(heading);

const randomDiv = document.getElementById("random");
randomDiv.innerHTML = "Kaip <strong> Jums? </strong> sekasi?";

// teksto keitimas
// 1. ištraukti HTML elementą
// 2. reikia pridėti paspaudimo funkcionalumą
// 3. pakeisti elemento vidų su textContent arba innerHtml

const changeNameButton = document.getElementById("change-name"); // 1.
console.log(changeNameButton);

// 2.
changeNameButton.addEventListener("click", function () {
  nameElementById.textContent = "Mano vardas yra Tomas"; // 3.
});

// background spalvos keitimas

const nightModeButton = document.getElementById("night-mode");
console.log(nightModeButton);

const bodyElement = document.body;
// arba const bodyElement = document.querySelector("body");
console.log(bodyElement);
nightModeButton.addEventListener("click", function () {
  //   bodyElement.style.backgroundColor = "#4b0082";
  //   bodyElement.style.color = "white";
  bodyElement.className = "night-mode";
});

// elemento pridėjimas
// ištraukiam mygtuką ir elementą į kurį norėsim įdėti
// priskiriam mygtukui click listenerį
// sukuriam naują elementą, pridedam jam tekstą ir reikalingus atributus
// panaudojam appendChild ant elemento į kurį norime įdėti

const addAnimalButton = document.getElementById("add-animal");
const animalListElement = document.getElementById("animal-list"); // ul

addAnimalButton.addEventListener("click", function () {
  const newListItem = document.createElement("li"); // sukuriam naują elementą
  newListItem.textContent = "Asiliukas";
  animalListElement.appendChild(newListItem); // pridedam į norimą elementą kaip vaikinį
});
