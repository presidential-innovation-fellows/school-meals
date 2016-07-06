import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormControl } from 'react-bootstrap'

@observer
class IncomeQuestionFrequency extends Component {
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
    this.props.income[fieldName] = value
  }

  render() {
    const { income, fieldName } = this.props

    return (
      <FormControl componentClass="select"
                   value={income[fieldName]}
                   onChange={this.handleChange}>
        <option value="" disabled>Frequency…</option>
        <option value="monthly">Monthly</option>
        <option value="twicePerMonth">Twice per month</option>
        <option value="everyTwoWeeks">Every two weeks</option>
        <option value="weekly">Weekly</option>
      </FormControl>
    )
  }
}

IncomeQuestionFrequency.propTypes = {
  income: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default IncomeQuestionFrequency
