import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Form from '../Form'
import Fieldset from '../Fieldset'
import InputField from '../InputField'
import { observer } from 'mobx-react'

@observer
class Attestation extends Component {
  get isValid() {
    return this.props.attestor.firstName &&
           this.props.attestor.lastName &&
           this.props.attestation.date
  }

  render() {
    const { attestation, attestor } = this.props

    return (
      <Slide id="attestation" nextDisabled={!this.isValid}>
        <p className="usa-font-lead">I certify (promise) that all information on this application is true and that all income is reported.</p>
        <p>I understand that this information is given in connection with the receipt of Federal funds, and that school o­fficials may verify (check) the information. I am aware that if I purposely give false information, my children may lose meal benefits, and I may be prosecuted under applicable State and Federal laws.</p>

        <Form>
          <Fieldset legend="Attestation">
            <InputField
                name="firstName"
                label="First name"
                object={attestor}
                required
            />

            <InputField
                name="middleName"
                label="Middle name"
                object={attestor}
            />

            <InputField
                name="lastName"
                label="Last name"
                object={attestor}
                required
            />

            <InputField
                name="suffix"
                label="Suffix"
                object={attestor}
            />

            <InputField
                name="date"
                label="Today's date"
                object={attestation}
                disabled
            />
          </Fieldset>
        </Form>
      </Slide>
    )
  }
}

Attestation.propTypes = {
  attestor: PropTypes.object.isRequired,
  attestation: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired
}

export default Attestation
