const mouseBtn = document.querySelector('#mousePos');

// mouseBtn.addEventListener('click', function(e) {
//     console.log(e.clientX);

// });
function mouseCoords(e) {
    let coordinates = `MouseX = ${e.screenX}, MouseY = ${e.screenY}`;

    document.querySelector('#mouseCoordinates').innerHTML = coordinates;
}
document.querySelector('body').onmousemove = mouseCoords;