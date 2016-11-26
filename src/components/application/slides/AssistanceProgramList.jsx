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
    const { students, adults, otherChildren, signature } =
      this.props.applicationData

    program[fieldName] = value

    if (value) {
      // clear FHMR status
      students.clearSpecialStatuses()

      // clear income election
      this.props.applicationData.electToProvideIncome = null

      // clear adults other than attestor
      adults.items.splice(1)

      // clear other children
      otherChildren.empty()

      // clear attestor and student incomes
      adults.clearAllIncomes()
      students.clearAllIncomes()

      // clear SSN
      signature.noSsn = null
      signature.ssnLastFour = ''
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
