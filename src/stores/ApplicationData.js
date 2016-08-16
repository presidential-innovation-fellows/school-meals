import shortid from 'shortid'
import { action, computed, observable } from 'mobx'
import { assistancePrograms as assistanceProgramNames } from '../config'
import { formatDate, informalList } from '../helpers'

export default class ApplicationData {
  students = new StudentCollection()
  assistancePrograms = new AssistancePrograms()
  otherChildren = new ChildCollection()
  adults = new AdultCollection()

  @observable certifiedCorrect = false
  @observable electToProvideIncome = null

  @observable attestation = {
    date: formatDate(new Date(Date.now()))
  }

  @computed get attestor() {
    return this.adults.items.filter(adult => adult.isAttestor)[0]
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

  @computed get allPeopleCollections() {
    return [this.students,
            this.otherChildren,
            this.adults]
  }
}

export class AssistancePrograms {
  @observable items

  constructor(items = null) {
    if (items) {
      this.items = items
    } else {
      this.items = assistanceProgramNames.map(function(programName) {
        return {
          isApplicable: null,
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

  @computed get hasAny() {
    return this.items
               .map(item => item.isApplicable)
               .reduce((a, b) => a || b, false)
  }

  @computed get applicable() {
    return this.items.filter(item => item.isApplicable)
  }

  @computed get length() {
    return this.items.length
  }

  @computed get isValid() {
    return this.applicable
               .map(item => !!item.caseNumber)
               .reduce((a, b) => a && b, true)
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

  // returns e.g. "Jill, Joe, and Joe Jr."
  informalList(allPeople, ...options) {
    return informalList(this.items, allPeople, ...options)
  }

  @computed get hasAnyIncome() {
    for (let i = 0; i < this.items.length; i++) {
      let person = this.items[i]

      for (let type in person.incomeTypes) {
        let sources = person.incomeTypes[type].sources

        if (person.incomeTypes[type].isApplicable) {
          return true
        }
      }
    }

    return false
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
              frequency: source.frequency,
              hourlyHours: source.hourlyHours,
              hourlyPeriod: source.hourlyPeriod
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

  @action add(props = {}) {
    this.items.push(Object.assign(this.newItem, props))
  }

  @action remove(item) {
    this.items.remove(item)
  }

  @action empty() {
    this.items = []
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
      isAdult: true,
      isAttestor: false,
      incomeTypes: {
        military: {
          isApplicable: null,
          isDeployed: null,
          sources: {
            'basic':     { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'cashBonus': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'allowance': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
          }
        },
        employment: {
          isApplicable: null,
          sources: {
            'salaryWages':    { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'tips':           { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'commission':     { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'cashBonus':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'selfEmployment': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
          }
        },
        publicAssistance: {
          isApplicable: null,
          sources: {
            'ssi':        { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'stateLocal': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
          }
        },
        spousal: {
          isApplicable: null,
          sources: {
            'alimony':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'childSupport': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
          }
        },
        unemployment: {
          isApplicable: null,
          sources: {
            'unemployment': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'workersComp':  { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'strike':       { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'ssdi':         { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'veteran':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
          }
        },
        retirement: {
          isApplicable: null,
          sources: {
            'socialSecurity': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'privatePension': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
          }
        },
        other: {
          isApplicable: null,
          sources: {
            'regularCashPayments': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'rentalIncome':        { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'earnedInterest':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'investmentIncome':    { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'annuity':             { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'other':               { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
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
      isChild: true,
      incomeTypes: {
        child: {
          isApplicable: null,
          sources: {
            'job':                 { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'socialSecurity':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'friendsFamily':       { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'pensionAnnuityTrust': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'other':               { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
          }
        }
      }
    })
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
      isStudent: true,
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
