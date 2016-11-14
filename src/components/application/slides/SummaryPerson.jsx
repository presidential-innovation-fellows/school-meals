import React, { Component, PropTypes } from 'react'
import SummaryEditLink from './SummaryEditLink'
import SummaryPersonIncome from './SummaryPersonIncome'
import { observer } from 'mobx-react'
import { applicableIncomeSources, fullName } from '../../../helpers'

@observer
class SummaryPerson extends Component {
  render() {
    const { person } = this.props

    return (
      <li>
        {fullName(person)}
        <ul>
          {person.isFoster &&
           <li>Foster child <SummaryEditLink id="foster" /></li>}

          {person.isMigrant &&
           <li>Migrant youth <SummaryEditLink id="other-programs" /></li>}

          {person.isHomeless &&
           <li>Homeless youth <SummaryEditLink id="other-programs" /></li>}

          {person.isRunaway &&
           <li>Runaway youth <SummaryEditLink id="other-programs" /></li>}

          {applicableIncomeSources(person).map(income =>
            <SummaryPersonIncome
                key={person.id + income.type + income.source + income.num}
                person={person}
                income={income} />
           )}

        </ul>
      </li>
    )
  }
}

SummaryPerson.propTypes = {
  person: PropTypes.object.isRequired
}

export default SummaryPerson
