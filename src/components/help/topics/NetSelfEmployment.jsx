import React, { Component } from 'react'
import Topic from '../Topic'
import { FormattedMessage } from 'react-intl'

// D7
export default class NetSelfEmployment extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.netSelfEmployment.term"
        description="Definition for the term Net Self Employment."
        defaultMessage="Net income from self-employment"
                  />

    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.netSelfEmployment.definition1"
              description="Definition for the term net self employment."
              defaultMessage="Income from self-employment should be reported as your current net income, equal to gross revenue (income) minus business expenses. Gross revenue (income) includes the total income from goods sold or services rendered by the business, or the value of all products sold."
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.netSelfEmployment.definition2"
                description="Definition for the term net self employment."
                defaultMessage="Deductible business expenses include the cost of goods purchased; rent; utilities; depreciation charges; wages and salaries paid; and business taxes;"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.netSelfEmployment.definition3"
                description="Definition for the term net self employment."
                defaultMessage="Non-deductible business expenses include the value of salable merchandise used by the proprietors of retail businesses; and personal, Federal, State, or local income taxes;"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.netSelfEmployment.definition4"
                description="Definition for the term net self employment."
                defaultMessage="Net income for self-employed farmers is figured by subtracting the farmer’s operating expenses from the gross revenue (income). Gross income includes money received from the rental of farm land, buildings, or equipment to others; and incidental receipts from the sale of items such as wood, sand, or gravel. Operating expenses include cost of feed, fertilizer, seed, and other farming supplies; cash wages paid to farmhands; depreciation charges; cash rent; interest on farm mortgages; farm building repairs; and farm taxes;"
            />
          </li>
        </ul>
        <p>
          <FormattedMessage
              id="help.topic.netSelfEmployment.definitio5"
              description="Definition for the term net self employment."
              defaultMessage="If your current net income is not your usual income, you may use last year’s income as a basis to report net income, or refer to the question ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ in the HELP."
          />
        </p>
      </Topic>
    )
  }
}
