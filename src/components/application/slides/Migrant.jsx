import React, { Component, PropTypes } from 'react'
import PersonCollectionAttributeSlide from './PersonCollectionAttributeSlide'
import { observer } from 'mobx-react'

@observer
class Migrant extends Component {
  render() {
    const { studentItems, unless } = this.props

    return (
      <PersonCollectionAttributeSlide
          header="Migrant"
          collectionItems={studentItems}
          attribute="isMigrant"
      >

        <p>{studentItems.length === 1 ? <span>Does <strong>{studentItems[0].firstName}</strong></span> : 'Do any students'} participate in the Migrant Education Program (MEP), or does your family relocate on a seasonal basis?</p>

      </PersonCollectionAttributeSlide>
    )
  }
}

export default Migrant
