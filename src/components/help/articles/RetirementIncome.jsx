import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class RetirementIncome extends Component {
  render() {
    return (
      <Article>
        <Topic title="Social Security">
          <p>
            Social Security retirement benefits are payments to people (or family members of people) who are age 62 or older who have worked and paid taxes into the Social Security system.
          </p>
        </Topic>
        <Topic title="Black Lung Benefits">
          <p>
            Black Lung benefits provide payments and medical treatment for people that became disabled from black lung disease from working in or around the nation’s coal mines.
          </p>
        </Topic>
        <Topic title="Railroad Retirement">
          <p>
            Railroad retirement benefits are payments to qualified railroad employees that are retired or disabled.
          </p>
        </Topic>
        <Topic title="Pension">
          <p>
            A pension is generally a series of payments made to you after you retire from work. Pension payments are made regularly and are based on such factors as years of service and prior compensation.
          </p>
        </Topic>
      </Article>
    )
  }
}
