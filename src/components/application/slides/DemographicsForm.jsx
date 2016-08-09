import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Checkbox from '../Checkbox'
import { observer } from 'mobx-react'
import { Button, ControlLabel, Well } from 'react-bootstrap'

@observer
class Demographics extends Component {
  constructor (props) {
    super(props)
    this.clear = this.clear.bind(this)
  }

  clear() {
    const { demographics } = this.props.student

    for (let key in demographics) {
      demographics[key] = null
    }
  }

  render() {
    const { student } = this.props

    return (
      <div>
        <h3>{student.firstName}</h3>
        <Well>
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

          <div><Button bsSize="small" onClick={this.clear}>Clear</Button></div>
        </Well>
      </div>
    )
  }
}

Demographics.propTypes = {
  student: PropTypes.object.isRequired
}

export default Demographics
