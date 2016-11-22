import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { numberFormat } from 'underscore.string'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeSourceSummary extends Component {
  get value() {
    const { amount, frequency, hourlyHours } = this.props.incomeSource
    return (amount || 0) * (frequency === 'hourly' ? (hourlyHours || 0) : 1)
  }

  get period() {
    const { frequency, hourlyPeriod } = this.props.incomeSource

    switch (frequency) {
      case 'yearly':
      case 'annually':
        return <FormattedMessage
                   id="app.incomeSourceSummary.annually"
                   description="Hourly income reported annually."
                   defaultMessage="per year"
               />
      case 'monthly':
        return <FormattedMessage
                   id="app.incomeSourceSummary.monthly"
                   description="Hourly income reported monthly."
                   defaultMessage="per month"
               />
      case 'twicePerMonth':
        return <FormattedMessage
                   id="app.incomeSourceSummary.twicePerMonth"
                   description="Hourly income reported twice per month."
                   defaultMessage="twice per month"
               />
      case 'everyTwoWeeks':
        return <FormattedMessage
                   id="app.incomeSourceSummary.everyTwoWeeks"
                   description="Hourly income reported every two weeks."
                   defaultMessage="every two weeks"
               />
      case 'weekly':
        return <FormattedMessage
                   id="app.incomeSourceSummary.weekly"
                   description="Hourly income reported weekly."
                   defaultMessage="per week"
               />
      case 'hourly':
        switch (hourlyPeriod) {
          case 'week':
            return <FormattedMessage
                       id="app.incomeSourceSummary.hourly.week"
                       description="Hourly income reported weekly by week."
                       defaultMessage="per week"
                   />
          case 'month':
            return <FormattedMessage
                       id="app.incomeSourceSummary.hourly.month"
                       description="Hourly income reported weekly by month."
                       defaultMessage="per month"
                   />
        }
      default:
        return null
    }
  }

  render() {
    const className = classnames({
      'usa-label-big': true,
      'income-source-summary': true,
      'invisible': !(this.value && this.period)
    })

    return (
      <span className={className}>
        ✓ ${numberFormat(this.value)} {this.period}
      </span>
    )
  }
}

IncomeSourceSummary.propTypes = {
  incomeSource: PropTypes.object.isRequired
}

export default IncomeSourceSummary
