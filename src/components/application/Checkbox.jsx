import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Checkbox as RBCheckbox } from 'react-bootstrap'

@observer
class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    handler(this.props.name, !!event.target.checked)
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.object[fieldName] = this.props.invert ? !value : value
  }

  render() {
    const { inline, invert, name, object } = this.props
    const value = object[name]
    const props = {
      checked: invert ? (value !== true) : (value === true),
      onChange: this.handleChange,
      inline
    }

    return <RBCheckbox {...props}>{this.props.children}</RBCheckbox>
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  inline: PropTypes.bool,
  invert: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  invert: false
}

export default Checkbox
