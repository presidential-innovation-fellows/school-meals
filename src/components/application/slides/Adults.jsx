import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { fullName } from '../../../helpers'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'

@observer
class Adults extends Component {
  render() {
    const { adults } = this.props
    const attestors = adults.items.filter(person => person.isAttestor)

    return (
      <Slide header="Adults" id="adults" nextDisabled={!adults.isValid}
             beginsSection>
        <p className="usa-font-lead">Okay, now let’s talk about the adults in your household.</p>
        <p>Not including {informalName(attestors[0])}, what other adults live in the household?</p>

        <p>Keep in mind the definition of a household. Don't forget about grandparents or other extended family members that are living with you. Also include people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college, or members of your family that are in the military, but deployed. Include people regardless of age or whether they earn or receive income.</p>

        <PersonCollection collection={adults}
                          label="Adult"
                          labelPlural="adults"
                          filter={person => !person.isAttestor} />
      </Slide>
    )
  }
}

export default Adults
