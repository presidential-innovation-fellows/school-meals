import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'

@observer
class ChildIncomeOverview extends Component {
  get isValid() {
    return this.props.allChildren
               .map(child => child.incomeTypes.child.isApplicable != null)
               .reduce((a, b) => a && b, true)
  }

  render() {
    const { allChildren } = this.props

    return(
      <Slide nextDisabled={!this.isValid} id="child-income">

        <p>Income earned or received by all household members, including the children you have entered so far, is included when determining eligibility for benefits. The next few questions are about your {allChildren.length === 1 ? 'child\'s' : 'childrens\''} income.</p>
        <p>Some common sources of income for children are:</p>
        <ul>
          <li>a full-time or part-time job,</li>
          <li>Social Security benefits, if the child is blind or disabled, or is the beneficiary of another person’s Social Security benefits,</li>
          <li>spending money regularly received from extended family or friends, or</li>
          <li>money from a pension fund, annuity or trust</li>
        </ul>
        <p>Do not include infrequent earnings, such as income from occasional baby-sitting or mowing lawns.</p>

        {allChildren.map(child =>
          <IncomeTypeFormGroup person={child} incomeTypeName="child"
                               key={child.id} incomeDescription="income">
            Does <strong>{child.firstName}</strong> have
            income from any of these, or any other, sources?
          </IncomeTypeFormGroup>
        )}
      </Slide>
    )
  }
}

ChildIncomeOverview.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncomeOverview
