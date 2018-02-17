function getFilteredArray(array, outerFunc) {
	let currentArray = [...array];
	let booleanArray = [];
	let filteredArray = [];

	(function createNewArray() {
		booleanArray = forEach(array, outerFunc);

		for (let i in currentArray) {
			for (let k in booleanArray) {
				if (booleanArray[k]) {
					filteredArray.push(currentArray[k]);
				} else {
					continue;
				}
			}
		}
	})();

	for (let i = 0; i < filteredArray.length; i++) {
		for (let k = i + 1; k < filteredArray.length; ) {
			if (filteredArray[i] == filteredArray[k]) {
				filteredArray.splice(k, 1);
			} else {
				k++;
			}
		}
	}

	return filteredArray;
}

