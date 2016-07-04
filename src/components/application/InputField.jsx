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
  }

  defaultOnChange (event) {
    this.props.object[event.target.name] = event.target.value
  }

  render() {
    const input = this.props
    const controlId = `control-${Math.random().toString(16).slice(-5)}` // HACK
    return (
      <FormGroup controlId={controlId} >
        <ControlLabel>{input.label}</ControlLabel>
        <FormControl
            type={input.type}
            name={input.name}
            value={input.object[input.name]}
            placeholder={input.placeholder || input.label}
            onChange={input.onChange || this.defaultOnChange}
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
  placeholder: PropTypes.string,
  help: PropTypes.string,
  type: PropTypes.string
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField
