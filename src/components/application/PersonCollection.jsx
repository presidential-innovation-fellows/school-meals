import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import PersonForm from './PersonForm'
import { Button, Well } from 'react-bootstrap'

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
      label,
      labelPlural
    } = this.props

    return(
      <div>
        {!collection.length &&
          <Well><strong>No {labelPlural}</strong></Well>
        }

        {collection.map(person =>
          <PersonForm person={person}
                      fields={collection.fields}
                      label={label}
                      key={person.id}
                      onRemove={this.onRemove} />
        )}

        <div>
          <Button bsStyle="success" onClick={this.onAdd}>
            Add {collection.length ? 'another' : 'a'} {label}
          </Button>
        </div>
        <br />
      </div>
    )
  }
}

PersonCollection.defaultProps = {
  label: 'person',
  labelPlural: 'people'
}

export default PersonCollection
