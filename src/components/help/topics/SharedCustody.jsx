import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

//delete
//spelling mistake in classname
export default class SharedCustory extends Component {
  render() {
    return (
      <Topic title="What if I share custody of my child?">
        <p>
          If time is split between houses, both parents may apply for benefits. If the eligibility statuses are different, the highest level of benefits will apply. For example, if you qualify for free meals but your child’s other parent does not, no matter which house your child is staying at, he or she can still receive free meals. However, if either parent chooses not to have your child receive free meal benefits while residing with them then that parent may simply pay for the meals.
        </p>
      </Topic>
    )
  }
}
