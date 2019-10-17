// load our divs with box classes into an array called boxes
let boxes = document.getElementsByClassName("box");

// when your page loads...set the width/height of boxes accordingly
window.addEventListener("load", resizeBoxes);

// when the page resizes...set the width/height of the boxes
// so that they maintain their original shape
window.addEventListener("resize", resizeBoxes);


// this function resizes proportionally according 
function resizeBoxes() {

    // set scaleRatio to some value. The larger this is,
    // the smaller this box will be
    const scaleRatio = 100;

    // calculate a scale value that will change the box sizes based on either
    // the height or the width of the window--whichever is larger!
    let scale = Math.max(window.innerWidth / scaleRatio, window.innerHeight / scaleRatio);

    // print out the calculated scale value to the console
    console.log(`scale: ${scale}`);

    // loop through each box
    for(let i = 0; i < boxes.length; i++) {
        let currBox = boxes[i];

        // set the width and height of the box to be the same value. This
        // makes them squares no matter what the size of the window is.
        currBox.style.width = `${scale}em`;
        currBox.style.height = `${scale}em`;
        currBox.style.fontSize = `${scale*1.5}px`;
        currBox.innerHTML = `current size: ${scale}em, font size: ${Math.floor(scale*1.5)}px`;
        
        /* Note:
        *
        You can multiply that scale value by whatever you want to
        to change the aspect ratio to whatever you want:
        
        currBox.style.width = `${scale}em`;
        currBox.style.height = `${scale*2}em`;
        *
        */
    }
}



