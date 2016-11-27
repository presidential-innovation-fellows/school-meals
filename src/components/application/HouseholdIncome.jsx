import React, { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import OtherChildren from './slides/OtherChildren'
import ChildIncome from './slides/ChildIncome'
import Adults from './slides/Adults'
import AdultIncome from './slides/AdultIncome'
import Signature from './slides/Signature'

@observer
class HouseholdIncome extends Component {
  get allChildCollections() {
    return [this.props.applicationData.students,
      this.props.applicationData.otherChildren]
  }

  @computed get allChildren() {
    const result = this.allChildCollections
                     .map(collection => collection.items.slice())
                     .reduce((a, b) => a.concat(b), [])
    return result
  }

  @computed get anyChildIncome() {
    const result = this.allChildCollections
                     .map(collection => collection.hasAnyIncome)
                     .reduce((a, b) => a || b, false)
    return result
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
        <OtherChildren
            otherChildren={otherChildren}
            alreadyNamed={students}
        />

        <ChildIncome allChildren={this.allChildren} />
        <Adults adults={adults} />
        <AdultIncome adults={adults} />
        <Signature attestor={adults.first} signature={signature} />
      </div>
    )
  }
}

export default HouseholdIncome
