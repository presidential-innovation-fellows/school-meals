import React, { Component, PropTypes } from 'react'
import PersonCollectionAttributeSlide from './PersonCollectionAttributeSlide'
import { observer } from 'mobx-react'

@observer
class Foster extends Component {
  render() {
    const { students } = this.props

    return (
      <PersonCollectionAttributeSlide
          header="Foster"
          collection={students}
          attribute="isFoster">

        <p>{students.length === 1 ? <span>Is <strong>{students.length}</strong></span> : 'Are any students'} living with you under a formal (court-ordered) foster care arrangement?</p>

      </PersonCollectionAttributeSlide>
    )
  }
}

export default Foster
