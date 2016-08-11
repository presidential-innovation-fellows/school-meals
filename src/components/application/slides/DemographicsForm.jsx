import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { informalName } from '../../../helpers'

@observer
class Demographics extends Component {
  render() {
    const { student } = this.props

    return (
      <Well>
        <h2>{informalName(student)}</h2>
        <ControlLabel>Ethnicity</ControlLabel>
        <BooleanRadio name="isHispanicLatino"
                      object={student.demographics}
                      trueLabel="Hispanic or Latino"
                      falseLabel="Non Hispanic or Latino" />

        <ControlLabel>Race</ControlLabel>

        <Checkboxes legend="Races">
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
        </Checkboxes>

        <div>
          <button className="usa-button-gray" type='reset'>Clear</button>
        </div>
      </Well>
    )
  }
}

Demographics.propTypes = {
  student: PropTypes.object.isRequired
}

export default Demographics
