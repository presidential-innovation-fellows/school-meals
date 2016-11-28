import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Select from './Select'
import HourlyPeriodLabel from './HourlyPeriodLabel'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeHourlyPeriod extends Component {
  constructor(props) {
    super(props)
    this.defaultHandleChange = this.defaultHandleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultHandleChange
    handler(this.props.fieldName, event.target.value)
  }

  // Side effect, but easier to handle once here than pass in every time.
  defaultHandleChange(fieldName, value) {
    this.props.lineItem[fieldName] = value
  }

  render() {
    const { lineItem, fieldName } = this.props
    const value = lineItem[fieldName]

    return (
      <div className="usa-input-grid usa-input-grid-medium">
        <Select value={value} onChange={this.handleChange}>

          <FormattedMessage
              id="app.incomeHourlyPeriod.placeholder"
              description="Default text for hourly period select box."
              defaultMessage="hours per…"
          >
            {message => <option value="" disabled>{message}</option>}
          </FormattedMessage>

          <HourlyPeriodLabel period="week">
            {message => <option value="week">{message}</option>}
          </HourlyPeriodLabel>

          <HourlyPeriodLabel period="month">
            {message => <option value="month">{message}</option>}
          </HourlyPeriodLabel>
        </Select>
      </div>
    )
  }
}

IncomeHourlyPeriod.propTypes = {
  lineItem: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  onChange: PropTypes.func
}

IncomeHourlyPeriod.defaultProps = {
  fieldName: 'hourlyPeriod'
}

export default IncomeHourlyPeriod
