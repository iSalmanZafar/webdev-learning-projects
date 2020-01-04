function checkPalindrome() {
	var str = document.getElementById("str").value;
	var ans = document.getElementById("answer");

	str = str.toLowerCase().match(/[a-z0-9]/gi);
	// console.log(str.reverse());
	if (str.join("") === str.reverse().join("")) {
		ans.innerText = "It's a palindrome.";
	} else {
		ans.innerText = "Not a palindrome.";
	}
}
