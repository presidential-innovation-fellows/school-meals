import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Checkbox from '../Checkbox'
import { observer } from 'mobx-react'
import { FormControl, InputGroup } from 'react-bootstrap'

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
      <Slide header="SSN" id="ssn" nextDisabled={!this.isValid}>
        <p>Please provide the last four digits of the Social Security number for the person that signed at the beginning of the application <strong>({attestor.firstName} {attestor.lastName})</strong>. If that person does not have a Social Security number, please check the box below labeled "No SSN".</p>

        <InputGroup>
          <InputGroup.Addon>xxx-xx-</InputGroup.Addon>
          <FormControl type="number"
                       step="1"
                       min="0001"
                       max="9999"
                       placeholder="xxxx"
                       pattern="\d{4}"
                       value={signature.hasSsn && signature.ssnLastFour || ''}
                       disabled={!signature.hasSsn}
                       onChange={this.handleSsnChange} />
        </InputGroup>
        <Checkbox object={signature} name="hasSsn" invert>
          No SSN
        </Checkbox>

      </Slide>
    )
  }
}

Signature.propTypes = {
  attestor: PropTypes.object.isRequired,
  signature: PropTypes.object.isRequired
}

export default Signature
