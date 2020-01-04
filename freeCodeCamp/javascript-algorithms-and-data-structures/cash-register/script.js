function checkCashRegister(price, cash, cid) {
	var output = {
		status: "",
		change: []
	};
	let hundreds = cid[8][1] / 100;
	let twenties = cid[7][1] / 20;
	let tenners = cid[6][1] / 10;
	let fivers = cid[5][1] / 5;
	let oners = cid[4][1];
	let quarters = cid[3][1] / 0.25;
	let dimes = cid[2][1] / 0.1;
	let nikels = cid[1][1] / 0.05;
	let pennies = cid[0][1] / 0.01;

	let cashToReturn = cash - price;
	let cashInDrawer = 0;

	for (let c in cid) {
		cashInDrawer += cid[c][1];
	}
	cashToReturn = cashToReturn.toFixed(2);
	cashInDrawer = cashInDrawer.toFixed(2);

	console.log("Cash in drawer = " + cashInDrawer);
	console.log("Cash to return = " + cashToReturn);

	if (cashInDrawer == cashToReturn) {
		output.status = "CLOSED";
	} else {
		output.status = "OPEN";
	}

	if (cashToReturn > cashInDrawer) {
		output.status = "INSUFFICIENT_FUNDS";
		output.change = [];
	} else {
		let hundredsAfterReturn = hundreds;
		let twentiesAfterReturn = twenties;
		let tennersAfterReturn = tenners;
		let fiversAfterReturn = fivers;
		let onersAfterReturn = oners;
		let quartersAfterReturn = quarters;
		let dimesAfterReturn = dimes;
		let nikelsAfterReturn = nikels;
		let penniesAfterReturn = pennies;

		while (cashToReturn >= 100 && hundredsAfterReturn > 0) {
			cashToReturn -= 100;
			hundredsAfterReturn--;

			for (let i in output.change) {
			}
		}

		while (cashToReturn >= 20 && twentiesAfterReturn > 0) {
			cashToReturn -= 20;
			twentiesAfterReturn--;
		}

		while (cashToReturn >= 10 && tennersAfterReturn > 0) {
			cashToReturn -= 10;
			tennersAfterReturn--;
		}

		while (cashToReturn >= 5 && fiversAfterReturn > 0) {
			cashToReturn -= 5;
			fiversAfterReturn--;
		}

		while (cashToReturn >= 1 && onersAfterReturn > 0) {
			cashToReturn -= 1;
			onersAfterReturn--;
		}

		while (cashToReturn >= 0.25 && quartersAfterReturn > 0) {
			cashToReturn -= 0.25;
			quartersAfterReturn--;
		}

		while (cashToReturn >= 0.1 && dimesAfterReturn > 0) {
			cashToReturn -= 0.01;
			dimesAfterReturn--;
		}

		while (cashToReturn >= 0.05 && nikelsAfterReturn > 0) {
			cashToReturn -= 0.05;
			nikelsAfterReturn--;
		}

		while (cashToReturn >= 0.01 && penniesAfterReturn > 0) {
			cashToReturn -= 0.01;
			penniesAfterReturn--;
		}

		if (hundreds != hundredsAfterReturn) {
			output.change.push([
				"ONE HUNDRED",
				100 * (hundreds - hundredsAfterReturn)
			]);
		}
		if (twenties != twentiesAfterReturn) {
			output.change.push([
				"TWENTY",
				20 * (twenties - twentiesAfterReturn)
			]);
		}
		if (tenners != tennersAfterReturn) {
			output.change.push(["TEN", 10 * (tenners - tennersAfterReturn)]);
		}
		if (fivers != fiversAfterReturn) {
			output.change.push(["FIVE", 5 * (fivers - fiversAfterReturn)]);
		}
		if (oners != onersAfterReturn) {
			output.change.push(["ONE", oners - onersAfterReturn]);
		}
		if (quarters != quartersAfterReturn) {
			output.change.push([
				"QUARTER",
				0.25 * (quarters - quartersAfterReturn)
			]);
		}
		if (dimes != dimesAfterReturn) {
			output.change.push([
				"DIME",
				(0.1 * (dimes - dimesAfterReturn)).toFixed(2)
			]);
		}
		if (nikels != nikelsAfterReturn) {
			output.change.push(["NICKEL", 0.05 * (nikels - nikelsAfterReturn)]);
		}
		if (pennies != penniesAfterReturn) {
			output.change.push([
				"PENNY",
				0.01 * (pennies - penniesAfterReturn)
			]);
		}

		console.log(cashToReturn);
	}
	console.log("Output = ", output);
	return output;
}

checkCashRegister(19.5, 20, [
	["PENNY", 0.5],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]
]);
