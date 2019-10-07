
// initialize Object 'body' with the <body> section of the HTML doc.
let container = document.querySelector('.container');

for (let i = 0; i < 500; i++)
    {
        let div = document.createElement('div');
        container.appendChild(div);
        console.log(container);    
    }


setInterval(function() {

    let divs = document.querySelector('.container').querySelectorAll('div');

    for(let i = 0; i < divs.length; i++) {
        divs[i].classList.add('box');
        divs[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
        divs[i].style.width = `${Math.random()*300}px`;
        divs[i].style.height = `${Math.random()*500}px`;
        divs[i].style.border = `solid ${Math.random()*10}px rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    }
}, 100);
    console.log(container);

    