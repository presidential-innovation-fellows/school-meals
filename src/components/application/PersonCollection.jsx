import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Button from './Button'
import Form from './Form'
import PersonForm from './PersonForm'

@observer
class PersonCollection extends Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onAdd() {
    this.props.collection.add()
  }

  onRemove(person) {
    this.props.collection.remove(person)
  }

  render() {
    const {
      collection,
      filter,
      label,
      labelPlural
    } = this.props

    return(
      <div>
        <div>
          {collection.items.filter(filter).map(person =>
            <PersonForm person={person}
                        fields={collection.fields}
                        label={label}
                        key={person.id}
                        onRemove={this.onRemove} />
          )}
        </div>

        <Button onClick={this.onAdd}
                className="usa-button-secondary add-person">
          + Add {collection.length ? 'another ' : 'a '}
          <span className="lowercase">{label}</span>
        </Button>
      </div>
    )
  }
}

PersonCollection.defaultProps = {
  filter: person => true,
  label: 'person',
  labelPlural: 'people'
}

export default PersonCollection
