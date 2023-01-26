const opButtons = document.querySelector(".operators");
const liveTotal = document.querySelector(".totalValue");
const liveInput = document.querySelector(".inputValue");
const liveOpValue = document.querySelector(".opValue");
const clearButton = document.querySelector(".clearButton");
let valueMemory = null;
let valueOp = "";
let currentValue = [];

const numButtons = {
  0: document.querySelector(".b0"),
  1: document.querySelector(".b1"),
  2: document.querySelector(".b2"),
  3: document.querySelector(".b3"),
  4: document.querySelector(".b4"),
  5: document.querySelector(".b5"),
  6: document.querySelector(".b6"),
  7: document.querySelector(".b7"),
  8: document.querySelector(".b8"),
  9: document.querySelector(".b9"),
};

const operate = function (operator, a, b) {
  const operations = {
    "+": +a + +b,
    "-": +a - +b,
    "*": +a * +b,
    "/": +a / +b,
    "=": valueMemory,
  };
  let calcValue = operations[operator];
  valueOp = "";
  return calcValue;
};

for (let i = 0; i < Object.keys(numButtons).length; i++) {
  numButtons[i].addEventListener("click", function (e) {
    currentValue.push(i);
    liveInput.textContent = currentValue.join("");
  });
}

opButtons.addEventListener("click", function (e) {
  if (valueMemory === null) {
    valueMemory = currentValue.join("");
    currentValue = [];
  } else if (valueMemory !== null && valueOp !== "") {
    valueMemory = operate(valueOp, valueMemory, +currentValue.join(""));
    currentValue = [];
  }
  valueOp = e.target.value;
  if (valueOp === "=") {
    valueOp = "";
  }
  liveTotal.textContent = valueMemory;
  liveOpValue.textContent = valueOp;
  liveInput.textContent = currentValue;
});

clearButton.addEventListener("click", function (e) {
  valueMemory = null;
  valueOp = "";
  currentValue = [];
  liveTotal.textContent = valueMemory;
  liveOpValue.textContent = valueOp;
  liveInput.textContent = currentValue;
});
