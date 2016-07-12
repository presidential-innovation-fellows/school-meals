import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          School Meals
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
{/*
        <Nav pullRight>
          <NavItem eventKey={1} href="#/contact">Contact</NavItem>
          <NavItem eventKey={2} href="#/help">Help</NavItem>
        </Nav>
*/}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
