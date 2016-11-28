import classnames from 'classnames'
import shortid from 'shortid'
import jQuery from 'jquery'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class InputField extends Component {
  controlId = shortid.generate()

  constructor(props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    const sanitizer = this.props.sanitize || this.defaultSanitize

    handler(event.target.name, sanitizer(event.target.value))
  }

  // Side effect, but easier to handle once here than pass in every time.
  defaultOnChange(fieldName, value) {
    this.props.object[fieldName] = value
  }

  defaultSanitize(value) {
    // NOTE: trimming and titleizing caused input problems, e.g. could not
    // add a space, could not type McFoo (would force Mcfoo), etc.
    return value
  }

  componentDidMount() {
    this.$inputField = jQuery(`#${this.controlId}`).closest('.input-field')
  }

  componentDidUpdate() {
    const input = this.props
    const value = input.object[input.name]

    // Clear error if value has been input.
    if (input.required && value) {
      this.$inputField.removeClass('usa-input-error')
    }
  }

  render() {
    const input = this.props
    const additional = input.additional || (
      input.required && <FormattedMessage
          id="app.inputField.required"
          description="Text that indicates a field is required."
          defaultMessage="required"
                        />
    )
    const value = input.object[input.name]

    let className = input.className
    if (typeof className === 'string') {
      const key = className
      className = {}
      className[key] = true
    }
    className = classnames(className)


    if (input.pattern && !input.error &&
        (input.value == null ? value : input.value).match(input.pattern)) { // eslint-disable-line eqeqeq
      className += ' usa-input-success'
    }

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
      id: this.controlId,
      name: input.name,
      type: input.type,
      value: input.value == null ? value : input.value, // eslint-disable-line eqeqeq
      placeholder: input.placeholder,
      disabled: input.disabled,
      onChange: this.handleChange,
      required: input.required,
      className
    }

    if (input.error) {
      inputProps['aria-describedby'] = `input-error-message-${this.controlId}`
    }

    return (
      <div className={containerClassName}>
        {(input.label || this.props.children || input.required || input.additional) &&
        <label htmlFor={this.controlId}>
          {input.label || this.props.children}
          {additional &&
          <span className="usa-additional_text">{additional}</span>
           }
        </label>
        }
        {input.error &&
        <span
            className="usa-input-error-message"
            id={'input-error-message-#{this.controlId}'}
            role="alert"
        >{input.error}</span>
        }
        <input {...inputProps} />
      </div>
    )
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.node,
  error: PropTypes.string,
  onChange: PropTypes.func,
  sanitize: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  grid: PropTypes.bool,
  value: PropTypes.string,
  pattern: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium'])
}

InputField.defaultProps = {
  className: {},
  disabled: false,
  pattern: '.+',
  type: 'text'
}

export default InputField
