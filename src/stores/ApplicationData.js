import { PropTypes } from 'react'
import shortid from 'shortid'
import { action, computed, observable } from 'mobx'
import { assistancePrograms as assistanceProgramNames,
         assistanceProgramsVarArray } from '../config'
import { allStudentsAreFHMR,
         allStudentsAreFoster,
         applicableIncomeSources,
         formatDate,
         informalList } from '../helpers'
import { testData } from '../debug'

// set DEBUG to true to pull in test data into the AppllicationData object from debug.js
// this will allow you automatically input all Adult and Student answers in advance
const DEBUG = false;

export default class ApplicationData {
  students = new StudentCollection()
  assistancePrograms = new AssistancePrograms()
  otherChildren = new OtherChildrenCollection()
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

  @computed get totalHouseholdMembers() {
    return this.allPeopleCollections
               .map(collection => collection.length)
               .reduce((a, b) => a + b, 0)
  }

  @computed get allIncomes() {
    return this.allPeopleCollections
               .map(collection =>
                 collection.items
                           .map(person => applicableIncomeSources(person))
                           .reduce((a, b) => a.concat(b), [])
               )
               .reduce((a, b) => a.concat(b), [])
  }

  @computed get totalAnnualHouseholdIncome() {
    function toAnnual(income) {
      let amount = parseFloat(income.amount, 10)

      switch (income.frequency) {
        case 'yearly':
        case 'annually':
          return amount * 1.0
        case 'monthly':
          return amount * 12.0
        case 'twicePerMonth':
          return amount * 24.0
        case 'everyTwoWeeks':
          return amount * 26.0
        case 'weekly':
          return amount * 52.0
        case 'hourly':
          let hours = parseFloat(income.hourlyHours, 10)

          switch (income.hourlyPeriod) {
            case 'day':
              return amount * hours * 365.0
            case 'week':
              return amount * hours * 52.0
            case 'month':
              return amount * hours * 12.0
            default:
              return 0.0
          }
        default:
          return 0.0
      }
    }

    return this.allIncomes
               .map(income => toAnnual(income))
               .reduce((a, b) => a + b, 0)
  }

  @computed get totalMonthlyHouseholdIncome() {
    return this.totalAnnualHouseholdIncome / 12.0
  }

  @computed get skipHousehold() {
    return this.assistancePrograms.hasAny ||
           allStudentsAreFoster(this.students) ||
           (
             allStudentsAreFHMR(this.students) &&
             this.electToProvideIncome === false
           )
  }

  @computed get showHousehold() {
    return !this.skipHousehold
  }

  constructor(){
    if (DEBUG) {
      console.log("Loading Default Test Data! \n");

      //Choose the test scenario to import
      let scenario = "OneAdult_OneStudent";

      console.log("Test Scenario: " + scenario + "\n");

      //Set the values in ApplicationData using the debug test data

      // signature collection
      this.signature = JSON.parse(JSON.stringify(testData[scenario].signature));

      console.log("Loading signature info...\n");
      console.log(JSON.stringify(this.signature, undefined, 2));

      // contact info collection
      this.contact = JSON.parse(JSON.stringify(testData[scenario].contact));

      console.log("Loading contact info...\n");
      console.log(JSON.stringify(this.contact, undefined, 2));

      // adults collection
      this.adults.items = testData[scenario].adults.items.map( function (adult){
                return ( JSON.parse(JSON.stringify(adult)));
      });

      // Object.assign(this.adults.items[0].incomeTypes.employment.sources.salaryWages, {add: this.adults.addIncomeSource, remove: this.adults.removeIncomeSource})

      console.log("Loading Adults... \n");
      console.log(JSON.stringify(this.adults.items,undefined,2));


       //testing to see if I can re-attach the class methods for adding / removing
      console.log("Re-attached class methods for adding/removing income sources...\n")
      for (let i=0 ; i < this.adults.items.length; i++){
        console.log("Re-attaching for item: " + i + "\n")
        let item = this.adults.items[i];

        Object.keys(item.incomeTypes.employment.sources).forEach(function(k,s){

          console.log("Source: " + k + "\n")
          let source = item.incomeTypes.employment.sources[k]

          if (typeof(source.more) != "undefined") {

            Object.assign(source, {add: this.adults.addIncomeSource, remove: this.adults.removeIncomeSource})

          }

        }, this)

      }

      console.log("Loading Adults... \n");
      console.log(JSON.stringify(this.adults.items,undefined,2));

      this.students.items = testData[scenario].students.items.map ( function(student){
                return(JSON.parse(JSON.stringify(student)));
      });

      console.log("Loading Students... \n");
      console.log(JSON.stringify(this.students.items,undefined,2));


      this.otherChildren.items = testData[scenario].otherChildren.items.map ( function(child){
                return(JSON.parse(JSON.stringify(child)));
      });

      console.log("Loading Other Children... \n");
      console.log(JSON.stringify(this.otherChildren.items,undefined,2));


      console.log("Finished loading...");
      console.log("Test Scenario: " + scenario + " is fully loaded!\n");
      console.log(this);
    }
  }
}

