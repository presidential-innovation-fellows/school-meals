import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'
import { organization } from '../config'

@observer
class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="usa-grid">
          <div className="not-real-disclaimer">
            <strong>
              <FormattedMessage
                  id="footer.notRealDisclaimer"
                  description="Disclaimer that this it not a real application."
                  defaultMessage="This is not a real application for school meal benefits"
              />
            </strong>
          </div>
          <img className="logo" src={organization.logoUrl} alt="Applewood Logo" />
          <div>{organization.name}</div>
          <div>{organization.contact.phone} / {organization.contact.email}</div>
          <div>{organization.contact.address}</div>
        </div>
      </footer>
    )
  }
}

export default Footer
