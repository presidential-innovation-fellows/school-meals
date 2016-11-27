import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { hoursExceedPeriodCapacity } from '../../helpers'
import BooleanRadio from './BooleanRadio'
import Form from './Form'
import IncomeSourceSingle from './IncomeSourceSingle'
import AdditionalIncome from './IncomeSourceAdditional'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeSource extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  get error() {
    const { name } = this.props
    const incomeSource = this.props.incomeSources[name]
    const { hourlyPeriod } = incomeSource

    if (hoursExceedPeriodCapacity(incomeSource)) {
      switch (hourlyPeriod) {
        case 'day':
          return(
            <FormattedMessage
                id="app.incomeSource.tooManyHours.day"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 24 hours in a day."
            />
          )
        case 'week':
          return(
            <FormattedMessage
                id="app.incomeSource.tooManyHours.week"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 168 hours in a week."
            />
          )
        case 'month':
          return(
            <FormattedMessage
                id="app.incomeSource.tooManyHours.month"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 730 hours in a month."
            />
          )
        default:
          return null
      }
    }
  }

  onChange(fieldName, value, incomeSource) {
    incomeSource[fieldName] = value

    if (!value) {
      incomeSource.amount = ''
      incomeSource.frequency = ''
      incomeSource.hourlyHours = ''
      incomeSource.hourlyPeriod = ''
      incomeSource.more = []
    }
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
          <BooleanRadio name="has"
                        object={incomeSource}
                        onChange={this.onChange} />

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
