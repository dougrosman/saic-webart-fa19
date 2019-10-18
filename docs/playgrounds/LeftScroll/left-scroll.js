
let pages = document.getElementsByClassName("page");

let navLinks = document.getElementsByClassName("nav-a");


for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(e){
        e.preventDefault();
        console.log(pages[i]);

        if(pages[i].style.display == "block") {
            // pages[i].style.animationName = "fade-out";
            // setTimeout(function() {
            //     pages[i].style.display = "none";
            // }, 1000);
            return;
            
            
        } else {
            
            pages[i].style.animationName = "fade-in";
            pages[i].style.display = "block";
            pages[i].scrollIntoView();
            
        }
    });
}

function pageScroll() {
    window.scrollBy(3,0);
    scrolldelay = setTimeout(pageScroll,1);
    console.log("ok");
}