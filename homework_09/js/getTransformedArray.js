function getTransformedArray(array, outerFunc) {
	let newArray = [];
	newArray = forEach(array, outerFunc);
	return newArray;
}

