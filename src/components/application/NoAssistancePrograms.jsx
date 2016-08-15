import React, { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { allStudentsAreFHMR } from '../../helpers'
import HouseholdIncome from './HouseholdIncome'
import Foster from './slides/Foster'
import OtherPrograms from './slides/OtherPrograms'

@observer
class NoAssistancePrograms extends Component {
  @computed get allStudentsAreFoster() {
    return this.props.applicationData.students
               .map(student => !!student.isFoster)
               .reduce((a, b) => a && b, true)
  }

  render() {
    const { applicationData } = this.props
    const { allPeopleCollections, students } = applicationData

    return (
      <div>
        <Foster students={students}
                allPeopleCollections={allPeopleCollections} />

        {!this.allStudentsAreFoster &&
         <OtherPrograms students={students}
                        allPeopleCollections={allPeopleCollections} />
        }

        {!allStudentsAreFHMR(students) &&
         <HouseholdIncome applicationData={applicationData} />
        }
      </div>
    )
  }
}

export default NoAssistancePrograms
