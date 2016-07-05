import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIncome from './HouseholdIncome'
import OtherPrograms from './slides/OtherPrograms'
import Foster from './slides/Foster'
import Homeless from './slides/Homeless'
import Migrant from './slides/Migrant'
import Runaway from './slides/Runaway'

@observer
class NoAssistancePrograms extends Component {
  constructor(props) {
    super(props);
    this.studentItemsExcept = this.studentItemsExcept.bind(this);
  }

  get qualifyingAttributes() {
    return [
      'isFoster',
      'isHomeless',
      'isMigrant',
      'isRunaway'
    ]
  }

  get allStudentsQualify() {
    const qualifyingAttributes = this.qualifyingAttributes

    return this.props.applicationData.students
      .map(student => {
        return qualifyingAttributes
                   .map(attr => student[attr] === true)
                   .reduce((a, b) => a || b, false)
      })
      .reduce((a, b) => a && b, true)
  }

  studentItemsExcept(attributes = []) {
    return this.props.applicationData.students.items.filter(student => {
      return !attributes
        .map(attr => student[attr] === true)
        .reduce((a, b) => a || b, false)
    })
  }

  render() {
    // keep order of cascading consistent with order of presentation below
    const studentItems = {
      foster: this.studentItemsExcept([]),
      homeless: this.studentItemsExcept(['isFoster']),
      migrant: this.studentItemsExcept(['isFoster', 'isHomeless']),
      runaway: this.studentItemsExcept(['isFoster', 'isHomeless', 'isMigrant'])
    }

    return (
      <div>
        <OtherPrograms students={this.props.applicationData.students} />

        {!!studentItems.foster.length &&
         <Foster studentItems={studentItems.foster} />
        }
        {!!studentItems.homeless.length &&
         <Homeless studentItems={studentItems.homeless} />
        }
        {!!studentItems.migrant.length &&
         <Migrant studentItems={studentItems.migrant} />
        }
        {!!studentItems.runaway.length &&
         <Runaway studentItems={studentItems.runaway} />
        }
        {!this.allStudentsQualify &&
         <HouseholdIncome applicationData={this.props.applicationData} />
        }
      </div>
    )
  }
}

export default NoAssistancePrograms
