import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { ControlLabel } from "react-bootstrap"
import { informalName } from '../../../helpers'

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
         <BooleanRadio object={students[0]} name={attribute} />
         :
         <Checkboxes legend="Students">
           {
             students.map(student =>
               <Checkbox object={student} name={attribute} key={student.id}>
                 {informalName(student)}
               </Checkbox>
             )
           }
         </Checkboxes>
        }
      </div>
    )
  }
}

OtherProgramsProgram.propTypes = {
  attribute: PropTypes.string.isRequired,
  students: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]).isRequired
}

export default OtherProgramsProgram
