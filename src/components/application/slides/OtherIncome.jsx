import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class OtherIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.other
    const incomeSources = incomeType.sources

    return(
      <Slide header="Other Income"
             headerSmall={person.firstName}
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>
          Does <strong>{person.firstName}</strong> have other sources of income including regular cash payments from outside the household, rental income, earned interest, investment income and annuities, or any other source of income available to pay for children’s school meals?
        </p>

        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
           <p>Note: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.</p>

           <br />

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
         </div>
        }
      </Slide>
    )
  }
}

OtherIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default OtherIncome
