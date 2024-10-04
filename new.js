const stats = document.querySelectorAll(".stat-bubbles img");
let statIndex = 0;
let statvalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(stats.length > 0){
        stats[statIndex].classList.add("addSlide");
        statvalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= stats.length){
        statIndex = 0;
    }
    else if(index < 0){
        statIndex = stats.length - 1;
    }

    stats.forEach(slide => {
        slide.classList.remove("addSlide");
    });
    stats[statIndex].classList.add("addSlide");
}

function backSlide(){
    clearInterval(statvalId);
    statIndex--;
    showSlide(statIndex);
}

function forwardSlide(){
    statIndex++;
    showSlide(statIndex);
}
