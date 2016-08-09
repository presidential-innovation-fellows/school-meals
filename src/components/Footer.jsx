import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { organization } from '../config'

@observer
class Footer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="footer">
        <div className="container">
          <div>{organization.name}</div>
          <div>{organization.contact.phone} / {organization.contact.email}</div>
          <div>{organization.contact.address}</div>
        </div>
      </div>
    )
  }
}

export default Footer
