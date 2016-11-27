import React, { Component, PropTypes } from 'react'
import Checkboxes from '../Checkboxes'
import AssistanceProgram from './AssistanceProgram'
import { observer } from 'mobx-react'
import { ApplicationData } from '../../../stores/ApplicationData'

@observer
class AssistanceProgramList extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(fieldName, value, program) {
    const { students, adults, otherChildren, signature } =
      this.props.applicationData

    program[fieldName] = value

    if (value) {
      // Clear FHMR status.
      students.clearSpecialStatuses()

      // Clear income election.
      this.props.applicationData.electToProvideIncome = null

      // Clear adults other than attestor.
      adults.items.splice(1)

      // Clear other children.
      otherChildren.empty()

      // Clear attestor and student incomes.
      adults.clearAllIncomes()
      students.clearAllIncomes()

      // Clear SSN.
      signature.noSsn = null
      signature.ssnLastFour = ''
    } else {
      // Clear case number.
      program.caseNumber = ''
    }
  }

  render() {
    const { assistancePrograms } = this.props.applicationData

    return (
      <Checkboxes legend="Assistance programs">
        {assistancePrograms.map(program =>
          <AssistanceProgram
              program={program}
              onChange={this.handleChange}
              key={program.id}
          />
         )}
      </Checkboxes>
    )
  }
}

AssistanceProgramList.propTypes = {
  aplicationData: PropTypes.instanceOf(ApplicationData).isRequired
}

export default AssistanceProgramList
