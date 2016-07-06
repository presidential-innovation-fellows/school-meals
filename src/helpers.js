import { toSentenceSerial } from 'underscore.string'
import { computed, observer } from 'mobx-react'

// given an array of people-like objects, return e.g. "Bob, Joe, and Joe Jr."
export const informalList =
  (people, delimiter = ', ', lastDelimiter = ' and ') =>
    {
      const names = people.map(person => {
        return person.firstName + (person.suffix ? ` ${person.suffix}` : '')
      })

      return toSentenceSerial(names, delimiter, lastDelimiter)
    }

export const incomeTypeIsValid = (incomeType, mustNotBeNull = []) => {
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
