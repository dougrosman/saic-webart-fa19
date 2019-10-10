let names = "doug,doog,dog,dig,dorg,durgh,dough";
let characters = "helduehhkey34kfghue";

console.log(names);
console.log(characters);

// split() accepts a delimiter
let namesArray = names.split(',');
console.log(namesArray);


//console.log(characterList.toUpperCase());

function generateURL() {
    let characterList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let charArray = characterList.split('');
    let randomString = '';
    for(let i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * charArray.length);
        
        let randomChar = charArray[randomNum];
        
        randomString+=randomChar;
    }
    let randomURL = `https://i.imgur.com/${randomString}.jpg`;
    return randomURL;
}


let container = document.querySelector('#container');
let boxes;

for(let i = 0; i < 20; i++) {

    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
    boxes = container.querySelectorAll('div');
    boxes[i].classList.add('box');
}

for(let i = 0; i < boxes.length; i++)
{
    let currBox = boxes[i];
    currBox.style.backgroundColor = 'red';
    currBox.innerHTML = generateURL();
    // if you want a random imgur gallery, uncomment the line below
    currBox.style.backgroundImage = `url('${generateURL()}')`;
}