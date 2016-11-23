import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class FrequencyLabel extends Component {
  render() {
    const { frequency } = this.props

    switch (frequency) {
      case 'yearly':
      case 'annually':
        return <FormattedMessage
                   id="app.frequencyLabel.yearly"
                   description="Once per year."
                   defaultMessage="yearly"
               />
      case 'monthly':
        return <FormattedMessage
                   id="app.frequencyLabel.monthly"
                   description="Once per month."
                   defaultMessage="monthly"
               />
      case 'twicePerMonth':
        return <FormattedMessage
                   id="app.frequencyLabel.twicePerMonth"
                   description="Twice per month."
                   defaultMessage="twice per month"
               />
      case 'everyTwoWeeks':
        return <FormattedMessage
                   id="app.frequencyLabel.everyTwoWeeks"
                   description="Every two weeks."
                   defaultMessage="every two weeks"
               />
      case 'weekly':
        return <FormattedMessage
                   id="app.frequencyLabel.weekly"
                   description="Once per week."
                   defaultMessage="weekly"
               />
      case 'hourly':
        return <FormattedMessage
                   id="app.frequencyLabel.hourly"
                   description="Once per hour."
                   defaultMessage="hourly"
               />
    }
  }
}

FrequencyLabel.propTypes = {
  frequency: PropTypes.oneOf(['yearly',
                              'annually',
                              'monthly',
                              'twicePerMonth',
                              'everyTwoWeeks',
                              'weekly',
                              'hourly']).isRequired
}

export default FrequencyLabel
