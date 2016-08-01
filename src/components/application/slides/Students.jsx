import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Students extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide id="students" nextDisabled={!students.isValid}
             showHelp={false} beginsSection>
        <p>List the names of the students in your household that attend {organization.name} and are applying for school meal benefits.</p>

        <PersonCollection
            label="student"
            labelPlural="students"
            collection={students}
        />
      </Slide>
    )
  }
}

export default Students
