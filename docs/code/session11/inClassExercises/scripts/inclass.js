console.log("hey!");

// switch statements
// functions
// classes
// scope
// arrays
// manipulating the Document Object Model

// this function adds two numbers together!
// addNums accepts 2 arguments/parameters!


function addNums(num1, num2) {
    let i = 10;
    return num1 + num2;
}





addNums(1, 2);

let myAddedNumber = addNums(1, 2);

console.log(myAddedNumber);

function addStringsToNumber(num)
{
    return "This is my fancy number: " + num;
}

let fancyNum = 10;

console.log(fancyNum);

fancyNum = addStringsToNumber(fancyNum);

console.log(fancyNum);

/////////// SCOPE







// for(let i = 0; i < 10; i++)
// {
//     console.log("kashdfkahsdklfjhaslkef");
//     for(let i = 0; i < 10; i++)
//     {
//         console.log(i);
//     }
    
// }


// ARRAYS

let num = 2;

let animals = ['fish', 'cat', 'dog', 'horse'];

// console.log(animals);


for(let i = 0; i < animals.length; i++)
{
    console.log(animals[i]);
}



//// MANIPULATING THE DOM

let container = document.querySelector('.container')

for(let i = 0; i < 1000; i++)
{
    let div = document.createElement('div');
    container.appendChild(div);
    
}

console.log(container);

let myDivs = container.querySelectorAll('div');

console.log(myDivs.length);

setInterval(function() {
    for(let i = 0; i < myDivs.length; i++)
    {
        myDivs[i].classList.add('box');
        myDivs[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        myDivs[i].style.width = `${Math.random()*200}px`;
    }
}, 10);

console.log(Math.random()*1000);




// let innerDiv = document.querySelector('.container').querySelector('div');

// console.log("2:");
// console.log(container);
// innerDiv.classList.add("box");




