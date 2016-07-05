import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIntro from './slides/HouseholdIntro'
import OtherStudents from './slides/OtherStudents'
import YoungChildren from './slides/YoungChildren'
import OtherChildren from './slides/OtherChildren'

@observer
class HouseholdIncome extends Component {
  render() {
    const {
      attestation,
      students,
      otherStudents,
      youngChildren,
      otherChildren,
    } = this.props.applicationData

    return (
      <div>
        <HouseholdIntro />

        <OtherStudents otherStudents={otherStudents} />

        <YoungChildren youngChildren={youngChildren}
                       alreadyNamed={[students,
                                      otherStudents]} />

        <OtherChildren otherChildren={otherChildren}
                       alreadyNamed={[students,
                                      otherStudents,
                                      youngChildren]} />
{/*
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
