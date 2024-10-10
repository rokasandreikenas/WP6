document
  .getElementById("myButton")
  .addEventListener("dblclick", function (event) {
    console.log(event.type); // Logs "click"
    console.log(event.target); // Logs the button element
    alert("Button clicked!");
  });

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));

function consoleMe(item) {
  console.log(item);
}

consoleMe("Rokas");
consoleMe({ name: "Andrius" });

//
const svyturysButelys = {
  height: 30,
  width: 5,
  color: "brown",
  material: "glass",
};

//
const lenkiskasButyles = {
  height: 27,
  width: 8,
  color: "black",
  material: "plastic",
};

function insertTare(tare) {
  if (tare.height <= 42 && tare.width <= 7) {
    console.log("Dydis atitinka");
  } else {
    console.log("Dydis neatitiko");
  }

  if (
    tare.color === "brown" ||
    tare.color === "green" ||
    tare.color === "transparent"
  ) {
    console.log("Spalva atitinka");
  } else {
    console.log("Spalva neatitiko");
  }

  if (tare.material === "glass" || tare.material === "plastic") {
    console.log("Medziaga atitinka");
  } else {
    console.log("Neatitiko medziagos");
  }
}

insertTare(svyturysButelys);

consoleMe("---");

insertTare(lenkiskasButyles);

consoleMe("---");

// regular function
function addNumbers(x, y) {
  return x + y;
}

const sum1 = addNumbers(7, 51); // 58
const sum2 = addNumbers(0, -1); // -1

console.log(sum1);
console.log(sum2);

// arrow function
const divide = (x, y) => {
  return x / y;
};

function add(x, y) {
  return x + y;
}
function minus(x, y) {
  return x - y;
}

function operate(operation, x, y) {
  return operation(x, y);
}
console.log(operate(add, 2, 3)); // Logs 5
console.log(operate(minus, 5, 3));
//

const helloDiv = document.getElementById("hello");

function handleClickHelloDiv() {
  helloDiv.classList.add("red");
}

helloDiv.addEventListener("click", handleClickHelloDiv);

// document.getElementById("hello").addEventListener("click", function () {
//   helloDiv.classList.add("red");
// });
