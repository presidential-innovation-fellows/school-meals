import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Slide from '../Slide'
import { organization } from '../../../config'
import { programDescription } from '../../../helpers'
import { toSentenceSerial } from 'underscore.string'
import { observer } from 'mobx-react'

@observer
class IncomeElection extends Component {
  render() {
    const { applicationData } = this.props
    const { allPeopleCollections, students } = applicationData
    const names = students.informalList(allPeopleCollections, ' or ')
    const singular = students.length === 1
    const programDescriptions = toSentenceSerial([
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
      <Slide id="income-election" showHelp={false}>

        <p className="usa-font-lead">
          You have indicated that the
          {singular ? ' child who attends ' : ' children who attend '}
          {organization.name}
          {singular ? ' does ' : ' '}
          {programDescriptions}.
        </p>

        <p>
          We will need to confirm that with a school administrator. If it is determined that {names} {singular ? 'is' : 'are'} not eligible, you will need to provide an application with income information to be eligible for free or reduced price meals.
        </p>

        <label>Please choose one of the followig:</label>

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
