// const expandedForm = (n) => n.toString().split("").map( (n, i, a) => n*Math.pow(10,a.length-(i+1) ) ).filter(Boolean).join(" + ");

// .filter(bye => bye != 0)

    // console.log(expandedForm(65042));

    // console.log([1,2,3,4,0,4,5,0,9,8,0].filter(keep=>keep!=0));

    // return implode(" + ",array_diff(array_map(function($calc, $it){ 
    // 	return $calc ? $calc.str_repeat("0", $it) : 0; },
    // 	 $arr = str_split($n), array_reverse(array_keys($arr))),[0]));

/*sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
sum(6) //   -> 1+1+1+1+1+1, 1+1+1+1+2, 1+1+1+3, 1+1+4, 1+5, 6, 1+2+2+1, 1+2+3, 3+3

 0: 1     0
   1: 1   0
   2: 2   1
   3: 3    1
   4: 5    2
   5: 7    2
   6: 11   4
   7: 15   4
   8: 22   5
   9: 30   8
  10: 42   12
  11: 56   14 
  12: 77   21
  13: 101  24
  14: 135  34
  15: 176  41
  16: 231  55
  17: 297  66
  18: 385  88
  19: 490  105
  20: 627  137*/

// function oddest(a) {
//   let count1 = 0;
//   let count2 = 0;
//   let first = a[0];
//   let second = a[1];

//   while(first % 2 === 1){
//     count1++;
//     first = (first -1)/2;
//   }

//   while(second % 2 === 1){
//     count2++;
//     second = (second -1)/2;
//   }

//   if(count2 === count1){
//     return null;
//   } else if(count1>count2){
//     return a[0];
//   } else {
//     return a[1];
//   }

// }
/*
function oddest(a){
    if (a.length === 1) {
      return a[0];
     } else if ( a.length === 0) {
      return null;
    } else {
      let counter = [];
      for(i = 0; i < a.length; i++){
        var number = a[i];
        count = 0;
        while(number % 2 != 0 ){
          if(number === -1){
            count = 7777;
            break;
          } else {
            number = (number - 1) / 2;
            count ++;
          }
        }
        counter.push({"count" : count, "value" : a[i]});
      }
      counter.sort( (a,b) => b.count - a.count );
      return counter[0].count === counter[1].count ? null : counter[0].value;
    }
}

console.log(oddest([]));

*/

// x = 3429852349857239345432534534544875*2334534658435421654654

// console.log(x)

// function adder(x){
//   if (x < 1){
//     return x
//   } 
//   console.log("x is : "+x);
//   return x + adder(x-1);
// }

// console.log(adder(5));

// function fact(x){
//   if (x <= 1){
//     return x
//   } 
//   console.log("x is : "+x);
//   return x * fact(x-1);
// }

// console.log(fact(5));




// function mygcd(x,y){
//   if(x>y){
//     return denom(x,y);
//   } else {
//     return denom(y,x);
//   }
// }

// function denom(larger, smaller) {
//   for(let i = 1; i <= Math.floor(Math.sqrt(smaller)); i++){
//     console.log("i is currently: "+i);
//     if(smaller % i === 0 && larger % (smaller / i)  === 0) {
//       console.log("meow");
//       return smaller / i;
//     } else {
//       console.log("bark");
//     }

//   }
//   for(let i = Math.floor(Math.sqrt(smaller)); i >= 1; i--){
//     console.log("i is currently: "+i);
//     if(smaller % i === 0 && larger % i === 0){
//       console.log("hiss");
//       return i;
//     }
//   }
// }

// function mygcd2(x,y){
//   if (y == 0){
//     console.log("final!!! x = "+x);
//     return x;
//   } else {
//     console.log(" y: "+y+" x: "+x+" x % y: "+(x % y));
//     return mygcd2(y, x % y);
//   }
// }

// num1 = 100;
// num2 = 15;

// console.log(mygcd2(num1, num2));
// console.log(mygcd(num1, num2));

// function howManyDalmations(number) {
  
//   var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
//   var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));
  
// return respond;
// }



// const sumOfDifferences = arr => arr.sort().reduce((acc, cur, ind, src) => ind >= src.length - 1 ? acc += 0 : acc += Math.abs(cur - src[ind+1]), 0);

