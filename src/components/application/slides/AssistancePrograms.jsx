import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import AssistanceProgramList from './AssistanceProgramList'
import BooleanRadio from '../BooleanRadio'
import { observer } from 'mobx-react'
import { toSentenceSerial } from 'underscore.string'
import { assistancePrograms as programNames } from '../../../config'
import { AssistancePrograms as Store } from '../../../stores/ApplicationData'
import { Well } from 'react-bootstrap'

@observer
class AssistancePrograms extends Component {
  render() {
    const {
      students,
      assistancePrograms
    } = this.props

    const assistanceProgramList =
          toSentenceSerial(programNames, ', ', ' or ')

    return(
      <Slide id="assistance-programs"
             nextDisabled={!assistancePrograms.isValid} beginsSection>
        <p>If anyone in your household participates in {assistanceProgramList}, then <strong>{students.informalList}</strong> {students.length === 1 ? 'is' : 'are'} eligible for free school meals.</p>
        <Well>
          A household is defined as a group of people, related or unrelated, that usually live together and share income and expenses.
          <br />
          <br />
          This includes grandparents or other extended family members that are living with you. It also includes people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college. It includes people regardless of age or whether they earn or receive income.
          <br />
          <br />
          If you need more detailed information, see the ‘WHO SHOULD I INCLUDE IN MY HOUSEHOLD?’ question in the help section.
        </Well>

        <p>Does anyone in your household (including you) currently participate in {assistanceProgramList}?</p>

        <BooleanRadio name="hasAny" object={assistancePrograms} />

        {assistancePrograms.hasAny &&
         <AssistanceProgramList assistancePrograms={assistancePrograms} />
        }
      </Slide>
    )
  }
}

AssistancePrograms.propTypes = {
  assistancePrograms: PropTypes.instanceOf(Store).isRequired
}

export default AssistancePrograms
