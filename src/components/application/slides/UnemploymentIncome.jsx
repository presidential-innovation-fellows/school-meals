import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'

@observer
class UnemploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.unemployment
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "unemployment",
      label: "Unemployment Income",
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="unemployment">
          Unemployment benefits
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="workersComp">
          Worker's compensation
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="strike">
          Strike benefits
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="ssdi">
          Social Security Disability Insurance (SSDI)
        </IncomeSource>
      </IncomeType>
    )
  }
}

UnemploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default UnemploymentIncome
