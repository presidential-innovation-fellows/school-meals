import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { informalName } from '../../../helpers'

@observer
class OtherPrograms extends Component {
  @observable applicability = {
    isHomeless: null,
    isMigrant: null,
    isRunaway: null
  }

  get isValid() {
    const students = this.props.students

    if (students.length === 1) {
      for (let key in this.applicability) {
        if (students[0][key] == null) {
          return false
        }
      }
    } else {
      for (let key in this.applicability) {
        switch(this.applicability[key]) {
          case null:
            return false
          case true:
            if (students
              .map(student => student[key] !== true)
              .reduce((a, b) => a && b, true)) {
              return false
            }
        }
      }
    }

    return true
  }

  render() {
    const { allPeopleCollections, students } = this.props
    const contact = `${organization.name} (${organization.contact.phone} / ${organization.contact.email} / ${organization.contact.address})`
    const props = {
      students,
      allPeopleCollections,
      applicability: this.applicability
    }

    return (
      <Slide nextDisabled={!this.isValid} id="other-programs">
        <p className="usa-font-lead">
          No problem! There are other ways to qualify.
        </p>

        <OtherProgramsProgram attribute="isHomeless" {...props}>
          receive assistance under the McKinney-Vento Homeless Assistance Act?
          <br />
          <small>
            If not, but your household lacks a permanent address,
            or stays together in a shelter, hotel, or other temporary
            housing arrangement, contact {contact} to see whether they are
            eligible for benefits.
          </small>
        </OtherProgramsProgram>

        <OtherProgramsProgram attribute="isMigrant" {...props}>
          participate in the Migrant Education Program (MEP)?
          <br />
          <small>
            If not, but your family relocates on a seasonal basis,
            contact {contact} to see whether they are eligible for benefits
            under this program.
          </small>
        </OtherProgramsProgram>

        <OtherProgramsProgram attribute="isRunaway" {...props}>
          participate in any programs under the Runaway and Homeless Youth Act?
          <br />
          <small>
            If not, but they chose to leave their prior family or household,
            contact {contact} to see whether they are eligible for benefits
            under these programs.
          </small>
        </OtherProgramsProgram>
      </Slide>
    )
  }
}

OtherPrograms.propTypes = {
  allPeopleCollections: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired
}

export default OtherPrograms
