import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { hoursExceedPeriodCapacity } from '../../helpers'
import BooleanRadio from './BooleanRadio'
import Checkbox from './Checkbox'
import Form from './Form'
import IncomeSourceAmount from './IncomeSourceAmount'
import IncomeSourceFrequency from './IncomeSourceFrequency'
import IncomeSourceHourlyPeriod from './IncomeSourceHourlyPeriod'
import IncomeSourceSummary from './IncomeSourceSummary'
import AdditionalIncome from './IncomeSourceAdditional'

@observer
class IncomeSourceSingle extends Component {
  get error() {
    const { name } = this.props
    const incomeSource = this.props.incomeSource
    const { hourlyPeriod } = incomeSource
    const max = {
      'day': 24,
      'week': 168,
      'month': 730
    }

    if (hoursExceedPeriodCapacity(incomeSource)) {
      return `There are only ${max[hourlyPeriod]} hours in a ${hourlyPeriod}.`
    }

    return null
  }

  render() {
    const { name, showHourly, showAnnual } = this.props
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
  name: PropTypes.string.isRequired,
  showHourly: PropTypes.bool,
  showAnnual: PropTypes.bool
}

IncomeSourceSingle.defaultProps = {
  showHourly: false,
  showAnnual: false
}

export default IncomeSourceSingle
