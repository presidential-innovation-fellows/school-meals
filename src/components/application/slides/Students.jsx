import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'

@observer
class Students extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide header="Students" nextDisabled={!students.isValid}>
        <p>List the names of the students in your household that attend [insert school district], and that are applying for school meal benefits.</p>

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
