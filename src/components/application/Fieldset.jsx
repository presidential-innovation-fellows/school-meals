import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Fieldset extends Component {
  render() {
    const { legend, type } = this.props
    const className = (type === 'radio' || type === 'checkbox') ?
                      'usa-fieldset-inputs' : ''
    return (
      <fieldset className={className}>
        {legend && <legend className="usa-sr-only">{legend}</legend>}
        {this.props.children}
      </fieldset>
    )
  }
}

Fieldset.propTypes = {
  legend: PropTypes.string,
  type: PropTypes.string
}

export default Fieldset
