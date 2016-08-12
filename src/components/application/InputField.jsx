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
    const additional = input.additional || input.required && 'Required'

    let className = classnames(input.className)
    let containerClassName = classnames({
      'usa-input-error': input.error,
      'usa-input-grid': input.grid,
      'input-field': true
    })

    if (input.size) {
      if (input.grid) {
        containerClassName += ` usa-input-grid-${input.size}`
      } else {
        className += ` usa-input-${input.size}`
      }
    }

    const inputProps = {
      id: controlId,
      name: input.name,
      type: input.type,
      value: input.value == null ? input.object[input.name] : input.value,
      placeholder: input.placeholder || input.label,
      disabled: input.disabled,
      onChange: this.handleChange,
      className: className,
      required: input.required
    }

    if (input.error) {
      inputProps['aria-describedby'] = 'input-error-message'
    }

    return (
      <div className={containerClassName}>
        {(input.label || input.required || input.additional) &&
         <label for={controlId}>
           {input.label}
           {additional &&
            <span className="usa-additional_text">{additional}</span>
           }
         </label>
        }
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
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  classname: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  sanitize: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  grid: PropTypes.bool,
  value: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium'])
}

InputField.defaultProps = {
  type: 'text',
  disabled: false
}

export default InputField
