import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { fullName } from '../../../helpers'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'

@observer
class Adults extends Component {
  @computed get nextText() {
    return this.props.adults.length > 1 ? 'Continue' : 'No other adults'
  }

  render() {
    const { adults } = this.props
    const attestors = adults.items.filter(person => person.isAttestor)

    return (
      <Slide nextDisabled={!adults.isValid} nextText={this.nextText}
             id="adults" beginsSection>
        <p className="usa-font-lead">Okay, now let’s talk about the adults in your household.</p>
        <p>Not including {informalName(attestors[0])}, what other adults live in the household?</p>

        <p>Keep in mind the definition of a household. Don't forget about:</p>
        <ul className="usa-content-list">
          <li>grandparents or other extended family members that are living with you</li>
          <li>
          Also include people that are not currently living with you, but are only away on a temporary basis, like:
            <ul>
              <li>kids that are away at college,</li>
              <li>members of your family that are in the military, and are deployed</li>
            </ul>
          </li>
        </ul>
        
        <p><strong>Include people regardless of age or whether they earn or receive income.</strong></p>

        <PersonCollection collection={adults}
                          label="Adult"
                          labelPlural="adults"
                          filter={person => !person.isAttestor} />
      </Slide>
    )
  }
}

export default Adults
