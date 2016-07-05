import React, { Component, PropTypes } from 'react'
import BooleanRadio from './BooleanRadio'
import Slide from './Slide'
import { observer } from 'mobx-react'

@observer
class PersonCollectionAttribute extends Component {
  get isValid() {
    return this.props.collection.allHaveProp(this.props.attribute)
  }

  render() {
    const { collection, attribute, header } = this.props

    return (
      <Slide header={header} nextDisabled={!this.isValid}>
        {this.props.children}
        {collection.map((person, i) =>
          <div key={i}>
            {collection.length !== 1 &&
             <ControlLabel>{person.firstName}</ControlLabel>}
             <BooleanRadio name={attribute}
                           object={person}
                           suffix={i.toString()} />
          </div>
        )}
      </Slide>
    )
  }
}

PersonCollectionAttribute.propTypes = {
  attribute: PropTypes.string.isRequired,
  collection: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired
}

export default PersonCollectionAttribute
