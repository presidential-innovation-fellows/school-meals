import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { hoursExceedPeriodCapacity } from '../../helpers'
import IncomeSourceAmount from './IncomeSourceAmount'
import IncomeSourceFrequency from './IncomeSourceFrequency'
import IncomeSourceHourlyPeriod from './IncomeSourceHourlyPeriod'
import IncomeSourceSummary from './IncomeSourceSummary'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeSourceSingle extends Component {
  get error() {
    const incomeSource = this.props.incomeSource
    const { hourlyPeriod } = incomeSource

    if (hoursExceedPeriodCapacity(incomeSource)) {
      switch (hourlyPeriod) {
        case 'day':
          return (
            <FormattedMessage
                id="app.incomeSourceSingle.tooManyHours.day"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 24 hours in a day."
            />
          )
        case 'week':
          return (
            <FormattedMessage
                id="app.incomeSourceSingle.tooManyHours.week"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 168 hours in a week."
            />
          )
        case 'month':
          return (
            <FormattedMessage
                id="app.incomeSourceSingle.tooManyHours.month"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 730 hours in a month."
            />
          )
        default:
          return null
      }
    }

    return null
  }

  render() {
    const { showHourly, showAnnual } = this.props
    const incomeSource = this.props.incomeSource
    const error = this.error

    const frequencyProps = {
      incomeSource,
      showHourly,
      showAnnual
    }

    return (
      <div>

             <div>
               <IncomeSourceAmount incomeSource={incomeSource} />
               <IncomeSourceFrequency {...frequencyProps} />

             </div>
             {incomeSource.frequency === 'hourly' &&
              <div>
                <IncomeSourceAmount incomeSource={incomeSource}
                                    fieldName="hourlyHours"
                                    placeholder=""
                                    prepend=""
                                    error={!!error} />
                <IncomeSourceHourlyPeriod incomeSource={incomeSource} />
              </div>
             }
             {error && <span className="usa-input-error-message"
                             role="alert">{error}</span>}
             {!error && incomeSource.frequency === 'hourly' &&
              <IncomeSourceSummary incomeSource={incomeSource} />}

      </div>
    )
  }
}

IncomeSourceSingle.propTypes = {
  incomeSource: PropTypes.object.isRequired,
  showHourly: PropTypes.bool,
  showAnnual: PropTypes.bool
}

IncomeSourceSingle.defaultProps = {
  showHourly: false,
  showAnnual: false
}

export default IncomeSourceSingle
