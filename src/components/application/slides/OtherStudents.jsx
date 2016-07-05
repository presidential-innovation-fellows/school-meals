import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class OtherStudents extends Component {
  render() {
    const { otherStudents } = this.props

    return (
      <Slide header="Other Students" nextDisabled={!otherStudents.isValid}>
        <p>Are there any students in your household that are in grade 12 or below and attend school but not {organization.name}?</p>

        <BooleanRadio name="hasAny" object={otherStudents} />

        {otherStudents.hasAny &&
         <PersonCollection
             label="student"
             labelPlural="other students"
             collection={otherStudents}
         />
        }

      </Slide>
    )
  }
}

export default OtherStudents
