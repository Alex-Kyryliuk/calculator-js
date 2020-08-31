const display = document.querySelector(".display");

////////////////////////////////////////////////////////////////////////////////////
document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));

document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", operPressed));

document.querySelector(".eq").addEventListener("click", eqPressed);

document.querySelector(".decimal").addEventListener("click", decimalPressed);

document.getElementById("ac").addEventListener("click", clearPressed);

document.getElementById("ce").addEventListener("click", cleanPressed);

////////////////////////////////////////////////////////////////////////////////////
function digitPressed(ev) {
  const digit = ev.target.innerText;
  if (display.value === "0") {
    display.value = digit;
  } else {
    display.value += digit;
  }
}

function operPressed(ev) {
  const oper = ev.target.innerText;
  display.value += oper;
}

function decimalPressed(ev) {
  const decimal = ev.target.innerText;
  display.value += decimal;
}

function eqPressed() {
  display.value = Math.floor(eval(display.value));
}

function clearPressed(ac) {
  display.value = "";
}

function cleanPressed(ce) {
  display.value = display.value.slice(0, -1);
}
