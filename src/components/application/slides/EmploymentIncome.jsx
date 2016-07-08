import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class EmploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.employment
    const incomeSources = incomeType.sources

    return(
      <Slide header={person.firstName}
             headerSmall="Employment Income"
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        <Well>
          NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
        </Well>

        <IncomeSource incomeSources={incomeSources} name="salary">
          Salary
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="wages">
          Wages
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="tips">
          Tips
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="commission">
          Commission
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="cashBonus">
          Cash bonus
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="selfEmployment">
          Net income from self-employment
        </IncomeSource>
      </Slide>
    )
  }
}

EmploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default EmploymentIncome
