import React, { Component } from 'react'
import Topic from '../Topic'
import { FormattedMessage } from 'react-intl'

// F15
export default class Household extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.household.question"
        description="Question for the household help topic."
        defaultMessage="Who should I include in my household?"
                  />

    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.household.answer1"
              description="Answer for the household help topic."
              defaultMessage="A household is defined as a group of people, related or unrelated, that usually live together and share income and expenses."
          />
        </p>
        <p>
          <FormattedMessage
              id="help.topic.household.answer2"
              description="Answer for the household help topic."
              defaultMessage="Don't forget to include people if you support them financially, regardless of whether they earn or receive income, including:"
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.household.answer3"
                description="Answer for the household help topic."
                defaultMessage="foster children"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer4"
                description="Answer for the household help topic."
                defaultMessage="children that are away at college or boarding school"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer5"
                description="Answer for the household help topic."
                defaultMessage="grandparents"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer6"
                description="Answer for the household help topic."
                defaultMessage="extended family members that are living with you"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer7"
                description="Answer for the household help topic."
                defaultMessage="foreign exchange students that are living with you"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer8"
                description="Answer for the household help topic."
                defaultMessage="people that are not currently living with you, but are only away on a temporary basis (like kids that are away at college)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer9"
                description="Answer for the household help topic."
                defaultMessage="family members of the armed services who are away from home because they are activated or deployed"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer10"
                description="Answer for the household help topic."
                defaultMessage="people living away from home for an extended period of time (such as parents who live and work away from home)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answe11"
                description="Answer for the household help topic."
                defaultMessage="other people who stay at your house and you provide with shelter, utilities, clothing, or food"
            />
          </li>
        </ul>
        <p>
          <FormattedMessage
              id="help.topic.household.answer12"
              description="Answer for the household help topic."
              defaultMessage="You should NOT include:"
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.household.answer13"
                description="Answer for the household help topic."
                defaultMessage="renters"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer14"
                description="Answer for the household help topic."
                defaultMessage="boarders"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer15"
                description="Answer for the household help topic."
                defaultMessage="children who do not live with you (such as children that live permanently with other relatives or friends)"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.household.answer16"
                description="Answer for the household help topic."
                defaultMessage="children for whom you do not have custody and therefore do not live with you (if you have joint custody, see the help question: WHAT IF I SHARE CUSTODY OF MY CHILD?"
            />
          </li>
        </ul>
      </Topic>
    )
  }
}
