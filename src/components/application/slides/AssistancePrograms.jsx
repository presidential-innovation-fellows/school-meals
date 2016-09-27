import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import AssistanceProgramList from './AssistanceProgramList'
import { observer } from 'mobx-react'
import { toSentenceSerial } from 'underscore.string'
import { assistancePrograms as programNames } from '../../../config'
import { AssistancePrograms as Store } from '../../../stores/ApplicationData'

@observer
class AssistancePrograms extends Component {
  render() {
    const {
      students,
      assistancePrograms,
      allPeopleCollections
    } = this.props

    const assistanceProgramList =
          toSentenceSerial(programNames, ', ', ' or ')

    return(
      <Slide id="assistance-programs"
             nextDisabled={!assistancePrograms.isValid} beginsSection>
        <p className="usa-font-lead">If anyone in your household participates in {assistanceProgramList}, then {students.informalList(allPeopleCollections)} {students.length === 1 ? 'is' : 'are'} eligible for free school meals.</p>

        <div className="well">
          <p>
            A <dfn>household</dfn> is defined as a group of people, related or unrelated, that usually live together and share income and expenses.
          </p>
          <p>
            This includes grandparents or other extended family members that are living with you. It also includes people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college. It includes people regardless of age or whether they earn or receive income.
          </p>
          <p>
            If you need more detailed information, see the ‘WHO SHOULD I INCLUDE IN MY HOUSEHOLD?’ question in the help section.
          </p>
        </div>

        <p><strong>Please select from the checkboxes below if anyone in your household (including you) currently participates in any of the following programs. Otherwise, leave blank and press continue.</strong></p>

        <AssistanceProgramList assistancePrograms={assistancePrograms} />
      </Slide>
    )
  }
}

AssistancePrograms.propTypes = {
  assistancePrograms: PropTypes.instanceOf(Store).isRequired
}

export default AssistancePrograms
