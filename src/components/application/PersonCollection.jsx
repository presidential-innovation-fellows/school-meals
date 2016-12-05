import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Button from './Button'
import PersonForm from './PersonForm'
import { FormattedMessage } from 'react-intl'

@observer
class PersonCollection extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.props.collection.add()
  }

  handleRemove(person) {
    this.props.collection.remove(person)
  }

  render() {
    const {
      collection,
      filter,
      label
    } = this.props

    return (
      <div>
        <div>
          {collection.items.filter(filter).map(person =>
            <PersonForm
                person={person}
                fields={collection.fields}
                label={label}
                key={person.id}
                onRemove={this.handleRemove}
            />
          )}
        </div>

        <Button
            onClick={this.handleAdd}
            className="usa-button-primary-alt"
        >
          <FormattedMessage
              id="app.personCollection.addButton"
              description="Button to add person to collection."
              defaultMessage="+ Add another {personType}"
              values={{
                personCount: collection.length,
                personType: <span className="lowercase">{label}</span>
              }}
          />
        </Button>
      </div>
    )
  }
}

PersonCollection.defaultProps = {
  filter: () => true,
  label: 'person'
}

export default PersonCollection
