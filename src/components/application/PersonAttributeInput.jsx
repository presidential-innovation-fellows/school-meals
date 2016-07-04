import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import InputField from './InputField'

@observer
class PersonAttributeInput extends Component {
  render() {
    const {
      person,
      name,
      label
    } = this.props

    return(
      <InputField
          name={name}
          label={label}
          object={person}
      />
    )
  }
}

PersonAttributeInput.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default PersonAttributeInput
