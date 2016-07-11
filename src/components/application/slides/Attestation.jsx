import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import InputField from '../InputField'
import { observer } from 'mobx-react'

@observer
class Attestation extends Component {
  get isValid() {
    return this.props.attestation.firstName &&
           this.props.attestation.lastName &&
           this.props.attestation.date
  }

  render() {
    const { attestation } = this.props

    return (
      <Slide header="Attestation" id="attestation" nextDisabled={!this.isValid}>
        <p>I certify (promise) that all information on this application is true and that all income is reported. I understand that this information is given in connection with the receipt of Federal funds, and that school o­fficials may verify (check) the information. I am aware that if I purposely give false information, my children may lose meal benefits, and I may be prosecuted under applicable State and Federal laws.</p>

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

        <InputField
            type="date"
            name="date"
            label="Today's date"
            object={attestation}
        />
      </Slide>
    )
  }
}

Attestation.propTypes = {
  attestation: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired
}

export default Attestation
