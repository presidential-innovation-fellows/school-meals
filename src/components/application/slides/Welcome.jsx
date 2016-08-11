import React from 'react'
import Slide from '../Slide'
import { organization } from '../../../config'

class Welcome extends React.Component {
  render() {
    return (
      <Slide header="Welcome!" id="welcome" showBack={false} nextText="Get Started" beginsSection>
        <p className="usa-font-lead">
          This is the {organization.name} electronic application for free and
          reduced priced meals for
          the <abbr title="United States Department of Agriculture">USDA</abbr>&rsquo;s National School Lunch &amp; School Breakfast Programs.
        </p>
        <p>
          This interactive application will guide you through the application
          process and send your response directly to {organization.name}. When
          you are ready to apply, click the ‘Get Started’ button below to
          begin.
        </p>
        <p>
          If you would like to apply using the paper application, you can
          print it from <a href={organization.paperApplication.url}>here</a> or
          contact {organization.name} (
          {organization.paperApplication.phone}{' / '}
          {organization.paperApplication.email}{' / '}
          {organization.paperApplication.address}).
        </p>
        <p>
          If you have any questions about the program or how to apply,
          contact {organization.name} (
          {organization.contact.phone}{' / '}
          {organization.contact.email}{' / '}
          {organization.contact.address}).
        </p>
      </Slide>
    )
  }
}

export default Welcome
