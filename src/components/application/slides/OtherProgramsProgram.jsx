import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { informalList, informalName } from '../../../helpers'

@observer
class OtherProgramsProgram extends Component {
  get labelPrefix() {
    const { allPeopleCollections, students } = this.props

    return <span>
        {students.length === 1 ? 'Is ' : 'Are '}
      <strong>{informalList(students, allPeopleCollections, ' or ')}</strong>
    </span>
  }

  render() {
    const { attribute, students } = this.props

    return (
      <div>
        <label>{this.labelPrefix}{' '}{this.props.children}</label>

        {students.length === 1 ?
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
  allPeopleCollections: PropTypes.array.isRequired,
  attribute: PropTypes.string.isRequired,
  students: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]).isRequired
}

export default OtherProgramsProgram
