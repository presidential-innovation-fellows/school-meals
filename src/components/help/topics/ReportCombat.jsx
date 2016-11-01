import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

//F30
export default class ReportCombat extends Component {
  render() {
    return (
        <Topic title="Do I need to report my combat pay as income on my application?">
          <p>
            No, as long as the following conditions are met:
          </p>
          <ul>
            <li>It was received in addition to basic pay;</li>
            <li>It was received for the deployment to or service in an area designated as a combat zone; and</li>
            <li>It was not received prior to deployment to or service in the designated combat zone.</li>
          </ul>
          <p>
            If any of these conditions are not met, you should report the amount as military basic pay.
          </p>
        </Topic>
    )
  }
}
