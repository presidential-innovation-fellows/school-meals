import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Form } from 'react-bootstrap'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'

@observer
class Students extends Component {
  render() {
    const {
      attestation,
      students
    } = this.props

    return (
      <Slide header="Students" nextDisabled={!students.isValid}>
        <p>Thanks, {attestation.firstName}.</p>
        <p>List the names of the students in your household that attend [insert school district], and that are applying for school meal benefits.</p>

        <Form>
          <PersonCollection
            label="student"
            labelPlural="students"
            collection={students}
          />
        </Form>
      </Slide>
    )
  }
}

export default Students
