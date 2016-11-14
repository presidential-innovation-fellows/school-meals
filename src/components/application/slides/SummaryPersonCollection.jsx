import React, { Component, PropTypes } from 'react'
import SummaryLabel from './SummaryLabel'
import SummaryPerson from './SummaryPerson'
import { observer } from 'mobx-react'

@observer
class SummaryPersonCollection extends Component {
  render() {
    const { children, collection, id } = this.props

    return (
      collection.length && (
        <div>
          <SummaryLabel id={id}>{children}</SummaryLabel>
          <ul>
            {
              collection.map(person => {
                return <SummaryPerson person={person} key={person.id} />
              })
            }
          </ul>
        </div>
      ) || null
    )
  }
}

SummaryPersonCollection.propTypes = {
  collection: PropTypes.array.isRequired,
  id: PropTypes.string
}

export default SummaryPersonCollection