// console.log(sumOfDifferences([25, 26, 15, 25]));

// const accum = s => s.toLowerCase().split("").reduce( (a, c, i) => a + (i ? "-" : "") + c.toUpperCase()+c.repeat(i), "");

// function accum2(s) {
//   let result = "";
//   s = s.split("");
//   for(let i = 0; i < s.length; i++ ){
//     let nextAddition = "";
//     if (i != 0){
//       nextAddition = "-";
//     }
//     nextAddition += s[i].toUpperCase()
//     for(let j = 0; j < i; j++){
//       nextAddition += s[i].toLowerCase();
//     }
//     result += nextAddition;
//   }
//   return result;
// }

// function accum3(s) {
//   return s.toUpperCase().split("").reduce((a,v,i) => a+"-"+v+v.toLowerCase().repeat(i))
// }

// const str = "SDFVdf"

// console.log(accum(str));
// console.log(accum2(str));
// console.log(accum3(str));

// function century(year) {
//   if(year%100 === 0){
//     return year/100;
//   } else {
//     return year/100 + ((100-(year%100))/100);
//   }
// }

// const century = year => year % 100 ? (year + 100 - (year%100))/100 : year/100;

// console.log(century(507));

// const addLetters = (...letters) => String.fromCharCode(letters.reduce( (a, c) => a + (c.charCodeAt(0)-96), 25 ) % 26 + 97);

// const addLetters = (...letters) => String.fromCharCode(96+ (letters.reduce( (a, c) => a + (c.charCodeAt(0)-96), 0) % 26 || 26));

// console.log(addLetters());

// function HQ9(inp) {
//   switch(inp){
//     case "9":
//       let fullSong = "99 bottles of beer on the wall, 99 bottles of beer.\n";
//       for(let i = 98; i >= 0; i--){
//         let plural = i === 1 ? "" : "s";
//         let bottleNum = i ? i : "no more";
//         let phrase1 = "Take one down and pass it around, " + bottleNum + " bottle"+plural+" of beer on the wall.\n";
//         let phrase2 = (bottleNum === "no more" ? "No more" : bottleNum) + " bottle"+plural+" of beer on the wall, " + bottleNum + " bottle"+ plural +" of beer.\n";
//         fullSong += phrase1 + phrase2;
//       }
//       return fullSong + "Go to the store and buy some more, 99 bottles of beer on the wall.";
//       break;
//     case "H":
//       return "Hello World!";
//       break;
//     case "Q": 
//       return "Q"; 
//       break;
//     default:
//       return undefined;
//     break;
//   }
// }

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.


/* const fizBuzzRec = (num, ...wordAndMultPair) => {
  wordAndMultPair.sort((a,b) => a[1] - b[1]);
  for (var i = 1; i <= num; i++) {
    let result = "";
    wordAndMultPair.forEach((wordMult)=> result += i % wordMult[1] ? "" : wordMult[0]);
    console.log(result || i);
  }
}

fizBuzzRec(257, ["Buzz", 5], ["Pop",7], ["Fizz",3], ["Zing",11]); */

/* const fizBuzzRec = (num, ...wordAndMultPair) => { //the one where Spanier asked me to print only Zing instead of Fizz and Buzz
  wordAndMultPair.sort((a,b) => a[1] - b[1]);
  //checks from 1 to the number specified in the first parameter
  for (var i = 1; i <= num; i++) {
    let result = "";
    // wordAndMultPair.forEach((wordMult)=> result += i % wordMult[1] ? "" : wordMult[0]);
    //check for multiples given in the tuple
    for(let j = wordAndMultPair.length - 1; j > 0; j--){
      if( i % wordAndMultPair[j][1] === 0){
        result = wordAndMultPair[j][0];
        break;
      }
    } //end j loop
    console.log(result || i);
  } //end i loop
} //end function

fizBuzzRec(257, ["Buzz", 5], ["Pop",7], ["Fizz",3], ["Zing",15]); */

