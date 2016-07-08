import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class OtherIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.other
    const incomeSources = incomeType.sources

    return(
      <Slide header={person.firstName}
             headerSmall="Other Income"
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        <Well>
          NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
        </Well>

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
      </Slide>
    )
  }
}

OtherIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default OtherIncome
