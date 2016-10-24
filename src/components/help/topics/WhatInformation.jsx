import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'
import { assistanceProgramsVar } from '../../../config'

//F14
export default class WhatInformation extends Component {
  render() {
    return (
      <Topic title="What information will I need to fill out the application?">
        <p>If you have it handy, it will make the application process fast and easy.</p>
          <ul>
            <li>If you participate in {assistanceProgramsVar.snap.accronym}, {assistanceProgramsVar.tanf.accronym}, {assistanceProgramsVar.fdpir.accronym} you will need to know your case number (not your card or account number).</li>
            <li>If you do not participate in any of the above assistance program, you will need to report your total household income. In that case…
              <ul>
                <li>If anyone in your house has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different than the amount in your paycheck.</li>
                <li>If anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments.</li>
                <li>You may also need to reference other financial documents for additional sources of income.</li>
              </ul>
            </li>
          </ul>
          <p>Still not sure if you have everything you need? Don’t worry. The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then.</p>
        </Topic>
    )
  }
}