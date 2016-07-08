import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Adults extends Component {
  render() {
    const { adults, allChildren } = this.props

    return (
      <Slide header="Adults" nextDisabled={!adults.isValid}>
        <p>Not including the people the people listed below, who else lives in the household?</p>

        <ul>
          {allChildren.map(child =>
            <li key={child.id}><strong>{child.firstName}</strong></li>
           )}
        </ul>

        <p>Keep in mind the definition of a household. Don’t forget about grandparents or other extended family members that are living with you. Also include people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college. Include people regardless of age or whether they earn or receive income.</p>

        <PersonCollection collection={adults} />
      </Slide>
    )
  }
}

export default Adults
