import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage, defineMessages } from 'react-intl'

@observer
class FrequencyLabel extends Component {
  messages = defineMessages({
    annually: {
      id: 'app.frequencyLabel.annually',
      description: 'Once per year.',
      defaultMessage: 'yearly'
    },
    monthly: {
      id: 'app.frequencyLabel.monthly',
      description: 'Once per month.',
      defaultMessage: 'monthly'
    },
    twicePerMonth: {
      id: 'app.frequencyLabel.twicePerMonth',
      description: 'Twice per month.',
      defaultMessage: 'twice per month'
    },
    everyTwoWeeks: {
      id: 'app.frequencyLabel.everyTwoWeeks',
      description: 'Every two weeks.',
      defaultMessage: 'every two weeks'
    },
    weekly: {
      id: 'app.frequencyLabel.weekly',
      description: 'Once per week.',
      defaultMessage: 'weekly'
    },
    hourly: {
      id: 'app.frequencyLabel.hourly',
      description: 'Once per hour.',
      defaultMessage: 'hourly'
    }
  })

  render() {
    const { children, frequency } = this.props

    return (
      <FormattedMessage {...this.messages[frequency]}>
        { children }
      </FormattedMessage>
    )
  }
}

FrequencyLabel.propTypes = {
  children: PropTypes.func,
  frequency: PropTypes.oneOf([
    'annually',
    'monthly',
    'twicePerMonth',
    'everyTwoWeeks',
    'weekly',
    'hourly'
  ]).isRequired
}

export default FrequencyLabel
