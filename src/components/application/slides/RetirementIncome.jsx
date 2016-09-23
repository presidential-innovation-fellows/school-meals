import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'

@observer
class RetirementIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.retirement
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "retirement",
      label: "Retirement Income",
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
          Social Security (including Black Lung Benefits and Railroad Retirement)
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="privatePension">
          Pension
        </IncomeSource>
      </IncomeType>
    )
  }
}

RetirementIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default RetirementIncome
