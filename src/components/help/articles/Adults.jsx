import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import Household from '../topics/Household'
import NoIncome from '../topics/NoIncome'

export default class Adults extends Component {
  render() {
    return (
      <Article>
        <Topic title="Should I include a member of our household on the application if they are currently deployed?">
          <p>
            Yes. Members of the armed services who are activated or deployed are counted as household members. Any money made available by them or on their behalf for the household is included as income to the household with the exception of combat pay.
          </p>
        </Topic>

        <Household />
        <NoIncome />
      </Article>
    )
  }
}
