import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormGroup, Radio } from 'react-bootstrap'

@observer
class BooleanRadio extends Component {
  name = shortid.generate()

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

    handler(this.props.name, value)
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.object[fieldName] = value
  }

  render() {
    const { inline, name, object, trueLabel, falseLabel } = this.props
    const value = object[name]
    const props = {
      name: this.name,
      onChange: this.handleChange,
      inline
    }

    return (
      <FormGroup>
        <Radio {...props} checked={value === true} value={true}>
          {trueLabel}
        </Radio>
        {' '}
        <Radio {...props} checked={value === false} value={false}>
          {falseLabel}
        </Radio>
      </FormGroup>
    )
  }
}

BooleanRadio.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  trueLabel: PropTypes.string,
  falseLabel: PropTypes.string,
  inline: PropTypes.bool,
  onChange: PropTypes.func
}

BooleanRadio.defaultProps = {
  trueLabel: 'Yes',
  falseLabel: 'No'
}

export default BooleanRadio
