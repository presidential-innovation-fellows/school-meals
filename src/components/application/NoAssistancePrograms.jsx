import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIncome from './HouseholdIncome'
import OtherPrograms from './slides/OtherPrograms'
import Foster from './slides/Foster'
import Homeless from './slides/Homeless'

@observer
class NoAssistancePrograms extends Component {
  constructor (props) {
    super(props)
//    this.allStudentsQualify = this.allStudentsQualify.bind(this)
  }

  allStudentsQualify() {
    const students = this.props.applicationData.students
    // TODO
  }

  render() {
    const {
      attestation,
      students,
    } = this.props.applicationData

    return (
      <div>
        <OtherPrograms students={students} />
        <Foster students={students} />
        <Homeless students={students} />
{/*
        <Migrant students={students} />
        <Runaway students={students} />
*/}

        {!this.allStudentsQualify() &&
        <HouseholdIncome applicationData={this.props.applicationData} />
        }
      </div>
    )
  }
}

export default NoAssistancePrograms
