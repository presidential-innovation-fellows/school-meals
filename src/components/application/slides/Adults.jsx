import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { fullName } from '../../../helpers'
import { observer } from 'mobx-react'

@observer
class Adults extends Component {
  render() {
    const { adults, allChildren } = this.props
    const attestors = adults.items.filter(person => person.isAttestor)

    return (
      <Slide header="Adults" id="adults" nextDisabled={!adults.isValid}
             beginsSection>
        <p>Okay, now let's talk about other members of your household.</p>
        <p>Not including {attestors[0].firstName}, what other adults live in the household?</p>

        <p>Adults:</p>
        <ul>
          {attestors.map(person =>
            <li key={person.id}><strong>{fullName(person)}</strong></li>
           )}
        </ul>

        <p>Children:</p>
        <ul>
          {allChildren.map(person =>
            <li key={person.id}><strong>{fullName(person)}</strong></li>
           )}
        </ul>

        <p>Keep in mind the definition of a household. Don't forget about grandparents or other extended family members that are living with you. Also include people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college, or members of your family that are in the military, but deployed. Include people regardless of age or whether they earn or receive income.</p>

        <PersonCollection collection={adults}
                          filter={person => !person.isAttestor} />
      </Slide>
    )
  }
}

export default Adults
