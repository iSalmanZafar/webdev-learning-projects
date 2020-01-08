class UI {
  constructor(outputContainer, factOutput, numberLabel, dateInputContainer) {
    this.outputContainer = outputContainer;
    this.factOutput = factOutput;
    this.numberLabel = numberLabel;
    this.dateInputContainer = dateInputContainer;
  }

  updateForm(type) {
    switch (type) {
      case "trivia":
        numberLabel.innerHTML =
          "Enter a number, get a random <span class='font-weight-bold'>trivia</span> fact";
        numInput.placeholder = "Enter a number";
        numInput.style.display = "block";
        dateInputContainer.style.display = "none";
        break;
      case "math":
        numberLabel.innerHTML =
          "Enter a number, get a random <span class='font-weight-bold'>math</span> fact";
        numInput.placeholder = "Enter a number";
        numInput.style.display = "block";
        dateInputContainer.style.display = "none";
        break;

      case "year":
        numberLabel.innerHTML =
          "Enter a number, get a random <span class='font-weight-bold'>year</span> fact";
        numInput.placeholder = "Enter a year";
        numInput.style.display = "block";
        dateInputContainer.style.display = "none";
        break;

      case "date":
        numberLabel.innerHTML =
          "Enter a number, get a random <span class='font-weight-bold'>date</span> fact";
        numInput.placeholder = "Enter a date";
        numInput.style.display = "none";
        dateInputContainer.style.display = "flex";
    }
  }

  showFact(text) {
    this.outputContainer.style.display = "block";
    this.factOutput.innerText = text;
  }

  hideFact() {
    this.outputContainer.style.display = "none";
  }
}

class FactFetcher {
  constructor(baseURL, useAjax = false) {
    this.baseURL = baseURL;
    this.useAjax = useAjax;
  }

  getURL(num, type) {
    let url = this.baseURL;

    switch (type) {
      case "trivia":
        url += num;
        break;

      case "math":
        url += `${num}/math`;
        break;

      case "year":
        url += `${num}/year`;
        break;

      case "date":
        url += `${num}/date`;
        break;

      default:
        url += num;
        break;
    }
    console.log("URL: " + url);
    return url;
  }

  getFact(num, type, callback) {
    if (this.useAjax) this.getFactAjax(num, type, callback);
    else this.getFactFetch(num, type, callback);
  }

  getFactFetch(num, type, callback) {
    console.log("using fetch");
    fetch(this.getURL(num, type))
      .then(response => response.text())
      .then(text => callback(text))
      .catch(err => alert(err));
  }

  getFactAjax(num, type, callback) {
    console.log("using ajax");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", this.getURL(num, type));
    xhr.onload = function() {
      if (xhr.status == 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send();
  }
}

const numInput = document.getElementById("number"),
  factOutput = document.getElementById("fact-text"),
  outputContainer = document.getElementById("output-container"),
  factTypeSelector = document.getElementById("fact-type-selector"),
  numberLabel = document.getElementById("number-label"),
  dateInputContainer = document.getElementById("date-container"),
  monthInput = document.getElementById("month"),
  dayInput = document.getElementById("day");

const baseURL = "http://numbersapi.com/";
const factFetcher = new FactFetcher(baseURL);

const ui = new UI(outputContainer, factOutput, numberLabel, dateInputContainer);

numInput.addEventListener("input", GetAndShowFact);
factTypeSelector.addEventListener("input", GetAndShowFact);
monthInput.addEventListener("input", GetAndShowFact);
dayInput.addEventListener("input", GetAndShowFact);

function updateForm() {
  ui.updateForm(factTypeSelector.value);
}

function GetAndShowFact() {
  updateForm();

  let num;

  if (factTypeSelector.value == "date") {
    console.log("monthInput value: " + monthInput.value);
    console.log("dayInput: " + dayInput.value);

    if (monthInput.value == "" || dayInput.value == "") {
      ui.hideFact();
      return;
    }
    if (monthInput.value > 12) monthInput.value = 12;
    if (monthInput.value < 1) monthInput.value = 1;
    if (dayInput.value > 31) dayInput.value = 31;
    if (dayInput.value < 1) dayInput.value = 1;

    num = monthInput.value + "/" + dayInput.value;
  } else {
    console.log("numInput value: " + numInput.value);

    if (numInput.value === "") {
      ui.hideFact();
      return;
    }

    num = numInput.value;
  }

  if (num === "") return;

  factFetcher.getFact(num, factTypeSelector.value, text => ui.showFact(text));
}

ui.hideFact();
updateForm();
