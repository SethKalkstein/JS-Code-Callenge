// for(i = 0; i < 10; i++) {
//   console.log("i is: " + i);
// }
// var a = [ "F", "o", "1", "r" ];

// a = a.join("");

// console.log(a);

// var words = "heloo there person";

// console.log(words[3]);

// const formIt = num, mult => 

// var arr = [];
// arr.length = 5;
// console.log(arr.fill(1).map((x , y) => x*(y+1)*4));

// var n=7;

// console.log(Array(n).fill(1).map((_, k) => 1/(1 + (k * 3))).reduce((accumulator, currentValue) => accumulator + currentValue));

// var SeriesSum = n => Array(n).fill(1).map((_, k) => 1/(1 + (k * 3))).reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);
/*var number = 46288;
var power = 3;

digPow = (n,p) => {

	let powNumSum = n.toString().split("").reduce((accumulator, currentValue, index)=> accumulator + Math.pow(currentValue, index + p), 0);
	return powNumSum%n ? -1 : powNumSum/n;
}

console.log(digPow(number,power));
*/

// var total = 0;
// for (i = 0; i <= 1000; i++){
// 	if(i % 3 === 0 || i % 5 === 0){
// 		total += i;
// 	}
// }
// console.log(total);

// var total = 0;
// for (i = 0; i < 1000; i++){
// 	if(i % 3 === 0 || i % 5 === 0){
// 		total += i;
// 	}
// }
// console.log(total);

// var sum = 2;
// let num1 = 1;
// let num2 = 2;
// let nextNum = 0;

// while (nextNum < 4 * Math.pow(10, 6)) {

// 	nextNum = num1 + num2;

// 	if(nextNum % 2 === 0){
// 		sum += nextNum; //sum = sum + nextNum
// 	}
	
// 	num1 = num2;
// 	num2 = nextNum;
// }

// console.log(sum);

// var thisNum = 600851475143;
// var anotherNumber = 13195;

// function findPrime(someNum) {
// 	for(i = Math.round(someNum / 2); i > 1 ; i-- ){
// 		console.log("i is: " + i);
// 		if (someNum % i === 0 ){
// 			let notPrimeCheck = false;
// 			console.log("I'm a factor: " + i);
// 			for(j = Math.round(i / 2); j > 2; j-- ){
// 				console.log("j is: " + j)
// 				if (i % j === 0) {
// 					notPrimeCheck = true;
// 					break;
// 				}
			
// 			}

// 			if (notPrimeCheck === false){
// 				return i;
// 			}
// 		}
// 	}
// 	return -1;
// }

// console.log(findPrime(anotherNumber));

// var thisNum = 600851475143;
// var anotherNumber = 13195;

// function findPrime(someNum) {
// 	let factor = 0;
// 	let notPrimeCheck = false;
// 	for(i = 0; i < someNum / 2; i++){
// 		if (someNum % i === 0 ){
// 			factor = someNum / i;
// 			console.log("I'm a factor: " + factor);
// 			for(j = Math.round(factor / 2); j > 2; j-- ){
// 				console.log("j is: " + j)
// 				if (factor % j === 0) {
// 					notPrimeCheck = true;
// 					break;
// 				}
			
// 			}

// 			if (notPrimeCheck === false){
// 				return factor;
// 			}
// 		}
// 	}
// 	return -1;
// }

// console.log(findPrime(anotherNumber));

// let number = 1010;

// function findPrime(num){
// 	let div = 2;
// 	while (div <= num) {
// 		if(div === num){
// 			return num;
// 			break;
// 		}
// 		if(num % div === 0){
// 			console.log("recursing num: " + num + " div: " + div);
// 			findPrime(num/div);
// 		}
// 		// if(div === num){
// 		// 	return num;
// 		// }
// 		div++;
// 	}
// 	return num;
// }

// var result = findPrime(number);

// console.log(result);



