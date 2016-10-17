import React, { Component } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'
import { thankYou } from '../../../config'

@observer
class ThankYou extends Component {
  render() {
    return (
      <Slide header="Thank you for applying for school meal benefits!" id="thank-you"
             showBack={false} nextText="View Final Data Set" beginsSection>
        <p>Your application has been submitted.</p>
        <p>{ thankYou }</p>
        <p>[CAUTION! NO DATA HAS BEEN SAVED. THIS IS NOT A REAL APPLICATION FOR SCHOOL MEAL BENEFITS. THIS IS A MODEL APPLICATION DEVELOPED BY USDA TO DEMONSTRATE THE POTENTIAL FUNCTIONALITY OF A SCHOOL DISTRICT'S APPLICATION. CONTACT YOUR CHILD'S SCHOOL TO FIND OUT WHERE YOU CAN ACCESS THEIR APPLICATION FOR SCHOOL MEAL BENEFITS.]</p>
      </Slide>
    )
  }
}

export default ThankYou
