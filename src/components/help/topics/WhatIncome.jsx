import React, { Component } from 'react'
import Topic from '../Topic'
import { FormattedMessage } from 'react-intl'
import { assistanceProgramsVar } from '../../../config'

// F24
export default class WhatIncome extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.WhatIncome.question"
        description="Question for the applicable income help topic."
        defaultMessage="What income sources do I have to report in my application?"
                  />

    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.WhatIncome.answer1"
              description="Answer for the applicable income help topic."
              defaultMessage="The income section of this application will ask about the money received on a regular basis from the following sources:"
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer2"
                description="Answer for the applicable income help topic."
                defaultMessage="Military basic pay and drill pay"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer3"
                description="Answer for the applicable income help topic."
                defaultMessage="Military cash bonuses"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer4"
                description="Answer for the applicable income help topic."
                defaultMessage="Military allowance for off-base housing, food, clothing (BAH)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer5"
                description="Answer for the applicable income help topic."
                defaultMessage="Military benefits"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer6"
                description="Answer for the applicable income help topic."
                defaultMessage="Salary"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer7"
                description="Answer for the applicable income help topic."
                defaultMessage="Wages"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer8"
                description="Answer for the applicable income help topic."
                defaultMessage="Tips"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer9"
                description="Answer for the applicable income help topic."
                defaultMessage="Commissions"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer10"
                description="Answer for the applicable income help topic."
                defaultMessage="Cash bonuses"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer11"
                description="Answer for the applicable income help topic."
                defaultMessage="Income for the Self-Employed"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer12"
                description="Answer for the applicable income help topic."
                defaultMessage="Income from Wages and Self-Employment"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer13"
                description="Answer for the applicable income help topic."
                defaultMessage="Strike benefits"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer14"
                description="Answer for the applicable income help topic."
                defaultMessage="Projected Income for Seasonal Workers"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer15"
                description="Answer for the applicable income help topic."
                defaultMessage="Supplemental Security Income (SSI)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer16"
                description="Answer for the applicable income help topic."
                defaultMessage="Veteran’s benefits"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer17"
                description="Answer for the applicable income help topic."
                defaultMessage="Cash assistance from State or local government"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer18"
                description="Answer for the applicable income help topic."
                defaultMessage="Housing subsidies (not including those from federal housing programs)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer19"
                description="Answer for the applicable income help topic."
                defaultMessage="Alimony received"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer20"
                description="Answer for the applicable income help topic."
                defaultMessage="Child support received"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer21"
                description="Answer for the applicable income help topic."
                defaultMessage="Adoption assistance"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer22"
                description="Answer for the applicable income help topic."
                defaultMessage="Unemployment benefits"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer23"
                description="Answer for the applicable income help topic."
                defaultMessage="Worker’s compensation"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer24"
                description="Answer for the applicable income help topic."
                defaultMessage="Social Security Disability Insurance (SSDI)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer25"
                description="Answer for the applicable income help topic."
                defaultMessage="Social Security"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer26"
                description="Answer for the applicable income help topic."
                defaultMessage="Black Lung benefits"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer27"
                description="Answer for the applicable income help topic."
                defaultMessage="Railroad retirement"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer28"
                description="Answer for the applicable income help topic."
                defaultMessage="Pensions"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer29"
                description="Answer for the applicable income help topic."
                defaultMessage="College financial aid for room and board (living expenses), not  including Pell Grants, Supplemental Education Opportunity Grants, State Student Incentive Grants, National Direct Student Loans, PLUS, College Work Study, or Byrd Honor Scholarship Programs"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer30"
                description="Answer for the applicable income help topic."
                defaultMessage="Regular cash payments from outside the household (for example, money regularly received from extended family or friends that do not live in the household)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer31"
                description="Answer for the applicable income help topic."
                defaultMessage="Regular payments or withdrawals from sources such as an award, settlement, inheritance or prize winnings"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer32"
                description="Answer for the applicable income help topic."
                defaultMessage="Net income from rental properties"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer33"
                description="Answer for the applicable income help topic."
                defaultMessage="Earned interest"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer34"
                description="Answer for the applicable income help topic."
                defaultMessage="Annuities"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer35"
                description="Answer for the applicable income help topic."
                defaultMessage="Other investment income"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer36"
                description="Answer for the applicable income help topic."
                defaultMessage="Any other money that may be available to pay for children’s meals"
            />
          </li>
        </ul>
        <p>
          <FormattedMessage
              id="help.topic.WhatIncome.answer37"
              description="Answer for the applicable income help topic."
              defaultMessage="Cash value of benefits from {snapAccronym} or {fdpirAccronym}"
              values={{
                snapAccronym: assistanceProgramsVar.snap.accronym,
                fdpirAccronym: assistanceProgramsVar.fdpir.accronym
              }}
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer38"
                description="Answer for the applicable income help topic."
                defaultMessage="Irregular overtime pay"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer39"
                description="Answer for the applicable income help topic."
                defaultMessage="Military Family Substance Supplemental Allowance (FSSA)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer40"
                description="Answer for the applicable income help topic."
                defaultMessage="Military Housing Privatization Initiative"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer41"
                description="Answer for the applicable income help topic."
                defaultMessage="Combat Pay when it is:"
            />
          </li>
          <ul>
            <li>
              <FormattedMessage
                  id="help.topic.WhatIncome.answer42"
                  description="Answer for the applicable income help topic."
                  defaultMessage="Received in addition to the service member’s basic pay;"
              />
            </li>
            <li>
              <FormattedMessage
                  id="help.topic.WhatIncome.answer43"
                  description="Answer for the applicable income help topic."
                  defaultMessage="Received as a result of deployment to or service in an area that has been designated as a combat zone; and"
              />
            </li>
            <li>
              <FormattedMessage
                  id="help.topic.WhatIncome.answer44"
                  description="Answer for the applicable income help topic."
                  defaultMessage="Not received by the service member prior to deployment to or service in the designated combat zone"
              />
            </li>
          </ul>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer45"
                description="Answer for the applicable income help topic."
                defaultMessage="Cash value of benefits from {snapAccronym} or {fdpirAccronym}"
                values={{
                  snapAccronym: assistanceProgramsVar.snap.accronym,
                  fdpirAccronym: assistanceProgramsVar.fdpir.accronym
                }}
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer46"
                description="Answer for the applicable income help topic."
                defaultMessage="Payments received from a foster care agency or court for the care of foster children"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer47"
                description="Answer for the applicable income help topic."
                defaultMessage="Student financial assistance provided for the costs of attendance at an educational institution, such as grants and scholarships awarded to meet educational expenses and not available to pay for meals"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer48"
                description="Answer for the applicable income help topic."
                defaultMessage="Loans, such as bank loans, since these funds are only temporarily available and must be repaid"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer49"
                description="Answer for the applicable income help topic."
                defaultMessage="Earnings received on an irregular basis, such as payment for occasional baby-sitting or mowing lawns"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatIncome.answer50"
                description="Answer for the applicable income help topic."
                defaultMessage="Housing subsidies from federal housing programs"
            />
          </li>
        </ul>
      </Topic>
    )
  }
}
