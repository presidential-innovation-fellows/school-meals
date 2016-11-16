import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Slide from '../Slide'
import { organization } from '../../../config'
import { programDescription, toSentenceSerialArray } from '../../../helpers'
import { observer } from 'mobx-react'
import FormattedMessage from '../FormattedMessage'

@observer
class IncomeElection extends Component {
  get isValid() {
    return applicationData.electToProvideIncome != null
  }

  render() {
    const { applicationData } = this.props
    const { allPeopleCollections, students } = applicationData
    const names = students.informalList(allPeopleCollections, ' and ')
    const singular = students.length === 1
    const programDescriptions = toSentenceSerialArray([
      'isFoster',
      'isHomeless',
      'isMigrant',
      'isRunaway'
    ].filter(slug => {
        return students
          .map(student => student[slug])
          .reduce((a, b) => a || b, false)
    }).map(slug => programDescription(slug)), ', ', singular ? ' and ' : ' or ')

    return (
      <Slide nextDisabled={!this.isValid} id="income-election">

        <p className="usa-font-lead">
          You have indicated that&nbsp;
          {names}
          {singular ? ' does ' : ' '}
          {programDescriptions}.
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
                      trueLabel="Provide income information now"
                      falseLabel="Submit my application without income information" />
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
