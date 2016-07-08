import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Checkbox from '../Checkbox'
import { observer } from 'mobx-react'
import { ControlLabel } from "react-bootstrap"

@observer
class OtherProgramsProgram extends Component {
  render() {
    const { students, attribute } = this.props
    const oneStudent = students.length === 1

    return (
      <div>
        <ControlLabel>
          {this.props.children}
        </ControlLabel>

        {oneStudent ?
         <BooleanRadio object={students.first} name={attribute} />
         :
         students.map(student =>
           <Checkbox object={student} name={attribute} key={student.id}>
             {student.firstName}
           </Checkbox>
         )
        }
      </div>
    )
  }
}

OtherProgramsProgram.propTypes = {
  students: PropTypes.object.isRequired,
  attribute: PropTypes.string.isRequired
}

export default OtherProgramsProgram
