import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeAmountLabel extends Component {
  render() {
    const { frequency } = this.props

    switch (frequency) {
      case 'annually':
        return <FormattedMessage
            id="app.incomeAmountLabel.annually"
            description="Income earned annually."
            defaultMessage="per year"
               />
      case 'monthly':
        return <FormattedMessage
            id="app.incomeAmountLabel.monthly"
            description="Income earned monthly."
            defaultMessage="per month"
               />
      case 'twicePerMonth':
        return <FormattedMessage
            id="app.incomeAmountLabel.twicePerMonth"
            description="Income earned twice per month."
            defaultMessage="twice per month"
               />
      case 'everyTwoWeeks':
        return <FormattedMessage
            id="app.incomeAmountLabel.everyTwoWeeks"
            description="Income earned every two weeks."
            defaultMessage="every two weeks"
               />
      case 'weekly':
        return <FormattedMessage
            id="app.incomeAmountLabel.weekly"
            description="Income earned weekly."
            defaultMessage="per week"
               />
      case 'daily':
        return <FormattedMessage
            id="app.incomeAmountLabel.daily"
            description="Income earned daily."
            defaultMessage="per day"
               />
      case 'hourly':
        return <FormattedMessage
            id="app.incomeAmountLabel.hourly"
            description="Income earned hourly."
            defaultMessage="per hour"
               />
      default:
        return null
    }
  }
}

IncomeAmountLabel.propTypes = {
  frequency: PropTypes.oneOf([
    'annually',
    'monthly',
    'twicePerMonth',
    'everyTwoWeeks',
    'weekly',
    'daily',
    'hourly'
  ]).isRequired
}

export default IncomeAmountLabel