/* function letterFrequency(text){
  let resultObj = {};
  let resultArr = [];
  if(!text){return resultArr}
  text.toLowerCase().match(/[a-z]/g).forEach( letter => resultObj[letter] ? resultObj[letter]++ : resultObj[letter] = 1);
  for (letters in resultObj){
    resultArr.push([letters, resultObj[letters]]);
  }
  for(let i = 0; i < resultArr.length -1; i++){
    for(let j = 0; j < resultArr.length -1; j++){
      if (resultArr[j][1] < resultArr[j+1][1]){
        let temp = resultArr[j+1];
        resultArr[j+1] = resultArr[j];
        resultArr[j] = temp;
      }
    }
  }
  return resultArr;
} */

// function letterFrequency(text){
//   let resultObj = {};

//   text = text.toLowerCase().match(/[a-z]/g);
//   if (text) {
//     text.forEach( letter => resultObj[letter] ? resultObj[letter]++ : resultObj[letter] = 1);
//     return Object.entries(resultObj).sort((a, b) => b[1] > a[1] ? 1 : a[1] > b[1] ? -1 : a[0] > b[0] ? 1 : -1  );
//   } else {
//     return [];
//   }
// }

// console.log(letterFrequency("123ddfgASDF 2309 sldi,cxj sdlk"));

// const addLetters = (...letters) => String.fromCharCode(letters.reduce( (a, c) => a + (c.charCodeAt(0)-96), 25 ) % 26 + 97);

// const rot13 = (message) => message.replace(/[a-z]/gi, match =>( String.fromCharCode(  (match > "Z" ? 97 : 65) + (match.charCodeAt()-(match > "Z" ? 84 : 52)) % 26) ));

// const rot13 = (message) => message.replace(/[a-z]/gi, match =>( String.fromCharCode( match > "Z" ? 97 + ((match.charCodeAt()-84) % 26) : 65 + ((match.charCodeAt()-52) % 26) )));
                                  // .replace(/[A-Z]/g, match=>( String.fromCharCode(65 + ((match.charCodeAt()-52) % 26)) ))
// const rot13 = (message) => message.replace(/[a-z]/g, match=>( String.fromCharCode(97 + ((match.charCodeAt()-84) % 26)) ))
//                                   .replace(/[A-Z]/g, match=>( String.fromCharCode(65 + ((match.charCodeAt()-52) % 26)) ))


// console.log(rot13("Test"));



//set output array to smaller of length of input array vs given n
//push first n numbers of input array to output array
//if the current iteration of the input array is lower than the highest of the output, splice the member of the output array that is highest, and push the lower value to the end of the output array
// function firstNSmallest(array, n){
//   let output = [];
//   const outputLength = array.length < n ? array.length : n;

//   for(let i = 0; i < array.length; i++){
//     if(i < outputLength){
//       output.push(array[i]);
//     } else {
//       let maxNum = Math.max(...output); 
//       if (array[i] < maxNum){
//         output.splice(output.lastIndexOf(maxNum),1);
//         output.push(array[i]);
//       }
//     }
//   }
//   return output;
// }

// console.log(firstNSmallest([2,1,2,3,4, 1],3))
// function firstNSmallest(array, n){
//   let output = [];
//   const outputLength = array.length < n ? array.length : n;

//   for(let i = 0; i < array.length; i++){
//     if(i < outputLength){
//       output.push(array[i]);
//     } else {
//       let maxNum = Math.max(...output); 
//       if (array[i] < maxNum){
//         output.splice(output.lastIndexOf(maxNum),1);
//         output.push(array[i]);
//       }
//     }
//   }
//   return output;
// }

// console.log(firstNSmallest([2,1,2,3,4, 1],3))

// TODO: Refactor and shorten the function

// const describeAge = age => "You're a(n) " + ( age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly");
// function describeAge(age) {
//   let p=""
//     if (age <= 12) {
//       p="kid";
//     } else if (age <= 17) {
//       p="teenager";
//     } else if (age <= 64) {
//       p="adult";
//     } else {
//       p="elderly";
//     }
//     return "You're a(n) " + p;
//   }

// const d = [5, 10, 15];
// const e = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

/* function compareTriplets(a, b) {
  let result = [0,0];

  for(let i = 0; i < a.length; i++){
    if(a[i] > b[i])
      result[0] ++;
    else if (b[i] > a[i])
      result[1] ++; 
  }
  return result;
} */

// function compareTriplets(a, b) {
//   return a.reduce((acc, cur, i)=> {
//     cur > b[i] ? acc[0]++ : acc[1]++;
//     return acc;
//   }, [0,0])
// }

