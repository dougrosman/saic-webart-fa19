

// populate gallery
let galleryItems = document.querySelectorAll(".gallery-item");
for(let i = 0; i < galleryItems.length; i++) {
    if(i < 9) {
        galleryItems[i].style.backgroundImage = `url("images/0${i+1}.png")`;
    } else {
        galleryItems[i].style.backgroundImage = `url("images/${i+1}.png")`;
    }
}

let container = document.getElementById("container");

container.addEventListener('click', function() {
   console.log("ok");

    let currWork = document.getElementById("curr-work");
    
    if(currWork.style.display === 'none') {
        currWork.style.display = 'block';
    } else {
        currWork.style.display = 'none';
    }

});

mouseOver = function mouseOver() {
    console.log('Mouse over');
    this.style.cursor = 'pointer';
}

for(let i = 0; i < galleryItems.length; i++) {

    let currItem = galleryItems[i];

    currItem.addEventListener('mouseover', mouseOver);


}



