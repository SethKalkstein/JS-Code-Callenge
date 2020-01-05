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