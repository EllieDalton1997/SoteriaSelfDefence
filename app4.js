/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

const uspSlider = document.querySelector('.usp-container'),
  usps = Array.from(document.querySelectorAll('.usp'))

let swiping = false,
  initialPosition = 0, 
  totalTranslate = 0,
  earlierTranslate = 0,
  motionID = 0, 
  nowIndex = 0

usps.forEach((usp, order) => {
  const uspImage = usp.querySelector('img')
  uspImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  usp.addEventListener('touchstart', tStart(order))
  usp.addEventListener('touchend', tEnd)
  usp.addEventListener('touchmove', tMove)

  // Mouse events
  usp.addEventListener('mousedown', tStart(order))
  usp.addEventListener('mouseup', tEnd)
  usp.addEventListener('mouseleave', tEnd)
  usp.addEventListener('mousemove', tMove)
})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function tStart(order) {
  return function (event) {
    nowIndex = order
    initialPosition = gPositionX(event)
    swiping = true

    // https://css-tricks.com/using-requestanimationframe/
    motionID = requestAnimationFrame(move)
    uspSlider.classList.add('grabbing')
  }
}

function tEnd() {
  swiping = false
  cancelAnimationFrame(motionID)

  const movedBy =   totalTranslate  - earlierTranslate

  if (movedBy < -100 && nowIndex < reviews.length - 1) nowIndex += 1

  if (movedBy > 100 && nowIndex > 0) nowIndex -= 1

  setPositionByOrder()
 
  uspSlider.classList.remove('grabbing')
}

function tMove(event) {
  if (swiping) {
    const currentPosition = gPositionX(event)
    totalTranslate   = earlierTranslate + currentPosition - initialPosition
  }
}

function gPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function move() {
  setReviewPosition()
  if (swiping) requestAnimationFrame(move)
}

function setReviewPosition() {
  uspSlider.style.transform = `translateX(${totalTranslate}px)`
}

function setPositionByOrder() {
  totalTranslate = nowIndex * -window.innerWidth
  earlierTranslate = totalTranslate
  setReviewPosition()
}