export class AssistancePrograms {
  @observable items

  constructor(items = null) {
    if (items) {
      this.items = items
    } else {
      this.items = assistanceProgramNames.map((programName, i) => {
        return {
          isApplicable: null,
          id: shortid.generate(),
          name: programName,
          accronym: assistanceProgramsVarArray[i].accronym,
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
      { name: 'suffix', label: 'Suffix (e.g. Jr., Sr., I, II, III)', placeholder: 'Suffix' }
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
            'basic':     { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'cashBonus': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'allowance': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
          }
        },
        employment: {
          isApplicable: null,
          sources: {
            'salaryWages':    { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                                hasMore: null,
                                more: [],
                                add: this.addIncomeSource,
                                remove: this.removeIncomeSource},
            'tips':           { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                                hasMore: null,
                                more: [],
                                add: this.addIncomeSource,
                                remove: this.removeIncomeSource},
            'commission':     { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                                hasMore: null,
                                more: [],
                                add: this.addIncomeSource,
                                remove: this.removeIncomeSource},
            'cashBonus':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                                hasMore: null,
                                more: [],
                                add: this.addIncomeSource,
                                remove: this.removeIncomeSource},
            'selfEmployment': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                                hasMore: null,
                                more: [],
                                add: this.addIncomeSource,
                                remove: this.removeIncomeSource}
          }
        },
        publicAssistance: {
          isApplicable: null,
          sources: {
            'ssi':        { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'stateLocal': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
          }
        },
        spousal: {
          isApplicable: null,
          sources: {
            'alimony':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'childSupport': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
          }
        },
        unemployment: {
          isApplicable: null,
          sources: {
            'unemployment': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'workersComp':  { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'strike':       { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'ssdi':         { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'veteran':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
          }
        },
        retirement: {
          isApplicable: null,
          sources: {
            'socialSecurity': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'privatePension': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
          }
        },
        other: {
          isApplicable: null,
          sources: {
            'regularCashPayments': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'rentalIncome':        { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'earnedInterest':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'investmentIncome':    { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'annuity':             { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'other':               { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
          }
        }
      }
    })
  }

  get isValid() {
    return this.items.length >= 1 && super.isValid
  }

  @action addIncomeSource(source) {

    source.more.push({amount: '', frequency: '', hourlyHours: '', hourlyPeriod: ''})
    source.hasMore = true

  }

  @action removeIncomeSource(source, i) {
    if (i < source.more.length) {
      source.more.splice(i,1)

      if (source.more.length == 0){
        source.hasMore = false
      }
    }
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
            'job':                 { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                                                  hasMore: null,
                                                  more: [],
                                                  add: this.addIncomeSource,
                                                  remove: this.removeIncomeSource},
            'socialSecurity':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'friendsFamily':       { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'pensionAnnuityTrust': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
            'other':               { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '',
                            hasMore: null,
                            more: [],
                            add: this.addIncomeSource,
                            remove: this.removeIncomeSource},
          }
        }
      }
    })
  }

  @action addIncomeSource(source) {

    source.more.push({amount: '', frequency: '', hourlyHours: '', hourlyPeriod: ''})
    source.hasMore = true

  }

  @action removeIncomeSource(source, i) {
    if (i < source.more.length) {
      source.more.splice(i,1)

      if (source.more.length == 0){
        source.hasMore = false
      }
    }
  }

}

class OtherChildrenCollection extends ChildCollection {
  get fields() {
    return super.fields.concat([
      { name: 'isFoster',
        label: 'Foster child',
        dataType: PropTypes.bool }
    ])
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
      { name: 'school', label: 'School' },
      { name: 'grade', label: 'Grade' }
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
