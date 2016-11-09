import React, { Component, PropTypes } from 'react'
import Link from '../Link'
import { observer } from 'mobx-react'
import { applicableIncomeSources, fullName } from '../../../helpers'

@observer
class SummaryPersonCollectionItem extends Component {
  render() {
    const { person } = this.props

    return (
      <li>
        {fullName(person)}
        <ul>
          {person.isFoster && <li>Foster child</li>}
          {person.isMigrant && <li>Migrant child</li>}
          {person.isHomeless && <li>Homeless child</li>}
          {person.isRunaway && <li>Runaway child</li>}
          {applicableIncomeSources(person).map(income =>
            <SummaryPersonCollectionItemIncome
                key={person.id + income.type + income.source + income.num}
                income={income} />
           )}
        </ul>
      </li>
    )
  }
}

SummaryPersonCollectionItem.propTypes = {
  person: PropTypes.object.isRequired
}

export default SummaryPersonCollectionItem
