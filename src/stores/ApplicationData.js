import shortid from 'shortid'
import { action, computed, observable } from 'mobx'
import { assistancePrograms as assistanceProgramNames } from '../config'
import { formatDate, informalList } from '../helpers'

export default class ApplicationData {
  students = new StudentCollection()
  assistancePrograms = new AssistancePrograms()
  otherStudents = new OptionalChildCollection()
  youngChildren = new OptionalChildCollection()
  otherChildren = new OptionalChildCollection()
  adults = new AdultCollection()

  @observable attestation = {
    date: formatDate(new Date(Date.now()))
  }

  @observable contact = {
    phone: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  }

  @observable signature = {
    hasSsn: true,
    ssnLastFour: ''
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
          name: programName,
          caseNumber: ''
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

  @computed get applicable() {
    return this.items.filter(item => !!item.caseNumber)
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

  @computed get allApplicableIncomeSources() {
    let result = []

    for (let i = 0; i < this.items.length; i++) {
      let person = this.items[i]

      for (let type in person.incomeTypes) {
        let sources = person.incomeTypes[type].sources

        if (!person.incomeTypes[type].isApplicable) {
          continue
        }

        for (let sourceKey in sources) {
          let source = sources[sourceKey]

          if (source.has) {
            result.push({
              person: person,
              source: sourceKey,
              type: type,
              amount: source.amount,
              frequency: source.frequency
            })
          }
        }
      }
    }

    return result
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

  @action add(props = {}) {
    this.items.push(Object.assign(this.newItem, props))
  }

  @action remove(item) {
    this.items.remove(item)
  }
}

class AdultCollection extends PersonCollection {
  constructor(props) {
    super(props)

    if (!this.length) {
      this.add({ isAttestor: true })
    }
  }

  get propertiesOtherThanFields() {
    return Object.assign({}, super.propertiesOtherThanFields, {
      isAttestor: false,
      incomeTypes: {
        military: {
          isApplicable: null,
          isDeployed: null,
          sources: {
            'basic':     { has: null, amount: '', frequency: '' },
            'cashBonus': { has: null, amount: '', frequency: '' },
            'allowance': { has: null, amount: '', frequency: '' }
          }
        },
        employment: {
          isApplicable: null,
          sources: {
            'salary':         { has: null, amount: '', frequency: '' },
            'wages':          { has: null, amount: '', frequency: '' },
            'tips':           { has: null, amount: '', frequency: '' },
            'commission':     { has: null, amount: '', frequency: '' },
            'cashBonus':      { has: null, amount: '', frequency: '' },
            'selfEmployment': { has: null, amount: '', frequency: '' }
          }
        },
        publicAssistance: {
          isApplicable: null,
          sources: {
            'ssi':        { has: null, amount: '', frequency: '' },
            'stateLocal': { has: null, amount: '', frequency: '' }
          }
        },
        spousal: {
          isApplicable: null,
          sources: {
            'alimony':      { has: null, amount: '', frequency: '' },
            'childSupport': { has: null, amount: '', frequency: '' }
          }
        },
        unemployment: {
          isApplicable: null,
          sources: {
            'unemployment': { has: null, amount: '', frequency: '' },
            'workersComp':  { has: null, amount: '', frequency: '' },
            'strike':       { has: null, amount: '', frequency: '' },
            'ssdi':         { has: null, amount: '', frequency: '' }
          }
        },
        retirement: {
          isApplicable: null,
          sources: {
            'socialSecurity': { has: null, amount: '', frequency: '' },
            'privatePension': { has: null, amount: '', frequency: '' }
          }
        },
        other: {
          isApplicable: null,
          sources: {
            'regularCashPayments': { has: null, amount: '', frequency: '' },
            'rentalIncome':        { has: null, amount: '', frequency: '' },
            'earnedInterest':      { has: null, amount: '', frequency: '' },
            'investmentIncome':    { has: null, amount: '', frequency: '' },
            'annuity':             { has: null, amount: '', frequency: '' },
            'other':               { has: null, amount: '', frequency: '' }
          }
        }
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
      incomeTypes: {
        child: {
          isApplicable: null,
          sources: {
            'job':                 { has: null, amount: '', frequency: '' },
            'socialSecurity':      { has: null, amount: '', frequency: '' },
            'friendsFamily':       { has: null, amount: '', frequency: '' },
            'pensionAnnuityTrust': { has: null, amount: '', frequency: '' },
            'other':               { has: null, amount: '', frequency: '' }
          }
        }
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
  constructor(props) {
    super(props)

    if (!this.length) {
      this.add()
    }
  }

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
      isRunaway: null,
      demographics: {
        isNativeAmerican: null,
        isAsian: null,
        isBlack: null,
        isPacificIslander: null,
        isWhite: null,
        isHispanicLatino: null
      }
    })
  }

  get isValid() {
    return this.items.length >= 1 && super.isValid
  }
}
