import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import {FormattedMessage} from 'react-intl'

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
        <FormattedMessage
              id="app.slides.otherIncome.regularCashPayments"
              description="Regular Cash Payments"
              defaultMessage="{tooltip}&nbsp; from outside the household"
              values={{
                tooltip:
                        <Tooltipcomp text={tooltiptext.regularCashPayments}>
                          <FormattedMessage
                            id="app.slides.otherIncome.regularCashPaymentsTooltip"
                            description="Regular cash payments"
                            defaultMessage="Regular cash payments"
                          />
                        </Tooltipcomp>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="rentalIncome">
        <Tooltipcomp text={tooltiptext.rental}>
              <FormattedMessage
                id="app.slides.otherIncome.rental"
                description="Rental income"
                defaultMessage="Rental income"
              />
        </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="earnedInterest">
        <Tooltipcomp text={tooltiptext.earnedInterest}>
              <FormattedMessage
                id="app.slides.otherIncome.earnedInterest"
                description="Earned interest"
                defaultMessage="Earned interest"
              />
        </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="investmentIncome">
        <FormattedMessage
                id="app.slides.otherIncome.investmentIncome"
                description="Investment income"
                defaultMessage="Investment income"
        />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="annuity">
        <Tooltipcomp text={tooltiptext.annuity}>
              <FormattedMessage
                id="app.slides.otherIncome.annuity"
                description="Annuity"
                defaultMessage="Annuity"
              />
        </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="other">
        <FormattedMessage
                id="app.slides.otherIncome.otherIncome"
                description="other income"
                defaultMessage="Any other income available to pay for children’s school meals"
        />
        </IncomeSource>
      </IncomeType>
    )
  }
}

OtherIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default OtherIncome
