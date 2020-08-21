"use strict"


/*
Given 2 ranges
- [min1, max1] and
- [min2, max2] :
- the value val1 in range [min1, max1]
- is linearly mapped to value val2 in range [min2, max2] where :
- val2 = min2 + ((val1 - min1) * (max2 - min2)) / (max1 - min1)
*/
function scaleNumber(val1, min1, max1, min2, max2) {
	var val2 = min2 + (((val1 - min1) * (max2 - min2)) / (max1 - min1));
	return val2;
}



/*
Pick a random number between 2 ranges [min, max] with an optional field where
you can pick the cuantity of the decimals
*/

function randNumber(min = 0, max = 100, decimals = 0) {
	// var myArray = [];
	// var max = 0;
	// for(var i = 0; i < 100000000/2; i++){
	// 	var num = Math.random().toString().length - 2;
	// 	//myArray.push(num);
	// 	if (num > max){
	// 		max = num;
	// 	}
	// }
	// //console.log(Math.max.apply(null, myArray));
	// console.log(max);

	//console.log(Math.floor(Math.random() * (max - min) + min));
	var num = Math.random() * (max - min) + min;
	/*
		if (decimals > 0) {	
			console.log(parseFloat(num).toFixed(decimals));
		} else {
			console.log(Math.trunc(num));
			//console.log(num);
		}
	*/

	return ((decimals > 0) ? parseFloat(num).toFixed(decimals) : Math.trunc(num));
}



/* Pick a random HEX color */

function randomColorHEX() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


/* Pick a random RGB color */
function randomColorRGB() {
	return ("rgb(" +
		randNumber(undefined, 256, undefined) + ", " +
		randNumber(undefined, 256, undefined) + ", " +
		randNumber(undefined, 256, undefined) + ")"
	);

	//setInterval(function(){return document.getElementById("colorRGB").style.backgroundColor = randomColorRGB()}, 1000)
}
