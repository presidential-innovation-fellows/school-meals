import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

export default class TipsCommissions extends Component {
  render() {
    return (
      <Topic title="What if I have income from both wages and self-employment?">
        <p>
          For a household with income from wages and self-employment, each amount must be listed separately. When there is a business loss, income from wages must not be reduced by the amount of the business loss. If income from self-employment is negative, you should report it as $0 (zero) on your application.
        </p>
        <p>
        	For more information, see ‘Self-employment’ in the HELP section.
        </p>
      </Topic>
    )
  }
}
