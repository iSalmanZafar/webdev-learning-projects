var ans = document.getElementById("answer");

function convertToRoman() {
	let num = document.getElementById("input").value;
	var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I"
	];
	var romanized = "";

	for (let i = 0; i < decimals.length; i++) {
		while (decimals[i] <= num) {
			romanized += romans[i];
			num -= decimals[i];
		}
	}

	ans.innerText = "Roman numeral: " + romanized;
	console.log(romanized);
}
