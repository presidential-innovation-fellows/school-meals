import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import DemographicsSlide from './DemographicsSlide'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Demographics extends Component {
  render() {
    const { students } = this.props

    return (
      <div>
        {students.map(student =>
          <DemographicsSlide student={student} key={student.id} />
        )}
      </div>
    )
  }
}

Demographics.propTypes = {
  students: PropTypes.object.isRequired
}

export default Demographics
