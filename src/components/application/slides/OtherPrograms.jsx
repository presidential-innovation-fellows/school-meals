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
    const props = {
      students,
      allPeopleCollections,
      applicability: this.applicability
    }

    return (
      <Slide nextDisabled={!this.isValid} id="other-programs">
        <p className="usa-font-lead">
          Your children can also qualify for free meals if any of these apply.
        </p>

        <OtherProgramsProgram attribute="isHomeless" {...props}>
          If not, but you moved your household into a different
          school district within the last three years to gain or look for
          temporary/seasonal work in agriculture or fishing,
          contact {organization.name} for help.
        </OtherProgramsProgram>

        <OtherProgramsProgram attribute="isMigrant" {...props}>
          If not, but your family relocates on a seasonal basis,
          contact {organization.name} for help.
        </OtherProgramsProgram>

        <OtherProgramsProgram attribute="isRunaway" {...props}>
          If not, but they chose to leave their prior family or household,
          contact {organization.name} for help.
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
