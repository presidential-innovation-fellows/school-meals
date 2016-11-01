import React, { Component, PropTypes } from 'react'
import { IntlProvider } from 'react-intl'
import { FormattedMessage as ReactIntlFormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'

@observer
class FormattedMessage extends Component {
  render() {
    const { localeData } = this.context

    return (
      <IntlProvider locale={localeData.code}
                    messages={localeData.translations}>
        <ReactIntlFormattedMessage {...this.props} />
      </IntlProvider>
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
