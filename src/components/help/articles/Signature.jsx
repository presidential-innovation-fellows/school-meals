import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class Signature extends Component {
  render() {
    return (
      <Article>
        <Topic title="What if I do not have a Social Security number?">
          <p>
            Don’t worry, you don’t need to have a Social Security number to receive free or reduced price benefits.
          </p>
        </Topic>

        <Topic title="May I apply if someone in my household is not a U.S. citizen?">
          <p>Yes. You, your children, or other household members do not have to be U.S. citizens to apply for free or reduced price meals.</p>
        </Topic>

        <Topic title="Will my child or I be subject to public charge if I apply for or receive school meal benefits?">
          <p>No, the non-cash benefits received through the National School Lunch Program and School Breakfast Programs are not subject to public charge consideration. In other words, you will not be deported, denied entry to the country, or denied permanent status because you apply for or receive school meal benefits.</p>
        </Topic>
      </Article>
    )
  }
}
