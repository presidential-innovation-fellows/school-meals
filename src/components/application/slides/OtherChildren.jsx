import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { informalList } from '../../../helpers'
import OptionalPersonCollectionSlide from './OptionalPersonCollectionSlide'

@observer
class OtherChildren extends Component {
  get alreadyNamed() {
    return this.props.alreadyNamed
               .map(collection => collection.items.slice())
               .reduce((a, b) => a.concat(b), [])
  }

  render() {
    return (
      <OptionalPersonCollectionSlide
          header="Other Children"
          label="child"
          labelPlural="other children"
          collection={this.props.otherChildren}>

        <p>
          Is there anyone 18 years of age or younger living in your household that does not currently attend school, again, not including those you have already named <strong>({informalList(this.alreadyNamed)})</strong>?
        </p>

      </OptionalPersonCollectionSlide>
    )
  }
}

export default OtherChildren
