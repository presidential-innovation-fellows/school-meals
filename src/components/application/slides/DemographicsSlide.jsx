import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import BooleanRadio from '../BooleanRadio'
import Checkbox from '../Checkbox'
import { organization } from '../../../config'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'

@observer
class Demographics extends Component {
  render() {
    const { student } = this.props

    return (
      <Slide header="Optional" headerSmall={student.firstName}
             id={`optional/${student.id}`}>
        <p>We are required to ask for information about your children's race and ethnicity. This information is important and helps to make sure we are fully serving our community. Responding to this section is optional and does not affect your children’s eligibility for free or reduced price meals.</p>

        <p>Please complete the following questions for <strong>{student.firstName}</strong>:</p>

        <ControlLabel>Ethnicity</ControlLabel>
        <BooleanRadio name="isHispanicLatino"
                      object={student.demographics}
                      trueLabel="Hispanic or Latino"
                      falseLabel="Non Hispanic or Latino" />

        <ControlLabel>Race</ControlLabel>
        <Checkbox object={student.demographics} name="isNativeAmerican">
          American Indian or Alaskan Native
        </Checkbox>
        <Checkbox object={student.demographics} name="isAsian">
          Asian
        </Checkbox>
        <Checkbox object={student.demographics} name="isBlack">
          Black or African American
        </Checkbox>
        <Checkbox object={student.demographics} name="isPacificIslander">
          Native Hawaiian or Other Pacific Islander
        </Checkbox>
        <Checkbox object={student.demographics} name="isWhite">
          White
        </Checkbox>
      </Slide>
    )
  }
}

Demographics.propTypes = {
  student: PropTypes.object.isRequired
}

export default Demographics
