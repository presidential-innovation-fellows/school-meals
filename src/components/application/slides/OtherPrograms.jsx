import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { informalName } from '../../../helpers'
import FormattedMessage from '../FormattedMessage'

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
    const props = {
      students,
      allPeopleCollections,
      applicability: this.applicability
    }

    return (
      <Slide nextDisabled={!this.isValid} id="other-programs">
        <p className="usa-font-lead">
         <FormattedMessage
              id="app.slides.otherPrograms.intro"
              description="Introductory paragraph."
              defaultMessage="Your children can also qualify for free meals if any of these apply."
         />
        </p>

        <OtherProgramsProgram attribute="isHomeless" {...props}>
           <FormattedMessage
              id="app.slides.otherPrograms.isHomeless"
              description="Homeless organizations"
              defaultMessage="If not, but your household lacks a permanent address, or stays together in a shelter, hotel, or other temporary housing arrangement, contact {organizationName} for help."
              values={{
                organizationName: organization.name
              }}
            />
        </OtherProgramsProgram>

        <OtherProgramsProgram attribute="isMigrant" {...props}>
          <FormattedMessage
              id="app.slides.otherPrograms.isMigrant"
              description="Migrant Organizations"
              defaultMessage="If not, but you moved your household into a different school district within the last three years to gain or look for temporary/seasonal work in agriculture or fishing, contact {organizationName} for help."
              values={{
                organizationName: organization.name
              }}
          />
        </OtherProgramsProgram>

        <OtherProgramsProgram attribute="isRunaway" {...props}>
          <FormattedMessage
              id="app.slides.otherPrograms.isRunAway"
              description="Run Away Organizations"
              defaultMessage="If not, but they chose to leave their prior family or household, contact {organizationName} for help."
              values={{
                organizationName: organization.name
              }}
          />
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
