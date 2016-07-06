import shortid from 'shortid'
import { action, computed, observable } from 'mobx'
import { assistancePrograms as assistanceProgramNames } from '../config'
import { informalList } from '../helpers'

export default class ApplicationData {
  students = new StudentCollection()
  assistancePrograms = new AssistancePrograms()
  otherStudents = new OptionalChildCollection()
  youngChildren = new OptionalChildCollection()
  otherChildren = new OptionalChildCollection()
  adults = new AdultCollection()

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
        return {
          id: shortid.generate(),
          name: programName, caseNumber: ''
        }
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

  // kind of ugly -- observable properties to track that aren't part of
  // the visible properties that #fields returns for person creation
  get propertiesOtherThanFields() {
    return {
      id: shortid.generate()
    }
  }

  get newItem() {
    let item = this.propertiesOtherThanFields

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

  @computed get first() {
    return this.items[0]
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
    return informalList(this.items)
  }

  @action add() {
    this.items.push(this.newItem)
  }

  @action remove(item) {
    this.items.remove(item)
  }
}

class AdultCollection extends PersonCollection {
  get propertiesOtherThanFields() {
    return Object.assign({}, super.propertiesOtherThanFields, {
      military: {
        isMilitary: null,
        isDeployed: null,
        income: {
          'basic':     { has: null, amount: '', frequency: '' },
          'cashBonus': { has: null, amount: '', frequency: '' },
          'allowance': { has: null, amount: '', frequency: '' }
        }
      },
      income: {
        'pensionAnnuityTrust': { has: null, amount: '', frequency: '' },
        'other':               { has: null, amount: '', frequency: '' }
      }
    })
  }

  get isValid() {
    return this.items.length >= 1 && super.isValid
  }
}

class ChildCollection extends PersonCollection {
  get propertiesOtherThanFields() {
    return Object.assign({}, super.propertiesOtherThanFields, {
      hasIncome: null,
      income: {
        'job':                 { has: null, amount: '', frequency: '' },
        'socialSecurity':      { has: null, amount: '', frequency: '' },
        'friendsFamily':       { has: null, amount: '', frequency: '' },
        'pensionAnnuityTrust': { has: null, amount: '', frequency: '' },
        'other':               { has: null, amount: '', frequency: '' }
      }
    })
  }
}

class OptionalChildCollection extends ChildCollection {
  @observable hasAny

  get isValid() {
    switch (this.hasAny) {
      case true:
        return this.items.length >= 1 && super.isValid
        break
      case false:
        return true
        break
      default:
        return false
    }
  }
}

class StudentCollection extends ChildCollection {
  get fields() {
    return super.fields.concat([
      { name: 'school', label: 'School', required: true },
      { name: 'grade', label: 'Grade', required: true }
    ])
  }

  get propertiesOtherThanFields() {
    return Object.assign({}, super.propertiesOtherThanFields, {
      isFoster: null,
      isHomeless: null,
      isMigrant: null,
      isRunaway: null
    })
  }

  get isValid() {
    return this.items.length >= 1 && super.isValid
  }
}
