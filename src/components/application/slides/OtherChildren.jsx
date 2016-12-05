import React, { Component } from 'react'
import Slide from '../Slide'
import InformalNameList from '../InformalNameList'
import PersonCollection from '../PersonCollection'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class OtherChildren extends Component {
  @computed get nextText() {
    if (!this.props.otherChildren.length) {
      return <FormattedMessage
          id="app.slides.otherChildren.nextText"
          description="Text to show on next slide button if no other children are added."
          defaultMessage="No other children"
             />
    }

    return void 0
  }

  render() {
    const { alreadyNamed, otherChildren } = this.props

    return (
      <Slide
          nextDisabled={!otherChildren.isValid} nextText={this.nextText}
          id="other-children" beginsSection
      >

        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.otherChildren.intro"
              description="Introductory paragraph."
              defaultMessage="Okay, it looks like we will need more information about your {tooltip} and income in order to determine if you are eligible for benefits."
              values={{
                tooltip: <Tooltip text={tooltiptext.householdreminder} >
                  <FormattedMessage
                      id="app.slides.otherChildren.introTooltip"
                      description="household"
                      defaultMessage="household"
                  />
                </Tooltip>
              }}
          />

        </p>

        <p>
          <FormattedMessage
              id="app.slides.otherChildren.namedChildren"
              description="nameChildren"
              defaultMessage="Let's talk about the other kids in the house, and then we'll move on to the adults.  Other than {namedChildren}, are there any other children in your household? Don’t forget to include:"
              values={{
                namedChildren: <InformalNameList people={alreadyNamed} />
              }}
          />
        </p>

        <ul className="usa-content-list">
          <li>
            <FormattedMessage
                id="app.slides.otherChildren.childType1"
                description="Type of child to include in income reporting."
                defaultMessage="students that are in grade 12 or below and attend school in a school district other than {organizationName}"
                values={{
                  organizationName: organization.name
                }}
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.otherChildren.childType2"
                description="Type of child to include in income reporting."
                defaultMessage="children that attend day care or pre-school, or are not of school age, including infants"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.otherChildren.childType3"
                description="Type of child to include in income reporting."
                defaultMessage="anyone 18 years of age or younger living in your household that does not currently attend school"
            />
          </li>
        </ul>

        <PersonCollection
            collection={otherChildren}
            label={
              <FormattedMessage
                  id="app.slides.otherChildren.label"
                  description="Label used for title, add/remove buttons."
                  defaultMessage="Child"
              />
            }
        />
      </Slide>
    )
  }
}

export default OtherChildren
