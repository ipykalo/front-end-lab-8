function decypherPhrase(outerObj, outerStr) {
	let obj = {};
	let string = "";

	for (var i in outerObj) {
		if (outerObj.hasOwnProperty(i)) {
			obj[outerObj[i]] = i;
		}
	}

	return (string = cypherPhrase(obj, outerStr));
}
