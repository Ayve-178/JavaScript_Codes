//1
//Swaping values

let array = [1, 2, 3, 4, 5];

//temp variable
temp = array[0]
array[0] = array[4]
array[4] = temp

console.log(array)             //[ 5, 2, 3, 4, 1 ]

//array destructuring
array = [1, 2, 3, 4, 5];

[array[0], array[4]] = [array[4], array[0]]
console.log(array)             //[ 5, 2, 3, 4, 1 ]

let a = 1;
let b = 2;
//[a, b] = [b, a];
//console.log(a, b);          //2 1 

//math
b = a + (a = b) - b
console.log(a, b);          //2 1 

//-----------------------------------------------------------------------------------------------------------------------

//2
//copy to clipboard
function copyToClipBoard(str) {
    const element = document.createElement("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");   //execCommand() operates on the selected elements.
    document.body.removeChild(element);
}

function handleClick() {
    let text = document.querySelector("#text");
    copyToClipBoard(text.innerText);
}

//The text is copied now. We can paste it anywhere we want.

//-----------------------------------------------------------------------------------------------------------------------

//3
//destructuring aliases
//alias -> nickname

const language = {
    name: 'JavaScript',
    founded: 1995,
    founder: 'Brendan Eich',
}

//const {name, founder} = language;
//console.log(name, founder);          //JavaScript Brendan Eich

const {name: languageName, founder: creatorName} = language;    // : languageName -> alias
console.log(languageName, creatorName);             //JavaScript Brendan Eich


//-----------------------------------------------------------------------------------------------------------------------

//4
//get value as data type
//const element = document.querySelector("#number");
//Here we will get the number as a string
const element = document.querySelector("#number").valueAsNumber;
console.log(element);        //123
console.log(typeof element);           //number
//Similary we can get valueAsDate 

//-----------------------------------------------------------------------------------------------------------------------

//5
//remove duplicate from array
const arr = [1, 2, 2, 2, 3, 5, 6, 5];
console.log([...new Set(arr)]);            //[1, 2, 3, 5, 6]

//-----------------------------------------------------------------------------------------------------------------------

//6
//compare two arrays by value
const hasSameElements = (a, b) => {
    return a.length === b.length && a.every((v,i) =>
        v===b[i]);
};

console.log(hasSameElements([1,2], [2, 3]));  //false
console.log(hasSameElements([1,2, 3], [2, 3]));  //false
console.log(hasSameElements([1,2, 3], [2, 3, 1]));  //false
console.log(hasSameElements([1,2, 3], [1, 2, 3]));  //true

//-----------------------------------------------------------------------------------------------------------------------

//7
//shuffling array
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.sort(() => Math.random()-.5)); //[1, 5, 3, 2, 4, 6] -> output will be changed for every load

//-----------------------------------------------------------------------------------------------------------------------

//8
//comma operator
//The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.

let x = 1;
x = (x++, x);
console.log(x);                 //2 

let y = (2, 3);
console.log(y);               //3

let z = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];

for(let i=0, j=3; i<=3; i++, j--) {
    console.log("z[" + i +"][" + j + "] = " + z[i][j]);
}

//Details in MDN Documentation -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator


