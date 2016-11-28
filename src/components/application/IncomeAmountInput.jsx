import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import InputField from './InputField'

@observer
class IncomeAmountInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(fieldName, newValue) {
    let value = newValue

    // Allow only digits and decimal.
    value = value.replace(/[^\d.]/g, '')

    // Limit to two decimal places.
    value = value.replace(/\.(..).+/, '.$1')

    // Fix double decimal points.
    value = value.replace(/(\.\d)\./, '$1')
    value = value.replace(/\.\./, '.')

    // Cap at $999,999.
    value = value.replace(/(\d{6})[^.]+/, '$1')

    this.props.lineItem[fieldName] = value
  }

  render() {
    const { lineItem, fieldName, placeholder, prepend, type } = this.props
    const value = lineItem[fieldName]

    return (
      <InputField
          type={type}
          object={lineItem}
          name={fieldName}
          grid={true}
          size="small"
          placeholder={placeholder}
          onChange={this.handleChange}
          pattern={this.props.error ? 'xxx' : '.+'}
          value={value ? `${prepend}${value}` : null}
      />
    )
  }
}

IncomeAmountInput.propTypes = {
  lineItem: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  prepend: PropTypes.string,
  error: PropTypes.bool
}

IncomeAmountInput.defaultProps = {
  fieldName: 'amount',
  type: 'tel',
  placeholder: '$',
  prepend: '$'
}

export default IncomeAmountInput
