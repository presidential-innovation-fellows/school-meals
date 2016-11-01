import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'
import { organization } from '../../../config'

//F20
export default class QualifyMigrant extends Component {
  render() {
    return (
      <Topic title="How do I know if my children qualify as migrant? ">
        <p>
          Your children may qualify as a migrant if you have moved your household into a different school district within the last three years to gain or look for temporary/seasonal work in agriculture or fishing.
        </p>
        <p>
        	If you believe children in your household meet one or more of these descriptions and you haven’t been told your children will get free meals, please contact {organization.name}.
        </p>
      </Topic>
    )
  }
}
