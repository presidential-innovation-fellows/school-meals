import React, { Component, PropTypes } from 'react'
import PersonCollectionAttributeSlide from './PersonCollectionAttributeSlide'
import { observer } from 'mobx-react'

@observer
class Migrant extends Component {
  render() {
    const { students } = this.props

    return (
      <PersonCollectionAttributeSlide
          header="Migrant"
          collection={students}
          attribute="isMigrant">

        <p>{students.length === 1 ? <span>Does <strong>{students.first.firstName}</strong></span> : 'Do any students'} participate in the Migrant Education Program (MEP), or does your family relocate on a seasonal basis?</p>

      </PersonCollectionAttributeSlide>
    )
  }
}

export default Migrant
