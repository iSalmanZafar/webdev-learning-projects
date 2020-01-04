let buffer = "0";
let runningTotal = 0;
let previousOperator;

function flushOperation(intBuffer) {
  switch (previousOperator) {
    case "+":
      runningTotal += intBuffer;
      break;
    case "-":
       
      runningTotal -= intBuffer;
      console.log(runningTotal);
      break;

    case "×":
      runningTotal *= intBuffer;
      break;

    case "÷":
      runningTotal /= intBuffer;
      break;
  }
}

function handleMath(value) {
  const intBuffer = parseInt(buffer);
  if (runningTotal == 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;
  buffer = "0";
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      break;

    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;

    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;

    default:
      handleMath(value);
      break;
  }
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function refreshScreen() {
  window.document.querySelector(".calc-display").innerText = buffer;
}

function buttonClick(event) {
  let value = event.target.innerText;

  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  refreshScreen();
}

window.document
  .querySelector(".calc-buttons")
  .addEventListener("click", buttonClick);
