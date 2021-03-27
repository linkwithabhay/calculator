var isON = false;
var shiftApplied = false;
var alphaApplied = false;
var resetInput = false;

// Display
const displayValues = document.querySelector("#displayValues");
const displayResult = document.querySelector("#displayResult");

// Buttons

//* ON / OFF-Clear / Del
const ONBtn = document.querySelector("#calciONBtn");
const OFFclearBtn = document.querySelector("#calciOFFclearBtn");
const delBtn = document.querySelector("#delBtn");

//* Shift, Alpha, Mode Buttons
const shiftBtn = document.querySelector("#calciShiftBtn");
const modeBtn = document.querySelector("#calciModeBtn");

//* (Up, Down, Right, Left) Arrows/Shifters
const topShift = document.querySelector("#topShifter");
const leftShift = document.querySelector("#leftShifter");
const rightShift = document.querySelector("#rightShifter");
const downShift = document.querySelector("#downShifter");

//* Mathematical Inputs
const numbers = document.querySelectorAll("[display-value]");
const calculateResult = document.querySelector("#calculateResult");
const AnsBtn = document.querySelector("#AnsBtn");

// Functions
function checkDisplay() {
  if (displayResult.textContent) {
    $(displayValues).css({
      "font-size": "35px",
    });
  } else {
    $(displayValues).css({
      "font-size": "70px",
    });
  }
}

// Events

//* On Load
$(document).ready(function () {
  checkDisplay();
});

//* Button ON
ONBtn.addEventListener("click", () => {
  isON = true;
  shiftApplied = false;
  alphaApplied = false;
  resetInput = false;
  $(displayValues).text("0");
  $(displayResult).text("");
  checkDisplay();
});

//* Button OFF-Clear
OFFclearBtn.addEventListener("click", () => {
  if (shiftApplied) {
    // Button OFF Active
    isON = false;
    $(displayValues).text("");
    $(displayResult).text("");
  } else {
    // Button Clear or AC Active
    $(displayValues).text("0");
  }
});

//* Button Shift
// TODO: Add event and function for Shift Button
shiftBtn.addEventListener("click", () => {
  shiftApplied = !shiftApplied;
});

//* Button Alpha
// TODO: Add event and function for Alpha Button

//* Button Mode
// TODO: Add event and function for Mode Button

//* Buttons All Numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (resetInput) {
      $(displayValues).text("0");
    }
    resetInput = false;
    let value = $(number).attr("display-value");
    if (isON) {
      if (displayValues.textContent == "0") {
        $(displayValues).text(value);
      } else {
        data = $(displayValues).text();
        data += value;
        $(displayValues).text(data);
      }
    }
  });
});

//* Button Ans
AnsBtn.addEventListener("click", () => {
  if (displayResult.textContent == "") {
    // $(displayValues).text("0");
  } else {
    let oldValue = $(displayValues).text();
    let newValue = oldValue + "Ans";
    $(displayValues).text(newValue);
  }
});

//* Button EqualsTo
calculateResult.addEventListener("click", () => {
  if (displayValues.textContent == "" || displayValues.textContent == "0") {
    // Do nothing
  } else {
    let values = $(displayValues).text();
    try {
      values = values.replace("π", "3.141592653589793");
      values = values.replace("×", "*");
      values = values.replace("÷", "/");
      if (!displayResult.textContent == "") {
        values = values.replace("Ans", displayResult.textContent);
      }
    } catch (err) {
      $(displayResult).text("ERROR");
    }
    $(displayResult).text(eval(values));
  }
  resetInput = true;
  checkDisplay();
});

//* Button Del
// TODO: Add event and function for Del Button
delBtn.addEventListener("click", () => {
  let text = $(displayValues).text();
  if (!text == "0") {
    let newText = text.slice(0, text.length - 1);
    if (newText == "") {
      $(displayValues).text("0");
    } else {
      $(displayValues).text(newText);
    }
  }
});
