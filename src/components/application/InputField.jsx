import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormGroup,
         FormControl,
         ControlLabel,
         HelpBlock
} from 'react-bootstrap'

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
    return (
      <FormGroup controlId={controlId}>
        <ControlLabel>{input.label}</ControlLabel>
        <FormControl
            type={input.type}
            name={input.name}
            value={input.object[input.name]}
            placeholder={input.placeholder || input.label}
            disabled={input.disabled}
            onChange={this.handleChange}
        />
        <FormControl.Feedback />
        <HelpBlock>{input.help}</HelpBlock>
      </FormGroup>
    )
  }
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  sanitize: PropTypes.func,
  placeholder: PropTypes.string,
  help: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

InputField.defaultProps = {
  type: 'text',
  disabled: false
}

export default InputField
