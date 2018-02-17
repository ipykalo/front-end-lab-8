function forEach(array, outerFunc) {
	for (let i in array) {
		array[i] = outerFunc(array[i]);
	}
	return array;
}
