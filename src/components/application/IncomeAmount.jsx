import React, { Component, PropTypes } from 'react'
import IncomeAmountLabel from './IncomeAmountLabel'
import { numberFormat } from 'underscore.string'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeAmount extends Component {
  render() {
    const { amount, frequency } = this.props

    return(
      <span>
        ${numberFormat(amount)}
        {' '}
        <IncomeAmountLabel frequency={frequency} />
      </span>
    )
  }
}

IncomeAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  frequency: PropTypes.string.isRequired
}

export default IncomeAmount
