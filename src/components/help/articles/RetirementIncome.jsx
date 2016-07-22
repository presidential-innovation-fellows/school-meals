import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class RetirementIncome extends Component {
  render() {
    return (
      <Article>
        <Topic>
          <p>
            Social Security retirement benefits are monthly payments to people (or family members of people) who are age 62 or older who have worked and paid taxes into the Social Security system.
          </p>
          <p>
            Black Lung benefits provide monthly payments and medical treatment for people that became disabled from black lung disease from working in or around the nation’s coal mines.
          </p>
          <p>
            Railroad retirement benefits are monthly payments to qualified railroad employees that are retired or disabled.
          </p>
          <p>
            A pension is generally a series of payments made to you after you retire from work. Pension payments are made regularly and are based on such factors as years of service and prior compensation.
          </p>
        </Topic>
      </Article>
    )
  }
}
