import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

//F24
export default class WhatIncome extends Component {
  render() {
    return (
      <Topic title="What income sources do I have to report in my application?">
        <p>The income section of this application will ask about the money received on a regular basis from the following sources:</p>
        <ul>
          <li>Military basic pay/drill pay</li>
          <li>Military cash bonuses</li>
          <li>Military allowance for off-base housing, food, clothing (BAH)</li>
          <li>Military benefits</li>
          <li>Salary</li>
          <li>Wages</li>
          <li>Tips</li>
          <li>Commissions</li>
          <li>Cash bonuses</li>
          <li>Income for the Self-Employed</li>
          <li>Income from Wages and Self- Employment</li>
          <li>Strike benefits</li>
          <li>Projected Income for Seasonal Workers</li>
          <li>Supplemental Security Income (SSI)</li>
          <li>Veteran’s benefits</li>
          <li>Cash assistance from State or local government</li>
          <li>Housing subsidies (not including those from federal housing programs)</li>
          <li>Alimony received</li>
          <li>Child support received</li>
          <li>Adoption assistance</li>
          <li>Unemployment benefits</li>
          <li>Worker’s compensation</li>
          <li>Social Security Disability Insurance (SSDI)</li>
          <li>Social Security</li>
          <li>Black Lung benefits</li>
          <li>Railroad retirement</li>
          <li>Pensions</li>
          <li>College financial aid for room and board (living expenses), not  including Pell Grants, Supplemental Education Opportunity Grants, State </li>Student Incentive Grants, National Direct Student Loans, PLUS, College Work Study, or Byrd Honor Scholarship Programs
          <li>Regular cash payments from outside the household (for example, money regularly received from extended family or friends that do not live in </li>the household)
          <li>Regular payments or withdrawals from sources such as an award, settlement, inheritance or prize winnings</li>
          <li>Net income from rental properties</li>
          <li>Earned interest</li>
          <li>Annuities</li>
          <li>Other investment income</li>
          <li>Any other money that may be available to pay for children’s meals</li>
        </ul>
        <p>
          We do not take into account income from:
        </p>
        <ul>
          <li>Irregular overtime pay</li>
          <li>Military Family Substance Supplemental Allowance (FSSA)</li>
          <li>Military Housing Privatization Initiative</li>
          <li>Combat Pay when it is:</li>
            <ul>
              <li>Received in addition to the service member’s basic pay;</li>
              <li>Received as a result of deployment to or service in an area that has been designated as a combat zone; and</li>
              <li>Not received by the service member prior to deployment to or service in the designated combat zone</li>
            </ul>
          <li>Cash  value of benefits from SNAP or FDPIR</li>
          <li>Payments received from a foster care agency or court for the care of foster children</li>
          <li>Student financial assistance provided for the costs of attendance at an educational institution, such as grants and scholarships awarded to </li>meet educational expenses and not available to pay for meals
          <li>Loans, such as bank loans, since these funds are only temporarily available and must be repaid</li>
          <li>Earnings received on an irregular basis, such as payment for occasional baby-sitting or mowing lawns</li>
          <li>Housing subsidies from federal housing programs</li>
        </ul>
      </Topic>
    )
  }
}