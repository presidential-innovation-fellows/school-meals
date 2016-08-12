import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import InputField from './InputField'

@observer
class IncomeSourceAmount extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(fieldName, value) {
    value = value.replace(/[^\d.]/g, '')
    this.props.incomeSource[fieldName] = value
  }

  render() {
    const { incomeSource, fieldName, placeholder, prepend, type } = this.props
    const value = incomeSource[fieldName]

    return (
      <InputField type={type}
                  object={incomeSource}
                  name={fieldName}
                  grid={true}
                  size="small"
                  placeholder={placeholder}
                  onChange={this.handleChange}
                  value={value ? `${prepend}${value}` : null} />
    )
  }
}

IncomeSourceAmount.propTypes = {
  incomeSource: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  prepend: PropTypes.string,
  onChange: PropTypes.func
}

IncomeSourceAmount.defaultProps = {
  fieldName: 'amount',
  type: 'phone',
  placeholder: 'Amount',
  prepend: '$'
}

export default IncomeSourceAmount
