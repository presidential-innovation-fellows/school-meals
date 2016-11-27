import React, { Component } from 'react'
import Topic from '../Topic'
import { FormattedMessage } from 'react-intl'

// D1
export default class Ieg extends Component {
  render() {
    const title = <FormattedMessage
        id="help.topic.IEG.term"
        description="Definition for the Income Eligibility Guidelines."
        defaultMessage="Federal Income Eligibility Guidelines"
                  />

    return (
      <Topic title={title}>
        <p>
          <FormattedMessage
              id="help.topic.IEG.definition"
              description="Definition for the IEG help topic."
              defaultMessage="Children may receive free or reduced price meals if your household’s income is within the limits on the Federal Income Eligibility Guidelines. Your children may qualify for free or reduced price meals if your household income falls at or below the limits on this chart."
          />
        </p>
        <img className="logo" src="img/IEG.jpg" alt="Image of Income Eligibility Guidelines placeholder with reminder to update annually." />
      </Topic>
    )
  }
}
