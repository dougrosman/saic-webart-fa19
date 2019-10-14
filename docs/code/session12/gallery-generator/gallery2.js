function generateURL(len) {
    let characterList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let charArray = characterList.split('');
    let randomString = '';
    for(let i = 0; i < len; i++) {
        let randomNum = Math.floor(Math.random() * charArray.length);
        
        let randomChar = charArray[randomNum];
        
        randomString+=randomChar;
    }
    let randomURL = `https://i.imgur.com/${randomString}.jpg`;
    return randomURL;
}

  
const maxWidth = 200;

let container = document.querySelector('#container');
let boxes;

function loadImage(url) {

    var img = new Image();
    img.onload = function() {
        let dims = [this.width, this.height];
        
        if(dims[0] === 161 && dims[1] === 81){
            console.log("trying again...");
            loadImage(generateURL(5));
         } else { 
            let newDiv = document.createElement('div');
            container.appendChild(newDiv);
            boxes = container.querySelectorAll('div');
            let currBox = boxes[boxes.length-1];
            currBox.classList.add('box');
            currBox.style.backgroundColor = 'white';

            // if(this.width > maxWidth) {
            //     currBox.style.width = maxWidth+"px";
            //     currBox.style.height = ((maxWidth)/this.width) * this.height+"px";
            //     currBox.style.backgroundImage = `url('${img.src}'`;
            //     console.log("resized: " + img.src);
            // } else { 
            // currBox.style.width = this.width+"px";
            // currBox.style.height = this.height+"px";
             currBox.style.backgroundImage = `url('${img.src}'`;
            // console.log("original: " + img.src);
            // }
        }
        
    }
        img.src = url;
    
}

for(let i = 0; i < 25; i++) {
    loadImage(generateURL(5));
}