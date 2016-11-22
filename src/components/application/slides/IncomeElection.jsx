import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Slide from '../Slide'
import { organization } from '../../../config'
import { toSentenceSerialArray } from '../../../helpers'
import { observer } from 'mobx-react'
import {FormattedMessage} from 'react-intl'
import { hmrPrograms } from '../../../config'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'

@observer
class IncomeElection extends Component {
  programDescription(slug) {
    const studentCount = this.props.applicationData.students.length

    switch (slug) {
      case 'isFoster':
        return <FormattedMessage
                   id="app.slides.incomeElection.isFoster"
                   description="Third-person verb describing applicability of program."
                   defaultMessage="{studentCount, plural, one {lives} other {live}} with you under a formal (court-ordered) foster care arrangement"
                   values={{ studentCount }}
        />
      case 'isHomeless':
        return  <FormattedMessage
                   id="app.slides.incomeElection.isHomeless"
                   description="Third-person verb describing applicability of program."
                   defaultMessage="{studentCount, plural, one {receives} other {receive}} assistance under the {programName}"
                   values={{
                     studentCount,
                     programName: <Tooltip id="mckinney" text={tooltiptext.mckinney} target={hmrPrograms.mckinney.shortName} />
                   }}
        />
      case 'isMigrant':
        return  <FormattedMessage
                   id="app.slides.incomeElection.isMigrant"
                   description="Third-person verb describing applicability of program."
                   defaultMessage="{studentCount, plural, one {participates} other {participate}} in the {programName} ({programShortName})"
                   values={{
                     studentCount,
                     programName: hmrPrograms.mep.fullName,
                     programShortName: <Tooltip id="migrant" text={tooltiptext.mep} target={hmrPrograms.mep.accronym} />
                   }}
        />
      case 'isRunaway':
        return  <FormattedMessage
                   id="app.slides.incomeElection.isRunaway"
                   description="Third-person verb describing applicability of program."
                   defaultMessage="{studentCount, plural, one {participates} other {participate}} in a program under the {programName}"
                   values={{
                     studentCount,
                     programName: <Tooltip id="runaway" text={tooltiptext.runaway} target={hmrPrograms.runaway} />
                   }}
        />
    }
  }

  get isValid() {
    return applicationData.electToProvideIncome != null
  }

  render() {
    const { applicationData } = this.props
    const { allPeopleCollections, students } = applicationData
    const names = students.informalList(allPeopleCollections, ' and ')
    const programDescriptions = toSentenceSerialArray([
      'isFoster',
      'isHomeless',
      'isMigrant',
      'isRunaway'
    ].filter(slug => {
        return students
          .map(student => student[slug])
          .reduce((a, b) => a || b, false)
    }).map(slug => this.programDescription(slug)), ', ', students.length === 1 ? ' and ' : ' or ')

    return (
      <Slide nextDisabled={!this.isValid} id="income-election">

        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.incomeElection.intro"
              description="Lead paragraph detailing the programs that have been selected."
              defaultMessage="You have indicated that {names}"
              values={{ names }}
          />
          &nbsp;{programDescriptions.map((program, i) => <span key={i}>{program}</span>)}.
        </p>

        <p>
        <FormattedMessage
          id="app.slides.incomeElection.confirmWithStaff"
          description="Need to confirm with program staff"
          defaultMessage="We just need to confirm that with program staff. If we are unable to do that, you will need to submit an application with income information to determine your benefit level."
        />
        </p>

        <label>
        <FormattedMessage
          id="app.slides.incomeElection.chooseFollowing"
          description="Label for the following radio buttons"
          defaultMessage="Please choose one of the following:"
        />
        </label>

        <BooleanRadio object={applicationData}
                      name="electToProvideIncome"
                      legend="Application options"
                      trueLabel={
                        <FormattedMessage
                            id="app.slides.incomeElection.electToProvideIncome.trueLabel"
                            description="Option to provide household income now."
                            defaultMessage="Provide income information now"
                        />}
                      falseLabel={
                        <FormattedMessage
                            id="app.slides.incomeElection.electToProvideIncome.falseLabel"
                            description="Option to not provide household income now."
                            defaultMessage="Submit my application without income information"
                        />}
        />
      </Slide>
    )
  }
}

IncomeElection.propTypes = {
  applicationData: PropTypes.shape({
    electToProvideIncome: PropTypes.bool,
    students: PropTypes.object.isRequired,
  }).isRequired
}

export default IncomeElection
