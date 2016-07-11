export default class NavigationData {
  _go(delta) {
    const currentClass = 'current'
    const re = new RegExp(currentClass, 'g')
    const slides = document.getElementsByClassName('slide')
    let newSlideIndex = 0

    for (let i = 0; i < slides.length; i++) {
      for (let className of slides[i].classList) {
        if (className === currentClass) {
          newSlideIndex = i + delta
          slides[i].className = slides[i].className.replace(re, '')
          break
        }
      }
    }

    slides[newSlideIndex].className += ' ' + currentClass
    window.scrollTo(0, 0)
  }

  init() {
    this._go(0)
  }

  backSlide() {
    this._go(-1)
  }

  nextSlide() {
    this._go(1)
  }
}
