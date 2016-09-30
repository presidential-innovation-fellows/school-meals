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
import IncomeSourceSingle from './IncomeSourceSingle'
import AdditionalIncome from './IncomeSourceAdditional'

@observer
class IncomeSource extends Component {
  get error() {
    const { name } = this.props
    const incomeSource = this.props.incomeSources[name]
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
    const incomeSource = this.props.incomeSources[name]
    const error = this.error
    const frequencyProps = {
      incomeSource,
      showHourly,
      showAnnual
    }

    return (
      <div>
        <Form>
          <label>{this.props.children}</label>
          <BooleanRadio name="has" object={incomeSource} />

          {incomeSource.has &&
           <div className="income-source-details">

              <IncomeSourceSingle incomeSource={incomeSource} name={name} showHourly={showHourly} showAnnual={showAnnual}/>

              <AdditionalIncome incomeSource={incomeSource} name={name} showHourly={showHourly} showAnnual={showAnnual}/>

           </div>
          }
        </Form>
      </div>
    )
  }
}

IncomeSource.propTypes = {
  incomeSources: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  showHourly: PropTypes.bool,
  showAnnual: PropTypes.bool
}

IncomeSource.defaultProps = {
  showHourly: false,
  showAnnual: false
}

export default IncomeSource
