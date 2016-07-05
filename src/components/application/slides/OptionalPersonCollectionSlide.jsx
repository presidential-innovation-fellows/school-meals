import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import PersonCollection from '../PersonCollection'
import { observer } from 'mobx-react'

@observer
class OptionalPersonCollectionSlide extends Component {
  render() {
    const { collection, header, label, labelPlural } = this.props

    return (
      <Slide header={header} nextDisabled={!collection.isValid}>
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
  collection: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelPlural: PropTypes.string.isRequired
}

export default OptionalPersonCollectionSlide
