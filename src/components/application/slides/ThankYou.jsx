import React, { Component } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'

@observer
class ThankYou extends Component {
  render() {
    return (
      <Slide header="Thank You" id="thank-you"
             showBack={false} showNext={false}>
        <p>Your application has been submitted.</p>
        <p>Thank you for applying for school meal benefits!</p>
      </Slide>
    )
  }
}

export default ThankYou
