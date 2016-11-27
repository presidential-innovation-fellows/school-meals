import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Form from '../Form'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class Demographics extends Component {
  render() {
    const { student } = this.props
    const radioProps = {
      name: 'isHispanicLatino',
      object: student.demographics,
      trueLabel: <FormattedMessage
          id="app.slides.demographics.radioTrue"
          description="Label for choice if student is hispanic/latino."
          defaultMessage="Hispanic or Latino"
                 />,
      falseLabel: <FormattedMessage
          id="app.slides.demographics.radioFalse"
          description="Label for choice if student is not hispanic/latino."
          defaultMessage="Non Hispanic or Latino"
                  />
    }

    return (
      <div className="demographics-container">
        <Form large>
          <div className="well">
            <h2>{informalName(student)}</h2>
            <label>
              <FormattedMessage
                  id="app.slides.demographicsForm.ethnicity"
                  description="Ethnicity"
                  defaultMessage="Ethnicity"
              />
            </label>
            <BooleanRadio {...radioProps} />

            <label>
              <FormattedMessage
                  id="app.slides.demographicsForm.race"
                  description="Race"
                  defaultMessage="Race"
              />
            </label>
            <Checkboxes legend="Races">
              <Checkbox object={student.demographics} name="isNativeAmerican">
                <FormattedMessage
                    id="app.slides.demographicsForm.americanIndianOrAlaskanNative"
                    description="American Indian or Alaskan Native"
                    defaultMessage="American Indian or Alaskan Native"
                />
              </Checkbox>
              <Checkbox object={student.demographics} name="isAsian">
                <FormattedMessage
                    id="app.slides.demographicsForm.asian"
                    description="Asian"
                    defaultMessage="Asian"
                />
              </Checkbox>
              <Checkbox object={student.demographics} name="isBlack">
                <FormattedMessage
                    id="app.slides.demographicsForm.africanAmerican"
                    description="Black or African American"
                    defaultMessage="Black or African American"
                />
              </Checkbox>
              <Checkbox object={student.demographics} name="isPacificIslander">
                <FormattedMessage
                    id="app.slides.demographicsForm.pacificIslander"
                    description="Native Hawaiian or Other Pacific Islander"
                    defaultMessage="Native Hawaiian or Other Pacific Islander"
                />
              </Checkbox>
              <Checkbox object={student.demographics} name="isWhite">
                <FormattedMessage
                    id="app.slides.demographicsForm.white"
                    description="White"
                    defaultMessage="White"
                />
              </Checkbox>
            </Checkboxes>

            <div>
              <button className="usa-button-gray" type="reset">
                <FormattedMessage
                    id="app.slides.demographicsForm.clear"
                    description="Clear"
                    defaultMessage="Clear"
                />
              </button>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

Demographics.propTypes = {
  student: PropTypes.object.isRequired
}

export default Demographics
