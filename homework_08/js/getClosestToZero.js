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

	let biggerNumberArr1 = Math.abs(Math.max(...arr1));
	let biggerNumberArr2 = Math.min(...arr2);

	let resultCompares = function(biggerNumberArr1, biggerNumberArr2) {
		if (biggerNumberArr1 < biggerNumberArr2) {
			return -biggerNumberArr1;
		} else if (biggerNumberArr2 < biggerNumberArr1) {
			return biggerNumberArr2;
		} else {
			do {
				let arr3 = [];
				arr3.push(-biggerNumberArr1, biggerNumberArr2);
				return arr3;
			} while (biggerNumberArr2 < biggerNumberArr1);
		}
	};

	return resultCompares(biggerNumberArr1, biggerNumberArr2);
}

