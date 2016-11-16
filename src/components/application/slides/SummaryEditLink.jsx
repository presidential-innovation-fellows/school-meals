import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Link from '../Link'
import FormattedMessage from '../FormattedMessage'

@observer
class SummaryEditLink extends Component {
  render() {
    return (
      <span>
        (<Link id={this.props.id}>
                <FormattedMessage
                    id="app.slides.summaryEditLink.edit"
                    description="edit"
                    defaultMessage="edit"
                 />
        </Link>)
      </span>
    )
  }
}

SummaryEditLink.propTypes = {
  id: PropTypes.string
}

export default SummaryEditLink
