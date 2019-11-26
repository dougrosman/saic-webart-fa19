
// console stuff
console.log("hellow world");
console.warn("be careful!");
// console.error("this is not good");

// data types! (primitive data types!) Number, String, Boolean, Objects, undefined, null


// variables
// NUMBERS
let num; // declaring a variable
num = 10; //initializing a variable

let num2 = 8;

 //% MODULUS

let modNumbers = num % num2;

console.log(modNumbers);

// STRINGS
console.log('this "is" a string literal');
let myString = "this is a string in a variable";
console.log(myString);

// concatenation: combine strings together

let name = 'doog';
let nails = 'orange';

console.log("My name is " + name + "and my nails are " + nails);

console.log(`My name is ${name} and my nails are ${nails}`)

let num7 = 2;
let combinedString = name + num7;

// booleans
let cat = 2 == 2;

// null

// nothingness

// undefined;

let dog;

console.log(typeof dog)

// objects

let tree = {
    family: "oak",
    color: "green",
    branches: 7
}

console.log(tree.color);


// loops

// for loops

for (let i = 0; i < 10; i++) {
    console.log(`I had ${i} oranges today`);
}

// while loop

let j = 0;

let score = 0;


while(score < 10) {
    console.log(score);
    score++;
}

// conditional statements (if statements)

let coolNum = 20;

if(coolNum < 20)
{
    console.log("this number isn't that cool yet")
}
else if(coolNum > 20) {
    console.log("this number is too cool")
}

else {
    console.log("this number is cool");
}

const myText = document.getElementById("hey");
let i = 0;

// while(i < 20) {
let x = setInterval (function() {


    myText.innerHTML = i;
    i++;    

}, 1)
// }








// const myText = document.getElementById("hey");


// var x = setInterval (function () {


// myText.innerHTML = Math.random()* 10;

// }, .1);



