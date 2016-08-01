import React, { Component } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'

@observer
class HouseholdIntro extends Component {
  render() {
    return (
      <Slide id="household" showHelp={false} beginsSection>
        <p>Okay, it looks like we will need more information about your household and income in order to determine if you are eligible for benefits.</p>
        <p>Both income and total household size are important for determining eligibility for school meal benefits. Remember, for the purposes of applying for school meal benefits, a household is defined as a group of people, related or unrelated, that usually live together and share income and expenses. If this sounds complicated, don’t worry! We will help you determine who should be included in your application, as well as which income sources to report.</p>
      </Slide>
    )
  }
}

export default HouseholdIntro
