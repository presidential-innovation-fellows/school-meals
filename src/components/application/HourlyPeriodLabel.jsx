import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class HourlyPeriodLabel extends Component {
  render() {
    const { children, period } = this.props
    let props

    switch (period) {
      case 'day':
        props = {
          id: 'app.hourlyPeriodLabel.day',
          description: 'Number of hours per day.',
          defaultMessage: 'hours per day'
        }
        break
      case 'month':
        props = {
          id: 'app.hourlyPeriodLabel.month',
          description: 'Number of hours per month.',
          defaultMessage: 'hours per month'
        }
        break
      case 'week':
        props = {
          id: 'app.hourlyPeriodLabel.week',
          description: 'Number of hours per week.',
          defaultMessage: 'hours per week'
        }
        break
    }

    return <FormattedMessage {...props}>{children}</FormattedMessage>
  }
}

HourlyPeriodLabel.propTypes = {
  children: PropTypes.func,
  period: PropTypes.oneOf(['day', 'month', 'week']).isRequired
}

export default HourlyPeriodLabel
