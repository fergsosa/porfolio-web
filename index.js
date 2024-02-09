import toggleTheme from "./js/toggleTheme.js";
import scrollSpy from "./js/scrollEspia.js";
import contactFormValidations from "./js/validacionForm.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  scrollSpy();
  contactFormValidations();
});

// toggleTheme(".btn-theme-dark", "dark-mode");
const listButtons = d.querySelectorAll(".buttons > button"),
  lastReturn = d.querySelector(".screen .last"),
  newReturn = d.querySelector(".screen .new");

let firstNumber = null;
let newNumber = null;
let calculator = "+";

listButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    switch (value) {
      case (value.match(/[0-9]/) || {}).input:
        // add number in lastNumber
        newNumber = newNumber !== null ? newNumber + value : value;
        break;
      case ".":
        newNumber = newNumber !== null ? newNumber + value : "0.";
        break;
      case "±":
        newNumber = -1 * newNumber;
        break;
      case "%":
        newNumber = 0.01 * newNumber;
        break;
      case (value.match(/[\+|\-|\x|\÷]/) || {}).input:
        if (newNumber) {
          if (firstNumber) {
            applyCalculator();
          }
          calculator = value;
          firstNumber = newNumber;
          newNumber = null;
        }
        break;
      case "=":
        applyCalculator();
        firstNumber = null;
        break;
      case "AC":
        firstNumber = null;
        newNumber = null;
        calculator = "+";
        break;
    }
    reloadScreen();
  });
});
const applyCalculator = () => {
  switch (calculator) {
    case "+":
      newNumber = Number(firstNumber) + Number(newNumber);
      break;
    case "-":
      newNumber = Number(firstNumber) - Number(newNumber);
      break;
    case "x":
      newNumber = Number(firstNumber) * Number(newNumber);
      break;
    case "÷":
      newNumber = (Number(firstNumber) / Number(newNumber)).toFixed(5);
      break;
  }
};
const reloadScreen = () => {
  lastReturn.innerText =
    firstNumber !== null ? firstNumber + "" + calculator : "";

  newReturn.innerText = newNumber !== null ? newNumber : "";
};

// ******* QR *******
const $contenedorQR = d.getElementById("contenedorQR"),
  $formulario = d.getElementById("qr-form");

const QR = new QRCode(contenedorQR);
$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  QR.makeCode($formulario.link.value);
});
