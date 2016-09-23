import React, { Component } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'

@observer
class ThankYou extends Component {
  render() {
    return (
      <Slide header="Thank You" id="thank-you"
             showBack={false} showNext={false} beginsSection>
        <p>Your application has been submitted.</p>
        <p>Thank you for applying for school meal benefits!</p>
        <p>[CAUTION! THIS IS NOT A REAL APPLICATION FOR SCHOOL MEAL BENEFITS. THIS IS A MODEL APPLICATION DEVELOPED BY USDA TO DEMONSTRATE THE POTENTIAL FUNCTIONALITY OF A SCHOOL DISTRICT'S APPLICATION. CONTACT YOUR CHILD'S SCHOOL TO FIND OUT WHERE YOU CAN ACCESS THEIR APPLICATION FOR SCHOOL MEAL BENEFITS.]</p>
      </Slide>
    )
  }
}

export default ThankYou
