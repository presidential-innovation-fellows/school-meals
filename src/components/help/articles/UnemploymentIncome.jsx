import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class UnemploymentIncome extends Component {
  render() {
    return (
      <Article>
        <Topic>
          <p>
            Strike benefits are compensation paid by a union to workers on strike.
          </p>
          <p>
            Unemployment benefits are payments from the government or a labor union to a person who is unemployed.
          </p>
          <p>
            Worker’s compensation benefits are payments to cover lost wages and medical expenses of an employee who is injured on the job.
          </p>
          <p>
            Social Security Disability Insurance (SSDI) are benefits paid to people who have worked long enough and paid Social Security taxes but who can’t work because they have a medical condition that is expected to last at least one year or result in death.
          </p>
        </Topic>
      </Article>
    )
  }
}
