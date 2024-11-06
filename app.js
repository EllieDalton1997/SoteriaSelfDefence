/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

const statSlider = document.querySelector('.stat-container'),
  stats = Array.from(document.querySelectorAll('.stat'))

  
let nowDragging = false,
  startPosition = 0,
  liveTranslate = 0, 
  lastTranslate = 0,
  aniID = 0,
  liveIndex = 0
 
stats.forEach((stat, number) => {
  const statImage = stat.querySelector('img')
statImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  stat.addEventListener('touchstart', Start(number))
  stat.addEventListener('touchend', End)
  stat.addEventListener('touchmove', Move)

  // Mouse events
  stat.addEventListener('mousedown',Start(number))
  stat.addEventListener('mouseup', End)
  stat.addEventListener('mouseleave', End)
  stat.addEventListener('mousemove', Move)
})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function Start(number) {
  return function (event) {
    liveIndex = number
    startPosition = findPositionX(event)
    nowDragging = true

    aniID = requestAnimationFrame(animation)
    statSlider.classList.add('grabbing') 
     }
} 

function End() {
  nowDragging = false
  cancelAnimationFrame(aniID)
  const movedBy = liveTranslate - lastTranslate 

  if (movedBy < -70 && liveIndex < stats.length - 1) liveIndex += 1

  if (movedBy > 70 && liveIndex > 0) liveIndex -= 1

  positionIndex()

  statSlider.classList.remove('grabbing')
}
 
function Move(event) {
  if (nowDragging) {
    const currentPosition = findPositionX(event)
    liveTranslate = lastTranslate + currentPosition - startPosition
  }
}

function findPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animate() {
  setPosition()
  if (nowDragging) requestAnimationFrame(animation)
}


function setPosition() {
  statSlider.style.transform = `translateX(${liveTranslate}px)`
}

function positionIndex() {
  liveTranslate = liveIndex * -window.innerWidth
  lastTranslate = liveTranslate
  setPosition()
}



