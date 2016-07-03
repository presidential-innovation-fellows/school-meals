import React, { Component } from 'react'
import Slide from '../Slide'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { Form,
         FormGroup,
         FormControl,
         ControlLabel,
         HelpBlock,
         Radio
} from 'react-bootstrap'

@observer
class Attestation extends Component {
  constructor(props) {
    super(props)
  }

  getValidationState() {
    const length = this.props.applicationData.attestation.firstName.length;
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  }

  render() {
    const {attestation} = this.props
    return (
      <Slide header="Attestation">

        <p><em>I certify (promise) that all information on this application is true and that all income is reported. I understand that this information is given in connection with the receipt of Federal funds, and that school o­fficials may verify (check) the information. I am aware that if I purposely give false information, my children may lose meal benefits, and I may be prosecuted under applicable State and Federal laws.</em></p>

        <form>
          <InputField
              name="firstName"
              label="First name"
              object={attestation}
          />
          <InputField
              name="lastName"
              label="Last name"
              object={attestation}
          />
        </form>

        <p>Thanks, {attestation.firstName} {attestation.lastName}.</p>

      </Slide>
    )
  }
}

export default Attestation
