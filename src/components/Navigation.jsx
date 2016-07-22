import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

@observer
class Navigation extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let lang = 'en'

    if (window.location.search.split('?')[1]) {
      let pairs = window.location.search.split('?')[1].split('=')
      for (var i = 0; i < pairs.length; i += 2) {
        if (pairs[i] === 'lang') {
          lang = pairs[i + 1]
        }
      }
    }

    const map = {
      en: 'English',
      zh: '中文',
      fr: 'Français',
      pa: 'ਪੰਜਾਬੀ',
      ru: 'Русский',
      es: 'Español',
      tl: 'Wikang Tagalog',
      vi: 'Tiếng Việt'
    }

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
            <NavDropdown eventKey="1" title={map[lang]} id="nav-dropdown">
              <MenuItem eventKey="1.1" lang="en" href="./?lang=en">I speak English</MenuItem>
              <MenuItem eventKey="1.2" lang="zh" href="./?lang=zh">我说中文</MenuItem>
              <MenuItem eventKey="1.3" lang="fr" href="./?lang=fr">Je parle français</MenuItem>
              <MenuItem eventKey="1.4" lang="pa" href="./?lang=pa">ਇ ਸ੍ਪੇਆਕ ਪੰਜਾਬੀ</MenuItem>
              <MenuItem eventKey="1.5" lang="ru" href="./?lang=ru">Я говoрю по-русски</MenuItem>
              <MenuItem eventKey="1.6" lang="es" href="./?lang=es">Yo hablo español</MenuItem>
              <MenuItem eventKey="1.7" lang="tl" href="./?lang=tl">Marunong po akong magsalita ng Tagalog</MenuItem>
              <MenuItem eventKey="1.8" lang="vi" href="./?lang=vi">Tôi nói tiếng Việt</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
