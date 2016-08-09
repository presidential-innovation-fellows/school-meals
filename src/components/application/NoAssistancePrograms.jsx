import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { allStudentsAreFHMR } from '../../helpers'
import HouseholdIncome from './HouseholdIncome'
import OtherPrograms from './slides/OtherPrograms'

@observer
class NoAssistancePrograms extends Component {
  render() {
    const { applicationData } = this.props
    const { allPeopleCollections, students } = applicationData

    return (
      <div>
        <OtherPrograms students={students}
                       allPeopleCollections={allPeopleCollections} />

        {!allStudentsAreFHMR(students) &&
         <HouseholdIncome applicationData={applicationData} />
        }
      </div>
    )
  }
}

export default NoAssistancePrograms
