import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Checkbox extends Component {
  name = shortid.generate()

  constructor(props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    handler(this.props.name,
            this.props.invert ? !event.target.checked : !!event.target.checked,
            this.props.object)
  }

  // Side effect, but easier to handle once here than pass in every time.
  defaultOnChange(fieldName, value, object) {
    object[fieldName] = value
  }

  render() {
    const { invert, name, object } = this.props
    const value = object[name]
    const props = {
      checked: invert ? (value !== true) : (value === true),
      onChange: this.handleChange,
      id: this.name,
      name: this.name,
      type: 'checkbox'
    }

    return (
      <li>
        <input {...props} />
        <label htmlFor={this.id}>{this.props.children}</label>
      </li>
    )
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  invert: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  invert: false
}

export default Checkbox
