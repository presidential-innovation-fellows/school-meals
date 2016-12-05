import React, { Component } from 'react'
import Topic from '../Topic'
import { organization } from '../../../config'
import { FormattedMessage } from 'react-intl'

// F28
export default class NotTheSame extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.NotTheSame.question"
        description="Question for the Not the Same help topic."
        defaultMessage="What if my income is not always the same?"
                  />
    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.NotTheSame.answer1"
              description="Answer for the Not the Same help topic."
              defaultMessage="If your income is different this month than a normal month because of overtime, holiday pay, missing a couple of shifts at work, or some other reason, put down what you would have made if those things hadn’t happened. For example, if you normally make $1000 each month, but you missed some work last month and only made $900, put down that you make $1000 per month. Similarly, if you normally make $500 per month, but you worked overtime and made $750, put down that you make $500 per month."
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.NotTheSame.answer2"
                description="Answer for the Not the Same help topic."
                defaultMessage="If you work on a seasonal basis, like in agriculture or tourism, and earn more money in some months than in other months, you may add up all your earnings for the year and divide it by twelve in order to report a monthly amount. If you expect to earn the same amount as last year, you can use your earnings from last year as the basis of your projected monthly income."
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.NotTheSame.answer3"
                description="Answer for the Not the Same help topic."
                defaultMessage="If you receive a one-time payment, it should not be reported as current, monthly income since it is not received on a regular basis. However, if you receive a one-time payment, such as from an award, settlement, inheritance or prize winnings, and then regularly draw on that money for living expenses later on, the amount withdrawn should be reported in your application for school meal benefits."
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.NotTheSame.answer4"
                description="Answer for the Not the Same help topic."
                defaultMessage="If you need additional help or information about how to report your income, contact {organizationName} at {organizationContactInfo}, and they will help you figure out your household’s annual rate of income based on USDA guidelines."
                values={{
                  organizationName: organization.name,
                  organizationContactInfo: `${organization.contact.phone} / ${organization.contact.email} / ${organization.contact.address}`
                }}
            />
          </li>
        </ul>
      </Topic>
    )
  }
}
