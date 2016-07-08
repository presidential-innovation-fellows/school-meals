import React, { Component } from 'react'
import { observer } from 'mobx-react'
import HouseholdIntro from './slides/HouseholdIntro'
import OtherStudents from './slides/OtherStudents'
import YoungChildren from './slides/YoungChildren'
import OtherChildren from './slides/OtherChildren'
import ChildIncome from './slides/ChildIncome'
import Adults from './slides/Adults'
import GrossIncome from './slides/GrossIncome'
import AdultIncome from './slides/AdultIncome'
import Signature from './slides/Signature'

@observer
class HouseholdIncome extends Component {
  get allChildren() {
    return [this.props.applicationData.students,
            this.props.applicationData.otherStudents,
            this.props.applicationData.youngChildren,
            this.props.applicationData.otherChildren]
      .map(collection => collection.items.slice())
      .reduce((a, b) => a.concat(b), [])
  }

  render() {
    const {
      attestation,
      students,
      otherStudents,
      youngChildren,
      otherChildren,
      adults,
      signature
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

        <ChildIncome allChildren={this.allChildren} />
        <Adults adults={adults} allChildren={this.allChildren} />
        <GrossIncome />
        <AdultIncome adults={adults} />
        <Signature attestation={attestation} signature={signature} />
      </div>
    )
  }
}

export default HouseholdIncome
