import React, { Component, PropTypes } from 'react'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { AssistancePrograms as Store } from '../../../stores/ApplicationData'

@observer
class AssistanceProgramList extends Component {
  render() {
    const { assistancePrograms } = this.props

    return(
      <div>
        <p>Please enter your case number(s):</p>

        {assistancePrograms.map(program =>
          <InputField
              key={program.id}
              name="caseNumber"
              label={program.name}
              object={program}
              placeholder="Case number"
          />
        )}
      </div>
    )
  }
}

AssistanceProgramList.propTypes = {
  assistancePrograms: PropTypes.instanceOf(Store).isRequired
}

export default AssistanceProgramList
