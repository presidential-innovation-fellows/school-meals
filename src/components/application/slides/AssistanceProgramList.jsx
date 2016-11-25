import React, { Component, PropTypes } from 'react'
import Checkboxes from '../Checkboxes'
import AssistanceProgram from './AssistanceProgram'
import { observer } from 'mobx-react'
import { ApplicationData } from '../../../stores/ApplicationData'

@observer
class AssistanceProgramList extends Component {
  render() {
    const { assistancePrograms } = this.props.applicationData

    return(
      <Checkboxes legend="Assistance programs">
        {assistancePrograms.map(program =>
          <AssistanceProgram program={program} key={program.id} />
         )}
      </Checkboxes>
    )
  }
}

AssistanceProgramList.propTypes = {
  aplicationData: PropTypes.instanceOf(ApplicationData).isRequired
}

export default AssistanceProgramList
