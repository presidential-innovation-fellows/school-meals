import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { fullName } from '../../../helpers'

@observer
class Signature extends Component {
  constructor (props) {
    super(props)
    this.handleSsnChange = this.handleSsnChange.bind(this)
  }

  handleSsnChange(event) {
    const value = event.target.value

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

        <InputGroup>
          <FormControl type="phone"
                       step="1"
                       min="0001"
                       max="9999"
                       placeholder="xxxx"
                       pattern="\d{4}"
                       value={signature.hasSsn && signature.ssnLastFour || ''}
                       disabled={!signature.hasSsn}
                       onChange={this.handleSsnChange} />
        </InputGroup>

        <Checkboxes legend="No <abbr title='Social Security number'>SSN</abbr>">
          <Checkbox object={signature} name="hasSsn" invert>
            No SSN
          </Checkbox>
        </Checkboxes>

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
