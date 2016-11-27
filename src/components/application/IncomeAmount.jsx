import React, { Component, PropTypes } from 'react'
import IncomeAmountLabel from './IncomeAmountLabel'
import { numberFormat } from 'underscore.string'
import { observer } from 'mobx-react'

@observer
class IncomeAmount extends Component {
  render() {
    const { amount, decimals, frequency } = this.props

    return (
      <span>
        ${numberFormat(amount, decimals)}
        {' '}
        <IncomeAmountLabel frequency={frequency} />
      </span>
    )
  }
}

IncomeAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.number,
  frequency: PropTypes.string.isRequired
}

IncomeAmount.defaultProps = {
  decimals: 0
}

export default IncomeAmount
