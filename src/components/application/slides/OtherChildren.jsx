import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { informalList } from '../../../helpers'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

@observer
class OtherChildren extends Component {
  @computed get nextText() {
    return this.props.otherChildren.length ? 'Continue' : 'No other children'
  }

  render() {
    const { allPeopleCollections, alreadyNamed, otherChildren } = this.props

    return (
      <Slide nextDisabled={!otherChildren.isValid} nextText={this.nextText}
             id="other-children" beginsSection>

        <p className="usa-font-lead">
        <FormattedMessage
              id="app.slides.otherChildren.intro"
              description="Introductory paragraph."
              defaultMessage="Okay, it looks like we will need more information about your &nbsp;{tooltip}&nbsp;  and income in order to determine if you are eligible for benefits."
              values={{
                tooltip: <Tooltipcomp text={tooltiptext.householdreminder} >
                          <FormattedMessage
                              id="app.slides.otherChildren.introTooltip"
                              description="household"
                              defaultMessage="household"
                          />
                         </Tooltipcomp>
              }}
          />

        </p>

        <p>
         <FormattedMessage
              id="app.slides.otherChildren.namedChildren"
              description="nameChildren"
              defaultMessage="Let's talk about the other kids in the house, and then we'll move on to the adults.  Other than {namedChildren}, are there any other children in your household? Don’t forget to include:"
              values={{
                namedChildren: informalList(alreadyNamed)
                }}
         />
         </p>

        <ul className="usa-content-list">
          <li>
          <FormattedMessage
                id="app.slides.beforeYouBegin.eligibility1"
                description="Eligibility List item"
                defaultMessage="students that are in grade 12 or below and attend school in a school district other than {organizationName}"
                values={{
                organizationName: organization.name
                }}
            />
          </li>
          <li>
          <FormattedMessage
                id="app.slides.beforeYouBegin.eligibility2"
                description="Eligibility List item"
                defaultMessage="children that attend day care or pre-school, or are not of school age, including infants"
            />
          </li>
          <li>
          <FormattedMessage
                id="app.slides.beforeYouBegin.eligibility3"
                description="Eligibility List item"
                defaultMessage="anyone 18 years of age or younger living in your household that does not currently attend school"
            />
          </li>
        </ul>

        <PersonCollection
            label="Child"
            labelPlural="other children"
            collection={otherChildren}
        />
      </Slide>
    )
  }
}

export default OtherChildren
