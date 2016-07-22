import React, { Component, PropTypes } from 'react'
import { organization } from '../../../config'
import Article from '../Article'
import Topic from '../Topic'

export default class Welcome extends Component {
  render() {
    return (
      <Article>
        <Topic title="Can I apply using a paper application?">
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
        </Topic>

        <Topic title="What if I have questions about the application or the school meal programs?">
          <p>If you have any questions about the program or how to apply, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).</p>
        </Topic>

        <Topic title="What information will I need to fill out the application?">
          <p>See the "List of Things You'll Need" page for a list of helpful documents.</p>
        </Topic>
      </Article>
    )
  }
}
