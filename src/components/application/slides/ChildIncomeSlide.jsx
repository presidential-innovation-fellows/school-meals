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
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>Income earned or received by all household members, including the children you have entered so far, is included when determining eligibility for benefits. The next few questions are about your child[ren]'s income.</p>
        <p>Some common sources of income for children are:</p>
        <ul>
          <li>a full-time or part-time job,</li>
          <li>Social Security benefits, if the child is blind or disabled, or is the beneficiary of another person’s Social Security benefits,</li>
          <li>spending money regularly received from extended family or friends, or</li>
          <li>money from a pension fund, annuity or trust</li>
        </ul>
        <p>Do not include infrequent earnings, such as income from occasional baby-sitting or mowing lawns.</p>

        <ControlLabel>Does {person.firstName} have income from any of these, or any other, sources?</ControlLabel>
        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
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
         </div>
        }
      </Slide>
    )
  }
}

ChildIncomeSlide.propTypes = {
  person: PropTypes.object.isRequired
}

export default ChildIncomeSlide
