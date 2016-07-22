import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class MilitaryIncome extends Component {
  render() {
    return (
      <Article>
        <Topic>
          <p>
            Current income is income earned or received in the current month, or in the month before the completion of this application.
          </p>
          <p>
            Military basic pay is the base salary for a Military service member on active duty and counts for part of total military income. Basic Pay is electronically distributed on the 1st and 15th of every month, and should be reported as ‘twice monthly income’.
          </p>
          <p>
            Military benefits are benefits paid directly to the service member, such as allowances for food and clothing, and housing allowances for households living off-base in the general commercial or private real estate market.
          </p>
          <p>
            Allowances for off-base housing, such as the Basic Allowance for Housing (BAH), is to help service members cover to the cost of housing in the private sector.
          </p>
        </Topic>

        <Topic title="We are in the military. Do we report our income differently?">
          <p>
            Your basic pay and cash bonuses must be reported as income. If you get any cash value allowances for off-base housing, food, or clothing, (including BAH), it must also be included as income. However, if your housing is part of the Military Housing Privatization Initiative, do not include your housing allowance as income. Do not include payments from the Family Subsistence Supplemental Allowance (FSSA). Any additional combat pay resulting from deployment is also excluded from income. If the service member is deployed, include only the portion that is made available by them or on their behalf to the household as income.
          </p>
        </Topic>

        <Topic title="Do I need to report my combat pay as income on my application?">
          <p>
            No, as long as the following conditions are met:
          </p>
          <ul>
            <li>It was received in addition to basic pay;</li>
            <li>It was received for the deployment to or service in an area designated as a combat zone; and</li>
            <li>It was not received prior to deployment to or service in the designated combat zone.</li>
          </ul>
          <p>If any of these conditions are not met, you should report the amount as military basic pay.</p>
        </Topic>

        <Topic title="I get deployment extension incentive pay (DEIP). Should I report that as income in my application?">
          <p>
            Maybe. If you are not deployed, then it is included in your household income, but if you are away from your home station, then you are exempt from including it as household income.
          </p>
        </Topic>

        <Topic title="What is the family subsistence supplemental allowance?">
          <p>
            Family Subsistence Supplemental Allowance (FSSA) is available to service members living in overseas locations that make less than 130 percent of the federal poverty line, and benefits equal the total dollars required to bring household income to that level.
          </p>
        </Topic>
      </Article>
    )
  }
}
