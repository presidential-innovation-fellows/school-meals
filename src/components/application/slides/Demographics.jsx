import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import DemographicsForm from './DemographicsForm'
import { organization } from '../../../config'
import { observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-bootstrap'

@observer
class Demographics extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide header="Optional" id="optional" showHelp={false}>
        <p>We are required to ask for information about your children's race and ethnicity. This information is important and helps to make sure we are fully serving our community. Responding to this section is optional and does not affect your children's eligibility for free or reduced price meals.</p>

        <p>Please complete the following questions:</p>

        <Row>
          {students.map(student =>
            <Col key={student.id} xs={12} sm={6} md={4}>
              <DemographicsForm student={student} key={student.id} />
            </Col>
           )}
        </Row>
      </Slide>
    )
  }
}

Demographics.propTypes = {
  students: PropTypes.object.isRequired
}

export default Demographics
