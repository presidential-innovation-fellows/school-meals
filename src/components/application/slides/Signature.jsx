import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Form from '../Form'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { fullName } from '../../../helpers'

@observer
class Signature extends Component {
  constructor (props) {
    super(props)
    this.handleSsnChange = this.handleSsnChange.bind(this)
  }

  handleSsnChange(name, value) {
    // only allow numbers
    if (value && parseInt(value).toString() !== value) {
      return
    }

    // only allow 4 digits
    if (value.length > 4) {
      return
    }

    this.props.signature.ssnLastFour = value
  }

  get isValid() {
    const signature = this.props.signature
    return !signature.hasSsn || signature.ssnLastFour.match(/^\d{4}$/)
  }

  render() {
    const { attestor, signature } = this.props

    return (
      <Slide id="ssn" nextDisabled={!this.isValid}>
        <p className="usa-font-lead">Great, you are almost done!</p>
        <p>Please provide the last four digits of the Social Security number for the person that signed at the beginning of the application <strong>({fullName(attestor)})</strong>. If that person does not have a Social Security number, please check the box below labeled "No <abbr title="Social Security number">SSN</abbr>".</p>

        <Form>
          <InputField type="phone"
                      name="ssnLastFour"
                      placeholder="xxxx"
                      object={signature}
                      value={signature.hasSsn && signature.ssnLastFour || ''}
                      disabled={!signature.hasSsn}
                      onChange={this.handleSsnChange} />

          <Checkboxes legend="No <abbr title='Social Security number'>SSN</abbr>">
            <Checkbox object={signature} name="hasSsn" invert>
              No SSN
            </Checkbox>
          </Checkboxes>
        </Form>

        <p>
          <small>
            Note: United States citizenship or immigration status is not a condition of eligibility for free and reduced price benefits. The non-cash benefits received through the school meal programs are not subject to public charge consideration. In other words, you will not be deported, denied entry to the country, or denied permanent status because you apply for or receive school meal benefits.
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
