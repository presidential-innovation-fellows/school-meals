import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'
import { organization } from '../../../config'

//F22
export default class QualifyHomeless extends Component {
  render() {
    return (
      <Topic title="How do I know if my children qualify as homeless? ">
        <p>
          Your children may qualify as homeless if they…
        </p>
          <ul>
            <li>
              are sharing the housing of other persons due to loss of housing, economic hardship, or a similar reason, or are living in motels, hotels, trailer parks, or camping grounds due to the lack of alternative adequate accommodations;
            </li>
            <li>
              are living in emergency or transitional shelters, are abandoned in hospitals, or are awaiting foster care placement; 
            </li>
            <li>
              have a primary nighttime residence that is a public or private place not designed for or ordinarily used as a regular sleeping accommodation for human beings; or
            </li>
            <li>
              are living in cars, parks, public spaces, abandoned buildings, substandard housing, bus or train stations, or similar settings.
            </li>
          </ul>
        <p>
        	If you believe children in your household meet one or more of these descriptions and you haven’t been told your children will get free meals, please contact {organization.name}.
        </p>
      </Topic>
    )
  }
}
