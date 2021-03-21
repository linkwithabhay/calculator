const displayValues = document.querySelector("#displayValues");
const displayResult = document.querySelector("#displayResult");

// Buttons

//* ON / OFF
const ONBtn = document.querySelector("#calciONBtn");
const OFFBtn = document.querySelector("#calciOFFBtn");

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

//* ON Button
ONBtn.addEventListener("click", () => {
  $(displayValues).text("0");
  $(displayResult).text("");
  checkDisplay();
});

//* OFF Button
OFFBtn.addEventListener("click", () => {
  $(displayValues).text("");
  $(displayResult).text("");
});
