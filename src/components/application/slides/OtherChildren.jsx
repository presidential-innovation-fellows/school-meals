import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import PersonCollection from '../PersonCollection'
import { ControlLabel } from 'react-bootstrap'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { informalList } from '../../../helpers'

@observer
class OtherChildren extends Component {
  @observable categories = {
    otherStudents: null,
    youngChildren: null,
    otherChildren: null
  }

  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(fieldName, value) {
    this.categories[fieldName] = value

    let anyNull = false
    let anyTrue = false

    // if any categories are true, set the store flag to true
    for (let category in this.categories) {
      let value = this.categories[category]

      if (value == null) {
        anyNull = true
      }

      if (value == true) {
        anyTrue = true
      }
    }

    this.props.otherChildren.hasAny = anyNull ? null : (anyTrue ? true : false)
  }

  render() {
    const { alreadyNamed, otherChildren } = this.props

    return (
      <Slide nextDisabled={!otherChildren.isValid} id="other-children">

        <p>Okay, it looks like we will need more information about your household and income in order to determine if you are eligible for benefits.</p>

        <p>Both income and total household size are important for determining eligibility for school meal benefits. Remember, for the purposes of applying for school meal benefits, a household is defined as a group of people, related or unrelated, that usually live together and share income and expenses. If this sounds complicated, don’t worry! We will help you determine who should be included in your application, as well as which income sources to report.</p>

        <ControlLabel>Are there any students in your household that are in grade 12 or below and attend school but not {organization.name}?</ControlLabel>

        <BooleanRadio name="otherStudents" object={this.categories}
                      onChange={this.onChange} />

        <ControlLabel>
          Is there anyone in your household that attends day care or pre-school, or is not of school age, including infants, not including those you already named <strong>({informalList(alreadyNamed)})</strong>?
        </ControlLabel>

        <BooleanRadio name="youngChildren" object={this.categories}
                      onChange={this.onChange} />

        <ControlLabel>
          Is there anyone 18 years of age or younger living in your household that does not currently attend school, again, not including those you have already named <strong>({informalList(alreadyNamed)})</strong>?
        </ControlLabel>

        <BooleanRadio name="otherChildren" object={this.categories}
                      onChange={this.onChange} />

        {otherChildren.hasAny &&
         <PersonCollection
             label="child"
             labelPlural="other children"
             collection={otherChildren}
         />
        }

      </Slide>
    )
  }
}

export default OtherChildren
