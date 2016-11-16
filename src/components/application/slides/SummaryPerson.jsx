import React, { Component, PropTypes } from 'react'
import SummaryEditLink from './SummaryEditLink'
import SummaryPersonIncome from './SummaryPersonIncome'
import { observer } from 'mobx-react'
import { applicableIncomeSources, fullName } from '../../../helpers'
import FormattedMessage from '../FormattedMessage'

@observer
class SummaryPerson extends Component {
  render() {
    const { person } = this.props

    return (
      <li>
        {fullName(person)}
        <ul>
          {person.isFoster &&
           <li>
           <FormattedMessage
              id="app.slides.summaryPerson.foster"
              description="Foster child "
              defaultMessage="Foster child "
           />
           <SummaryEditLink id="foster" /></li>}

          {person.isMigrant &&
           <li>
           <FormattedMessage
              id="app.slides.summaryPerson.migrant"
              description="Migrant youth "
              defaultMessage="Migrant youth "
           />
           <SummaryEditLink id="other-programs" /></li>}

          {person.isHomeless &&
           <li>
           <FormattedMessage
              id="app.slides.summaryPerson.homeless"
              description="Homeless youth "
              defaultMessage="Homeless youth "
           />
           <SummaryEditLink id="other-programs" /></li>}

          {person.isRunaway &&
           <li>
           <FormattedMessage
              id="app.slides.summaryPerson.runaway"
              description="Runaway youth "
              defaultMessage="Runaway youth "
           />
           <SummaryEditLink id="other-programs" /></li>}

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
