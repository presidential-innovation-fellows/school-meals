import React, { Component, PropTypes } from 'react'
import MilitarySlide from './MilitarySlide'
import { observer } from 'mobx-react'

@observer
class Military extends Component {
  render() {
    return(
      <div>
        {this.props.collection.map(person =>
          <MilitarySlide person={person} key={person.id} />
        )}
      </div>
    )
  }
}

Military.propTypes = {
  collection: PropTypes.object.isRequired
}

export default Military
