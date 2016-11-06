import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import InputField from './InputField'

@observer
class PersonAttributeInput extends Component {
  render() {
    const { field, person } = this.props

    return(
      <InputField
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          object={person}
          required={!!field.required}
      />
    )
  }
}

PersonAttributeInput.propTypes = {
  person: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired
}

export default PersonAttributeInput
