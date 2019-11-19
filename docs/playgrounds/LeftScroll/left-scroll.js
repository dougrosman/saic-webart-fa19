
let vertContainers = document.getElementsByClassName("vertical-container");
let pages = document.getElementsByClassName("pages");

let navLinks = document.getElementsByClassName("nav-a");
let topClosers = document.getElementsByClassName("top-close");
let topOrder = 0;

let wrapper = document.getElementById("wrapper");
const button = document.getElementById("scale");

button.addEventListener('click', function(){

    if(wrapper.style.animationName == "shrink"){
        wrapper.style.animationName = "grow";
        
        setTimeout(function() {
            wrapper.style.position = "static";
        }, 1000);
        
    } else {
        wrapper.style.animationName = "shrink";
        wrapper.style.position = "relative";
    }

    console.log(wrapper.style.transform);
        
});


for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(e){
        e.preventDefault();
        console.log("added:");
        console.log(vertContainers[i]);

        if(vertContainers[i].style.display == "block") {
            vertContainers[i].scrollIntoView(true);
            return;
        } else {
            
            // let topOrderDisplay = vertContainers[i].querySelector('p');
            vertContainers[i].style.animationName = "fade-in";
            vertContainers[i].style.order = `${topOrder}`;
            topOrder++;
            vertContainers[i].style.display = "block";
            topOrderDisplay.innerHTML = `<span style="font-size: 4em;">${vertContainers[i].style.topOrder}</span>`;
            vertContainers[i].scrollIntoView(); 
            
        }
    });
    
    topClosers[i].addEventListener("click", function(e) {
        console.log("removed:");
        vertContainers[i].style.animationName = "fade-out";
            setTimeout(function() {
                vertContainers[i].style.display = "none";
            }, 1000);
            topOrder--;

            for(let i = 0; i < navLinks.length; i++) {
                console.log(vertContainers[i]);
                if(vertContainers[i].style.display=='block' && vertContainers[i].style.order >= topOrder-1) {
                    vertContainers[i].style.order = `${vertContainers[i].style.order-1}`;
                    let topOrderDisplay = vertContainers[i].querySelector('p');
                    topOrderDisplay.innerHTML = `<span style="font-size: 4em;">${vertContainers[i].style.order}</span>`; 
                }
            }
    });


   
}

for(let i = 0; i < vertContainers.length; i++) {

    let 
}