import React, { Component, PropTypes } from 'react'
import Select from './Select'
import FrequencyLabel from './FrequencyLabel'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeSourceFrequency extends Component {
  constructor(props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    handler(this.props.fieldName, event.target.value)
  }

  // Side effect, but easier to handle once here than pass in every time.
  defaultOnChange(fieldName, value) {
    this.props.incomeSource[fieldName] = value
  }

  render() {
    const { incomeSource, fieldName, showHourly, showAnnual } = this.props
    const value = incomeSource[fieldName]

    return (
      <div className="usa-input-grid usa-input-grid-medium">
        <Select
            value={value}
            onChange={this.handleChange}
        >
          <FormattedMessage
              id="app.incomeSourceFrequency.placeholder"
              description="Default text for income frequency select box."
              defaultMessage="frequency…"
          >
            {message => <option value="" disabled>{message}</option>}
          </FormattedMessage>

          {showAnnual &&
          <FrequencyLabel frequency="annually">
            {message => <option value="annually">{message}</option>}
          </FrequencyLabel>
          }

          <FrequencyLabel frequency="monthly">
            {message => <option value="monthly">{message}</option>}
          </FrequencyLabel>

          <FrequencyLabel frequency="twicePerMonth">
            {message => <option value="twicePerMonth">{message}</option>}
          </FrequencyLabel>

          <FrequencyLabel frequency="everyTwoWeeks">
            {message => <option value="everyTwoWeeks">{message}</option>}
          </FrequencyLabel>

          <FrequencyLabel frequency="weekly">
            {message => <option value="weekly">{message}</option>}
          </FrequencyLabel>

          {showHourly &&
          <FrequencyLabel frequency="hourly">
            {message => <option value="hourly">{message}</option>}
          </FrequencyLabel>
          }
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
