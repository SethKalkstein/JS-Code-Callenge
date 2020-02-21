/*
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

function formatDuration(total){

    if(total === 0){return "now"}

    const timeUnit = ["year", "day", "hour", "minute", "second"];
    const secsInUnit = [31536000, 86400, 3600, 60, 1];
    let remainder = 0;
    let timeObjectArray = [];
    let resultString = "";
    let unitsCounter = 0;

    for(let i = 0; i < timeUnit.length; i++){
        if(i === 0){remainder = total}
        let currentQuantity = Math.floor(remainder/secsInUnit[i]);
        remainder = remainder % secsInUnit[i];
        timeObjectArray.push({unit: timeUnit[i], quantity: currentQuantity});
    }

    // timeObjectArray.map(timeObject=> console.log(timeObject.unit + ": " + timeObject.quantity));
    const totalUnitsIncluded = timeObjectArray.reduce((acc, timeObject)=> acc + (timeObject.quantity ? 1 : 0), 0);
    // console.log(totalUnitsIncluded);

    for(let i = 0; i < timeObjectArray.length; i++){
        if(timeObjectArray[i].quantity){
            unitsCounter ++;
            let pluralizer = timeObjectArray[i].quantity > 1 ? "s" : "";
            let punctuation = unitsCounter === totalUnitsIncluded ? "" : unitsCounter === totalUnitsIncluded - 1 ? " and " : ", ";
            resultString += timeObjectArray[i].quantity + " " + timeObjectArray[i].unit + pluralizer + punctuation;
        }
    }
    console.log(resultString);
}

formatDuration(71536001);

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

 */
/* 
// fix the bugs in the following code :

// function findLongestWrong(str) (
  
//     var spl = str.split(" ");
//     var longest = 0
    
//     for (var i = 0; i > spl.length; i+) (
//       if (spl(i).length > longest) {
//         longest = spl[i].length
//       )
//       }
//       return longest
//   )
// fixed
function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
      return longest;
  }

const findLongestRefactored = str => str.split(" ").reduce( (longest, spl) => longest > spl.length ? longest : spl.length, 0);
 */

/* 
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

//     "Rating not recognised" in Javascript, Python and Ruby...

//almost works... if zero wasn't falsy I would be good!
const calculateTip1 = (amount, rating ) => Math.ceil([0,.05,.10,.15,.20][["terrible", "poor", "good", "great", "excellent"].indexOf(rating.toLowerCase())]*amount) || "Rating not recognised"

//problem solved by passing the result of the calculation as a function that can discern falsy zero from NaN. Thanks to another code solver for the idea of using the result of the main function as a parameter of another anon function.

const calculateTip3 = (amount, rating ) => (result => isNaN(result) ? "Rating not recognised" : result)(Math.ceil([0,.05,.10,.15,.20][["terrible", "poor", "good", "great", "excellent"].indexOf(rating.toLowerCase())]*amount));

function calculateTip2 (amount, rating ) {
    let multiplier = 0;
    switch(rating.toLowerCase()){
        case "terrible":
           multiplier = 0;
           break;
        case "poor":
            multiplier = .05;
            break;
        case "good":
            multiplier = .10;
            break;
        case "great":
            multiplier = .15;
            break;
        case "excellent":
            multiplier = .20;
            break;
        default:
            return "Rating not recognised";
    }
    return Math.ceil(multiplier * amount);
}
//someone else's code... nice! What I was trying to do above
calculateTip = (amount, rating) => (coefficient => coefficient >= 0 ? Math.ceil(amount * coefficient) : "Rating not recognised")(['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(rating.toLowerCase()) / 20)

console.log(calculateTip3(0, "pookr"));
 */

