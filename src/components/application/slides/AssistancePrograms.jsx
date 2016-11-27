import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import AssistanceProgramList from './AssistanceProgramList'
import { observer } from 'mobx-react'
import { assistanceProgramsVar } from '../../../config'
import { ApplicationData } from '../../../stores/ApplicationData'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import InformalNameList from '../InformalNameList'
import { FormattedMessage } from 'react-intl'

@observer
class AssistancePrograms extends Component {
  render() {
    const { applicationData } = this.props
    const {
      students,
      assistancePrograms
    } = applicationData

    return (
      <Slide
          id="assistance-programs"
          nextDisabled={!assistancePrograms.isValid} beginsSection
      >
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.assistancePrograms.intro"
              description="Intro paragraph"
              defaultMessage="If anyone in your household participates in {snap}, {tanf}, or {fdpir} then {studentList} {studentCount, plural, one {is eligible} other {are eligible}} for free school meals."
              values={{
                snap: <Tooltip text={tooltiptext.snap} target={assistanceProgramsVar.snap.accronym} />,
                tanf: <Tooltip text={tooltiptext.tanf} target={assistanceProgramsVar.tanf.accronym} />,
                fdpir: <Tooltip text={tooltiptext.fdpir} target={assistanceProgramsVar.fdpir.accronym} />,
                studentList: <InformalNameList people={students} />,
                studentCount: students.length
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

        <AssistanceProgramList applicationData={applicationData} />
      </Slide>
    )
  }
}

AssistancePrograms.propTypes = {
  aplicationData: PropTypes.instanceOf(ApplicationData).isRequired
}

export default AssistancePrograms
