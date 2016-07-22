import React, { Component, PropTypes } from 'react'
import { organization } from '../../../config'
import Article from '../Article'
import Question from '../Question'
import Answer from '../Answer'

export default class Welcome extends Component {
  render() {
    return (
      <Article>
        <Question>Can I apply using a paper application?</Question>
        <Answer>
          <p>
            Yes. If you would like to apply using the paper application, you can print it from <a href={organization.paperApplication.url}>here</a> or contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}) to request an application. Then return the completed application to:
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
        </Answer>

        <Question>What if I have questions about the application or the school meal programs?</Question>
        <Answer>
          <p>If you have any questions about the program or how to apply, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).</p>
        </Answer>

        <Question>What information will I need to fill out the application?</Question>
        <Answer><p>See the "List of Things You'll Need" page for a list of helpful documents.</p></Answer>
      </Article>
    )
  }
}
