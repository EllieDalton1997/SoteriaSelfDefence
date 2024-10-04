const books = document.querySelectorAll(".book-slides img");
let bookIndex = 0;
let bookvalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(books.length > 0){
        books[bookIndex].classList.add("moveSlide");
        bookvalId = setInterval(nextSlide, 5000);
    }
}

function viewbook(index){
    if(index >= books.length){
        bookIndex = 0;
    }
    else if(index < 0){
        bookIndex = books.length - 1;
    }

    books.forEach(slide => {
        slide.classList.remove("moveSlide");
    });
    books[bookIndex].classList.add("moveSlide");
}

function gainSlide(){
    clearInterval(bookvalId);
    bookIndex--;
    viewbook(bookIndex);
}

function loseSlide(){
    bookIndex++;
    viewbook(bookIndex);
}
