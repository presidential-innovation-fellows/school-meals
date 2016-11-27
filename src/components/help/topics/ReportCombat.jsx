import React, { Component } from 'react'
import Topic from '../Topic'
import { FormattedMessage } from 'react-intl'

// F30
export default class ReportCombat extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.ReportCombat.question"
        description="Question for the reporting combat pay help topic."
        defaultMessage="Do I need to report my combat pay as income on my application?"
                  />
    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.ReportCombat.answer1"
              description="Answer for the reporting combat pay help topic."
              defaultMessage="No, as long as the following conditions are met:"
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.ReportCombat.answer2"
                description="Answer for the reporting combat pay help topic."
                defaultMessage="It was received in addition to basic pay;"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.ReportCombat.answer3"
                description="Answer for the reporting combat pay help topic."
                defaultMessage="It was received for the deployment to or service in an area designated as a combat zone; and"
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.ReportCombat.answer4"
                description="Answer for the reporting combat pay help topic."
                defaultMessage="It was not received prior to deployment to or service in the designated combat zone."
            />
          </li>
        </ul>
        <p>
          <FormattedMessage
              id="help.topic.ReportCombat.answer5"
              description="Answer for the reporting combat pay help topic."
              defaultMessage="If any of these conditions are not met, you should report the amount as military basic pay."
          />
        </p>
      </Topic>
    )
  }
}
