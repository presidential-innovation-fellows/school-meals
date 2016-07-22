import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

@observer
class Navigation extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            School Meals
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="">English</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
