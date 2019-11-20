/*function plus(rightNumber) {
	return function(leftNumber){
		return leftNumber + rightNumber;
	}
}

var n = function(digit){
	return function (callBF) {
		if(callBF == undefined){
			return digit;
		} else 
		{
			return callBF(digit);
		}
	}
}

var five = n(5);
var six = n(6);*/
// var five = n(5);
// var five = n(5);
// v

// function gooseFilter (birds) {
  // var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   for (var i =0; i < geese.length; i++){
//   	for(let j =0; j < birds.length; j++){
//   		if(geese[i]==birds[j]){
//   			birds.splice(j,1);
//   			j--;
//   		}
//   	}
//   }
//   return birds;
// };

// var gooseFilter = birds => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].forEach(goose =>  birds.filter(bird => !goose));
// var gooseFilter = birds => birds.filter(bird => !["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].includes(bird));
// gooseFilter = (birds) => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].forEach((goose) => { birds.forEach((bird) => { console.log(bird+" "+goose)})});





// console.log([3,4].forEach(nMatch => [1,2,3,4,5,6,7].filter(num => !2 )));

// gooseFilter = birds => birds.filter(bird => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].forEach(goose => goose != bird ));

// gooseFilter = birds => {
// 	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// 	geese.forEach( goose => {
// 		birds.filter( bird => {
// 			console.log("bird: "+bird+" Goose: " + goose);
// 			return bird != goose;
// 		})
// 	})
// }

// var newBird = gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);

// console.log(newBird);
// const grade = ["F", "F", "F", "F", "F", "F", "D", "C", "B", "A", "A"];
// getGrade = (a, b, c) => grade[Math.floor((a+b+c)/30)]

// const grade = ["F", "F", "F", "F", "F", "F", "D", "C", "B", "A", "A"];
// getGrade = (a, b, c) => "DCBAA"[Math.floor((a+b+c)/30-6)] || "F"

// fakeBin = x => x.split("").map(y => y < 5 ? 0 : 1).join("")

// function arrayMash (array1, array2) {
//  // do the mash
// };

// const arrayMash = (array1, array2) => Array(array1.length*2).fill().map( (_, ind) => ind % 2 ? array2[Math.floor(ind/2)] : array1[ind/2]);

// arrayMash = (a1, a2) => a1.forEach((e,i) => a3.push(e,a2[i]))

// console.log(arrayMash([null, null, 4], [NaN, null, 'hello']));

/*const theNumbers = "2 54 41 40 12";
const theNumbers2 = "1 3 5 7 12 11";

const iqTest = numbers => {
	bins = numbers.split(" ").map(curr => curr % 2);
	if(bins.reduce((a, c)=> a + c, 0) > 1) {
		return bins.indexOf(0) +1;
	}
	return bins.indexOf(1) + 1;
} 

console.log(iqTest(theNumbers2));*/

// const factHolder = numb => {
// 	var arr =[];
// 	for (i = 1; i <= numb; i++) {
// 		if(numb % i === 0){
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
// }

// const factHolder = numb => {
// 	let factSumSq = 0;
// 	let numbSqrt = Math.sqrt(numb);
// 	for (let i = 1; i <= numbSqrt; i++) {
// 		if(numb % i === 0){
// 			if( numb / i === i){
// 				factSumSq += (i*i)
// 			} else {
// 				factSumSq += (i*i) + ((numb/i)*(numb/i)) 
// 			}
// 		}
// 	}
// 	return Math.sqrt(factSumSq) % 1 === 0 || factSumSq === 1 ? [numb, factSumSq] : null;
// }

// const listSquared = (m, n) => {
// 	let result = [];
// 	for (let i = m; i <= n; i++){
// 		factHolder(i) ? result.push(factHolder(i)) : null;
// 	}
// 	return result;
// }

// // console.log(factHolder(1));
// // console.log(Math.sqrt(1));
// console.log(listSquared(250, 500));


/* function order(words){
	//variables to hold arrays that will be switched and elements to be compared in array
	let numberHolder1 = 0;
	let numberHolder2 = 0;
	//split the string into words
	words = words.split(" ");
	//split the words into characters
	for( i = 0; i < words.length; i++ ) {
	  words[i] = words[i].split("");
	}
  
	//bubble sort
	for(var i = 0; i < words.length - 1; i++){
	  for(let j = 0; j < words.length - (i + 1); j++){
		//extract numbers
		numberHolder1 = isolateNumber(words[j]);
		numberHolder2 = isolateNumber(words[ j + 1]);
		//compare adjecent arrays and move positions in ascending order
		if(numberHolder1 > numberHolder2) {
		  let charArray = words[j];
		  words[j] = words[j+1];
		  words[j+1] = charArray;
		}
		//rejoin last element if it is the last iteration of the inner loop
		if( j == words.length - (i + 2)) {
		  words[j+1] = words[j+1].join("");
		  //also join second to last element (the first element in this case) for the last iterationm of the outer loop
		  if ( i == words.length - 2) {
			words[j] = words[j].join("");
		  } //end inner if
		} //end outer if
	  } //end inner for
	} // end outer for
	//rejoin the string and return it
	return words.join(" ");
  } // end function
  
  //test to see if a character is a number anbd return it to be compared if it is
  function isolateNumber(iWord){
	  //loop through isolated word until a number is found
	  for(let k = 0; k < iWord.length; k++){
		//test to see if the character is a number and return it if it is
		if ( !isNaN(iWord[k]) ){
		  return iWord[k];
		} //end if
	  } //end for
	} //end function
  
	console.log("4of Fo1r pe6ople g3ood th5e the2");
	console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
 */  


