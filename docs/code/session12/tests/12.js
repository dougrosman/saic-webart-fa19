// challenge 1

let names = "doug doog dog dough doe"
let namesArray = names.split(' ');
console.log(namesArray);


// challenge 2

let characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

let charsArray = characters.split('');
console.log(charsArray.length);

// let randomString='';

// for(let i = 0; i < 5; i++)
// {
//     let randomCharIndex = Math.floor(Math.random()*charsArray.length);
//     // console.log(randomCharIndex);
//     let randomChar= charsArray[randomCharIndex];
//     randomString+=randomChar;
// }

// let randomURL = `https://i.imgur.com/${randomString}.jpg`

// console.log(randomURL);

let playground = document.querySelector('#playground');



for(let i = 0; i < namesArray.length; i++) {
    let newDiv = document.createElement('div');
    playground.appendChild(newDiv);
    
    let boxes = playground.querySelectorAll('div');

    boxes[i].classList.add('box')
}

let divBoxes = playground.querySelectorAll('.box');

// console.log("divBoxes: " + Stringify(divBoxes));



for(let i = 0; i < divBoxes.length; i++) {
    
    let randomString='';

    for(let i = 0; i < 5; i++)
    {
        let randomCharIndex = Math.floor(Math.random()*charsArray.length);
        // console.log(randomCharIndex);
        let randomChar= charsArray[randomCharIndex];
        randomString+=randomChar;
    }

    let randomURL = `https://i.imgur.com/${randomString}.jpg`

    let currBox = divBoxes[i]
    currBox.style.backgroundColor = 'red';
    currBox.style.fontSize = '1em';
    currBox.style.backgroundImage = `url('${randomURL}')`;
}

