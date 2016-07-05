import React, { Component, PropTypes } from 'react'
import PersonCollectionAttributeSlide from './PersonCollectionAttributeSlide'
import { observer } from 'mobx-react'

@observer
class Homeless extends Component {
  render() {
    const { students } = this.props

    return (
      <PersonCollectionAttributeSlide
          header="Homeless"
          collection={students}
          attribute="isHomeless">

        <p>{students.length === 1 ? <span>Does <strong>{students.first.firstName}</strong></span> : 'Do any students'} receive assistance under the McKinney-Vento Homeless Assistance Act, or does your household lack a permanent address, or stay together in a shelter, hotel, or other temporary housing arrangement?</p>

      </PersonCollectionAttributeSlide>
    )
  }
}

export default Homeless
