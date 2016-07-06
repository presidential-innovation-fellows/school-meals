import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Slide from '../Slide'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'

@observer
class PersonCollectionAttributeSlide extends Component {
  // true if either true/false radio button has been clicked (is non-null)
  get isValid() {
    return this.props.collectionItems
               .map(item => item[this.props.attribute] != undefined)
               .reduce((a, b) => a && b, true)
  }

  render() {
    const { attribute, collectionItems, header } = this.props

    return (
      <Slide header={header} nextDisabled={!this.isValid}>
        {this.props.children}
        {collectionItems.map(person =>
          <div key={person.id}>
            {collectionItems.length !== 1 &&
             <ControlLabel>{person.firstName}</ControlLabel>}
             <BooleanRadio name={attribute} object={person} />
          </div>
        )}
      </Slide>
    )
  }
}

PersonCollectionAttributeSlide.propTypes = {
  attribute: PropTypes.string.isRequired,
  collectionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired
}

export default PersonCollectionAttributeSlide
