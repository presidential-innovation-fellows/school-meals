import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Form from '../Form'
import Fieldset from '../Fieldset'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class Attestation extends Component {
  get isValid() {
    return this.props.attestor.firstName &&
           this.props.attestor.lastName &&
           this.props.attestation.date
  }

  render() {
    const { attestation, attestor } = this.props

    const headerText =
      <FormattedMessage
          id="app.slides.attestation.header"
          description="Text for the header of the slide."
          defaultMessage="I certify (promise)..."
      />

    return (
      <Slide header={headerText} id="attestation" nextDisabled={!this.isValid}>
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.attestation.intro"
              description="Introductory paragraph."
              defaultMessage="that all information on this application is true and that all income is reported."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.attestation.understand"
              description="Understand that the information give should be correct."
              defaultMessage="I understand that this information is given in connection with the receipt of Federal funds, and that school o­fficials may verify (check) the information. I am aware that if I purposely* give false information, my children may lose meal benefits."
          />
        </p>
        <p><strong>
          <FormattedMessage
              id="app.slides.attestation.completingApp"
              description="Name of individual completing app"
              defaultMessage="Enter the name of the adult household member completing the application."
          />
        </strong></p>

        <Form>
          <Fieldset legend="Attestation">
            <InputField
                name="firstName"
                object={attestor}
                required
            >
              <FormattedMessage
                  id="app.slides.attestation.firstName.label"
                  description="Field label."
                  defaultMessage="First name"
              />
            </InputField>

            <InputField
                name="middleName"
                object={attestor}
            >
              <FormattedMessage
                  id="app.slides.attestation.middleName.label"
                  description="Field label."
                  defaultMessage="Middle name"
              />
            </InputField>

            <InputField
                name="lastName"
                object={attestor}
                required
            >
              <FormattedMessage
                  id="app.slides.attestation.lastName.label"
                  description="Field label."
                  defaultMessage="Last name"
              />
            </InputField>

            <InputField
                name="suffix"
                object={attestor}
            >
              <FormattedMessage
                  id="app.slides.attestation.suffix.label"
                  description="Field label."
                  defaultMessage="Suffix (e.g. Jr., Sr., I, II, III)"
              />
            </InputField>

            <InputField
                name="date"
                object={attestation}
                disabled
            >
              <FormattedMessage
                  id="app.slides.attestation.date.label"
                  description="Field label."
                  defaultMessage="Today's date"
              />
            </InputField>
          </Fieldset>
        </Form>
        <p><em>
          <FormattedMessage
              id="app.slides.attestation.misrepresentation"
              description="Starred message that lying on the form is fraud."
              defaultMessage="*Deliberate misrepresentation of information may subject applicants to prosecution under applicable State and Federal law."
          />
        </em></p>
      </Slide>
    )
  }
}

Attestation.propTypes = {
  attestor: PropTypes.object.isRequired,
  attestation: PropTypes.shape({
    date: PropTypes.string.isRequired
  }).isRequired
}

export default Attestation
