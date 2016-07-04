import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { Form,
         FormGroup,
         FormControl,
         ControlLabel,
         HelpBlock
} from 'react-bootstrap'

@observer
class Attestation extends Component {
  render() {
    const {
      attestation
    } = this.props

    return (
      <Slide header="Attestation">
        <p><em>I certify (promise) that all information on this application is true and that all income is reported. I understand that this information is given in connection with the receipt of Federal funds, and that school o­fficials may verify (check) the information. I am aware that if I purposely give false information, my children may lose meal benefits, and I may be prosecuted under applicable State and Federal laws.</em></p>

        <Form>
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
        </Form>
      </Slide>
    )
  }
}

/* NOTE: causes unneeded component updates -- uncomment to debug.
 * https://github.com/mobxjs/mobx-react/issues/56
 *
Attestation.propTypes = {
  attestation: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired
}
*/

export default Attestation
