import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'

@observer
class Summary extends Component {
  get isValid() {
    return true
  }

  render() {
    const { applicationData } = this.props

    return (
      <Slide header="Summary" nextText="Submit" nextDisabled={!this.isValid}
             id="summary">
        <p>This is a summary of the information you have provided in your application for school meal benefits. Please review the information and confirm that everything is correct.</p>
      </Slide>
    )
  }
}

Summary.propTypes = {
  applicationData: PropTypes.object.isRequired
}

export default Summary
