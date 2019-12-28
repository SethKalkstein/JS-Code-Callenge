/* hypothetical posed to me in comment section for using 
an Object.keys() approach for mixed type array when 
removing duplicates. It's messy for edge cases, but possible */


/* const a = [1, 2, "52634", 1.2, "false" ,"1", "dog", false, false, 4.5, 5.5, 1.2,  5, "cat", "cat", true, null, undefined, undefined, 2, true, null, "null", false, null, 1, 8];

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

console.log(eliminateDups(a)); */


/* 
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters. and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category. 

//gonna code golf this one :-)

//one line!!!
const stockList = (listOfArt, listOfCat) => listOfArt.length === 0 || listOfCat.length === 0 ? "" : listOfCat.map( category => "("+ category + " : " + listOfArt.reduce((sum, article)=> sum += article[0] === category ? parseInt(article.split(" ")[1]) : 0, 0 ) + ")").join(" - ");

art = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// art = [];
// cat = [];
cat = ["A", "B", "K"];

console.log(stockList(art, cat)); 
*/

/* 
// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit, x). For example, below is part of a record with s = 15:

// One reduce will do it. done in PHP with traditional methods

const gps = (s, x) => x.reduce((a, c, i, o) => Math.max(Math.floor((3600*(c-o[i ? i - 1 : 0]))/s), a), 0);

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
s = 15;

console.log(gps(s,x));
 */


 
// Gary likes pictures but he also likes words and reading. He has had a desire for a long time to see what words and books would look like if they could be seen as images.

// For this task you are required to take a continuous string that can consist of any combination of words or characters and then convert the words that make up this string into hexadecimal values that could then be read as colour values.

// A word is defined as a sequence of ASCII characters between two white space characters or the first or last word of a sequence of words.

// Each word will represent a hexadecimal value by taking the first three letters of each word and find the ASCII character code for each character. This will then give you one hexadecimal value that represents the colours red, green or blue. You will then combine these values into one readable RGB hexadecimal value, ie, #ffffff.

// If your word consists of less than 3 letters, you should use the hexidecimal value '00', ie "It" would return a value #497400.

// Your answer should be an array of hexadecimal values that correspond to each word that made up your original string.

const sample = "Hello, my name is Gary and I like cheese.";

//One Liner...
const wordsToHex = words => words.split(" ").map(word => word.slice(0,3).split("").reduce((a, c, i) => a.slice(0,i*2+1) + c.charCodeAt(0).toString(16) + a.slice(i*2+3,7),"#000000" ));
    
// more clear, longer solution

function wordsToHex2(words) {
    const wordArray = words.split(" ");
    let result = [];
    
    for(let i = 0; i < wordArray.length; i++){
        let temp = "#";
        let loops = Math.min(wordArray[i].length, 3)
        for(let j = 0; j < loops; j ++){
            temp += wordArray[i].charCodeAt(j).toString(16);
        }
        result.push(temp.padEnd(7,"0"));
    }
    return result;
}


console.log(wordsToHex2(sample));
console.log(wordsToHex(sample));
