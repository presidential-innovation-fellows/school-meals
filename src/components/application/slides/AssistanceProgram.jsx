import React, { Component, PropTypes } from 'react'
import InputField from '../InputField'
import Checkbox from '../Checkbox'
import { observer } from 'mobx-react'
import { AssistancePrograms as Store } from '../../../stores/ApplicationData'

@observer
class AssistanceProgram extends Component {
  render() {
    const { program } = this.props

    return(
      <div key={program.id}>
        <Checkbox object={program} name="isApplicable">
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
  program: PropTypes.object.isRequired
}

export default AssistanceProgram
