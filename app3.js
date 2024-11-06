/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

const reviewContainer = document.querySelector('.review-container'),
  reviews = Array.from(document.querySelectorAll('.review'))

let Dragging = false,
  origin = 0,
  displacemet = 0,
  oldTranslate = 0,
  aID = 0,
  cIndex = 0

reviews.forEach((review, spot) => {
  const slideImage = review.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  review.addEventListener('touchstart', begin(spot))
  review.addEventListener('touchend', finish)
  review.addEventListener('touchmove', movement)

  // Mouse events
  review.addEventListener('mousedown', begin(spot))
  review.addEventListener('mouseup', finish)
  review.addEventListener('mouseleave', finish)
  review.addEventListener('mousemove', movement)
})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function begin(spot) {
  return function (event) {
    cIndex = spot
    origin = findPositionX(event)
    Dragging = true

    // https://css-tricks.com/using-requestanimationframe/
    aID = requestAnimationFrame(ani)
    reviewContainer.classList.add('grabbing')
  }
}

function finish() {
  Dragging = false
  cancelAnimationFrame(aID)

  const movedBy = displacemet - oldTranslate

  if (movedBy < -100 && currentIndex < reviews.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPosByIndex()

  reviewContainer.classList.remove('grabbing')
}

function movement(event) {
  if (Dragging) {
    const currentPosition = findPositionX(event)
    displacemet = oldTranslate + currentPosition - origin
  }
}

function findPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function ani() {
  setSliderPosition()
  if (Dragging) requestAnimationFrame(ani)
}

function setSliderPos() {
  reviewContainer.style.transform = `translateX(${displacemet}px)`
}

function setPosByIndex() {
    displacemet = currentIndex * -window.innerWidth
    oldTranslate = displacemet
  setSliderPos()
}
