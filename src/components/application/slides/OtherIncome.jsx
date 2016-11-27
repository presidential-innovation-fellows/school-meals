import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class OtherIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.other
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: 'other',
      person
    }

    return (
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="regularCashPayments">
          <FormattedMessage
              id="app.slides.otherIncome.regularCashPayments"
              description="Regular Cash Payments"
              defaultMessage="{tooltip} from outside the household"
              values={{
                tooltip:
                  <Tooltip text={tooltiptext.regularCashPayments}>
                    <FormattedMessage
                        id="app.slides.otherIncome.regularCashPaymentsTooltip"
                        description="Regular cash payments"
                        defaultMessage="Regular cash payments"
                    />
                  </Tooltip>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="rentalIncome">
          <Tooltip text={tooltiptext.rental}>
            <FormattedMessage
                id="app.slides.otherIncome.rental"
                description="Rental income"
                defaultMessage="Rental income"
            />
          </Tooltip>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="earnedInterest">
          <Tooltip text={tooltiptext.earnedInterest}>
            <FormattedMessage
                id="app.slides.otherIncome.earnedInterest"
                description="Earned interest"
                defaultMessage="Earned interest"
            />
          </Tooltip>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="investmentIncome">
          <FormattedMessage
              id="app.slides.otherIncome.investmentIncome"
              description="Investment income"
              defaultMessage="Investment income"
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="annuity">
          <Tooltip text={tooltiptext.annuity}>
            <FormattedMessage
                id="app.slides.otherIncome.annuity"
                description="Annuity"
                defaultMessage="Annuity"
            />
          </Tooltip>
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
