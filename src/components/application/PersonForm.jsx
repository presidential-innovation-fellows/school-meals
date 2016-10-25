import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Button from './Button'
import Form from './Form'
import Fieldset from './Fieldset'
import PersonAttributeInput from './PersonAttributeInput'

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

    const name = person.firstName || label

    return(
      <div className="person-form">
        <Form>
          <Fieldset legend="Name">
            <div className="well">
              <div>
                <h2>{name}</h2>
                {fields.map((field, index) =>
                  <PersonAttributeInput
                      person={person}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      required={!!field.required}
                      key={index} />
                 )}
              </div>
              <div>
                <Button onClick={this.onRemove}
                        className="usa-button-gray remove-person">
                  Remove {name}
                </Button>
              </div>
            </div>
          </Fieldset>
        </Form>
      </div>
    )
  }
}

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

export default PersonForm
