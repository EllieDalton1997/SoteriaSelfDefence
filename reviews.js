const revs = document.querySelectorAll(".rev-bubbles img");
let revIndex = 0;
let revvalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(revs.length > 0){
        revs[revIndex].classList.add("addSlide");
        revvalId = setInterval(afterSlide, 5000);
    }
}

function seeSlide(index){
    if(index >= revs.length){
        revIndex = 0;
    }
    else if(index < 0){
        revIndex = revs.length - 1;
    }

    revs.forEach(slide => {
        slide.classList.remove("addSlide");
    });
    revs[revIndex].classList.add("addSlide");
}

function beforeSlide(){
    clearInterval(revvalId);
    revIndex--;
    seeSlide(revIndex);
}

function afterSlide(){
    revIndex++;
    seeSlide(revIndex);
}
