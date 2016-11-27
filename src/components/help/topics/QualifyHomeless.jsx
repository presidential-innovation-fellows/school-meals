import React, { Component } from 'react'
import Topic from '../Topic'
import { organization } from '../../../config'
import { FormattedMessage } from 'react-intl'

// F22
export default class QualifyHomeless extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.QualifyHomeless.question"
        description="Question for the qualification of homeless students topic."
        defaultMessage="How do I know if my children qualify as homeless?"
                  />
    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.QualifyHomeless.answer1"
              description="Answer for the qualification of homeless students topic."
              defaultMessage="Your children may qualify as homeless if they…"
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.QualifyHomeless.answer2"
                description="Answer for the qualification of homeless students topic."
                defaultMessage="are sharing the housing of other persons due to loss of housing, economic hardship, or a similar reason, or are living in motels, hotels, trailer parks, or camping grounds due to the lack of alternative adequate accommodations;"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.QualifyHomeless.answer3"
                description="Answer for the qualification of homeless students topic."
                defaultMessage="are living in emergency or transitional shelters, are abandoned in hospitals, or are awaiting foster care placement;"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.QualifyHomeless.answer4"
                description="Answer for the qualification of homeless students topic."
                defaultMessage="have a primary nighttime residence that is a public or private place not designed for or ordinarily used as a regular sleeping accommodation for human beings; or"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.QualifyHomeless.answer5"
                description="Answer for the qualification of homeless students topic."
                defaultMessage="are living in cars, parks, public spaces, abandoned buildings, substandard housing, bus or train stations, or similar settings."
            />
          </li>
        </ul>
        <p>
          <FormattedMessage
              id="help.topic.QualifyHomeless.answer6"
              description="Answer for the qualification of homeless students topic."
              defaultMessage="If you believe children in your household meet one or more of these descriptions and you haven’t been told your children will get free meals, please contact {organizationName}."
              values={{
                organizationName: organization.name
              }}
          />
        </p>
      </Topic>
    )
  }
}
