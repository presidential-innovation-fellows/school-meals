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