import React, { Component, PropTypes } from 'react'
import InputField from '../InputField'
import Checkbox from '../Checkbox'
import { observer } from 'mobx-react'

@observer
class AssistanceProgram extends Component {
  render() {
    const { program, onChange } = this.props

    return (
      <div key={program.id}>
        <Checkbox object={program} name="isApplicable" onChange={onChange}>
          {program.name}
        </Checkbox>
        {program.isApplicable &&
        <InputField
            name="caseNumber"
            placeholder="Case number"
            label=""
            object={program}
        />
        }
      </div>
    )
  }
}

AssistanceProgram.propTypes = {
  onChange: PropTypes.func,
  program: PropTypes.object.isRequired
}

export default AssistanceProgram
