import React, { Component, PropTypes } from 'react'
import Military from './Military'
import { observer } from 'mobx-react'

@observer
class AdultIncome extends Component {
  render() {
    return(
      <div>
        {this.props.adults.map(person =>
          <Military person={person} key={person.id} />
        )}
      </div>
    )
  }
}

AdultIncome.propTypes = {
  adults: PropTypes.object.isRequired
}

export default AdultIncome
