const btnPlayRef = document.querySelector("#playBtn");
const inputRefs = [...document.querySelectorAll('input[id^="digit"]')];
// const userInp = document.querySelectorAll('input[id^="digit"]');
// const userInpValue =function (e){

// }
const isAllNotEmpty = (nodes) => nodes.every((node) => node.value.trim() !== '');
const isAllNumber = (nodes) => nodes
	.every((node) => Number.isInteger(Number(node.value)));	// {
// 	let nodeBool = Number.isInteger(Number(node.value));
// 	if (nodeBool) {
// 		let numVal = Number(node.value);
// 		console.log(numVal);
// 		return (numVal > 0 && numVal < 49);
// 	}
// });
const convertToIntegers = (nodes) => nodes.map((node) => Number(node.value));
const isInRange = (digits) => digits.every((digit) => (digit >= 1 && digit <= 49));
const isNotRedundant = (digits) => new Set(digits).size === digits.length;

btnPlayRef.addEventListener('click', function (event) {

	if (isAllNotEmpty(inputRefs)) {
		if (isAllNumber(inputRefs)) {
			console.log(`OK`);
			const userDigits = convertToIntegers(inputRefs);
			if (isInRange(userDigits)) {
				console.log(`YES`);
				// let setFrom = new Set(userDigits);
				// if (setFrom.size === userDigits.length) {
				// 	console.log(`Done`);
				// }
				if (isNotRedundant(userDigits)) {
					console.log(`Done`);
				}
				else {
					console.log(`Yor numbers are repeated `)
				}
			}
			else {
				console.log(`The numbers are out of the range`);
			}
		}
		else {
			console.log(`Numbers are nat a numbers`)
		}
	}
	else {
		console.log("something is empty");
	}
})
console.log(new Set([1, 2, 3]))

