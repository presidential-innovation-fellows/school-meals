import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { NavDropdown } from 'react-bootstrap'
import Locale from './Locale'

@observer
class LocalePicker extends Component {
  render() {
    const activeLocale = this.props.locales.find(locale => {
      return locale.code === this.props.localeData.code
    })

    return (
      <NavDropdown eventKey="1" title={activeLocale.language} id="nav-dropdown">
        {this.props.locales.map((locale, i) =>
          <Locale
              locale={locale}
              localeData={this.props.localeData}
              eventKey={`1.${i}`}
              key={i}
          />
         )}
      </NavDropdown>
    )
  }
}

LocalePicker.propTypes = {
  locales: PropTypes.array.isRequired,
  localeData: PropTypes.object.isRequired
};

export default LocalePicker
