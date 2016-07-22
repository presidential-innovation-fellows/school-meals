import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

export default class NoIncome extends Component {
  render() {
    return (
      <Topic title="What if some household members have no income to report?">
        <p>
          You should still list these household members on your application.  Household members may not earn or receive some of the types of income we ask you to report, or they may not receive income at all. Remember your eligibility determination is based on both household income and household size.
        </p>
      </Topic>
    )
  }
}
