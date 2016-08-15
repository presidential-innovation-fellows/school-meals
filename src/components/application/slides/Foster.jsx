import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import OtherProgramsProgram from './OtherProgramsProgram'
import { observer } from 'mobx-react'
import { organization } from '../../../config'

@observer
class Foster extends Component {
  get isValid() {
    return true
  }

  render() {
    const { allPeopleCollections, students } = this.props
    const contact = `${organization.name} (${organization.contact.phone} / ${organization.contact.email} / ${organization.contact.address})`
    const props = {
      students: students.items,
      allPeopleCollections
    }

    return (
      <Slide nextDisabled={!this.isValid} id="foster">
        <p className="usa-font-lead">
          No problem! There are other ways to qualify.
        </p>

        <OtherProgramsProgram attribute="isFoster" {...props}>
          living with you under a formal (court-ordered) foster care
          arrangement?
        </OtherProgramsProgram>
      </Slide>
    )
  }
}

Foster.propTypes = {
  allPeopleCollections: PropTypes.array.isRequired,
  students: PropTypes.object.isRequired
}

export default Foster
