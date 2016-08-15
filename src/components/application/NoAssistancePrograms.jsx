import React, { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { allStudentsAreFHMR } from '../../helpers'
import HouseholdIncome from './HouseholdIncome'
import Foster from './slides/Foster'
import OtherPrograms from './slides/OtherPrograms'
import IncomeElection from './slides/IncomeElection'

@observer
class NoAssistancePrograms extends Component {
  @computed get studentsExceptFoster() {
    return this.props.applicationData.students.items
               .filter(student => student.isFoster !== true)
  }

  render() {
    const { applicationData } = this.props
    const { allPeopleCollections, electToProvideIncome, students } =
      applicationData

    return (
      <div>
        <Foster students={students}
                allPeopleCollections={allPeopleCollections} />

        {!!this.studentsExceptFoster.length &&
         <OtherPrograms students={this.studentsExceptFoster}
                        allPeopleCollections={allPeopleCollections} />
        }

        {allStudentsAreFHMR(students) &&
         <IncomeElection applicationData={applicationData} />
        }

        {(electToProvideIncome || !allStudentsAreFHMR(students)) &&
         <HouseholdIncome applicationData={applicationData} />
        }
      </div>
    )
  }
}

export default NoAssistancePrograms
