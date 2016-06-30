import React, { Component } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'
import { Form,
         FormGroup,
         FormControl,
         ControlLabel,
         HelpBlock,
         Radio
} from 'react-bootstrap'

class Attestation extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <Slide header="Attestation">

        <p><em>I certify (promise) that all information on this application is true and that all income is reported. I understand that this information is given in connection with the receipt of Federal funds, and that school o­fficials may verify (check) the information. I am aware that if I purposely give false information, my children may lose meal benefits, and I may be prosecuted under applicable State and Federal laws.</em></p>

        <form>
          <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>

      </Slide>
    )
  }
}

export default Attestation
