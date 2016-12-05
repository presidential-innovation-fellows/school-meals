import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import { hoursExceedPeriodCapacity } from '../../helpers'
import Button from './Button'
import IncomeAmountInput from './IncomeAmountInput'
import IncomeFrequency from './IncomeFrequency'
import IncomeHourlyPeriod from './IncomeHourlyPeriod'
import IncomeLineItemSummary from './IncomeLineItemSummary'

@observer
class IncomeLineItem extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove() {
    this.props.onRemove(this.props.lineItem)
  }

  get error() {
    const lineItem = this.props.lineItem
    const { hourlyPeriod } = lineItem

    if (hoursExceedPeriodCapacity(lineItem)) {
      switch (hourlyPeriod) {
        case 'day':
          return (
            <FormattedMessage
                id="app.incomeLineItem.tooManyHours.day"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 24 hours in a day."
            />
          )
        case 'week':
          return (
            <FormattedMessage
                id="app.incomeLineItem.tooManyHours.week"
                description="Message about too many hours being entered for the selected period."
                defaultMessage="There are only 168 hours in a week."
            />
          )
        case 'month':
          return (
            <FormattedMessage
                id="app.incomeLineItem.tooManyHours.month"
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
    const { lineItem, showHourly, showAnnual, allowRemove } = this.props
    const error = this.error

    return (
      <div className="income-line-item clearfix">
        <div>
          <IncomeAmountInput lineItem={lineItem} />
          <IncomeFrequency
              lineItem={lineItem}
              showHourly={showHourly}
              showAnnual={showAnnual}
          />
        </div>

        {lineItem.frequency === 'hourly' &&
        <div>
          <IncomeAmountInput
              lineItem={lineItem}
              fieldName="hourlyHours"
              placeholder=""
              prepend=""
              error={!!error}
          />
          <IncomeHourlyPeriod lineItem={lineItem} />
        </div>
        }

        {error &&
        <span className="usa-input-error-message" role="alert">{error}</span>
         }

        {!error && lineItem.frequency === 'hourly' &&
        <IncomeLineItemSummary lineItem={lineItem} />
         }

        { allowRemove &&
          <div>
            <Button className="usa-button-gray" onClick={this.handleRemove}>
              <FormattedMessage
                  id="app.incomeLineItem.removeButton"
                  description="Button text to remove an income source line item."
                  defaultMessage="Remove"
              />
            </Button>
          </div>
        }
      </div>
    )
  }
}

IncomeLineItem.contextTypes = {
  applicationData: PropTypes.object.isRequired
}

IncomeLineItem.propTypes = {
  allowRemove: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  lineItem: PropTypes.object.isRequired,
  showAnnual: PropTypes.bool,
  showHourly: PropTypes.bool
}

IncomeLineItem.defaultProps = {
  allowRemove: true
}

export default IncomeLineItem
