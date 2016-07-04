import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormGroup, Radio } from 'react-bootstrap'

@observer
class BooleanRadio extends Component {
  constructor (props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    let value

    switch (event.target.value) {
      case true:
      case "true":
        value = true
        break
      case false:
      case "false":
        value = false
        break
      default:
        value = null
    }

    handler(event.target.name, value)
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.object[fieldName] = value
  }

  render() {
    const { name } = this.props

    return (
      <FormGroup>
        <Radio name={name} value={true} onChange={this.handleChange}>
          Yes
        </Radio>
        {' '}
        <Radio name={name} value={false} onChange={this.handleChange}>
          No
        </Radio>
      </FormGroup>
    )
  }
}

BooleanRadio.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

export default BooleanRadio
