import { action, computed, observable } from 'mobx'
import { toSentenceSerial } from 'underscore.string'
import { assistancePrograms as assistanceProgramNames } from '../config'

export default class ApplicationData {
  students = new StudentCollection()
  assistancePrograms = new AssistancePrograms()

  @observable attestation = {
    firstName: '',
    lastName: ''
  }

}

export class AssistancePrograms {
  @observable hasAny
  @observable items

  constructor(items = null) {
    if (items) {
      this.items = items
    } else {
      this.items = assistanceProgramNames.map(function(programName) {
        return { name: programName, caseNumber: '' }
      })
    }
  }

  tojson() {
    return this.items.toJSON()
  }

  map(func) {
    return this.items.map(func)
  }

  @computed get length() {
    return this.items.length
  }

  @computed get isValid() {
    switch (this.hasAny) {
      case true:
        return this.items
                   .map(item => !!item.caseNumber)
                   .reduce((a, b) => a || b, false)
      case false:
        return true
      default:
        return false
    }
  }
}

class PersonCollection {
  @observable items

  constructor(items = []) {
    this.items = items
  }

  get fields() {
    return [
      { name: 'firstName', label: 'First name', required: true },
      { name: 'middleName', label: 'Middle name' },
      { name: 'lastName', label: 'Last name', required: true },
      { name: 'suffix', label: 'Suffix' }
    ]
  }

  get newItem() {
    let item = {}
    for (let field of this.fields) {
      item[field.name] = ''
    }
    return item
  }

  toJSON() {
    return this.items.toJSON()
  }

  map(func) {
    return this.items.map(func)
  }

  @computed get length() {
    return this.items.length
  }

  @computed get isValid() {
    const requiredFieldNames =
      this.fields.filter(f => f.required).map(f => f.name)

    return this.items.map(function(item) {
      return requiredFieldNames.map(fieldName => !!item[fieldName].length)
    }).reduce((a, b) => a.concat(b), []).reduce((a, b) => a && b, true)
  }

  // returns e.g. "Jill, Joe, and Joe Jr."
  @computed get informalList() {
    const names = this.items.map(function (person) {
      return person.firstName + (person.suffix ? ` ${person.suffix}` : '')
    })

    return toSentenceSerial(names, ', ', ' and ')
  }

  @action add() {
    this.items.push(this.newItem)
  }

  @action remove(item) {
    this.items.remove(item)
  }
}

class StudentCollection extends PersonCollection {
  get fields() {
    return super.fields.concat([
      { name: 'school', label: 'School', required: true },
      { name: 'grade', label: 'Grade', required: true }
    ])
  }

  get isValid() {
    return this.items.length >= 1 && super.isValid
  }
}
