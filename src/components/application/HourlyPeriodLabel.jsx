import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class HourlyPeriodLabel extends Component {
  render() {
    const { period } = this.props

    switch (period) {
      case 'day':
        return <FormattedMessage
                   id="app.hourlyPeriodLabel.day"
                   description="Number of hours per day."
                   defaultMessage="hours per day"
               />
      case 'month':
        return <FormattedMessage
                   id="app.hourlyPeriodLabel.month"
                   description="Number of hours per month."
                   defaultMessage="hours per month"
               />
      case 'week':
        return <FormattedMessage
                   id="app.hourlyPeriodLabel.week"
                   description="Number of hours per week."
                   defaultMessage="hours per week"
               />
    }
  }
}

HourlyPeriodLabel.propTypes = {
  period: PropTypes.oneOf(['day', 'month', 'week']).isRequired
}

export default HourlyPeriodLabel
