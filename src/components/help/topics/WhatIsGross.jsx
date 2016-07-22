import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

export default class WhatIsGross extends Component {
  render() {
    return (
      <Topic title="What is gross income?">
        <p>
          Gross income is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums. Gross income also includes money that is garnished from wages, or in the case of bankruptcy, income that is ordered to be paid to creditors.
        </p>
      </Topic>
    )
  }
}
