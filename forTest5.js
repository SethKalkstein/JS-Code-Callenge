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