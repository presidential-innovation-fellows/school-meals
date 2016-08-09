import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { informalName } from '../../../helpers'

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
    const { allPeopleCollections, students } = this.props
    const oneStudent = students.length === 1
    const oneNonFosterStudent = this.studentsExceptFoster.length === 1
    const contact = `${organization.name} (${organization.contact.phone} / ${organization.contact.email} / ${organization.contact.address})`

    return (
      <Slide nextDisabled={!this.isValid} id="other-programs">

        <p>No problem! There are other ways to qualify.</p>

        <p>If <strong>{students.informalList(allPeopleCollections)}</strong> {oneStudent ? 'is a foster child' : 'are foster children'} or qualify as homeless, migrant, or runaway, then they may be eligible for school meal benefits.</p>

        <OtherProgramsProgram students={students.items} attribute="isFoster">
          {oneStudent ? <span>Is <strong>{informalName(students.first)}</strong></span> : <span>Are <strong>{students.informalList(allPeopleCollections)}</strong></span>} living with you under a formal (court-ordered) foster care arrangement?
        </OtherProgramsProgram>

        {this.studentsExceptFoster.length > 0 &&
          <OtherProgramsProgram students={this.studentsExceptFoster} attribute="isHomeless">
            {oneNonFosterStudent ? <span>Does <strong>{informalName(this.studentsExceptFoster[0])}</strong></span> : 'Do any students'} receive assistance under the McKinney-Vento Homeless Assistance Act?
            <br />
            <small>
              If not, but your household lacks a permanent address, or stays together in a shelter, hotel, or other temporary housing arrangement, contact {contact} to see whether they are eligible for benefits.
            </small>
          </OtherProgramsProgram>
        }

        {this.studentsExceptFoster.length > 0 &&
          <OtherProgramsProgram students={this.studentsExceptFoster} attribute="isMigrant">
            {oneNonFosterStudent ? <span>Does <strong>{informalName(this.studentsExceptFoster[0])}</strong></span> : 'Do any students'} participate in the Migrant Education Program (MEP)?
            <br />
            <small>
              If not, but your family relocates on a seasonal basis, contact {contact} to see whether they are eligible for benefits under this program.
            </small>
          </OtherProgramsProgram>
        }

        {this.studentsExceptFoster.length > 0 &&
          <OtherProgramsProgram students={this.studentsExceptFoster} attribute="isRunaway">
            {oneNonFosterStudent ? <span>Does <strong>{informalName(this.studentsExceptFoster[0])}</strong></span> : 'Do any students'} participate in any programs under the Runaway and Homeless Youth Act?
            <br />
            <small>
              If not, but they chose to leave their prior family or household, contact {contact} to see whether they are eligible for benefits under these programs.
            </small>
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
