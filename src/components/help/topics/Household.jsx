import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

export default class Household extends Component {
  render() {
    return (
      <Topic title="Who should I include in my household?">
        <p>
          A household is defined as a group of people, related or unrelated, that usually live together and share income and expenses.
        </p>
        <p>
          Don't forget to include people if you support them financially, regardless of whether they earn or receive income, including:
        </p>
        <ul>
          <li>foster children</li>
          <li>children that are away at college or boarding school</li>
          <li>grandparents</li>
          <li>extended family members that are living with you</li>
          <li>foreign exchange students that are living with you</li>
          <li>people that are not currently living with you, but are only away on a temporary basis (like kids that are away at college)</li>
          <li>family members of the armed services who are away from home because they are activated or deployed</li>
          <li>people living away from home for an extended period of time (such as parents who live and work away from home)</li>
          <li>other people who stay at your house and you provide with shelter, utilities, clothing, or food</li>
        </ul>
        <p>
          You should NOT include:
        </p>
        <ul>
          <li>renters</li>
          <li>boarders</li>
          <li>children who do not live with you (such as children that live permanently with other relatives or friends)</li>
          <li>children for whom you do not have custody and therefore do not live with you (if you have joint custody, see the FAQ: WHAT IF I SHARE CUSTODY OF MY CHILD?</li>
        </ul>
      </Topic>
          )
  }
}
