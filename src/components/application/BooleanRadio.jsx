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
    let name = event.target.name
    let value

    if (this.props.suffix) {
      name = name.slice(0, this.props.suffix.length * -1)
    }

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

    handler(name, value)
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.object[fieldName] = value
  }

  render() {
    const { name, suffix } = this.props

    return (
      <FormGroup>
        <Radio name={name + suffix} value={true} onChange={this.handleChange}>
          Yes
        </Radio>
        {' '}
        <Radio name={name + suffix} value={false} onChange={this.handleChange}>
          No
        </Radio>
      </FormGroup>
    )
  }
}

BooleanRadio.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  suffix: PropTypes.string, // allows for multiple radio groups w/ same name
  onChange: PropTypes.func
}

BooleanRadio.defaultProps = {
  suffix: ''
}

export default BooleanRadio
