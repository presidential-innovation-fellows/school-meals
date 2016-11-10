import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import FormattedMessage from '../FormattedMessage'

@observer
class Foster extends Component {
  @observable applicability = {
    isFoster: null
  }

  get isValid() {
    const students = this.props.students

    if (students.length === 1) {
      for (let key in this.applicability) {
        if (students.first[key] == null) {
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
      students: students.items,
      allPeopleCollections,
      applicability: this.applicability
    }

    return (
      <Slide nextDisabled={!this.isValid} id="foster">
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.foster.confirm"
              description="No problem."
              defaultMessage="No problem! There are other ways to qualify."
          />
          
        </p>

        <OtherProgramsProgram attribute="isFoster" {...props} />
      </Slide>
    )
  }
}

Foster.propTypes = {
  allPeopleCollections: PropTypes.array.isRequired,
  students: PropTypes.object.isRequired
}

export default Foster
