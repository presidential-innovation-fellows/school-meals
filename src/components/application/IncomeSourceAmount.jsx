import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormControl, InputGroup } from 'react-bootstrap'

@observer
class IncomeSourceAmount extends Component {
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
    const { incomeSource, fieldName, placeholder, addon, type } = this.props

    return (
      <InputGroup>
        { addon && <InputGroup.Addon>{addon}</InputGroup.Addon> }
        <FormControl type={type}
                     placeholder={placeholder}
                     value={incomeSource[fieldName]}
                     onChange={this.handleChange} />
      </InputGroup>
    )
  }
}

IncomeSourceAmount.propTypes = {
  incomeSource: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  addon: PropTypes.string,
  onChange: PropTypes.func
}

IncomeSourceAmount.defaultProps = {
  fieldName: 'amount',
  type: 'phone',
  placeholder: 'Amount',
  addon: '$'
}

export default IncomeSourceAmount
