import React, { Component, PropTypes } from 'react'
import Checkboxes from '../Checkboxes'
import AssistanceProgram from './AssistanceProgram'
import { observer } from 'mobx-react'
import { AssistancePrograms as Store } from '../../../stores/ApplicationData'

@observer
class AssistanceProgramList extends Component {
  render() {
    const { assistancePrograms } = this.props

    return(
      <Checkboxes legend="Assistance programs">
        {assistancePrograms.map(program =>
          <AssistanceProgram program={program} />
         )}
      </Checkboxes>
    )
  }
}

AssistanceProgramList.propTypes = {
  assistancePrograms: PropTypes.instanceOf(Store).isRequired
}

export default AssistanceProgramList
