import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Form from '../Form'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { fullName } from '../../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class Signature extends Component {
  constructor(props) {
    super(props)
    this.handleSsnChange = this.handleSsnChange.bind(this)
    this.handleNoSsnChange = this.handleNoSsnChange.bind(this)
  }

  handleSsnChange(name, value) {
    // Only allow numbers.
    if (!value.match(/^\d{0,4}$/)) {
      return
    }

    this.props.signature.ssnLastFour = value
  }

  handleNoSsnChange(fieldName, value, object) {
    object[fieldName] = value

    if (value) {
      this.props.signature.ssnLastFour = ''
    }
  }

  get isValid() {
    const signature = this.props.signature
    return signature.noSsn || signature.ssnLastFour.match(/^\d{4}$/)
  }

  render() {
    const { attestor, signature } = this.props

    return (
      <Slide id="ssn" nextDisabled={!this.isValid}>
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.signature.almostDone"
              description="Almost Done"
              defaultMessage="Great, you are almost done!"
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.signature.pleaseProvide"
              description="Please Provide..."
              defaultMessage="Please provide the last four digits of the Social Security number for the person that signed at the beginning of the application {adult}. If that person does not have a Social Security number, please check the box below labeled 'No {ssn}'."
              values={{
                adult: <strong>({fullName(attestor)})</strong>,
                ssn: <abbr title="Social Security number">SSN</abbr>
              }}
          />
        </p>

        <Form>
          <InputField
              type="tel"
              name="ssnLastFour"
              placeholder="xxxx"
              className="usa-input-medium"
              object={signature}
              value={signature.noSsn ? '' : signature.ssnLastFour}
              disabled={signature.noSsn}
              pattern="^\d{4}$"
              onChange={this.handleSsnChange}
          />

          <Checkboxes legend="No <abbr title='Social Security number'>SSN</abbr>">
            <Checkbox
                object={signature}
                name="noSsn"
                onChange={this.handleNoSsnChange}
            >
              <FormattedMessage
                  id="app.slides.signature.noSSN"
                  description="No SSN"
                  defaultMessage="No SSN"
              />

            </Checkbox>
          </Checkboxes>
        </Form>

        <p>
          <small>
            <FormattedMessage
                id="app.slides.signature.note"
                description="Note: on eligibility"
                defaultMessage=" Note: United States citizenship or immigration status is not a condition of eligibility for free and reduced price benefits. The non-cash benefits received through the school meal programs are not subject to public charge consideration. In other words, you will not be deported, denied entry to the country, or denied permanent status because you apply for or receive school meal benefits."
            />
          </small>
        </p>

      </Slide>
    )
  }
}

Signature.propTypes = {
  attestor: PropTypes.object.isRequired,
  signature: PropTypes.object.isRequired
}

export default Signature
