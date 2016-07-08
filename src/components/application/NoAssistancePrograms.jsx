import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIncome from './HouseholdIncome'
import OtherPrograms from './slides/OtherPrograms'

@observer
class NoAssistancePrograms extends Component {
  get allStudentsQualify() {
    const qualifyingAttributes = [
      'isFoster',
      'isHomeless',
      'isMigrant',
      'isRunaway'
    ]

    return this.props.applicationData.students
      .map(student => {
        return qualifyingAttributes
                   .map(attr => student[attr] === true)
                   .reduce((a, b) => a || b, false)
      })
      .reduce((a, b) => a && b, true)
  }

  render() {
    const { applicationData } = this.props

    return (
      <div>
        <OtherPrograms students={applicationData.students} />

        {!this.allStudentsQualify &&
         <HouseholdIncome applicationData={applicationData} />
        }
      </div>
    )
  }
}

export default NoAssistancePrograms
