import React, { Component, PropTypes } from 'react'
import EditLink from '../EditLink'
import SummaryPersonIncomeLineItem from './SummaryPersonIncomeLineItem'
import { observer } from 'mobx-react'
import { applicableIncomeLineItems, fullName } from '../../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class SummaryPerson extends Component {
  render() {
    const { person, showIncomes } = this.props
    const editLinkId = showIncomes && person.isAdult ?
                       `income/${person.id}` :
                       null

    return (
      <li>
        {fullName(person)}
        {editLinkId && <EditLink id={editLinkId} />}
        <ul>
          {person.isFoster &&
          <li>
            <FormattedMessage
                id="app.slides.summaryPerson.foster"
                description="Foster child "
                defaultMessage="Foster child "
            />
            {' '}
            <EditLink id="foster" />
          </li>}

          {person.isMigrant &&
          <li>
            <FormattedMessage
                id="app.slides.summaryPerson.migrant"
                description="Migrant youth "
                defaultMessage="Migrant youth "
            />
            {' '}
            <EditLink id="other-programs" />
          </li>}

          {person.isHomeless &&
          <li>
            <FormattedMessage
                id="app.slides.summaryPerson.homeless"
                description="Homeless youth "
                defaultMessage="Homeless youth "
            />
            {' '}
            <EditLink id="other-programs" />
          </li>}

          {person.isRunaway &&
          <li>
            <FormattedMessage
                id="app.slides.summaryPerson.runaway"
                description="Runaway youth "
                defaultMessage="Runaway youth "
            />
            {' '}
            <EditLink id="other-programs" />
          </li>}

          {applicableIncomeLineItems(person).map(lineItem =>
            <SummaryPersonIncomeLineItem
                key={lineItem.id}
                person={person}
                lineItem={lineItem}
            />
           )}

        </ul>
      </li>
    )
  }
}

SummaryPerson.propTypes = {
  person: PropTypes.object.isRequired,
  showIncomes: PropTypes.bool
}

export default SummaryPerson
