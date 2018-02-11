var userNumber = Number(prompt("Enter only natural numbers from 1 to 20", ""));
var row = "";
if (userNumber % 1 === 0 && userNumber > 0 && userNumber <= 20) {
	for (var i = 1; i <= userNumber; i++) {
		for (var j = 1; j <= userNumber - i; j++) {
			row += "    ";
		}
		for (var k = 1; k <= i; k++) {
			row += "[~] ";
			if (k % i != 0) {
				row += "[~] ";
			}
		}
		row += "\n";
	}
	console.log(row);
} else {
	console.error("Incorrect data!");
}

