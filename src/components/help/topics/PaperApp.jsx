import React, { Component } from 'react'
import Topic from '../Topic'
import { FormattedMessage } from 'react-intl'
import { organization } from '../../../config'

// F1
export default class PaperApp extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.paperApp.question"
        description="Question for the paper application help topic."
        defaultMessage="Can I apply using a paper application?"
                  />

    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.paperApp.answer"
              description="Answer for the paper application help topic."
              defaultMessage="Yes. If you would like to apply using the paper application, you can print the {paperApplicationLink} or contact {organizationName} ({organizationContactInfo}) to request an application. Then return the completed application to {organizationName}."
              values={{
                organizationName: organization.name,
                organizationContactInfo: `${organization.contact.phone} / ${organization.contact.email} / ${organization.contact.address}`,
                paperApplicationLink:
                  <a href={organization.paperApplication.url} target="_blank" rel="noopener noreferrer">
                    <FormattedMessage
                        id="help.topic.paperApp.paperApplication"
                        description="Phrase"
                        defaultMessage="paper application"
                    />
                  </a>
              }}
          />
        </p>
      </Topic>
    )
  }
}
