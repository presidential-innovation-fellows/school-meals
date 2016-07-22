import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

@observer
class Navigation extends Component {
  constructor (props) {
    super(props)
    this.showHelp = this.showHelp.bind(this)
  }

  showHelp() {
    this.props.helpData.isVisible = true
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
            <NavItem eventKey={2} href="" onClick={this.showHelp}>Help</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Navigation.propTypes = {
  helpData: PropTypes.object.isRequired
};

export default Navigation
