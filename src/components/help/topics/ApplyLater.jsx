import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

export default class ApplyLater extends Component {
  render() {
    return (
      <Topic title="If I don't qualify now, may I apply later?">
        <p>
          Yes, you may apply at any time during the school year.  For example, children with a parent or guardian who becomes unemployed may become eligible for free or reduced price meals if the household income drops below the income limit.
        </p>
      </Topic>
    )
  }
}
