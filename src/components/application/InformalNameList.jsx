import React, { Component, PropTypes } from 'react'
import SerialList from './SerialList'
import { observer } from 'mobx-react'
import { informalName } from '../../helpers'

@observer
class InformalNameList extends Component {
  render() {
    const { people, intersection } = this.props
    const props = {
      idProp: 'id',
      intersection,
      items: people,
      mapFunc: informalName
    }

    return <SerialList {...props} />
  }
}

InformalNameList.propTypes = {
  people: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  intersection: PropTypes.bool
}

InformalNameList.defaultProps = {
  intersection: false
}

export default InformalNameList
