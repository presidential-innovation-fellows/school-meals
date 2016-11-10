import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import AssistanceProgramList from './AssistanceProgramList'
import { observer } from 'mobx-react'
import { toSentenceSerial } from 'underscore.string'
import { assistancePrograms as programNames, assistanceProgramsVar } from '../../../config'
import { AssistancePrograms as Store } from '../../../stores/ApplicationData'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

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
        <p className="usa-font-lead">
        <FormattedMessage
                   id="app.slides.assistancePrograms.intro"
                   description="Intro paragraph"
                   defaultMessage="If anyone in your household participates in &nbsp;{snap}, &nbsp;{tanf} , or &nbsp;{fdpir}&nbsp; then {studentList} {studentsize} eligible for free school meals"
                   values={{
                     snap: <Tooltipcomp text={tooltiptext.snap} target={assistanceProgramsVar.snap.accronym} />,
                     tanf: <Tooltipcomp text={tooltiptext.tanf} target={assistanceProgramsVar.tanf.accronym} />,
                     fdpir: <Tooltipcomp text={tooltiptext.fdpir} target={assistanceProgramsVar.fdpir.accronym} />,
                     studentList: students.informalList(allPeopleCollections),
                     studentsize: students.length === 1 ? 'is' : 'are'
                   }}
               />
        </p>

        <div className="well">
          <p>
          <FormattedMessage
              id="app.slides.assistancePrograms.household"
              description="Household definition"
              defaultMessage="A household is defined as a group of people, related or unrelated, that usually live together and share income and expenses."
          />
        </p>            
            
          <p>
          <FormattedMessage
              id="app.slides.assistancePrograms.householdIncludes"
              description="Household definition includes"
              defaultMessage="This includes grandparents or other extended family members that are living with you. It also includes people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college. It includes people regardless of age or whether they earn or receive income."
          />
          </p>
          <p>
          <FormattedMessage
              id="app.slides.assistancePrograms.whoToInclude"
              description="Household who to include"
              defaultMessage="If you need more detailed information, see the ‘WHO SHOULD I INCLUDE IN MY HOUSEHOLD?’ question in Help."
          />
          </p>
        </div>

        <p><strong>
        <FormattedMessage
              id="app.slides.assistancePrograms.followingPrograms"
              description="Household people who participates in programs"
              defaultMessage="If anyone in your household (including you) currently participates in any of the following programs, please select one or more of the checkboxes below. If not, press continue."
        />
        </strong></p>

        <AssistanceProgramList assistancePrograms={assistancePrograms} />
      </Slide>
    )
  }
}

AssistancePrograms.propTypes = {
  assistancePrograms: PropTypes.instanceOf(Store).isRequired
}

export default AssistancePrograms
