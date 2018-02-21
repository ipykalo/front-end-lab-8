debounce = (caBack, ms) => {
	let timeout = 0;

	return () => {
		if (timeout) {
			timeout = clearTimeout(timeout);
		}

		timeout = setTimeout(caBack, ms);
	};
};

let iterator = 0;

function increaseIteratorBy1() {
	iterator++;

	printIteratorValue();
}

function printIteratorValue() {
	console.log("Iterator value ", iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'
