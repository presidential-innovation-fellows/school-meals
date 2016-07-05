import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIntro from './slides/HouseholdIntro'

@observer
class HouseholdIncome extends Component {
  render() {
    const {
      attestation,
      students,
    } = this.props.applicationData

    return (
      <div>
        <HouseholdIntro />
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
