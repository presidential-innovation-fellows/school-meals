import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class ChildIncomeSlide extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.all
    const incomeSources = incomeType.sources

    return(
      <Slide header="Child Income"
             headerSmall={person.firstName}
             id={`child-income/${person.id}`}
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>Does <strong>{person.firstName}</strong> have income from any of the following sources?</p>

        <Well>Gross income means all money earned or received before deductions, such as income taxes, social security taxes, and insurance premiums. You should not report net income, which is the amount of money received in a pay check. Net income is total (or gross) income, minus taxes and deductions, and is commonly referred to as “take home pay”.</Well>

        <IncomeSource incomeSources={incomeSources} name="job">
          Money earned from a full or part-time job
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
          <a>Social Security from a disability (SSDI) or Social Security survivor benefits</a>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="friendsFamily">
          Money regularly received from extended family or friends outside the household
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="pensionAnnuityTrust">
          Private pension fund, annuity, or trust
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="other">
          Any other source of income
        </IncomeSource>
      </Slide>
    )
  }
}

ChildIncomeSlide.propTypes = {
  person: PropTypes.object.isRequired
}

export default ChildIncomeSlide
