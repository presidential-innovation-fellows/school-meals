import React, { Component, PropTypes } from 'react'
import Select from './Select'
import FrequencyLabel from './FrequencyLabel'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeFrequency extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  // Side effect, but easier to handle once here than pass in every time.
  handleChange(event) {
    const { lineItem, fieldName } = this.props
    const value = event.target.value

    lineItem[fieldName] = value

    if (value !== 'hourly') {
      lineItem.hourlyHours = ''
      lineItem.hourlyPeriod = ''
    }
  }

  defaultOnChange() {
  }

  render() {
    const { lineItem, fieldName, showHourly, showAnnual } = this.props
    const value = lineItem[fieldName]

    return (
      <div className="usa-input-grid usa-input-grid-medium">
        <Select value={value} onChange={this.handleChange}>
          <FormattedMessage
              id="app.incomeFrequency.placeholder"
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

IncomeFrequency.propTypes = {
  lineItem: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  showHourly: PropTypes.bool,
  showAnnual: PropTypes.bool
}

IncomeFrequency.defaultProps = {
  fieldName: 'frequency',
  showHourly: false,
  showAnnual: false
}

export default IncomeFrequency
