import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import PersonCollection from '../PersonCollection'
import { observer } from 'mobx-react'

@observer
class OptionalPersonCollectionSlide extends Component {
  render() {
    const { collection, header, label, labelPlural, id } = this.props

    return (
      <Slide header={header} nextDisabled={!collection.isValid} id={id}>
        {this.props.children}

        <BooleanRadio name="hasAny" object={collection} />

        {collection.hasAny &&
         <PersonCollection
             label={label}
             labelPlural={labelPlural}
             collection={collection}
         />
        }

      </Slide>
    )
  }
}

OptionalPersonCollectionSlide.propTypes = {
  id: PropTypes.string.isRequired,
  collection: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelPlural: PropTypes.string.isRequired
}

export default OptionalPersonCollectionSlide
