class UI {
  static HIDDEN = "hidden";
  static VISIBLE = "visible";

  constructor(outputElement, lbsOutput, gramOutput, kgOutput, ounceOutput) {
    this.outputElement = outputElement;
    this.lbsOutput = lbsOutput;
    this.gramOutput = gramOutput;
    this.kgOutput = kgOutput;
    this.ounceOutput = ounceOutput;
  }

  setVisibility(element, visiblity) {
    element.style.visibility = visiblity;
  }

  hideOutput() {
    this.setVisibility(this.outputElement, UI.HIDDEN);
  }

  showOutput(weight) {
    this.setVisibility(this.outputElement, UI.VISIBLE);

    this.lbsOutput.innerText = weight.pounds;
    this.gramOutput.innerText = weight.grams;
    this.kgOutput.innerText = weight.kilograms;
    this.ounceOutput.innerText = weight.ounces;
  }
}

class ConversionFactors {
  static POUND_TO_GRAM_FACTOR = 453.592;
  static POUND_TO_KILOGRAM_FACTOR = 0.453592;
  static POUND_TO_OUNCE_FACTOR = 16;
  static GRAM_TO_KILOGRAM_FACTOR = 0.001;
  static GRAM_TO_POUND_FACTOR = 0.00220462;
  static GRAM_TO_OUNCE_FACTOR = 0.035274;
  static KILOGRAM_TO_POUND_FACTOR = 2.20462;
  static KILOGRAM_TO_GRAM_FACTOR = 1000;
  static KILOGRAM_TO_OUNCE_FACTOR = 35.274;
  static OUNCE_TO_POUND_FACTOR = 0.0625;
  static OUNCE_TO_KILOGRAM_FACTOR = 0.0283495;
  static OUNCE_TO_GRAM_FACTOR = 28.3495;
}

class Weight {
  constructor(pounds, grams, kilograms, ounces) {
    this.pounds = pounds;
    this.grams = grams;
    this.kilograms = kilograms;
    this.ounces = ounces;
  }

  static convert(unit, amount) {
    let weight = new Weight();
    let poundFactor, gramFactor, kilogramFactor, ounceFactor;

    switch (unit) {
      case "pound":
        poundFactor = 1;
        gramFactor = ConversionFactors.POUND_TO_GRAM_FACTOR;
        kilogramFactor = ConversionFactors.POUND_TO_KILOGRAM_FACTOR;
        ounceFactor = ConversionFactors.POUND_TO_OUNCE_FACTOR;
        break;
      case "gram":
        poundFactor = ConversionFactors.GRAM_TO_POUND_FACTOR;
        gramFactor = 1;
        kilogramFactor = ConversionFactors.GRAM_TO_KILOGRAM_FACTOR;
        ounceFactor = ConversionFactors.GRAM_TO_OUNCE_FACTOR;
        break;

      case "kilogram":
        poundFactor = ConversionFactors.KILOGRAM_TO_POUND_FACTOR;
        gramFactor = ConversionFactors.KILOGRAM_TO_GRAM_FACTOR;
        kilogramFactor = 1;
        ounceFactor = ConversionFactors.KILOGRAM_TO_OUNCE_FACTOR;
        break;

      case "ounce":
        poundFactor = ConversionFactors.OUNCE_TO_POUND_FACTOR;
        gramFactor = ConversionFactors.OUNCE_TO_GRAM_FACTOR;
        kilogramFactor = ConversionFactors.OUNCE_TO_KILOGRAM_FACTOR;
        ounceFactor = 1;
    }

    weight.pounds = amount * poundFactor;
    weight.grams = amount * gramFactor;
    weight.kilograms = amount * kilogramFactor;
    weight.ounces = amount * ounceFactor;

    return weight;
  }
}

const ui = new UI(
  document.getElementById("output"),
  document.getElementById("lbsOutput"),
  document.getElementById("gOutput"),
  document.getElementById("kgOutput"),
  document.getElementById("ozOutput")
);

ui.hideOutput();

const input = document.getElementById("input");
const unitSelector = document.getElementById("units");

document
  .querySelector("form")
  .addEventListener("submit", e => e.preventDefault());

input.parentElement.addEventListener("input", () => {
  if (input.value > 0) {
    ui.showOutput(Weight.convert(unitSelector.value, input.value));
  } else {
    ui.hideOutput();
  }
});
