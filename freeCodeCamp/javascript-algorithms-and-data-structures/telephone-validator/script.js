function checkNumber() {
	let str = document.getElementById("str").value;
	let ans = document.getElementById("answer");
	console.log(typeof str);
	if (
		str.match(/^\d{3}-\d{3}-\d{4}$/) ||
		str.match(/^\(\d{3}\)\d{3}-\d{4}$/) ||
		str.match(/^\(\d{3}\) \d{3}-\d{4}$/) ||
		str.match(/^\d{10}$/) ||
		str.match(/^\d{3} \d{3} \d{4}$/) ||
		str.match(/^1 \d{3}-\d{3}-\d{4}$/) ||
		str.match(/^1 \d{3} \d{3} \d{4}$/) ||
		str.match(/^1 \(\d{3}\) \d{3}-\d{4}$/) ||
		str.match(/^1\(\d{3}\)\d{3}-\d{4}$/)
	) {
		ans.innerText = str + " is a valid US phone number.";
	} else {
		ans.innerText = str + " is not a valid US phone number.";
	}
}
