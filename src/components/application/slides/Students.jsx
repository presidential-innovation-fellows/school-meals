import React, { Component } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class Students extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide id="students" nextDisabled={!students.isValid} beginsSection>
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.students.intro"
              description="Introductory paragraph."
              defaultMessage="List the names of the students in your household that attend school in {organizationName} and are applying for school meal benefits."
              values={{
                organizationName: organization.name
              }}
          />
        </p>

        <PersonCollection
            collection={students}
            label={
              <FormattedMessage
                  id="app.slides.students.label"
                  description="Label used for title, add/remove buttons."
                  defaultMessage="Student"
              />
            }
        />
      </Slide>
    )
  }
}

export default Students
