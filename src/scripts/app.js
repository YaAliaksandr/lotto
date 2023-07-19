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
// 		return (numVal > 0 && numVal < 43);
// 	}
// });



btnPlayRef.addEventListener('click', function (event) {
	if (isAllNotEmpty(inputRefs)) {

		console.log("They all are not empty");
		if (isAllNumber(inputRefs)) {
			console.log(`OK`);
		}
	}
	else {
		console.log("something is empty");
	}
})

