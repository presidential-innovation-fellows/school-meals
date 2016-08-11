import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class BooleanRadio extends Component {
  name = shortid.generate()
  trueId = name = '-true'
  falseId = name = '-false'

  constructor (props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    let value

    switch (event.target.value) {
      case true:
      case "true":
        value = true
        break
      case false:
      case "false":
        value = false
        break
      default:
        value = null
    }

    handler(this.props.name, value)
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.object[fieldName] = value
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
      <fieldset className="usa-fieldset-inputs usa-sans">
        <legend className="usa-sr-only">{legend}</legend>

        <ul className="usa-unstyled-list">
          <li>
            <input {...props}
                   id={this.trueId}
                   value={true}
                   checked={value === true} />
            <label for={this.trueId}>{trueLabel}</label>
          </li>
          <li>
            <input {...props}
                   id={this.falseId}
                   value={false}
                   checked={value === false} />
            <label for={this.falseId}>{falseLabel}</label>
          </li>
        </ul>
      </fieldset>
    )
  }
}

BooleanRadio.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  legend: PropTypes.string,
  trueLabel: PropTypes.string,
  falseLabel: PropTypes.string,
  onChange: PropTypes.func
}

BooleanRadio.defaultProps = {
  trueLabel: 'Yes',
  falseLabel: 'No'
}

export default BooleanRadio
