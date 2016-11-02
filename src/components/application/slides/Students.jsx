import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { observer } from 'mobx-react'
import FormattedMessage from '../FormattedMessage'

@observer
class Students extends Component {
  render() {
    const { students, allPeopleCollections } = this.props

    return (
      <Slide id="students" nextDisabled={!students.isValid} beginsSection>
        <p className="usa-font-lead">
        <FormattedMessage
              id="app.slides.students.intro"
              description="Introductory paragraph."
              defaultMessage="List the names of the students in your household that attend {organizationName} and are applying for school meal benefits."
              values={{
              organizationName: organization.name
              }}
        />
        </p>

        <PersonCollection
            label="Student"
            labelPlural="students"
            collection={students}
        />
      </Slide>
    )
  }
}

export default Students
