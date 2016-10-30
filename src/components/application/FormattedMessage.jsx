import React, { Component, PropTypes } from 'react'
import { FormattedMessage as ReactIntlFormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'

@observer
class FormattedMessage extends Component {
  render() {
    return (
      <ReactIntlFormattedMessage {...this.props} />
    )
  }
}

FormattedMessage.contextTypes = {
  localeData: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    translations: PropTypes.object.isRequired
  }).isRequired
}

export default FormattedMessage
