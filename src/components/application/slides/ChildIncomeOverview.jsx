import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

@observer
class ChildIncomeOverview extends Component {
  get isValid() {
    return this.props.allChildren
               .map(child => child.incomeTypes.child.isApplicable != null)
               .reduce((a, b) => a && b, true)
  }

  render() {
    const { allChildren } = this.props

    const $allChildren = (allChildren.length === 1 ? 'child\'s' : 'childrens\'') + ' income'

    return(
      <Slide nextDisabled={!this.isValid} id="child-income">

        <p className="usa-font-lead">The next few questions are about your &nbsp;
           <Tooltipcomp id="child-income" text={tooltiptext.childincome} target={$allChildren} />
          &nbsp;.
        </p>        
        
        <p>Some common sources of income for children are:</p>
        <ul className="usa-content-list">
          <li>a full-time or part-time job,</li>
          <li>
            <Tooltipcomp id="social-security" text={tooltiptext.socialsecurity} target='Social Security' />
          &nbsp; benefits, if the child is blind or disabled, or is the beneficiary of another person’s Social Security benefits,
        </li>
        
          <li>money regularly received from extended family or friends outside the household, or</li>
          <li>money from a &nbsp;
          <Tooltipcomp id="pension" text={tooltiptext.pension} target='pension fund' />
         &nbsp;, &nbsp;
          <Tooltipcomp id="annuity" text={tooltiptext.annuity} target='annuity' />
          &nbsp;, or &nbsp;
          <Tooltipcomp id="trust" text={tooltiptext.trust} target='trust' />
        </li>
        </ul>
        
        <p>Do not include infrequent earnings, such as income from occasional baby-sitting or mowing lawns.</p>

        {allChildren.map(child =>
          <IncomeTypeFormGroup person={child} incomeTypeName="child"
                               key={child.id} incomeDescription="income">
            Does <strong>{informalName(child)}</strong> have
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