// let number = 3970236203757010;
/*let number = 1375025959;

var t0 = performance.now();

function findPrime(num){
	let div = 2;
	while (div < num) {
		if(num % div === 0){
			console.log("recursing num: " + num + " div: " + div);
			num /=  div;
			div = 2;
		} else {
			div ++;
		}

	}

	return num;
}

console.log(findPrime(number));

var t1 = performance.now();

console.log("time for execution: " + (t1 - t0) + " milliseconds" );

var t2 = performance.now();

function findPrimeOpt1(num){
	let div = 2;
	let numSqt = Math.sqrt(num);
	while (div <= numSqt) {
		if(num % div === 0){
			console.log("recursing num: " + num + " div: " + div);
			num /=  div;
			numSqt = Math.sqrt(num);
			div = 2;
		} else {
			if(div === 2)
				div ++;
			else
				div += 2
		}

	}

	return num;
}

console.log(findPrimeOpt1(number));

var t3 = performance.now();

console.log("time for optimized execution: " + (t3 - t2) + " milliseconds" );*/

/*songDecoder = (decoded) => decoded.split("WUB").reduce((acc, curr, ind) => curr ? acc + curr + " " : acc).trimEnd();

console.log(songDecoder("WUBWUBWUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));*/

// const todos = [
// 	  {text: 'play mariokart', author: 'shaun'},
// 	  {text: 'buy some milk', author: 'mario'},
// 	  {text: 'buy some bread', author: 'luigi'}
// 	];
	
// 	// console.log(JSON.stringify(todos));
// 	localStorage.setItem('todos', JSON.stringify(todos));
	
// 	const stored = localStorage.getItem('todos');
// 	// console.log(stored);
	
// 	console.log(JSON.parse(stored));

// let highestScore = [
// 		{name: "Seth1", score: 101, win: true },
// 		{name: "Seth2", score: 102, win: false },
// 		{name: "Seth3", score: 103, win: true }
// 		];

// localStorage.setItem("highScore",JSON.stringify(highestScore));


// // highScore = JSON.parse(localStorage.getItem("highScores"));
// // highScore = JSON.parse(localStorage.getItem("highScore"));

// /*var temp = localStorage.getItem("highScorer");
// var highScore = temp ? JSON.parse(temp) : ["bob", "joe"];*/
// // var temp = localStorage.getItem("highScorer");
// var highScore = localStorage.getItem("highScore") ? JSON.parse(localStorage.getItem("highScore")) : ["bob", "joe"];

// console.log(highScore);

// if (1<2){
// 	var sum = new Function('a', 'b', 
// 		'console.log("Yo, what is up?"); return a + b;');
// 	}
// console.log(sum(3,4));

// function creator(someThing, aName){
// 	return aName = new Function('someThing', 'return someThing;');
// }

// creator("imafun", "content");
// var numArr = [];
// var funArr = [];

// for(var i = 0; i < 10; ++i){
//     numArr[numArr.length] = i;
//     funArr[funArr.length] = function(){  return i; };
// }

/*function funCreate(){
	return function hello(){console.log("hello wrld");};
}

funCreate();*/

// function* indexGenerator(){
//   var index = 0;
//   while(true) {
//     yield index++;
//   }
// }
// const g = indexGenerator();
// console.log(g.next().value); // => 0
// console.log(g.next().value); // => 1

//it hurts me to do this but I was having trouble generating function names dynamically

function zero(pars) {
	var num = 0;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function one(pars) {
	var num = 1;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function two(pars) {
	var num = 2;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function three(pars) {
	var num = 3;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function four(pars) {
	var num = 4;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function five(pars) {
	var num = 5;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function six(pars) {
	var num = 6;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function seven(pars) {
	var num = 7;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function eight(pars) {
	var num = 8;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}
function nine(pars) {
	var num = 9;
	if (pars == undefined){
		return num;
	} else {
		var num2 = pars[0];
		switch(pars[1]) {
			case "plus":
				return num2 + num;
				break;
			case "minus":
				return num - num2;
				break;
			case "times":
				return num * num2;
				break;			
			case "dividedBy":
				return parseInt(num / num2);
				break;
		}
 
	}
}

function plus(someNum) {
	return [someNum, "plus"];
}
function minus(someNum) {
	return [someNum, "minus"];
}
function times(someNum) {
	return [someNum, "times"];	
}
function dividedBy(someNum) {
	return [someNum, "dividedBy"];	
}