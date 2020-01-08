const numInput = document.getElementById("number"),
  factOutput = document.getElementById("fact-text"),
  outputContainer = document.getElementById("output-container");

const baseURL = "http://numbersapi.com/";

function showFact(text) {
  outputContainer.style.display = "block";
  factOutput.innerText = text;
}

function hideFact() {
  outputContainer.style.display = "none";
}

function getFactFetch(num) {
  if (num == "") return;
  //   console.log(baseURL + num);
  fetch(baseURL + num)
    .then(response => response.text())
    .then(text => showFact(text))
    .catch(err => alert(err));
}

function getFactAjax(num) {
  if (num == "") return;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", baseURL + num);
  xhr.onload = function() {
    if (xhr.status == 200) {
      showFact(xhr.response);
    }
  };
  xhr.send();
}

hideFact();

numInput.addEventListener("input", e => {
  //   console.log(numInput.value);
  getFactFetch(numInput.value);
});
