function cypherPhrase(outerObj, outerStr) {
	let array = [];

	convertStrToArray = e => array.push(e);
	getTransformedArray(outerStr, convertStrToArray);

	for (let i in outerObj) {
		for (let k in array) {
			if (i == array[k]) {
				array.splice(k, 1, outerObj[i]);
			}
		}
	}

	return (array = array.join(""));
}

