import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import { observer } from 'mobx-react'

@observer
class OtherPrograms extends Component {
  get studentsExceptFoster() {
    return this.props.students.items.filter(student => student.isFoster !== true)
  }

  get isValid() {
    const students = this.props.students.items

    if (students.length === 1) {
      return(students[0].isFoster === true ||
             students[0].isFoster != null &&
             students[0].isHomeless != null &&
             students[0].isMigrant != null &&
             students[0].isRunaway != null)
    } else if (this.studentsExceptFoster.length === 1) {
      return(this.studentsExceptFoster[0].isHomeless != null &&
             this.studentsExceptFoster[0].isMigrant != null &&
             this.studentsExceptFoster[0].isRunaway != null)
    } else {
      // multiple students ernder as check boxes; no negative action required
      return true
    }
  }

  render() {
    const { students } = this.props
    const oneStudent = students.length === 1
    const oneNonFosterStudent = this.studentsExceptFoster.length === 1

    return (
      <Slide header="Other Programs" nextDisabled={!this.isValid}
             id="other-programs">

        <p>No problem! There are other ways to qualify.</p>

        <p>If <strong>{students.informalList}</strong> {oneStudent ? 'is a foster child' : 'are forster children'} or qualify as homeless, migrant, or runaway, then they may be eligible for school meal benefits.</p>

        <OtherProgramsProgram students={students.items} attribute="isFoster">
          {oneStudent ? <span>Is <strong>{students.first.firstName}</strong></span> : 'Are any students'} living with you under a formal (court-ordered) foster care arrangement?
        </OtherProgramsProgram>

        {this.studentsExceptFoster.length > 0 &&
          <OtherProgramsProgram students={this.studentsExceptFoster} attribute="isHomeless">
            {oneNonFosterStudent ? <span>Does <strong>{this.studentsExceptFoster[0].firstName}</strong></span> : 'Do any students'} receive assistance under the McKinney-Vento Homeless Assistance Act, or does your household lack a permanent address, or stay together in a shelter, hotel, or other temporary housing arrangement?
          </OtherProgramsProgram>
        }

        {this.studentsExceptFoster.length > 0 &&
          <OtherProgramsProgram students={this.studentsExceptFoster} attribute="isMigrant">
            {oneNonFosterStudent ? <span>Does <strong>{this.studentsExceptFoster[0].firstName}</strong></span> : 'Do any students'} participate in the Migrant Education Program (MEP), or does your family relocate on a seasonal basis?
          </OtherProgramsProgram>
        }

        {this.studentsExceptFoster.length > 0 &&
          <OtherProgramsProgram students={this.studentsExceptFoster} attribute="isRunaway">
            {oneNonFosterStudent ? <span>Does <strong>{this.studentsExceptFoster[0].firstName}</strong></span> : 'Do any students'} participate in any programs under the Runaway and Homeless Youth Act, or have they chosen to leave their prior family or household?
          </OtherProgramsProgram>
        }
      </Slide>
    )
  }
}

OtherPrograms.propTypes = {
  students: PropTypes.object.isRequired
}

export default OtherPrograms
