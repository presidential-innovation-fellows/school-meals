import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Checkbox from './Checkbox'
import Checkboxes from './Checkboxes'
import InputField from './InputField'

@observer
class PersonAttributeInput extends Component {
  render() {
    const { field, person } = this.props

    switch (field.dataType) {
      case PropTypes.bool:
        return <div>
          <br />
          <Checkboxes legend="Child attributes">
            <Checkbox
                name={field.name}
                object={person}
            >
              <strong>{field.label}</strong>
            </Checkbox>
          </Checkboxes>
        </div>
      default:
        return <InputField
            label={field.label}
            name={field.name}
            object={person}
            placeholder={field.placeholder}
            required={!!field.required}
               />
    }
  }
}

PersonAttributeInput.propTypes = {
  person: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired
}

export default PersonAttributeInput
