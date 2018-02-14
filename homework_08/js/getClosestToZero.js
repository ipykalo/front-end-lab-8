function getClosestToZero(...listNumber) {
	let arr1 = [];
	let arr2 = [];

	for (let i = 0; i < listNumber.length; i++) {
		if (Math.sign(listNumber[i]) < 0) {
			arr1.push(listNumber[i]);
		} else {
			arr2.push(listNumber[i]);
		}
	}

	let biggerNumberArr1 = Math.max(...arr1);
	let biggerNumberArr2 = Math.min(...arr2);

	if (Math.abs(biggerNumberArr2) < Math.abs(biggerNumberArr1)) {
		return biggerNumberArr2;
	} else if (
		Math.abs(biggerNumberArr2) == Math.abs(biggerNumberArr1) &&
		biggerNumberArr2 >= 0
	) {
		return biggerNumberArr2;
	} else {
		return biggerNumberArr1;
	}
}

