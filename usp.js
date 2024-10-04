const usps = document.querySelectorAll(".usp-slides img");
let USPIndex = 0;
let USPvalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(usps.length > 0){
        usps[USPIndex].classList.add("newSlide");
        USPvalId = setInterval(nextSlide, 5000);
    }
}

function viewSlide(index){
    if(index >= usps.length){
        USPIndex = 0;
    }
    else if(index < 0){
        USPIndex = usps.length - 1;
    }

    usps.forEach(slide => {
        slide.classList.remove("newSlide");
    });
    usps[USPIndex].classList.add("newSlide");
}

function rightSlide(){
    clearInterval(USPvalId);
    USPIndex--;
    viewSlide(USPIndex);
}

function leftSlide(){
    USPIndex++;
    viewSlide(USPIndex);
}
