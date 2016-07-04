import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class NoAssistancePrograms extends Component {
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
        <OtherProgramsStudent />
        <OtherStudents />
        <YoungChildren />
        <OtherChildren />
        <ChildIncome />
        <Military />
        <MilitaryDetails />
        <OtherHouseholdMembers />
*/}
      </div>
    )
  }
}

export default NoAssistancePrograms
