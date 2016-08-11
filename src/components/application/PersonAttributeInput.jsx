import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import InputField from './InputField'

@observer
class PersonAttributeInput extends Component {
  render() {
    const {
      person,
      name,
      label,
      required,
    } = this.props

    return(
      <InputField
          name={name}
          label={label}
          placeholder={label}
          object={person}
          required={required}
      />
    )
  }
}

PersonAttributeInput.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
}

PersonAttributeInput.defaultProps = {
  required: false
}

export default PersonAttributeInput
