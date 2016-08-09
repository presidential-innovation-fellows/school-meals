import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'

@observer
class EmploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.employment
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "employment",
      label: "Employment Income",
      showMilitaryCaveat: person.incomeTypes.military.isApplicable,
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>
        <IncomeSource incomeSources={incomeSources} name="salaryWages">
          Salary / Wages
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
      </IncomeType>
    )
  }
}

EmploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default EmploymentIncome
