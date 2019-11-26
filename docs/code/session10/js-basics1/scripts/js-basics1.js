let variable = 3;
const c = 2;

let blah = "\n";
console.log(variable);
console.log('"this is a ' + blah + ' regular log"');
console.warn('this is a warning');
console.error('this is an error!');

// Number, string, boolean, undefined, null
let z = null;

console.log(typeof z);

let message = "hey, what's up?"
console.log(message);

message = message.substring(0, 7);
console.log(message);
message.toUpperCase(); // does nothing
console.log(message);

message = message.toUpperCase();
console.log(message);

const name = "doug";
const age = 893;

let identification = "hey my name is " + name + " and I'm " + age + " years old";
console.log(identification);
// template strings!
let identificationNew = `hey my name is ${name} and I'm ${age} years old`;
console.log(identificationNew);

// arrays

let words = new Array("scoop", "green", "blue");

let words2 = ['scoop', 'green', 'blue'];


function addNumbers(num1, num2) {

    return num1+num2;
}

console.log(addNumbers(1, 2));

let dog = {
    fur: "orange",
    name: "doggie",
}

console.log(dog.fur);

console.log(Math.random()*-1);

document.getElementById('box');
document.getElementsByClassName('box-class');

const box = document.getElementById('box');

box.background = 'green';



