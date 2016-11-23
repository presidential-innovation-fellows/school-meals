import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class FrequencyLabel extends Component {
  render() {
    const { children, frequency } = this.props
    let props

    switch (frequency) {
      case 'annually':
        props = {
          id: 'app.frequencyLabel.annually',
          description: 'Once per year.',
          defaultMessage: 'yearly'
        }
        break
      case 'monthly':
        props = {
          id: 'app.frequencyLabel.monthly',
          description: 'Once per month.',
          defaultMessage: 'monthly'
        }
        break
      case 'twicePerMonth':
        props = {
          id: 'app.frequencyLabel.twicePerMonth',
          description: 'Twice per month.',
          defaultMessage: 'twice per month'
        }
        break
      case 'everyTwoWeeks':
        props = {
          id: 'app.frequencyLabel.everyTwoWeeks',
          description: 'Every two weeks.',
          defaultMessage: 'every two weeks'
        }
        break
      case 'weekly':
        props = {
          id: 'app.frequencyLabel.weekly',
          description: 'Once per week.',
          defaultMessage: 'weekly'
        }
        break
      case 'hourly':
        props = {
          id: 'app.frequencyLabel.hourly',
          description: 'Once per hour.',
          defaultMessage: 'hourly'
        }
        break
    }

    return <FormattedMessage {...props}>{children}</FormattedMessage>
  }
}

FrequencyLabel.propTypes = {
  children: PropTypes.func,
  frequency: PropTypes.oneOf(['annually',
                              'monthly',
                              'twicePerMonth',
                              'everyTwoWeeks',
                              'weekly',
                              'hourly']).isRequired
}

export default FrequencyLabel
