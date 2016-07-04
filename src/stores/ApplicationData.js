import { action, computed, observable } from 'mobx'

class ApplicationData {
  students = new StudentCollection()

  @observable attestation = {
    firstName: '',
    lastName: ''
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

  toJSON() {
    return this.items.toJSON()
  }

  map(func) {
    return this.items.map(func)
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

export default ApplicationData
