'use strict';



document.querySelector('.btn').addEventListener('click', function () {
	let beginValue = Number(document.querySelector('.start').value);
	let endValue = Number(document.querySelector('.end').value);
	let qty = Number(document.querySelector('.qty').value);
	let randNums = new Set();

	while (randNums.size < qty) {
		randNums.add(Math.trunc(Math.random() * endValue) + 1);
	}
	document.querySelector('.lucky').textContent = [...randNums];
});
