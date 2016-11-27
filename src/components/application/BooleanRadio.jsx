import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Fieldset from './Fieldset'
import { FormattedMessage } from 'react-intl'

@observer
class BooleanRadio extends Component {
  name = shortid.generate()
  trueId = `${this.name}-true`
  falseId = `${this.name}-false`

  constructor(props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    let value = null

    switch (event.target.value) {
      case true:
      case 'true':
        value = true
        break
      case false:
      case 'false':
        value = false
        break
      default:
        value = null
    }

    handler(this.props.name, value, this.props.object)
  }

  // Side effect, but easier to handle once here than pass in every time.
  defaultOnChange(fieldName, value, object) {
    object[fieldName] = value
  }

  render() {
    const { name, object, trueLabel, falseLabel } = this.props
    const legend = this.props.legend || `${trueLabel} / ${falseLabel}`
    const value = object[name]
    const props = {
      name: this.name,
      onChange: this.handleChange,
      type: 'radio'
    }

    return (
      <Fieldset legend={legend} type="radio">
        <ul className="usa-unstyled-list">
          <li>
            <input
                {...props}
                id={this.trueId}
                value={true}
                checked={value === true}
            />
            <label htmlFor={this.trueId}>{trueLabel}</label>
          </li>
          <li>
            <input
                {...props}
                id={this.falseId}
                value={false}
                checked={value === false}
            />
            <label htmlFor={this.falseId}>{falseLabel}</label>
          </li>
        </ul>
      </Fieldset>
    )
  }
}

BooleanRadio.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  legend: PropTypes.string,
  trueLabel: PropTypes.node,
  falseLabel: PropTypes.node,
  onChange: PropTypes.func
}

BooleanRadio.defaultProps = {
  trueLabel:
    <FormattedMessage
        id="app.booleanRadio.trueLabel"
        description="The label for the true selection of a true/false radio button pair."
        defaultMessage="Yes"
    />,
  falseLabel:
    <FormattedMessage
        id="app.booleanRadio.falseLabel"
        description="The label for the false selection of a true/false radio button pair."
        defaultMessage="No"
    />
}

export default BooleanRadio
