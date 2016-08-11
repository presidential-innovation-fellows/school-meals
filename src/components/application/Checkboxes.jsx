import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Fieldset from './Fieldset'

@observer
class Checkboxes extends Component {
  render() {
    const { legend } = this.props

    return (
      <Fieldset legend={legend} type="checkbox">
        <ul className="usa-unstyled-list">
          {this.props.children}
        </ul>
      </Fieldset>
    )
  }
}

Checkboxes.propTypes = {
  legend: PropTypes.string.isRequired
}

export default Checkboxes
