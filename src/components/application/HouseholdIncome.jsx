import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class HouseholdIncome extends Component {
  render() {
    const {
      attestation,
      students,
    } = this.props.applicationData

    return (
      <div>
        <p>Must collect full household income.</p>
{/*
        <OtherStudents />
        <YoungChildren />
        <OtherChildren />
        <ChildIncome />
        <Military />
        <MilitaryDetails />
        <OtherHouseholdMembers />
        <Ssn />
*/}
      </div>
    )
  }
}

export default HouseholdIncome
