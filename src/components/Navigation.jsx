import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { locales, organization } from '../config'
import LocalePicker from './LocalePicker'

@observer
class Navigation extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleData = this.handleData.bind(this)
    this.handleHelp = this.handleHelp.bind(this)
  }

  handleData(event) {
    window.location.replace('#/viewappdata')
  }

  handleHelp(event) {
    const { navigationData } = this.props
    const { currentSlide } = navigationData
    const article = currentSlide.getAttribute('data-help-article')

    this.props.helpData.showArticle(article)
  }

  render() {
    return (
      <Navbar fixedTop>
        <div className="usa-grid">
        <Navbar.Header>
          <Navbar.Brand>
            <span className="hidden-xs">
              {organization.name} Application for Free and Reduced Price School Meals
            </span>
            <span className="hidden-sm hidden-md hidden-lg">
              {organization.shortname} Application for School Meals
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} onClick={this.handleData}>
              <Glyphicon glyph="list-alt" /> Data
            </NavItem>
            <NavItem eventKey={1} onClick={this.handleHelp}>
              <Glyphicon glyph="question-sign" /> Help
            </NavItem>
            <LocalePicker localeData={localeData} locales={locales} />
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

Navigation.propTypes = {
  helpData: PropTypes.object.isRequired,
  localeData: PropTypes.object.isRequired,
  navigationData: PropTypes.object.isRequired,
};

export default Navigation
