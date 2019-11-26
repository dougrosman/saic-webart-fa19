
// initialize Object 'body' with the <body> section of the HTML doc.
let container = document.querySelector('.container');

for (let i = 0; i < 5; i++)
    {
        let div = document.createElement('div');
        container.appendChild(div);
        console.log(container);    
    }

const btn = document.querySelector('.btn');


btn.addEventListener('click', function(e) {
    e.preventDefault();

    let divs = document.querySelector('.container').querySelectorAll('div');

    for(let i = 0; i < divs.length; i++) {
        divs[i].classList.add('box');
        divs[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
        divs[i].style.width = `${Math.random()*100}px`;
        divs[i].style.height = `${Math.random()*300}px`;
    }
    console.log(container);

    // WITH A FOR...IN LOOP

    // for(let elem in divs) {
    //     divs[elem].classList.add('box');
    //     divs[elem].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    //     divs[elem].style.width = `${Math.random()*100}px`;
    //     divs[elem].style.height = `${Math.random()*300}px`;
    // }
    // console.log(container);
    
});


// document.querySelector('body').classList.add('box');


// let body = document.querySelector("body");
// for (let i = 0; i < 10; i++)
// {
//     let div = document.createElement('div');
//     body.appendChild(div);
//     console.log(body);    
// }
// // document.querySelectorAll('div').classList.add('box');
// let divs = document.querySelectorAll('div');

// for(let i = 0; i < divs.length; i++)
// {
//     divs[i].classList.add('box');
//     divs[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
//     divs[i].style.width = `${Math.random()*100}px`;
//     divs[i].style.height = `${Math.random()*300}px`;
// }
// console.log(body);

   





