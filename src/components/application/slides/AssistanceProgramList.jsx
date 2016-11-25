import React, { Component, PropTypes } from 'react'
import Checkboxes from '../Checkboxes'
import AssistanceProgram from './AssistanceProgram'
import { observer } from 'mobx-react'
import { ApplicationData } from '../../../stores/ApplicationData'

@observer
class AssistanceProgramList extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(fieldName, value, program) {
    program[fieldName] = value

    if (value) {
      // clear FHMR status
      // TODO

      // clear adults other than attestor
      // TODO

      // clear other children
      // TODO

      // clear SSN
      // TODO
    }
  }

  render() {
    const { assistancePrograms } = this.props.applicationData

    return(
      <Checkboxes legend="Assistance programs">
        {assistancePrograms.map(program =>
          <AssistanceProgram program={program}
                             onChange={this.onChange}
                             key={program.id} />
         )}
      </Checkboxes>
    )
  }
}

AssistanceProgramList.propTypes = {
  aplicationData: PropTypes.instanceOf(ApplicationData).isRequired
}

export default AssistanceProgramList
