import React, { Component, PropTypes } from 'react'
import SummaryEditLink from './SummaryEditLink'
import HourlyPeriodLabel from '../HourlyPeriodLabel'
import { observer } from 'mobx-react'
import { humanize, numberFormat } from 'underscore.string'
import { FormattedMessage } from 'react-intl'

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
        {' '}
        {income.frequency === 'hourly' && income.hourlyPeriod &&
         <span>
           ({income.hourlyHours}{' '}
           <HourlyPeriodLabel period={income.hourlyPeriod} />)
         </span>
        }
        {' '}
        <SummaryEditLink id={`income/${person.id}/${income.type}`} />
      </li>
    )
  }
}

SummaryPersonIncome.propTypes = {
  income: PropTypes.object.isRequired
}

export default SummaryPersonIncome
