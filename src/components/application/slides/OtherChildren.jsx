import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { informalList } from '../../../helpers'

@observer
class OtherChildren extends Component {
  @computed get nextText() {
    return this.props.otherChildren.length ? 'Continue' : 'No other children'
  }

  render() {
    const { allPeopleCollections, alreadyNamed, otherChildren } = this.props

    return (
      <Slide nextDisabled={!otherChildren.isValid} nextText={this.nextText}
             id="other-children" beginsSection>

        <p className="usa-font-lead">Okay, it looks like we will need more information about your household and income in order to determine if you are eligible for benefits.</p>

        <p>Both income and total household size are important for determining eligibility for school meal benefits. Remember, for the purposes of applying for school meal benefits, a household is defined as a group of people, related or unrelated, that usually live together and share income and expenses. If this sounds complicated, don’t worry! We will help you determine who should be included in your application, as well as which income sources to report.</p>

        <p>Before we talk about the adults, let’s finish up the kids in the house. Other than {informalList(alreadyNamed)}, are there any other children in your household? Don’t forget to include:</p>

        <ul className="usa-content-list">
          <li>students that are in grade 12 or below and attend school in a school district other than {organization.name}</li>
          <li>children that attend day care or pre-school, or are not of school age, including infants</li>
          <li>anyone 18 years of age or younger living in your household that does not currently attend school</li>
        </ul>

        <PersonCollection
            label="Child"
            labelPlural="other children"
            collection={otherChildren}
        />
      </Slide>
    )
  }
}

export default OtherChildren
