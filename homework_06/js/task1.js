var typeTriangle, a, b, c;
a = Number(prompt("Enter length first side of triangle", ""));
b = Number(prompt("Enter length second side of triangle", ""));
c = Number(prompt("Enter length third side of triangle", ""));

// type of Triangle
if (
	Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) ||
	Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2) ||
	Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)
) {
	typeTriangle = "right triangle";
} else if (a == b && b == c) {
	typeTriangle = "equilateral";
} else if (a == b || b == c || a == c) {
	typeTriangle = "isosceles";
} else if (a != b && b != c && a != c) {
	typeTriangle = "scalene";
}

(function isNumber(a, b, c) {
	if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
		if (Math.sign(a) == 1 || Math.sign(b) == 1 || Math.sign(c) == 1) {
			squareTriangle(a, b, c);
		} else {
			console.log("Incorrect data");
		}
	} else {
		console.log("Enter only numbers");
	}
})(a, b, c);

// square Triangles
function squareTriangle(a, b, c) {
	var p = (a * 1000 + b * 1000 + c * 1000) / 1000 / 2;
	var result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

	if (isNaN(result) || result == 0) {
		console.log("Incorrect data");
	} else {
		if (result % 1 != 0) {
			result = result.toFixed(2);

			if (Number(result)) {
				console.log(
					"Type of triangle is " + typeTriangle + " and square is " + result
				);
			}
		} else {
			console.log(
				"Type of triangle is " + typeTriangle + " and square is " + result
			);
		}
	}
}
