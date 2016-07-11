import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Link from '../Link'

@observer
class SummaryLabelContent extends Component {
  render() {
    return (
      <span>
        {this.props.children}
        {!!this.props.id &&
         <span> (<Link id={this.props.id}>edit</Link>)</span>
        }
      </span>
    )
  }
}

SummaryLabelContent.propTypes = {
  id: PropTypes.string
}

export default SummaryLabelContent
