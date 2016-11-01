import shortid from 'shortid'
import { action, computed, observable } from 'mobx'
import { assistancePrograms as assistanceProgramNames } from '../config'
import { formatDate, informalList } from '../helpers'
import { testData } from '../debug'

// set DEBUG to true to pull in test data into the AppllicationData object from debug.js
// this will allow you automatically input all Adult and Student answers in advance
const DEBUG = false;

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
              num: 0,
              amount: source.amount,
              frequency: source.frequency,
              hourlyHours: source.hourlyHours,
              hourlyPeriod: source.hourlyPeriod
            });

            // New code to add additional income sources to the total
            // User can add additional income for each sourceKey in UI
            // Example: User has 2 Salary/Wage jobs -- Uber and Waiter
            // This code looks to see if user "hasMore" if so loops through "more" array
            // for the particular income source

            if (("hasMore" in source) && source.hasMore){


              for (let moreKey=0,len=source.more.length; moreKey<len; moreKey++){


                let moreIncome = source.more[moreKey];



                result.push({
                  person: person,
                  source: sourceKey,
                  type: type,
                  num: moreKey + 1, // needed for printing summary later
                  amount: moreIncome.amount,
                  frequency: moreIncome.frequency,
                  hourlyHours: moreIncome.hourlyHours,
                  hourlyPeriod: moreIncome.hourlyPeriod
                });

              } // end of for loop

            }

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
            'socialSecurity':      { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'friendsFamily':       { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'pensionAnnuityTrust': { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' },
            'other':               { has: null, amount: '', frequency: '', hourlyHours: '', hourlyPeriod: '' }
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



