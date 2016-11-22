import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Select from './Select'
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
                defaultMessage="Frequency…"
            />
          </option>
          {showAnnual && <option value="annually">
            <FormattedMessage
                id="app.incomeSourceFrequency.annually"
                description="Frequency of income received per year."
                defaultMessage="Annually"
            />
          </option>}
          <option value="monthly">
            <FormattedMessage
                id="app.incomeSourceFrequency.monthly"
                description="Frequency of income received per month."
                defaultMessage="Monthly"
            />
          </option>
          <option value="twicePerMonth">
            <FormattedMessage
                id="app.incomeSourceFrequency.twicePerMonth"
                description="Frequency of income received twice monthly."
                defaultMessage="Twice per month"
            />
          </option>
          <option value="everyTwoWeeks">
            <FormattedMessage
                id="app.incomeSourceFrequency.everyTwoWeeks"
                description="Frequency of income received per two weeks."
                defaultMessage="Every two weeks"
            />
          </option>
          <option value="weekly">
            <FormattedMessage
                id="app.incomeSourceFrequency.weekly"
                description="Frequency of income received per week."
                defaultMessage="Weekly"
            />
          </option>
          {showHourly && <option value="hourly">
            <FormattedMessage
                id="app.incomeSourceFrequency.hourly"
                description="Frequency of income received per hour."
                defaultMessage="Hourly"
            />
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
