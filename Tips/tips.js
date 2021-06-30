//ONE
//Remove falsy values from any array
//falsy value -> false, null, undefined, 0, Not a number, ""

let miscellaneous = ['Apple', false, 'Orange', NaN, 0, undefined, 'Chilli', null, '', 'Mango'];

//passing Boolean to Array.filter() will remove falsy values from array.
let fruits = miscellaneous.filter(Boolean);
console.log(fruits);            // [ 'Apple', 'Orange', 'Chilli', 'Mango' ]

//Boolean(expression) in JS returns true/false
console.log(Boolean( 5 < 6 ));    //true
console.log(Boolean( 100 > 200 ));   //false
console.log(Boolean( 'JavaScript' ));  //true
console.log(Boolean( '' ));          //false

//------------------------------------------------------------------------------------------------------------

//TWO
//Convert any value to boolean
//using !! in front of any value

console.log("mashrafi");  //mashrafi
console.log(!!"mashrafi");  //true   --> Done
console.log(!!1);       //true
console.log(!!0);       //false
console.log(!!undefined);   //false

//We can also achieve the same using Boolean()
console.log(Boolean("Mashrafi"));      //true

//------------------------------------------------------------------------------------------------------------

//THREE
//Resize any array

let animals = ['Horse', 'Dog', 'Monkey', 'Tiger'];

//We can use array's length property
animals.length = 3;
console.log(animals);         // [ 'Horse', 'Dog', 'Monkey' ]

//------------------------------------------------------------------------------------------------------------

//FOUR
//How to flatten a multi-dimensional array
let smileys = ['Love', ['Laugh', 'Laugh'], 'Wink', ['Sad', 'Annoyed']];
console.log(smileys.flat());       // [ 'Love', 'Laugh', 'Laugh', 'Wink', 'Sad', 'Annoyed' ]

//But this flat() method can flat only one level array.

//Multi-level array
let smileys2 = ['Love', ['Laugh', 'Laugh', ['Sad', 'Annoyed']], 'Wink'];
console.log(smileys2.flat(Infinity));         // [ 'Love', 'Laugh', 'Laugh', 'Sad', 'Annoyed', 'Wink' ]

//------------------------------------------------------------------------------------------------------------

//FIVE
//Short conditionals
const captain = "Mashrafi";

//Instead of doing this
if(captain === "Mashrafi") {
    console.log("Love");               //Love
}

//We can do this
captain === "Mashrafi" && console.log("Love");         //Love

if(captain !== "Shakib") {
    console.log("Angry");               //Angry
}

captain === "Shakib" || console.log("Angry");         //Angry

//------------------------------------------------------------------------------------------------------------

//SIX
//Replace all occurances of a string
const quote = "React is a JS framework and this framework is the most popular front-end framework right now.";

//We want to replace all occurances of 'framework' with 'library'
console.log(quote.replace(/framework/g, "library")); //React is a JS library and this library is the most popular front-end library right now.
//g means global. Because we want to change all occurances of 'framework'. without this g, only the first occurance would change.

//------------------------------------------------------------------------------------------------------------

//SEVEN
//Log values with variable names smartly

const library1 = 'jQuery';
const library2 = 'React';

//Instead of doing this
console.log(`library1 - ${library1}`);       //library1 - jQuery
console.log(`library2 - ${library2}`);       //library2 - React
//We can do this
console.log( {library1} );           //{ library1: 'jQuery' }
console.log( {library2} );           //{ library2: 'React' }

//------------------------------------------------------------------------------------------------------------

//EIGHT
//Knowing performance of a task

const startTime = performance.now();

for(let i=0; i<=50; i++) {
    console.log(i);
}

const endTime = performance.now();

console.log(`Loop took ${endTime - startTime} milliseconds to finish!`);  //Loop took 4.7000000001862645 milliseconds to finish!



