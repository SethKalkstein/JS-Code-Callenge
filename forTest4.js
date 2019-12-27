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

console.log(stockList(art, cat)); */


// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit, x). For example, below is part of a record with s = 15:

// One reduce will do it. done in PHP with traditional methods

const gps = (s, x) => x.reduce((a, c, i, o) => Math.max(Math.floor((3600*(c-o[i ? i - 1 : 0]))/s), a), 0);

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
s = 15;

console.log(gps(s,x));
