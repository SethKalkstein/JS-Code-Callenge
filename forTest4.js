/* hypothetical posed to me in comment section for using 
an Object.keys() approach for mixed type array when 
removing duplicates. It's messy for edge cases, but possible */


const a = [1, 2, "52634", 1.2, "false" ,"1", "dog", false, false, 4.5, 5.5, 1.2,  5, "cat", "cat", true, null, undefined, undefined, 2, true, null, "null", false, null, 1, 8];

function eliminateDups(theArray) {
    let obj = {};

    // I threw in a statement for distinguishing edge cases of strings that could be defined as other types such as "undefined" the string vs undefined the data type or "4" vs 4.

    for (const key of theArray) {

        if(typeof key === "string"){
            obj["%String%"+key] = true;
        } else {
            obj[key] = false;
        }
    }

    let b = [];
    //assignment of the temp tests for a string then for a number then converts otherwise;
    for( key in obj ){
        let temp = (obj[key] === true ? key.slice(8) : ( parseFloat(key) || convertToType(key) ));
        b.push( temp );
    }

    console.log("b: ")
    console.log(b);
    return b;
}

function convertToType (theKey) {

    switch(theKey){
        case "null":
            return null;
            break;
        case "undefined":
            return undefined;
            break;
        case "false":
        case "true":
            return theKey === "true";
            break;
        default:
            return theKey;
    }
}

console.log(eliminateDups(a));

