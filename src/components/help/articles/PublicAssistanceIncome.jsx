import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class PublicAssistanceIncome extends Component {
  render() {
    return (
      <Article>
        <Topic>
          <p>
            Supplemental Security Income (SSI) provides cash to meet basic needs for food, clothing, and shelter to aged, blind, and disabled people who have little or no income.
          </p>
          <p>
            Benefits that are paid to veteran’s that have a service-connected disability and were not dishonorably discharged.
          </p>
          <p>
            Income in the form of cash benefits, including housing subsidies, from state or local government programs should be reported as household income. If you have questions about whether to include benefits from a specific program, contact [insert contact info, e.g. school/district/person’s name at address, phone number, email].
          </p>
        </Topic>
      </Article>
    )
  }
}
