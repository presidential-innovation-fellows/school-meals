import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Button from './Button'
import Form from './Form'
import Fieldset from './Fieldset'
import PersonAttributeInput from './PersonAttributeInput'
import { FormattedMessage } from 'react-intl'

@observer
class PersonForm extends Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove() {
    this.props.onRemove(this.props.person)
  }

  render() {
    const {
      label,
      person,
      fields
    } = this.props

    const name = person.firstName || label

    return (
      <div className="person-form">
        <Form>
          <Fieldset legend="Name">
            <div className="well">
              <div>
                <h2>{name}</h2>
                {fields.map((field, index) =>
                  <PersonAttributeInput
                      person={person}
                      field={field}
                      key={index}
                  />
                 )}
              </div>
              <div>
                <Button
                    onClick={this.handleRemove}
                    className="usa-button-gray remove-person"
                >
                  <FormattedMessage
                      id="app.personForm.removeButton"
                      description="Button to remove person from collection."
                      defaultMessage="Remove {name}"
                      values={{ name }}
                  />
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
  label: PropTypes.node.isRequired,
  person: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    required: PropTypes.bool
  })).isRequired
}

export default PersonForm
