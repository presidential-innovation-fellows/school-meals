import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import { Glyphicon } from 'react-bootstrap'
import Link from '../Link'

@observer
class SummaryEditLink extends Component {
  render() {
    return (
      <span>
        <Link id={this.props.id}>
          <Glyphicon glyph="edit" />
        </Link>
      </span>
    )
  }
}

SummaryEditLink.propTypes = {
  id: PropTypes.string
}

export default SummaryEditLink
