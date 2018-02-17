function collectIds(array) {
	let currentArray = [...array];
	let transformArray = [];
	let filteredRaiting = [];
	let result = [];

	let transformFunc = array => array.rating;
	let getFilteredFunc = num => num > 3;

	transformArray = getTransformedArray(array, transformFunc);
	filteredRaiting = getFilteredArray(transformArray, getFilteredFunc);

	for (let i in currentArray) {
		let compareArry = [];
		compareArry = currentArray[i].rating;

		for (let k in filteredRaiting) {
			if (compareArry == filteredRaiting[k]) {
				result.push(currentArray[i].id);
			} else {
				continue;
			}
		}
	}

	return result;
}

