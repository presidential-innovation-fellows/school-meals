import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'

@observer
class OtherIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.other
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "other",
      label: "Other Income",
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="regularCashPayments">
          Regular cash payments from outside the household
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="rentalIncome">
          Rental income
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="earnedInterest">
          Earned interest
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="investmentIncome">
          Investment income
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="annuity">
          Annuity
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="other">
          Any other income available to pay for children's school meals
        </IncomeSource>
      </IncomeType>
    )
  }
}

OtherIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default OtherIncome
