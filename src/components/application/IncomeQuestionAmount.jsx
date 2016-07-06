import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormControl, InputGroup } from 'react-bootstrap'

@observer
class IncomeQuestionAmount extends Component {
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
      <InputGroup>
        <InputGroup.Addon>$</InputGroup.Addon>
        <FormControl type="number"
                     placeholder="Amount"
                     value={income[fieldName]}
                     onChange={this.handleChange} />
      </InputGroup>
    )
  }
}

IncomeQuestionAmount.propTypes = {
  income: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default IncomeQuestionAmount