/* 
// funciton nesting and chaining practice

// const someJawn = (x,y) => (z=> z > 10 ? "high" : "low")(x+y);

// console.log(someJawn(10,3));
// console.log((z=> z > 10 ? "high" : "low")(3))

// (x=> {return (q=> q=="high" ? "HIGH" : (q=="low" ? "LOW" : "theres an error") )((z=> z > 10 ? "high" : "low")(x))})(11);

// (z => {
//     return z > 10 ? "high" : "low"
// })(3);

//     (q=>
//         {
//             return q=="high" ? "HIGH" : (q=="low" ? "LOW" : "theres an error") 
//         })((z => 
//             {
//                 return z > 10 ? "high" : "low"
//             })(3));

// (x => 
//     {   
//         console.log("x is: " + x);
//         return (q=>
//             {   
//                 console.log("q is: " + q);
//                 return q=="high" ? "HIGH" : (q=="low" ? "LOW" : "theres an error"); 
//             })((z => 
//                 {  
//                     console.log("z is: " + z); 
//                     z += 3;
//                     console.log("z is: " + z);
//                     return z > 10 ? "high" : "low";
//                 })(x +2))
//     })(9);

const nonAnom = (x => 
    {   
        console.log("x is: " + x);
        return (q=>
            {   
                console.log("q is: " + q);
                return q=="high" ? "HIGH" : (q=="low" ? "LOW" : "theres an error"); 
            })((z => 
                {  
                    console.log("z is: " + z); 
                    z += 3;
                    console.log("z is: " + z);
                    return z > 10 ? "high" : "low";
                })(x +2))
    })(9);

console.log(nonAnom);

const nonAnomPassArg = x => 
    {   
        console.log("x is: " + x);
        return (q=>
            {   
                console.log("q is: " + q);
                return q=="high" ? "HIGH" : (q=="low" ? "LOW" : "theres an error"); 
            })((z => 
                {  
                    console.log("z is: " + z); 
                    z += 3;
                    console.log("z is: " + z);
                    return z > 10 ? "high" : "low";
                })(x +2))
    };

console.log(nonAnomPassArg(4));
 */
/* 
// you will do addition and subtraction on a given string. The return value must be also a string.
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

//Brute force first

function simpleCalc(mathString){
    const mathArray = mathString.split("");
    let result = 0;
    let tempNum = 0;
    let addition = true;

    for(let i = 0; i < mathArray.length; i++ ){
        if(isNaN(mathArray[i])){
            console.log(mathArray[i] + " is not a number");
            result += tempNum*(addition ? 1 : -1);
            if(mathArray[i] == "p"){
                i += 3;
                addition = true;
            } else {
                i += 4;
                addition = false;
            }
            tempNum = 0;
        } else {
            console.log(mathArray[i] + " is a number");
            tempNum = tempNum*10 + parseInt(mathArray[i]);
            console.log(tempNum + "is the value of temp num")
        }
    }
    return (result + tempNum*(addition ? 1 : -1)).toString();
}

function calculate(mathString){
    const mathArray = mathString.split("");
    let result = 0;
    let tempNum = 0;
    let addition = true;

    for(let i = 0; i < mathArray.length; i++ ){
        if(isNaN(mathArray[i])){
            result += tempNum*(addition ? 1 : -1);
            if(mathArray[i] == "p"){
                i += 3;
                addition = true;
            } else {
                i += 4;
                addition = false;
            }
            tempNum = 0;
        } else {
            tempNum = tempNum*10 + parseInt(mathArray[i]);
        }
    }
    return (result + tempNum*(addition ? 1 : -1)).toString();
}

const t1 = "15plus2plus3plus4";
const t2 = "156plus29plus3minus4";

console.log(simpleCalc(t2));
 */

/* 
// Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

// The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

// Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

// extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
// extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
// extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
// extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}

 function extend(...theArgs){
    let result = {};
    theArgs.forEach( obj => {
        if(typeof(obj) == "object") {
            for(const key in obj){
                console.log(key, " key");
                if(!(key in result)){
                    result[key] = obj[key];
                }
            }
        } 
    });
    return result;
 }

 console.log(extend( {a: 1, b: 2}, {c: 3} ));
 console.log(extend( {a: 1, b: 2}, {a: 3, c: 3} ));
 console.log(extend( {a: 1, b: 2}, {c: 3}, {d: 4} ));
 console.log(extend( {a: false, b: null}, {a: true, b: 2, c: 3}, [1, 3, 4] ));
 */

/* 
// Maximum Solution Length * 50 Characters *

// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops.

//use as few characters as possible

// smallEnough=(a,l)=>Math.max(...a)<=l
smallEnough=(a,l)=>a.every(t=>t<=l)

 */

/* 

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

const getCount = str => str.split("").reduce((count, curr) => count += ['a', 'e', 'i', 'o', 'u'].indexOf(curr) !== -1 ? 1 : 0 ,0 );

const getCount2 = str => (res => res ? res.length : 0)(str.match(/[aeiou]/g));
const getCount3 = str => (str.match(/[aeiou]/g) || []).length;

console.log(getCount3("abracadabra"));
console.log(getCount3("my pyx"));

 */
