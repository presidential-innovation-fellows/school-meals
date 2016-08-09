import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

export default class NotTheSame extends Component {
  render() {
    return (
        <Topic title="What if my income is not always the same?">
          <p>
            If your income is different this month than a normal month because of overtime, holiday pay, missing a couple of shifts at work, or some other unexpected reason, put down what you would have made if those things hadn’t happened. For example, if you normally make $1000 each month, but you missed some work last month and only made $900, put down that you make $1000 per month. Similarly, if you normally make $500 per month, but you worked overtime and made $750, put down that you make $500 per month.
          </p>
        </Topic>
    )
  }
}
