import classnames from 'classnames'
import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class InputField extends Component {
  constructor (props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    const sanitizer = this.props.sanitize || this.defaultSanitize

    handler(event.target.name, sanitizer(event.target.value))
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.object[fieldName] = value
  }

  defaultSanitize(value) {
    // NOTE: trimming and titleizing caused input problems, e.g. could not
    // add a space, could not type McFoo (would force Mcfoo), etc.
    return value
  }

  render() {
    const input = this.props
    const controlId = shortid.generate()
    const className = classnames({
      'usa-input-error': input.error,
      'input-field': true
    })
    const inputProps = {
      id: controlId,
      name: input.name,
      type: input.type,
      value: input.object[input.name],
      placeholder: input.placeholder || input.label,
      disabled: input.disabled,
      onChange: this.handleChange
    }

    if (input.error) {
      inputProps['aria-describedby'] = 'input-error-message'
    }

    return (
      <div className={className}>
        <label for={controlId}>{input.label}</label>
        {input.error &&
         <span className="usa-input-error-message"
               id={`input-error-message-#{controlId}`}
               role="alert">{input.error}</span>
        }
        <input {...inputProps} />
      </div>
    )
  }
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func,
  sanitize: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

InputField.defaultProps = {
  type: 'text',
  disabled: false
}

export default InputField
