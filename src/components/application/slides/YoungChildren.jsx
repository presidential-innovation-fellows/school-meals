import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { informalList } from '../../../helpers'
import OptionalPersonCollectionSlide from './OptionalPersonCollectionSlide'

@observer
class YoungChildren extends Component {
  get alreadyNamed() {
    return this.props.alreadyNamed
               .map(collection => collection.items.slice())
               .reduce((a, b) => a.concat(b), [])
  }

  render() {
    return (
      <OptionalPersonCollectionSlide
          header="Young Children"
          label="young child"
          labelPlural="young children"
          id="young-children"
          collection={this.props.youngChildren}>

        <p>
          Is there anyone in your household that attends day care or pre-school, or is not of school age, including infants, not including those you already named <strong>({informalList(this.alreadyNamed)})</strong>?
        </p>

      </OptionalPersonCollectionSlide>
    )
  }
}

YoungChildren.propTypes = {
  youngChildren: PropTypes.object.isRequired,
  alreadyNamed: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default YoungChildren
