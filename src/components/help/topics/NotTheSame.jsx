import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'
import { organization } from '../../../config'

export default class NoIncome extends Component {
  render() {
    return (
        <Topic title="What if my income is not always the same?">
          <p>
            If your income is different this month than a normal month because of overtime, holiday pay, missing a couple of shifts at work, or some other unexpected reason, put down what you would have made if those things hadn’t happened. For example, if you normally make $1000 each month, but you missed some work last month and only made $900, put down that you make $1000 per month. Similarly, if you normally make $500 per month, but you worked overtime and made $750, put down that you make $500 per month.
          </p>
          <p>
            <strong>
              If you work on a seasonal basis, like in agriculture or tourism, and earn more money in some months than in other months, you may add up all your earnings for the year and divide it by twelve in order to report a monthly amount. If you expect to earn the same amount as last year, you can use your earnings from last year as the basis of your projected monthly income.
            </strong>
          </p>
          <p>
            <strong>
              If you receive a one-time payment, it should not be reported as current, monthly income since it is not received on a regular basis. However, if you receive a one-time payment, such as from an award, settlement, inheritance or prize winnings, and then regularly draw on that money for living expenses later on, the amount withdrawn should be reported in your application for school meal benefits.
            </strong>
          </p>
          <p>
            <strong>
              If you need additional help or information about how to report your income, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}), and they will help you figure out your household’s annual rate of income based on USDA guidelines.
            </strong>
          </p>
        </Topic>
    )
  }
}
