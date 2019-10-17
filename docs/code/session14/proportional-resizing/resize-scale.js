
let wrapper = document.getElementById("scalable-wrapper");
const scaler = 500;

window.addEventListener("load", function() {



    let scale = Math.min(window.innerWidth / scaler, window.innerHeight / scaler);
    console.log(scale);
    console.log("ok");

    wrapper.style.transform = `scale(${500}), translate(${-scale}%, ${-scale}%)`;
});

window.addEventListener("resize", function() {

    let scale = Math.min(window.innerWidth / scaler, window.innerHeight / scaler);
    console.log(scale);
    console.log("sure");

    wrapper.style.transform = `scale(${scale}),  translate(${-scale}%, ${-scale}%)`;
});
    



