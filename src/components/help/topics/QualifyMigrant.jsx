import React, { Component } from 'react'
import Topic from '../Topic'
import { organization } from '../../../config'
import { FormattedMessage } from 'react-intl'

// F20
export default class QualifyMigrant extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.QualifyMigrant.question"
        description="Question for the students qualifying as migrant help topic."
        defaultMessage="How do I know if my children qualify as migrant?"
                  />
    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.QualifyMigrant.answer1"
              description="Answer for the students qualifying as migrant help topic."
              defaultMessage="Your children may qualify as a migrant if you have moved your household into a different school district within the last three years to gain or look for temporary/seasonal work in agriculture or fishing."
          />
        </p>
        <p>
          <FormattedMessage
              id="help.topic.QualifyMigrant.answer2"
              description="Answer for the students qualifying as migrant help topic."
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
