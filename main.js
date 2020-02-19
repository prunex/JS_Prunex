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
    var var2;
    var2 = min2 + (((val1 - min1)*(max2 - min2))/(max1 -min1));
    return var2;
}



/*
Pick a random number between 2 ranges [min, max] with an optional field where
you can pick the cuantity of the decimals
*/

function randNumber(min, max, decimals = 0){
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

	//console.log(Math.trunc(num));
	console.log(num);

}



/* Pick a random HEX color */

function randomColorHEX (){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomColorRGB (){

	
}