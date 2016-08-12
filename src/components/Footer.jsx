import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { organization } from '../config'

@observer
class Footer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <footer className="pageFooter">
        <div className="usa-grid">
          <img className="logo" src="img/USDA_logo.png" alt="USDA Logo" />
          <div>{organization.name}</div>
          <div>{organization.contact.phone} / {organization.contact.email}</div>
          <div>{organization.contact.address}</div>
        </div>
      </footer>
    )
  }
}

export default Footer
