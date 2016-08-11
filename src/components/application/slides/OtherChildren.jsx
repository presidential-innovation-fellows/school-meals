import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import PersonCollection from '../PersonCollection'
import { computed, observable } from 'mobx'
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

  @computed get isValid() {
    let anyNull = false

    for (let category in this.categories) {
      let value = this.categories[category]

      if (value == null) {
        anyNull = true
      }
    }

    return this.props.otherChildren.isValid && !anyNull
  }

  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(fieldName, value) {
    this.categories[fieldName] = value

    let anyNull = false
    let anyTrue = false

    for (let category in this.categories) {
      let value = this.categories[category]

      if (value == null) {
        anyNull = true
      }

      if (value == true) {
        anyTrue = true
      }
    }

    this.props.otherChildren.hasAny = anyTrue ? true : (anyNull ? null : false)

    // clear out any children that have been created if "no" to all questions
    if (this.props.otherChildren.hasAny === false) {
      this.props.otherChildren.empty()
    }

    // add a default child if "yes" to any questions
    if (this.props.otherChildren.hasAny === true &&
        this.props.otherChildren.length === 0) {
      this.props.otherChildren.add()
    }
  }

  render() {
    const { allPeopleCollections, alreadyNamed, otherChildren } = this.props

    return (
      <Slide nextDisabled={!this.isValid} id="other-children" beginsSection>

        <p className="usa-font-lead">Okay, it looks like we will need more information about your household and income in order to determine if you are eligible for benefits.</p>

        <p>Both income and total household size are important for determining eligibility for school meal benefits. Remember, for the purposes of applying for school meal benefits, a household is defined as a group of people, related or unrelated, that usually live together and share income and expenses. If this sounds complicated, don’t worry! We will help you determine who should be included in your application, as well as which income sources to report.</p>

        <label>Are there any students in your household that are in grade 12 or below and attend school but not {organization.name}?</label>

        <BooleanRadio name="otherStudents" object={this.categories}
                      onChange={this.onChange} />

        <label>
          Is there anyone in your household that attends day care or pre-school, or is not of school age, including infants, not including those you already named <strong>({informalList(alreadyNamed, allPeopleCollections)})</strong>?
        </label>

        <BooleanRadio name="youngChildren" object={this.categories}
                      onChange={this.onChange} />

        <label>
          Is there anyone 18 years of age or younger living in your household that does not currently attend school, again, not including those you have already named <strong>({informalList(alreadyNamed, allPeopleCollections)})</strong>?
        </label>

        <BooleanRadio name="otherChildren" object={this.categories}
                      onChange={this.onChange} />

        {otherChildren.hasAny &&
         <PersonCollection
             label="Child"
             labelPlural="other children"
             collection={otherChildren}
         />
        }

      </Slide>
    )
  }
}

export default OtherChildren
