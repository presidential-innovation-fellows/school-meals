import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class OtherIncome extends Component {
  render() {
    return (
      <Article>
        <Topic>
          <p>
            Regular cash payments from outside the household is money regularly received from extended family or friends that do not live with you.  For example, if parents or grandparents regularly help cover the cost of groceries, bills, or rent, that money is considered household income and should be reported in your application for school meal benefits.
          </p>
          <p>
            One-time payments should not be reported as current, monthly income since they are not received on a regular basis. However, if you receive a one-time payment, such as from an award, settlement, inheritance or prize winnings, and then regularly draw on that money for living expenses later on, the amount withdrawn should be reported in your application for school meal benefits in the space for ‘Any other income available to pay for children’s school meals’.
          </p>
          <p>
            Earned interest is a fee that is paid for the use of another person’s money. It is usually a percentage of the amount borrowed.
          </p>
          <p>
            An annuity is a series of payments under a contract made at regular intervals over a period of more than one full year. They can be either fixed (under which you receive a definite amount) or variable (not fixed). Annuities can be purchased by individuals alone, or with the help of an employer.
          </p>
        </Topic>
      </Article>
    )
  }
}
