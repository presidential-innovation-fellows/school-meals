import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class Attestation extends Component {
  render() {
    return (
      <Article>
        <Topic title="Will the information I give be checked?">
          <p>
            Yes, each application is reviewed by the district to determine eligibility. We may also ask you to send proof of your household’s income.
          </p>
        </Topic>
      </Article>
    )
  }
}
