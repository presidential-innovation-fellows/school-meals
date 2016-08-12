import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { toSentenceSerial } from 'underscore.string'
import { assistancePrograms, organization } from '../../../config'

export default class Welcome extends Component {
  render() {
    const assistanceProgramList =
      toSentenceSerial(assistancePrograms, ', ', ' or ')

    return (
      <Article>
        <Topic title="Can I apply using a paper application?">
          <p>
            Yes. If you would like to apply using the paper application, you can print it from <a href={organization.paperApplication.url} target="_blank">here</a> or contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}) to request an application. Then return the completed application to:
          </p>
          <p>
            {organization.name}
            <br />
            {organization.paperApplication.address}
            <br />
            {organization.paperApplication.phone}
            <br />
            {organization.paperApplication.email}
          </p>
        </Topic>

        <Topic title="What information will I need to fill out the application?">
          <p>You may not need all this information, but if you have it handy, it will make the application process faster.</p>
          <ul>
            <li>If you participate in {assistanceProgramList} you will need to know your case number (not your card or account number).</li>
            <li>
              If you do not participate in any of the above assistance program, you will need to report your total household income. In that case…
              <ul>
                <li>if anyone in your house has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different than the amount in your paycheck.</li>
                <li>if anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments.</li>
                <li>you may also need to reference other financial documents for additional sources of income.</li>
              </ul>
            </li>
          </ul>
          <p>Still not sure if you have everything you need? Don’t worry. The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then.</p>
        </Topic>
      </Article>
    )
  }
}
