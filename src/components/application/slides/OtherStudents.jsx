import React, { Component, PropTypes } from 'react'
import { organization } from '../../../config'
import { observer } from 'mobx-react'
import OptionalPersonCollectionSlide from './OptionalPersonCollectionSlide'

@observer
class OtherStudents extends Component {
  render() {
    return (
      <OptionalPersonCollectionSlide
          header="Other Students"
          label="student"
          labelPlural="other students"
          collection={this.props.otherStudents}>

        <p>Are there any students in your household that are in grade 12 or below and attend school but not {organization.name}?</p>

      </OptionalPersonCollectionSlide>
    )
  }
}

export default OtherStudents
