import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import { observer } from 'mobx-react'

@observer
class OtherPrograms extends Component {
  render() {
    const { students } = this.props
    const oneStudent = students.length === 1

    return (
      <Slide header="Other Programs">

        <p>No problem! There are other ways to qualify.</p>

        <p>If <strong>{students.informalList}</strong> {oneStudent ? 'is a foster child' : 'are forster children'} or qualify as homeless, migrant, or runaway, then they may be eligible for school meal benefits.</p>

        <OtherProgramsProgram students={students} attribute="isFoster">
          {oneStudent ? <span>Is <strong>{students.first.firstName}</strong></span> : 'Are any students'} living with you under a formal (court-ordered) foster care arrangement?
        </OtherProgramsProgram>

        <OtherProgramsProgram students={students} attribute="isHomeless">
          {oneStudent ? <span>Does <strong>{students.first.firstName}</strong></span> : 'Do any students'} receive assistance under the McKinney-Vento Homeless Assistance Act, or does your household lack a permanent address, or stay together in a shelter, hotel, or other temporary housing arrangement?
        </OtherProgramsProgram>

        <OtherProgramsProgram students={students} attribute="isMigrant">
          {oneStudent ? <span>Does <strong>{students.first.firstName}</strong></span> : 'Do any students'} participate in the Migrant Education Program (MEP), or does your family relocate on a seasonal basis?
        </OtherProgramsProgram>

        <OtherProgramsProgram students={students} attribute="isRunaway">
          {oneStudent ? <span>Does <strong>{students.first.firstName}</strong></span> : 'Do any students'} participate in any programs under the Runaway and Homeless Youth Act, or have they chosen to leave their prior family or household?
        </OtherProgramsProgram>
      </Slide>
    )
  }
}

OtherPrograms.propTypes = {
  students: PropTypes.object.isRequired
}

export default OtherPrograms
