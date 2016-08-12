import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { numberFormat } from 'underscore.string'

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
        return `per year`
      case 'monthly':
        return `per month`
      case 'twicePerMonth':
        return `twice per month`
      case 'everyTwoWeeks':
        return `every two weeks`
      case 'weekly':
        return `per week`
      case 'hourly':
        if (hourlyPeriod) {
          return `per ${hourlyPeriod}`
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
