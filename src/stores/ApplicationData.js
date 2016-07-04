import { action, observable } from 'mobx'

class ApplicationData {
  constructor() {
    this.students = new StudentCollection()
  }

  @observable students
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
      { name: 'firstName', label: 'First name' },
      { name: 'middleName', label: 'Middle name' },
      { name: 'lastName', label: 'Last name' },
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

  get length() {
    return this.items.length
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
      { name: 'school', label: 'School' },
      { name: 'grade', label: 'Grade' }
    ])
  }
}

export default ApplicationData