/*snail = function(array) {
  return pusher(array.length, array, "right", [[]], 0, 0);
}

const pusher = (count, arr, dir, newArray, outerPos, innerPos) => {
	let dest = 0;
	if(count < 1 ){
		return newArray;
	} else {
		switch(dir){
			case "right": 
				dest = innerPos + count;
				while(innerPos < dest){
					newArray.push([outerPos][innerPos]);
					innerPos ++;
				}
				pusher(count - 1, arr, "down", newArray, outerPos + 1, innerPos - 1);
				break;
			case "down":
				dest = outerPos + count;
				while(outerPos < dest){
					newArray.push([outerPos][innerPos]);
					outerPos ++;
				}
				pusher(count, arr, "down", newArray, outerPos - 1, innerPos - 1);
				break;
			case "left":
				dest = innerPos - count;
				while(innerPos > dest ){
					newArray.push([outerPos][innerPos]);
					innerPos --;
				}
				pusher(count - 1, arr, "down", newArray, outerPos - 1, innerPos + 1);
				break;
			case "up":
				dest = outerPos - count;
				while(outerPos > count){
					newArray.push([outerPos][innerPos]);
					outerPos --;
				}
				pusher(count, arr, "down", newArray, outerPos + 1, innerPos + 1);
				break;
		}
	}
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));*/

/*snail = function(arr) {
	let dest = 0;
	let dir = "right";
	let count = arr[0].length;
	let newArray = [];
	let outerPos = 0;
	let innerPos = 0;
	  // return pusher(array.length, array, "right", [[]], 0, 0);
	while (count > 0) {
		switch(dir){
			case "right": 
				dest = innerPos + count;
				while(innerPos < dest){
					newArray.push(arr[outerPos][innerPos]);
					innerPos ++;
				}
				count --; 
				dir = "down"; 
				outerPos ++; 
				innerPos --;
				break;
			case "down":
				dest = outerPos + count;
				while(outerPos < dest){
					newArray.push(arr[outerPos][innerPos]);
					outerPos ++;
				}
				dir = "left"; 
				outerPos --; 
				innerPos --;
				break;
			case "left":
				dest = innerPos - count;
				while(innerPos > dest ){
					newArray.push(arr[outerPos][innerPos]);
					innerPos --;
				}
				count --; 
				dir = "up"; 
				outerPos --; 
				innerPos ++;
				break;
			case "up":
				dest = outerPos - count;
				while(outerPos > dest){
					newArray.push(arr[outerPos][innerPos]);
					outerPos --;
				}
				dir = "right";
				outerPos ++;
				innerPos ++;
				break;
		}
	}
	return newArray;
}
*/
// const pusher = (count, arr, dir, newArray, outerPos, innerPos) => {
// 	let dest = 0;
// 	// if(count < 1 ){
// 	// 	return newArray;
// 	// } else {
// 	while (count > 0) {
// 		switch(dir){
// 			case "right": 
// 				dest = innerPos + count;
// 				while(innerPos < dest){
// 					newArray.push([outerPos][innerPos]);
// 					innerPos ++;
// 				}
// 				count --; 
// 				dir = "down"; 
// 				outerPos ++; 
// 				innerPos --;
// 				break;
// 			case "down":
// 				dest = outerPos + count;
// 				while(outerPos < dest){
// 					newArray.push([outerPos][innerPos]);
// 					outerPos ++;
// 				}
// 				dir = "down"; 
// 				outerPos --; 
// 				innerPos --;
// 				break;
// 			case "left":
// 				dest = innerPos - count;
// 				while(innerPos > dest ){
// 					newArray.push([outerPos][innerPos]);
// 					innerPos --;
// 				}
// 				count --; 
// 				dir = "down"; 
// 				outerPos --; 
// 				innerPos ++;
// 				break;
// 			case "up":
// 				dest = outerPos - count;
// 				while(outerPos > count){
// 					newArray.push([outerPos][innerPos]);
// 					outerPos --;
// 				}
// 				dir = "down";
// 				outerPos ++;
// 				innerPos ++;
// 				break;
// 		}
// 	}
// 	return arr;
// 	// }
// }

// console.log(snail([[]]));

// const circleOfNumbers = (n, firstNumber) => firstNumber >= n/2 ? firstNumber - n/2 : firstNumber + n/2;

// console.log(circleOfNumbers(6,1))

// const extraPerfect = n => Array(Math.ceil(n/2)).fill().map( (_, ind) => ind * 2 + 1);

// var createIterator = function (func, n) {
// 	if (n > 1) {
// 		console.log("n is " + n);
// 		createIterator(func, n-1);
// 	}
// 	else{
// 		return func;
// 	}
// };
/*var createIterator = function (func, n) {
 return a=>n?createIterator(func,n-1)(func(a)):a;
};
var getDouble = function(x){return x*3;}

var result = createIterator(getDouble(5), 4);

console.log(result);*/

// console.log([1,2,3,4,5].map(function(n) {
//      return (!(n>1))? 1 : arguments.callee(n-1)*n;
//  }));