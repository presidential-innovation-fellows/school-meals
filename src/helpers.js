import { toSentenceSerial } from 'underscore.string'
import { computed, observer } from 'mobx-react'

// retuns zero padded YYYY-MM-DD given a date object
export function formatDate(date) {
  let dd = date.getDate().toString()
  let mm = (date.getMonth() + 1).toString()
  let yyyy = date.getFullYear().toString()

  if (dd.length === 1) {
    dd = '0' + dd
  }

  if (mm.length === 1) {
    mm = '0' + mm
  }

  return `${yyyy}-${mm}-${dd}`
}

export function informalName(person) {
  return person.firstName + (person.suffix ? ` ${person.suffix}` : '')
}

// given an array of people-like objects, return e.g. "Bob, Joe, and Joe Jr."
export function informalList(people,
                             delimiter = ', ',
                             lastDelimiter = ' and ') {

  const names = people.map(person => informalName(person))
  return toSentenceSerial(names, delimiter, lastDelimiter)
}

export function incomeTypeIsValid(incomeType, mustNotBeNull = []) {
  switch(incomeType.isApplicable) {
    case true:
      if (mustNotBeNull.map(name => incomeType[name] == null)
                       .reduce((a, b) => a || b, false)) {
        return false
      }
      let incomeSources = []
      for (let name in incomeType.sources) {
        incomeSources.push(incomeType.sources[name])
      }
      return incomeSources
        .map(incomeSource => { return(
          incomeSource.has === false ||
          !!(incomeSource.has && incomeSource.amount && incomeSource.frequency)
        )})
        .reduce((a, b) => a && b, true)
      break
    case false:
      return true
      break
    default:
      return false
  }
}

function _moveSlide(offset) {
  const currentClass = 'current'
  const re = new RegExp(currentClass, 'g')
  const slides = document.getElementsByClassName('slide')
  let newSlideIndex = 0

  for (let i = 0; i < slides.length; i++) {
    for (let className of slides[i].classList) {
      if (className === currentClass) {
        newSlideIndex = i + offset
        slides[i].className = slides[i].className.replace(re, '')
        break
      }
    }
  }

  slides[newSlideIndex].className += ' ' + currentClass
  window.scrollTo(0, 0)
}

export function initSlide() {
  _moveSlide(0)
}

export function backSlide() {
  _moveSlide(-1)
}

export function nextSlide() {
  _moveSlide(1)
}
