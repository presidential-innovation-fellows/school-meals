import React, { Component, PropTypes } from 'react'
import Link from '../Link'
import { observer } from 'mobx-react'
import { humanize, numberFormat } from 'underscore.string'

@observer
class SummaryPersonIncome extends Component {
  render() {
    const { person, income } = this.props

    return (
      <li>
        {humanize(income.type)}
        {' '}
        ${numberFormat(parseFloat(income.amount, 10), 2)}
        {' '}
        {humanize(income.frequency)}
        {income.frequency === 'hourly' &&
         ` (${income.hourlyHours} hrs./${income.hourlyPeriod})`}
        {' '}
        (<Link id={`income/${person.id}/${income.type}`}>edit</Link>)
      </li>
    )
  }
}

SummaryPersonIncome.propTypes = {
  income: PropTypes.object.isRequired
}

export default SummaryPersonIncome