/* 
// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. 

//I like this one the best
function solution1(digits){
    const consecutive = 5;
    let highest = 0;
    for(let i = consecutive; i <= digits.length; i++){
        highest = Math.max(highest, digits.slice(i-consecutive, i));
    }
    return highest;
}
//not particularly clear whats going on here, but writing it is fun!
const solution2 = digits => digits.split("").reduce((acc, _, i, arr) =>acc = Math.max(acc, i+5 > arr.length ? 0 : arr.slice(i,i+5).join("") ) ,0);

// OverKill Solution, not accounting for type casting, will take a number rather than a string
function solution3(digits){
    const consecutive = 5;
    let digitArray = digits.toString().split("").map(val => parseInt(val));
    let result = digitArray.slice(0,consecutive).reduce((acc, cur, ind)=> acc += cur*Math.pow(10, consecutive - ind-1),0);
    for(let i = consecutive+1; i <= digitArray.length; i++){
        let temp = digitArray.slice(i-consecutive, i).reduce((acc, cur, ind)=> acc += cur*Math.pow(10, consecutive - ind-1),0);
        result = Math.max(result,temp);     
    }
    return result;
}

console.log(solution3("12345678493219"));
 */

/* 
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
// Task

// Given a number, Find if it is Balanced or not . 

//done super fast as a pre bedtime fun activity for relaxation. Could be refactored but this is cool for now!
function balancedNum(number)
{
    if(number < 100) return "Balanced";
    let digitArray = number.toString().split("").map(val => parseInt(val));
    return digitArray.slice(0, Math.ceil(digitArray.length/2)-1).reduce((a,c)=> a + c, 0) == digitArray.slice(Math.floor(digitArray.length/2)+1, digitArray.length).reduce((a,c)=> a + c, 0) ? "Balanced" : "Not Balanced";
}
 */

// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not . 
/* 
function jumpingNumber(n){
    const arr = n.toString().split("").map(val => parseInt(val));
    for(let i = 1; i < arr.length; i++){
        if( Math.abs(arr[i]- arr[i-1]) !== 1){
            return "Not!!";
        }
    }
    return "Jumping!!";
  }
 */
/* 
// Given an 2D array of size m * n. Your task is to find the sum of minimum value in each row.

const sumOfMinimums = arr => arr.reduce((a,c)=> a + Math.min(...c), 0);
 */
/* 
// ###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

//     Note:Returning the pattern is not the same as Printing the pattern.

// ####Rules/Note:

//     If n < 1 then it should return "" i.e. empty string.
//     There are no whitespaces in the pattern.

pattern=n=>Array.from({length: n}, (_, i) => i+1).reduce((a,c,i)=>a+(i>0?"\n":"")+c.toString().repeat(c),"");

//someones else's answer that I found clever
pattern=n=>n<1?'':n<2?'1':pattern(n-1)+'\n'+(`${n}`.repeat(n))

console.log(pattern(5))

// pattern=n=>range(0, 4, 1)

 */
/* 
// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// s = "01000000X000X011X0X"

// "0" : uninfected

// "1" : infected

// "X" : ocean

// ⚫ The virus can't spread in the other side of the ocean.

// ⚫ If one person is infected every person in this continent gets infected too.

// ⚫ Your task is to find the percentage of human population that got infected in the end.

// ☑️ Return the percentage % of the total population that got infected.

// ❗❗ The first and the last continent are not connected!

// 💡 Example:

//  start: map1 = "01000000X000X011X0X"
//  end:   map1 = "11111111X000X111X0X"
//  total = 15
//  infected = 11
//  percentage = 100*11/15 = 73.33333333333333

function infected(s) {
    s = s.split("");
    let tempCounter = 0;
    let infectedCounter = 0;
    let fullCounter = 0;
    let tempInfected = false;

    for(let i = 0; i < s.length; i++){
        if(s[i] == "X"){
            infectedCounter += tempInfected ? tempCounter : 0;
            tempCounter = 0;
            tempInfected = false;
        } else {
            tempCounter++;
            fullCounter++
            if(s[i] == "1"){
                tempInfected = true;
            }
        }
    }

    infectedCounter += tempInfected ? tempCounter : 0;
    
    return fullCounter ? 100* infectedCounter/fullCounter : 0;
}
*/
/* 
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

//I'm gonna do this the lazy way
twoOldestAges = ages => ages.sort((a, b)=>a-b).slice(-2);

//fine... less lazy, faster computation, we can assume that negative age isn't a thing!
function twoOldestAges2(ages){
    let max = [0,0];
    for(let i = 0; i < ages.length; i++){
        if(ages[i] > max[1]){
            max[1] = ages[i];
        } else if (ages[i] > max[0]){
            max[0] = ages[i];
        }
    }
    return max;
}

console.log(twoOldestAges2([1, 2, 10, 8]));
 */

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros2(n) {
    let nArray = n.toString().split("");
    for(let i = nArray.length - 1; i >= 0; i--){
        if(nArray[i] == 0){
            nArray.pop();
        } else {
            break;
        }
    }
    return parseInt(nArray.join("")) || 0;
  } 

  function noBoringZeros(n){
    while(n%10 == 0 && n != 0){
        n /= 10;
    }
    return n;
  }

  console.log(noBoringZeros(-23400))