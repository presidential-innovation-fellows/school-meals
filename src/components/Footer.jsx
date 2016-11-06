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
      <footer className="page-footer">
        <div className="usa-grid">
          <div><strong>THIS IS NOT A REAL APPLICATION FOR SCHOOL MEAL BENEFITS</strong></div>
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
