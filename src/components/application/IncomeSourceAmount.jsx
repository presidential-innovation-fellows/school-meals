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
    // allow only digits and decimal
    value = value.replace(/[^\d.]/g, '')

    // limit to two decimal places
    value = value.replace(/\.(..).+/, '.$1')

    // fix double decimal points
    value = value.replace(/(\.\d)\./, '$1')
    value = value.replace(/\.\./, '.')

    // cap at $999,999
    value = value.replace(/(\d{6})[^.]+/, '$1')

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
                  pattern={this.props.error ? 'xxx' : '.+'}
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
  error: PropTypes.bool,
  onChange: PropTypes.func
}

IncomeSourceAmount.defaultProps = {
  fieldName: 'amount',
  type: 'tel',
  placeholder: 'Amount',
  prepend: '$'
}

export default IncomeSourceAmount
