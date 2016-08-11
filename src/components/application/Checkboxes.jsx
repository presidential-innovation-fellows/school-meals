import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Checkboxes extends Component {
  render() {
    const { legend } = this.props

    return (
      <fieldset className="usa-fieldset-inputs usa-sans">
        <legend className="usa-sr-only">{legend}</legend>
        <ul className="usa-unstyled-list">
          {this.props.children}
        </ul>
      </fieldset>
    )
  }
}

Checkboxes.propTypes = {
  legend: PropTypes.string.isRequired
}

export default Checkboxes
