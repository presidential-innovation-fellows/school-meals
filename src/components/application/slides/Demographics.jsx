import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import DemographicsForm from './DemographicsForm'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Demographics extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide id="optional">
        <p className="usa-font-lead">This is an optional question for information we collect about students that attend school in {organization.name}.</p>

        <p>We are required to ask for information about the race and ethnicity of the students that are applying for the program.</p>

        <p>This information is important and helps to make sure we are fully serving our community. Responding to this section is optional and does not affect your children's eligibility for free or reduced price meals.</p>

        {students.map(student =>
          <DemographicsForm student={student} key={student.id} />
        )}
      </Slide>
    )
  }
}

Demographics.propTypes = {
  students: PropTypes.object.isRequired
}

export default Demographics
