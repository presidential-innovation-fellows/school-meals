import React from 'react'
import Slide from '../Slide'
import { organization } from '../../../config'

class Welcome extends React.Component {
  render() {
    return (
      <Slide header="Welcome!!" id="welcome" showBack={false} beginsSection>
        <p>
          This is the {organization.name} electronic application for free and
          reduced priced meals for the USDA’s National School Lunch & School
          Breakfast Programs.
        </p>
        <p>
          This interactive application will guide you through the application
          process and send your response directly to {organization.name}. When
          you are ready to apply, click the ‘Get Started’ button below to begin.
        </p>
        <p>
          If you wish to apply using the paper application, you can print it
          from <a href={organization.paperApplicationUrl}>here</a> or contact
          the school to request an application. Then return the completed
          application to:
          <br />
          <br />
          {organization.name}
          <br />
          {organization.paperApplication.address}
          <br />
          {organization.paperApplication.phone}
          <br />
          {organization.paperApplication.email}
        </p>
        <p>
          If you have any questions about the program or how to apply, contact
          the school at:
          <br />
          <br />
          {organization.name}
          <br />
          {organization.contact.address}
          <br />
          {organization.contact.phone}
          <br />
          {organization.contact.email}
        </p>
      </Slide>
    )
  }
}

export default Welcome
