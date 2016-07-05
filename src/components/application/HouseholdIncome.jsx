import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIntro from './slides/HouseholdIntro'
import OtherStudents from './slides/OtherStudents'

@observer
class HouseholdIncome extends Component {
  render() {
    const {
      attestation,
      students,
      otherStudents,
    } = this.props.applicationData

    return (
      <div>
        <HouseholdIntro />
        <OtherStudents otherStudents={otherStudents} />
{/*
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
