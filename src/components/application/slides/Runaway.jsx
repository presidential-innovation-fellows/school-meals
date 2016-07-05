import React, { Component, PropTypes } from 'react'
import PersonCollectionAttributeSlide from './PersonCollectionAttributeSlide'
import { observer } from 'mobx-react'

@observer
class Runaway extends Component {
  render() {
    const { studentItems, unless } = this.props

    return (
      <PersonCollectionAttributeSlide
          header="Runaway"
          collectionItems={studentItems}
          attribute="isRunaway"
      >

        <p>{studentItems.length === 1 ? <span>Does <strong>{studentItems[0].firstName}</strong></span> : 'Do any students'} participate in any programs under the Runaway and Homeless Youth Act, or have they chosen to leave their prior family or household?</p>

      </PersonCollectionAttributeSlide>
    )
  }
}

export default Runaway
