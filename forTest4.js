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


/*  
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

*/
/* 
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in "I\n I\n  I", or printed:


function drawStairs(n) {
    result = "";
    for(let i = 0; i < n; i++ ){
        result += (i ? "\n" : "") + " ".repeat(i) +"I";
    }
    return result;
  }

  function drawStairsO(n) {
    result = "";
    let spaces = ""; 
    for(let i = 0; i < n; i++ ){
        result += spaces + "I\n";
        spaces += " ";
    }
    return result;
  }

const drawStairs2 = n => Array.from({length: n}).reduce((a,c,i) => a += (i ? "\n" : "") + " ".repeat(i) +"I" ,"");

const drawStairs3 = n => [...Array(n)].map((_, i) => "I".padStart(i + 1," ")).join("\n");

const drawStairs4 = n => Array(n).fill("I").map((v, i) => " ".repeat(i) + v).join("\n");

const drawStairs5 = n => Array(n).fill("I\n").reduce((a, c, i) => a += c.padStart(i + 2," "));

  console.log(drawStairsO(3));
  console.log(drawStairs5(5));

   */

//    lines 164 to 320 for following challenge
//   In this kata, you will be given a string of text and valid parentheses, such as "h(el)lo". You must return the string, with only the text inside parentheses reversed, so "h(el)lo" becomes "h(le)lo". However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, so it faces the original direction (parentheses included). Text like "h((el))l)o" becomes "'h(l(el))o'". This pattern should repeat for however many layers of parentheses.

// reverseInParens("h(el)lo") == "h(le)lo";
// reverseInParens("a ((d e) c b)") == "a (b c (d e))";
// reverseInParens("one (two (three) four)") == "one (ruof (three) owt)";
// reverseInParens("one (ruof ((rht)ee) owt)") == "one (two ((thr)ee) four)";


//switch the parenthesis back, so they don't get flipped around
const parensChecker = theChar => theChar === ")" ? "(" : theChar === "(" ? ")" : theChar;
//find the correct right paren
function findRightMatch(subArray){
    let leftCount = 0;
    let rightCount = 0;
     //iterate through array until the right mate is found
    for(let i = 0; i < subArray.length; i++){
        //check for each type of paren
        if(subArray[i] === "("){
            leftCount ++;
        }
        if(subArray[i] === ")"){
            rightCount ++;
        }
         //if the count is the same then a pair has been found
        if(leftCount !== 0 && leftCount === rightCount){
            //return right position
            return i;
        }
    }
        //if zero count on both then no parens left, if no right mate is found then there is an error
    return -1;
}
//main function
function reverseInParens (text){
    let textArray = text.split("");
    let openParen = textArray.indexOf("(");
    let closeParen = findRightMatch(textArray);
    //exit case
    if(openParen === -1 || closeParen === -1){
        return textArray.join("");
    }
    //left is chars that don't need to be processed    
    let leftSlice = text.slice(0, openParen)
    //center will proccessed and with result returned to this function for further processing
    let centerSlice = textArray.slice(openParen + 1, closeParen);
    //slice everything after the right paren and return it to this function for proccessing
    let rightSlice = text.slice(closeParen+1);
    let halfWay = (centerSlice.length -1) / 2;
    // let halfWay = (closeParen + openParen) / 2;

    for(let i = 0, j = centerSlice.length - 1; i < halfWay ; i++, j--){
        let temp = centerSlice[i];
        centerSlice[i] = parensChecker(centerSlice[j]);
        centerSlice[j] = parensChecker(temp);
    }
    //account for special case if middle letter is a paren, as middle character isn't switched on odd count loops
    if(halfWay % 1 === 0){
        centerSlice[halfWay] = parensChecker(centerSlice[halfWay]);
    }
    //concatenate peices of the whole string in the return statement
    return (leftSlice + "(" + reverseInParens(centerSlice.join("")) + ")" + reverseInParens(rightSlice));    
}

// tester("h(el)lo", "h(le)lo");
// console.log(reverseInParens("h(el)lo"));

tester("a ((d e) c b)", "a (b c (d e))");
// console.log(reverseInParens("a ((d e) c b)"));

// tester("many (snerap) on (pot)", "many (parens) on (top)")

// tester("one (two (three) four)", "one (ruof (three) owt)");
// // console.log(reverseInParens("one (two (three) four)"));

tester("one (ruof ((rht)ee) owt)", "one (two ((thr)ee) four)");
// // console.log(reverseInParens("one (ruof ((rht)ee) owt)"));

// Expected: 'vnmlh(sct(itzlx)qgo)(yke(o)y)', instead got: 'vnmlh(sct(itzlx)qgo)(yke)o)y)'
tester("vnmlh(ogq(itzlx)tcs)(y(o)eky)", "vnmlh(sct(itzlx)qgo)(yke(o)y)");
// console.log(reverseInParens("vnmlh(ogq(itzlx)tcs)(y(o)eky)"));

/* function tester(fun, orig, ans) {
    console.log("TEST:");
    console.log(fun(orig) == ans);
    console.log("O: " + orig);
    console.log("A: "+ ans);
    console.log("F: "+fun(orig));
} */
function tester(orig, ans) {
    console.log("TEST:");
    console.log(reverseInParens(orig) == ans);
    console.log("O: " + orig);
    console.log("A: "+ ans);
    console.log("F: "+reverseInParens(orig));
}


//Earlier buggy attempts to learn from!
/* not used function findRightMatch(subArray, start, finish){
    let leftCount = 0;
    let rightCount = 0;
    //iterate through array until the right mate is found
    for(let i = start; i <= finish; i++){
        //check for each type of paren
        if(subArray[i] === "("){
            leftCount ++;
            console.log("left hit #"+leftCount + " at "+i);
        }
        if(subArray[i] === ")"){
            rightCount ++;
            console.log("right hit #"+rightCount + " at "+i);
        }
        //if the count is the same then a pair has been found
        if(leftCount !== 0 && leftCount === rightCount){
            console.log("match found at "+i);
            //return right position
            return i;
        }
    }
    //if zero count on both then no parens left, if no right mate is found then there is an error
    return -1;
} */

//Earlier buggy attempts to learn from!
/* not used function reverseInParens (text, stringStart = 0, stringFinish = text.length - 1){
    let textArray = text.split("");
    let openParen = textArray.indexOf("(", stringStart);

    // let closeParen = textArray.lastIndexOf(")", stringFinish);
    let closeParen = findRightMatch(textArray, stringStart, stringFinish);
    
    let halfWay = (closeParen + openParen) / 2;

    let leftSliceHalf = textArray.slice(0,closeParen +1);

    //splice everything after the right paren and send it back through the function
    let rightSliceHalf = text.slice(closeParen+1);

    if(openParen === -1 || closeParen === -1){
        return textArray.join("");
    }    
    else {
        for(let i = openParen + 1, j = closeParen - 1; i < halfWay ; i++, j--){
            let temp = leftSliceHalf[i];
            leftSliceHalf[i] = parensChecker(leftSliceHalf[j]);
            leftSliceHalf[j] = parensChecker(temp);
        }
        //account for special case if middle letter is a paren, as middle character isn't switched on odd count loops
        if(halfWay % 2 === 1){
            leftSliceHalf[halfWay] = parensChecker(leftSliceHalf[halfWay]);
        }
        //concatenate the two halves in the return statement
        return (reverseInParens(leftSliceHalf.join(""), openParen+1, closeParen - 1) + reverseInParens(rightSliceHalf));
        // return reverseInParens(textArray.join(""), openParen+1, closeParen - 1 )    
    }
} */