// console.log(compareTriplets(d,e));

// function aVeryBigSum(ar) {
// return ar.reduce((acc, cur)=>acc+cur)
// }

// console.log(aVeryBigSum(e));

/* const sample = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

function diagonalDifference(arr) {
  let result = [0,0];
  let len = arr.length - 1;

  for(let i = 0; i <= len; i++){
    result[0] += arr[i][i];
    result[1] += arr[i][len - i];
  }

  return Math.abs(result[0]-result[1]);
}

console.log(diagonalDifference(sample));
 */

/* const inp = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {

    let result = [0,0,0];
    const len = arr.length - 1;

    for(let i = 0; i <= len; i++){
      arr[i] > 0 ? result[0]++ : arr[i] < 0 ? result[1]++ : result[2]++;
    }

    return result.map(item => (item /(len + 1)).toPrecision(6));

}

console.log(plusMinus(inp)); */
/* 
const n = 6;
for(let i = 0; i < n; i++){
  let currentLine = "";
  for(let j = 1; j <= n; j++){
    if(n - j > i){
      currentLine += " ";
    }
    else{
      currentLine += "#";
    }
  }
  console.log(currentLine);
} */

const ar = [1, 1, 5, 1, 5, 2, 3, 4, 5, 5];

// function miniMaxSum(arr) {

//   let sum = arr.reduce((acc, cur) => acc + cur);
//   let min = sum;
//   let max = arr[0];
  
//   for(let i = 0; i < arr.length; i++){
//     let newSum = sum - arr[i];
//     max = newSum > max ? newSum : max;
//     min = newSum < min ? newSum : min;
//   }
//   console.log(`${min} ${max}`);
// }

// miniMaxSum(ar);

  // const birthdayCakeCandles = arr => arr.reduce((acc, cur) => acc + (Math.max(...arr) == cur ? 1 : 0), 0)

// function birthdayCakeCandles(arr){
//   const highest = Math.max(...arr);
//   let result = 0;
//   arr.forEach(element => {
//     if(element == highest){
//       result ++;
//     }    
//   });
//   return result;
// }

// console.log(birthdayCakeCandles(ar));

/* function timeConversion(s) {
  const time = s.split("");
  let hour = time[0] + time[1];
  let minSec = "";
  const amPm = time[8];

  for(let i = 2; i <=7; i++ ){
    minSec += time[i];
  }
 
  if(hour == "12" && amPm == "A"){
      hour = "00"
  } else if (hour != "12" && amPm == "P") {
    hour = parseInt(hour) + 12;
  }
  console.log(hour+minSec);
}

timeConversion("12:05:45AM"); */

/* function hackerlandRadioTransmitters(houses, n) {
  let antPos = 0;
  let startPos = 0;
  // let nextPos = 0;
  let count = 1;
  let lookBack = true;
  let i = 1;
  
  houses.sort((a, b) => a - b );

  while (i < houses.length) {
    console.log(`A:  i: ${i}, lookBack: ${lookBack}, count: ${count}, startPos: ${startPos}, antPos: ${antPos}`);

    if(lookBack == true){ //looking backwards
      if(houses[i] - houses[startPos] < n){
        i ++;
      } else {//(houses[i] - houses[startPos] <= n) {
        antPos = i - 1;
        lookBack = false;
      }
    } else { //lookBack == false, we're looking forward
      if(houses[i]-houses[antPos] <= n){
        i ++;
      } else {
        startPos = i -1;
        i++;
        count ++;
        lookBack = true;
      }
    }
    // console.log(`B:  i: ${i}, lookBack: ${lookBack}, count: ${count}, startPos: ${startPos}, antPos: ${antPos}`);
  } //end while

  return count;
  
  } */
