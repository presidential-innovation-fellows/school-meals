import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import ChildIncomeForm from './ChildIncomeForm'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'

@observer
class ChildIncomeSlide extends Component {
  render() {
    const { child } = this.props

    return(
      <Slide header="Child Income" headerSmall={child.firstName}>
        <p>Income earned or received by all household members, including the children you have entered so far, is included when determining eligibility for benefits. The next few questions are about your child[ren]'s income.</p>
        <p>Some common sources of income for children are:</p>
        <ul>
          <li>a full-time or part-time job,</li>
          <li>Social Security benefits, if the child is blind or disabled, or is the beneficiary of another person’s Social Security benefits,</li>
          <li>spending money regularly received from extended family or friends, or</li>
          <li>money from a pension fund, annuity or trust</li>
        </ul>
        <p>Do not include infrequent earnings, such as income from occasional baby-sitting or mowing lawns.</p>

        <ControlLabel>Does {child.firstName} have income from any of these, or any other, sources?</ControlLabel>

        <BooleanRadio name="hasIncome" object={child} />

        {child.hasIncome && <ChildIncomeForm incomeObject={child.income} />}
      </Slide>
    )
  }
}

ChildIncomeSlide.propTypes = {
  child: PropTypes.object.isRequired
}

export default ChildIncomeSlide
