import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage, defineMessages } from 'react-intl'

@observer
class HourlyPeriodLabel extends Component {
  messages = defineMessages({
    day: {
      id: 'app.hourlyPeriodLabel.day',
      description: 'Number of hours per day.',
      defaultMessage: 'hours per day'
    },
    month: {
      id: 'app.hourlyPeriodLabel.month',
      description: 'Number of hours per month.',
      defaultMessage: 'hours per month'
    },
    week: {
      id: 'app.hourlyPeriodLabel.week',
      description: 'Number of hours per week.',
      defaultMessage: 'hours per week'
    }
  })

  render() {
    const { children, period } = this.props

    return (
      <FormattedMessage {...this.messages[period]}>
        { children }
      </FormattedMessage>
    )
  }
}

HourlyPeriodLabel.propTypes = {
  children: PropTypes.func,
  period: PropTypes.oneOf(['day', 'month', 'week']).isRequired
}

export default HourlyPeriodLabel
