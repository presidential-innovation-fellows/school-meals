import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import IncomeAmount from './IncomeAmount'

@observer
class IncomeLineItemSummary extends Component {
  get frequency() {
    const { frequency, hourlyPeriod } = this.props.lineItem

    if (frequency === 'hourly') {
      switch (hourlyPeriod) {
        case 'day':
          return 'daily'
        case 'week':
          return 'weekly'
        case 'month':
          return 'monthly'
        default:
          return null
      }
    } else {
      return frequency
    }
  }

  get amount() {
    const { amount, frequency, hourlyHours } = this.props.lineItem
    return (amount || 0) * (frequency === 'hourly' ? (hourlyHours || 0) : 1)
  }

  render() {
    const className = classnames({
      'usa-label-big': true,
      'income-line-item-summary': true,
      'invisible': !(this.amount && this.frequency)
    })

    return (
      <span className={className}>
        ✓
        {' '}
        {this.amount && this.frequency &&
        <IncomeAmount amount={this.amount} frequency={this.frequency} />
        }
      </span>
    )
  }
}

IncomeLineItemSummary.propTypes = {
  lineItem: PropTypes.object.isRequired
}

export default IncomeLineItemSummary
