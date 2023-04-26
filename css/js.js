const navToggerler = document.querySelector(".nav-toggler");
navToggerler.addEventListener("click", navToggle);

function navToggle(){
    navToggerler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
            nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
}