/*   function hackerlandRadioTransmitters(houses, n) {
    let ant = 0;
    let left = 0;
    let leftCheck = true;
    let count = 1;
    //special cases
    if (houses.length === 0){
      return 0;
    }
    if (houses.length === 1){
      return 1;
    }

    houses.sort((a, b) => a - b );

    //count should only increase when new leftboud is created
    //new left bound created when either a: current house is too far from antenna, 
    
    for(let i = 1; i < houses.length; i++){
      if(leftCheck == false){
        if (houses[i] - houses[ant] > n){ //distance is greater than n
          count ++;
          left = i;
          leftCheck = true;
          continue;
        }
      }

      if(leftCheck == true){
        if(houses[i] - houses[left] > n){
          if(houses[i] - houses[i-1] <= n){
          //prev becomes ant when dist between prev and current is less than or equal to n
          ant = i - 1;
          leftCheck = false;
          } else {
            //or a new left is set to current when dist is greater between
            left = i;
            count ++;
            leftCheck = true;
          }
          //or a new left is set to current when dist is greater between
        }
      }
    } //end for
    return count;
  }

  const imp = [7, 2, 4, 6, 5, 9, 12, 11]; 

  console.log(hackerlandRadioTransmitters(imp, 2));
 */

/* function gradingStudents(grades) {
  // Write your code here
  return grades.map(grade=>{
    if(grade <= 37 || grade % 5 < 3){
      return grade;
    } else {
      return grade + (5 - grade % 5)
    }
  });
}; */


// const gradingStudents = grades => grades.map(grade=> grade <= 37 || grade % 5 < 3 ? grade : grade + (5 - grade % 5));


// console.log(gradingStudents([73,67,38,33]));
/* 
function countApplesAndOranges(s, t, a, b, apples, oranges) {
console.log(apples.reduce((hitHouse, apple)=> hitHouse + (a + apple >= s && a + apple <= t ? 1 : 0), 0));
console.log(oranges.reduce((hitHouse, orange)=> hitHouse + (b + orange >= s && b + orange <= t ? 1 : 0), 0))
} */

const increaser = inc => {
    inc ++;
    let divMax = Math.floor(Math.sqrt(inc));
    for(let i = divMax; i > 1; i--){
      if(inc % i == 0){
        return increaser(inc)
      }
    }
    return inc;
};

for(let i = 1, j = 1; i <= 5000 ; j++, i = increaser(i)){
  let pTag = document.createElement("h1");
  pTag.innerHTML = i + ": Becca Rules! ";
  
  pTag.style.display = j % 4 ? "inline" : "block";

  pTag.style.color = j % 15 ? j % 5 ? j % 3 ? "purple" : "green" : "red" : "brown";
  
  document.body.appendChild(pTag);
}

/* function highAndLow(numbers){
  return Math.max(...numbers.split(" ")) + " " + Math.min(...numbers.split(" "));
}
 */
// const highAndLow = numbers => Math.max(...numbers.split(" ")) + " " + Math.min(...numbers.split(" "))

// const highAndLow = (...numbers) => Math.max(...numbers) + " " + Math.min(...numbers)


// function highAndLow(numbers){
//   return numbers.split(" ").filter((num, _ind, arr) => num == Math.max(...arr) || num == Math.min(...arr) );
// }

// let sample = "4 5 29 54 4 0 -214 542 -64 1 -3 542 6 -6";
// console.log(highAndLow(sample));

/* function solution(number){
  let result = 0;
  for(let i = 1; i < number; i ++ ){
    result += i % 5 && i % 3 ? 0 : i;
  }
  return result;
} */


// const solution = n => Array(n).fill().reduce( (a,c,i) => a + (i % 5 && i % 3 ? 0 : i), 0)

//  console.log(solution(10));

/* function findOdd(A) {
  let obj = {};
  for(let i = 0; i < A.length; i++){
      obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
  }
  for(key in obj){
    if(obj[key] % 2 == 1){
      return key;
    }
  }
} */
/* function findOdd(A) {
  let obj = {};
  for(let i = 0; i < A.length; i++){
    if(obj[A[i]]){
      obj[A[i]] += 1;
    } else {
      obj[A[i]] = 1;
    }
  }
  for(key in obj){
    if(obj[key] % 2 == 1){
      return key;
    }
  }
} */

/* let dat = [5,4,3,2,5,5,4,3,2,10,10];
console.log(findOdd(dat)) */

// const kangaroo = (x1, v1, x2, v2) => x2 - x1 ? v1 - v2 ? (x2 - x1)/(v1 - v2) > 0 && !(((x2 - x1)/(v1 - v2)) % 1) ? "YES" : "NO": "NO" : "YES"

