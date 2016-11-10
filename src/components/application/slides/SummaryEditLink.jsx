import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Link from '../Link'

@observer
class SummaryEditLink extends Component {
  render() {
    return (
      <span>
        (<Link id={this.props.id}>edit</Link>)
      </span>
    )
  }
}

SummaryEditLink.propTypes = {
  id: PropTypes.string
}

export default SummaryEditLink
