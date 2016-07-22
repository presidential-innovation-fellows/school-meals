import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class SpousalIncome extends Component {
  render() {
    return (
      <Article>
        <Topic title="Alimony">
          <p>
            Alimony is income from payments paid by a spouse or former spouse from whom you are divorced or legally separated.
          </p>
        </Topic>
        <Topic title="Child support">
          <p>
            Child support payments are payments from one parent to another to cover the cost of raising a child. Child support should be reported as adult income, rather than child income.
          </p>
        </Topic>
      </Article>
    )
  }
}
