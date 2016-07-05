import React, { Component, PropTypes } from 'react'
import PersonCollectionAttributeSlide from './PersonCollectionAttributeSlide'
import { observer } from 'mobx-react'

@observer
class Foster extends Component {
  render() {
    const { studentItems, unless } = this.props

    return (
      <PersonCollectionAttributeSlide
          header="Foster"
          collectionItems={studentItems}
          attribute="isFoster"
      >

        <p>{studentItems.length === 1 ? <span>Is <strong>{studentItems[0].firstName}</strong></span> : 'Are any students'} living with you under a formal (court-ordered) foster care arrangement?</p>

      </PersonCollectionAttributeSlide>
    )
  }
}

export default Foster
