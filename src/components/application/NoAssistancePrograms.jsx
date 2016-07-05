import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIncome from './HouseholdIncome'

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
        <p>No assistance programs.</p>
{/*
        <OtherPrograms />
        <Foster />
        <Homeless />
        <Migrant />
        <Runaway />
*/}

        {!this.allStudentsQualify() &&
        <HouseholdIncome applicationData={this.props.applicationData} />
        }
      </div>
    )
  }
}

export default NoAssistancePrograms
