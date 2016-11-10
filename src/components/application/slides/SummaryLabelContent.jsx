import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import SummaryEditLink from './SummaryEditLink'

@observer
class SummaryLabelContent extends Component {
  render() {
    return (
      <span>
        {this.props.children}
        {' '}
        {!!this.props.id && <SummaryEditLink id={this.props.id} />}
      </span>
    )
  }
}

SummaryLabelContent.propTypes = {
  id: PropTypes.string
}

export default SummaryLabelContent
