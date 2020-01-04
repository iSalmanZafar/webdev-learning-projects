function cipher() {
	let str = document.getElementById("str").value;
	str = str.toUpperCase();
	let output = "";

	for (let i in str) {
		if (/[A-Z]/.test(str[i])) {
			let asciiCode = str[i].charCodeAt();
			let j = 0;
			while (j < 13) {
				asciiCode--;
				if (asciiCode < 65) {
					asciiCode = 90;
				}
				j++;
			}
			output += String.fromCharCode(asciiCode);
		} else {
			output += str[i];
		}
	}

	console.log(output);
	document.getElementById("answer").innerText = output;
}
