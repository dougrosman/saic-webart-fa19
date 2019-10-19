
let pages = document.getElementsByClassName("page");

let navLinks = document.getElementsByClassName("nav-a");
let closers = document.getElementsByClassName("close");
let order = 0;

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
        console.log(pages[i]);

        if(pages[i].style.display == "block") {
            pages[i].scrollIntoView(true);
            return;
        } else {
            
            let orderDisplay = pages[i].querySelector('p');
            pages[i].style.animationName = "fade-in";
            pages[i].style.order = `${order}`;
            order++;
            pages[i].style.display = "block";
            orderDisplay.innerHTML = `<span style="font-size: 4em;">${pages[i].style.order}</span>`;
            pages[i].scrollIntoView(); 
            
        }
    });
    
    closers[i].addEventListener("click", function(e) {
        console.log("removed:");
        pages[i].style.animationName = "fade-out";
            setTimeout(function() {
                pages[i].style.display = "none";
            }, 1000);
            order--;

            for(let i = 0; i < navLinks.length; i++) {
                console.log(pages[i]);
                if(pages[i].style.display=='block' && pages[i].style.order >= order-1) {
                    pages[i].style.order = `${pages[i].style.order-1}`;
                    let orderDisplay = pages[i].querySelector('p');
                    orderDisplay.innerHTML = `<span style="font-size: 4em;">${pages[i].style.order}</span>`; 
                }
            }
    });
}

function pageScroll() {
    window.scrollBy(3,0);
    scrolldelay = setTimeout(pageScroll,1);
    console.log("ok");
}