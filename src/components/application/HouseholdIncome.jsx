import React, { Component } from 'react'
import { observer } from 'mobx-react'
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
            this.props.applicationData.otherChildren]
      .map(collection => collection.items.slice())
      .reduce((a, b) => a.concat(b), [])
  }

  render() {
    const {
      students,
      otherChildren,
      adults,
      signature
    } = this.props.applicationData

    return (
      <div>
        <OtherChildren otherChildren={otherChildren}
                       alreadyNamed={students} />

        <ChildIncome allChildren={this.allChildren} />
        <Adults adults={adults} allChildren={this.allChildren} />
        <GrossIncome />
        <AdultIncome adults={adults} />
        <Signature attestor={adults.first} signature={signature} />
      </div>
    )
  }
}

export default HouseholdIncome
