var courseEuro = 33.8565;
var courseUsd = 27.4609;

var amoutEuro = Number(prompt("Input amount of EURO", ""));
var amoutUsd = Number(prompt("Input amount of USD", ""));

if (!isNaN(amoutEuro) && !isNaN(amoutUsd)) {
	if (Math.sign(amoutEuro) == 1 && Math.sign(amoutUsd) == 1) {
		convert(amoutEuro, amoutUsd);
	} else {
		console.log("Incorrect data");
	}
} else {
	console.log("Incorrect data");
}

// Convertering function
function convert(amoutEuro, amoutUsd) {
	var euroUah = amoutEuro * courseEuro;
	euroUah = euroUah.toFixed(2);

	var usdUah = amoutUsd * courseUsd;
	usdUah = usdUah.toFixed(2);

	var euroUsd = courseEuro / courseUsd;
	euroUsd = euroUsd.toFixed(2);

	console.log(
		amoutEuro +
			" euros are equal " +
			euroUah +
			" UAH" +
			" , " +
			amoutUsd +
			" dollars are equal " +
			usdUah +
			" UAH" +
			" , " +
			"one euro is equal " +
			euroUsd +
			" dollars"
	);
}

// End convertering function
