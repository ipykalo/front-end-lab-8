function reverseNumber(num) {
	let str = String(num);
	let minus = str.indexOf("-");

	if (minus > -1) {
		let arr = str.split("");
		let arr1 = arr.reverse();
		arr1.pop();
		arr1.unshift("-");
		str = arr.join("");
		return Number(str);
	} else {
		let arr = str.split("");
		let arr1 = arr.reverse();
		str = arr.join("");
		return Number(str);
	}
}

