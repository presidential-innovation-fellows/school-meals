import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { MenuItem } from 'react-bootstrap'

@observer
class Locale extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleLocaleClicked = this.handleLocaleClicked.bind(this)
  }

  handleLocaleClicked() {
    this.props.localeData.setLocale(this.props.locale.code)
  }

  render() {
    return (
      <MenuItem
          eventKey={this.props.eventKey}
          onClick={this.handleLocaleClicked}
      >{this.props.locale.iSpeak}</MenuItem>
    )
  }
}

Locale.propTypes = {
  eventKey: PropTypes.string.isRequired,
  locale: PropTypes.object.isRequired,
  localeData: PropTypes.object.isRequired
};

export default Locale
