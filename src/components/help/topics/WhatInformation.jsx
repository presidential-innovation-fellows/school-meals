import React, { Component } from 'react'
import Topic from '../Topic'
import { assistanceProgramsVar } from '../../../config'
import { FormattedMessage } from 'react-intl'

// F14
export default class WhatInformation extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.WhatInformation.question"
        description="Question for the necessary information help topic."
        defaultMessage="What information will I need to fill out the application?"
                  />

    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.WhatInformation.answer1"
              description="Answer for the necessary information help topic."
              defaultMessage="If you have this information handy, it will make the application process fast and easy."
          />
        </p>
        <ul>
          <li>
            <FormattedMessage
                id="help.topic.WhatInformation.answer2"
                description="Answer for the necessary information help topic."
                defaultMessage="If you participate in {assistanceProgramsShort} you will need to know your case number (not your card or account number)."
                values={{
                  assistanceProgramsShort: `${assistanceProgramsVar.snap.accronym}, ${assistanceProgramsVar.tanf.accronym}, ${assistanceProgramsVar.fdpir.accronym}`
                }}
            />
          </li>
          <li>
            <FormattedMessage
                id="help.topic.WhatInformation.answer3"
                description="Answer for the necessary information help topic."
                defaultMessage="If you do not participate in any of the above assistance program, you will need to report your total household income. In that case…"
            />
            <ul>
              <li>
                <FormattedMessage
                    id="help.topic.WhatInformation.answer3a"
                    description="Answer for the necessary information help topic."
                    defaultMessage="If anyone in your household has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different than the amount in your paycheck."
                />
              </li>
              <li>
                <FormattedMessage
                    id="help.topic.WhatInformation.answer3b"
                    description="Answer for the necessary information help topic."
                    defaultMessage="If anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments."
                />
              </li>
              <li>
                <FormattedMessage
                    id="help.topic.WhatInformation.answer3c"
                    description="Answer for the necessary information help topic."
                    defaultMessage="You may also need to reference other financial documents for additional sources of income."
                />
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <FormattedMessage
              id="help.topic.WhatInformation.answer4"
              description="Answer for the necessary information help topic."
              defaultMessage="Still not sure if you have everything you need? Don’t worry. The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then."
          />
        </p>
      </Topic>
    )
  }
}
