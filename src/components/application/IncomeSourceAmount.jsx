import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import InputField from './InputField'

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
    const { incomeSource, fieldName, placeholder, type } = this.props

    return (
      <InputField type={type}
                  object={incomeSource}
                  name={fieldName}
                  placeholder={placeholder} />
    )
  }
}

IncomeSourceAmount.propTypes = {
  incomeSource: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

IncomeSourceAmount.defaultProps = {
  fieldName: 'amount',
  type: 'phone',
  placeholder: 'Amount'
}

export default IncomeSourceAmount
