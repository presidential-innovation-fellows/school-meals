import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import WhatIsGross from '../topics/WhatIsGross'
import WhatIsNet from '../topics/WhatIsNet'
import NotTheSame from '../topics/NotTheSame'
import { organization } from '../../../config'
import { help } from './HelpText'

export default class AdultIncomeOverview extends Component {
  render() {
    return (
      <Article>
//!!OMITTED!!
        <WhatIsGross />
        <WhatIsNet />
//included in HelpText
        <Topic title="Is supplemental security income (SSI) included in my household income?">
          <p>
            Yes. SSI benefits should be reported as household income in your application for school meal benefits.
          </p>
        </Topic>
//included in HelpText
        <Topic title="What government program benefits should I include in my household income?">
          <p>
            If you have questions about whether to include benefits from a specific program, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).
          </p>
        </Topic>
//included in HelpText
        <Topic title="Are my alimony and child support payments considered household income?">
          <p>
            Yes. Income from alimony and child support payments are considered household income and should be reported in your application for school meal benefits.
          </p>
        </Topic>
//included...
        <Topic title="Do I need to report unemployment benefits, worker’s comp, social security disability insurance (SSDI) or Black Lung benefit payments in my household income?">
          <p>
            Yes. Even if you are currently unemployed or not working, if you or anyone in your household receives unemployment benefits, worker’s comp payments, SSDI, or Black Lung benefits, you must report that in your application for school meal benefits.
          </p>
        </Topic>
//included...
        <Topic title="Are retirement benefits, such as Social Security, railroad retirement, or private pensions, considered household income?">
          <p>
            Yes. Income from public (government) or private (non-government) retirement plans are considered household income and should be reported in your application for school meal benefits.
          </p>
        </Topic>
//included...
        <Topic title="How should I report income from rented space or properties? ">
          <p>
            If you receive income from a room or property that you rent out, you should report the net amount of income. In other words, take the total amount you receive in rent for one month (the gross income), and subtract the monthly cost of maintaining the property. If you have questions or need help figuring out how to estimate maintenance costs, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).
          </p>
        </Topic>
//included...
        <Topic title="How do I know if I have income from earned interest?">
          <p>
            If you have money in a savings or investment account, you should have income from earned interest. Interest payments are usually paid out on a quarterly basis, or four times per year. You should see any earned interest on your savings or investment account statement.
          </p>
        </Topic>
//included...
        <Topic title="What is an annuity and how do I know if I have income from one?">
          <p>
            An annuity is a series of payments under a contract made at regular intervals over a period of more than one full year. They can be either fixed (under which you receive a definite amount) or variable (not fixed). Annuities can be purchased by individuals alone, or with the help of an employer. If you are unsure whether you have income from an annuity, you should contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).
          </p>
        </Topic>
//!!OMITTED!!
        <NotTheSame />
//included...
        <Topic title="How should I report my income if I work on a seasonal basis?">
          <p>
            If you work on a seasonal basis and your household’s current, gross income is higher or lower than usual and does not fairly or accurately represent your household’s actual circumstances, see the ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ question in the HELP. If you have additional questions, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}), and they will help you figure out your household’s annual rate of income based on <abbr title="United States Department of Agriculture">USDA</abbr> guidelines.
          </p>
        </Topic>
//included...
        <Topic title="We are in the military. Do we report our income differently?">
          <p>
            Your basic pay and cash bonuses must be reported as income. If you get any cash value allowances for off-base housing, food, or clothing, (including BAH), it must also be included as income. However, if your housing is part of the Military Housing Privatization Initiative, do not include your housing allowance as income. Do not include payments from the Family Subsistence Supplemental Allowance (FSSA). Any additional combat pay resulting from deployment is also excluded from income. If the service member is deployed, include only the portion that is made available by them or on their behalf to the household as income.
          </p>
        </Topic>
      </Article>
    )
  }
}
