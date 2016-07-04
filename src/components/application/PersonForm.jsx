import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import PersonAttributeInput from './PersonAttributeInput'
import { Button, Well } from 'react-bootstrap'

@observer
class PersonForm extends Component {
  constructor (props) {
    super(props)
    this.onRemove = this.onRemove.bind(this)
  }

  onRemove() {
    this.props.onRemove(this.props.person)
  }

  render() {
    const {
      label,
      person,
      fields,
    } = this.props

    return(
      <Well>
        <div>
          {fields.map((field, index) =>
            <PersonAttributeInput
                person={person}
                name={field.name}
                label={field.label}
                required={!!field.required}
                key={index} />
           )}
        </div>

        <div>
          <Button bsStyle="danger" onClick={this.onRemove}>
            Remove {person.firstName || label}
          </Button>
        </div>
      </Well>
    )
  }
}

/*
PersonForm.propTypes = {
  onRemove: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool
  })).isRequired
}
*/

export default PersonForm
