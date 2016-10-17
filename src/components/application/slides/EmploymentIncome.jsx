import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

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
        <IncomeSource incomeSources={incomeSources} name="salaryWages"
                      showHourly={true} showAnnual={true}>
          Salary / Wages
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="tips">
          Tips
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="commission">
          Commission
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} showAnnual={true} name="cashBonus">
          <Tooltipcomp id="cashBonus" text={tooltiptext.cashBonus} target="Cash bonus" />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} showHourly={true} showAnnual={true} name="selfEmployment">
          Net income from &nbsp;
          <Tooltipcomp id="selfEmployment" text={tooltiptext.selfEmployment} target="self-employment" />
        </IncomeSource>
      </IncomeType>
    )
  }
}

EmploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default EmploymentIncome
