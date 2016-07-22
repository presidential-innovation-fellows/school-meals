import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { organization } from '../../../config'
import SchoolYear from '../../application/SchoolYear'

export default class BeforeYouBegin extends Component {
  render() {
    return (
      <Article>
        <Topic title="My child's application was approved last year. Do I need to fill out a new one?">
          <p>
            Yes. Eligibility for free or reduced price meals only lasts for one school year. However, eligibility for the previous year carries over for the first few days of the new school year, or until the new eligibility determination is made. Please complete a new application unless you received a letter from the school saying that your child is eligible for the upcoming <SchoolYear /> school year.
          </p>
        </Topic>

        <Topic title="Do I need to fill out an application for each child?">
          <p>
            No. Use one Free and Reduced Price School Meals Application for all students that attend {organization.name} in your household.
          </p>
        </Topic>

        <Topic title="If I don't qualify now, may I apply later?">
          <p>
            Yes, you may apply at any time during the school year.  For example, children with a parent or guardian who becomes unemployed may become eligible for free or reduced price meals if the household income drops below the income limit.
          </p>
        </Topic>
      </Article>
    )
  }
}
