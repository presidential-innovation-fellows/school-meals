import React, { Component, PropTypes } from 'react'
import Select from './Select'
import FrequencyLabel from './FrequencyLabel'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeSourceFrequency extends Component {
  constructor (props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    handler(this.props.fieldName, event.target.value)
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.incomeSource[fieldName] = value
  }

  render() {
    const { incomeSource, fieldName, showHourly, showAnnual } = this.props
    const value = incomeSource[fieldName]

    return (
      <div className="usa-input-grid usa-input-grid-medium">
        <Select value={value}
                onChange={this.handleChange}>
          <option value="" disabled>
            <FormattedMessage
                id="app.incomeSourceFrequency.placeholder"
                description="Default text for income frequency select box."
                defaultMessage="frequency…"
            />
          </option>
          {showAnnual && <option value="annually">
            <FrequencyLabel frequency="annually" />
          </option>}
          <option value="monthly">
            <FrequencyLabel frequency="monthly" />
          </option>
          <option value="twicePerMonth">
            <FrequencyLabel frequency="twicePerMonth" />
          </option>
          <option value="everyTwoWeeks">
            <FrequencyLabel frequency="everyTwoWeeks" />
          </option>
          <option value="weekly">
            <FrequencyLabel frequency="weekly" />
          </option>
          {showHourly && <option value="hourly">
            <FrequencyLabel frequency="hourly" />
          </option>}
        </Select>
      </div>
    )
  }
}

IncomeSourceFrequency.propTypes = {
  incomeSource: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  onChange: PropTypes.func,
  showHourly: PropTypes.bool,
  showAnnual: PropTypes.bool
}

IncomeSourceFrequency.defaultProps = {
  fieldName: 'frequency',
  showHourly: false,
  showAnnual: false

}

export default IncomeSourceFrequency
