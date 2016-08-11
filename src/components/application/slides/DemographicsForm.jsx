import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Form from '../Form'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'

@observer
class Demographics extends Component {
  render() {
    const { student } = this.props

    return (
      <Form>
        <div className="well">
          <h2>{informalName(student)}</h2>
          <label>Ethnicity</label>
          <BooleanRadio name="isHispanicLatino"
                        object={student.demographics}
                        trueLabel="Hispanic or Latino"
                        falseLabel="Non Hispanic or Latino" />

          <label>Race</label>
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
            <button className="usa-button-gray" type="reset">Clear</button>
          </div>
        </div>
      </Form>
    )
  }
}

Demographics.propTypes = {
  student: PropTypes.object.isRequired
}

export default Demographics
