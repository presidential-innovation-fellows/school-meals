import React, { Component, PropTypes } from 'react'
import Form from '../Form'
import Fieldset from '../Fieldset'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { AssistancePrograms as Store } from '../../../stores/ApplicationData'

@observer
class AssistanceProgramList extends Component {
  render() {
    const { assistancePrograms } = this.props

    return(
      <Form large>
        <Fieldset legend="Case numbers">
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
        </Fieldset>
      </Form>
    )
  }
}

AssistanceProgramList.propTypes = {
  assistancePrograms: PropTypes.instanceOf(Store).isRequired
}

export default AssistanceProgramList