/* const kangaroo = (x1, v1, x2, v2) => !(x2 - x1) || (x2 - x1)/(v1 - v2) > 0 && !(((x2 - x1)/(v1 - v2)) % 1) && v1 - v2 ? "YES" : "NO";
console.log(kangaroo(0,3,5,3)) */

/* function removeDup(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    let flag = false;
    for(let j = 0; j < result.length; j++){
      if(arr[i] === result[j]){
        flag = true;
      }
    }
    if(flag === false){
      result.push(arr[i]);
    }
  }
  console.log(result);
} */

// function removeDup(arr){
//   arr.sort();
//   let result = [];

//   for(i = 0; i < arr.length; i++ ){
//     if (arr[i] !== arr[i-1]){
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }

/* function removeDup(arr){
  let noDup = {};
  let b = [];
  
  for (i = 0; i < arr.length; i++){
    noDup[arr[i]] = null;
  }
  
  let b = [];
  for( key in noDup){
    b.push(parseInt(key));
  }

  console.log(result);
}

let inp = [1,2,3,4,2,3,4,5,4,5,6, 10, 12, 14, 10];
let inp2 = [5, 4];

removeDup(inp); */

/* var addOne = function(e) {
  return e + 1;
};

var square = function(e) {
  return e * e;
}; */

/* var pipe = function(e){

} */

/* Object.prototype.pipe = function(callBack){
  return callBack(this.constructor);
} */

// Function.method("pipe", secondFunc => )

// var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]

/* var result = [1,2,3,4,5].map(addOne.pipe( e => e*e)) //-> [4,9,16,25,36]

var pipe = function(callBack) {
  return callBack(addOne)
}

Function.prototype.pipe = function(callBack){
    return callBack(this);
} */

// const printerError = s => (s.match(/[n-z]/g) || []).length + "/" +s.length
//.length + "/" + s.length;

// console.log(printerError("aaabbbbhaijjjm"));

/* function sortArray(array) {
  let sortOdd = array.filter( num => num % 2 == 1).sort((a,b)=>a-b);
  for(let i = 0, j = 0; i < array.length; i++){
    if(array[i] % 2 === 1){
      array[i] = sortOdd[j];
      j++;
    }
  }
  return array;
} */

// console.log(sortArray([1, 6, 2, 9, 5, 7, 3, 4, 8, 5, 9, 2, 1, 4, 7]));

/* function mergeStrings(a, b) {
  let result = "";
  a = a.split("");
  b = b.split("");
    for(let i = 0; i < a.length || i < b.length; i++){
      result += (a[i] ? a[i] : "") + (b[i] ? b[i] : "");
    }
  return result;
} */

// console.log(mergeStrings("hello", "mom"));

// function winner(erica, bob) {
  
//   const rank = {"E": 1, "M": 3, "H": 5};
  
//   let ericaScore = erica.split("").reduce((acc, cur)=> acc + rank[cur], 0);
//   let bobScore = bob.split("").reduce((acc, cur)=> acc + rank[cur], 0);

//   return ericaScore == bobScore ? "Tie" : (ericaScore > bobScore ? "Erica" : "Bob");
// }

// const winner = (erica, bob, rank = {"E": 1, "M": 3, "H": 5}) => erica.split("").reduce((acc, cur)=> acc + rank[cur], 0) == bob.split("").reduce((acc, cur)=> acc + rank[cur], 0) ? "Tie" : (erica.split("").reduce((acc, cur)=> acc + rank[cur], 0) >  bob.split("").reduce((acc, cur)=> acc + rank[cur], 0) ? "Erica" : "Bob")

/* const winner = (erica = erica.split("").reduce((acc, cur)=> acc + rank[cur], 0), bob = bob.split("").reduce((acc, cur)=> acc + rank[cur], 0), rank = {"E": 1, "M": 3, "H": 5}) => erica == bob ? "Tie" : (erica >  bob ? "Erica" : "Bob")

console.log(winner("HHM", "MMH")); */

/* function factorial(n)
{
  if(n > 12 || n < 0){
    throw new RangeError();
  } else {
    if (n <= 1){
      return 1;
    } else {
      return n * factorial(n - 1)
    }
  }
}

console.log(factorial(14)); */

/* function fib(n){
  if(n === 1 || n === 2){
    return 1;
  }
  return fib(n -1) + fib(n - 2);
}

console.log(fib(20)); */