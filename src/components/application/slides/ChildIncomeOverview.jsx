import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { tooltiptext } from '../../Tooltiptext'

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

        <p className="usa-font-lead">The next few questions are about your &nbsp;
           <OverlayTrigger placement="top" overlay={
                <Tooltip id="child-income">
                {tooltiptext.childincome} &nbsp;
                </Tooltip>
              }>
                <strong className="info-target">
                  {allChildren.length === 1 ? 'child\'s' : 'childrens\''} income.
                  <Glyphicon glyph="question-sign" />
                </strong>
            </OverlayTrigger>
          &nbsp;
        </p>        
        
        <p>Some common sources of income for children are:</p>
        <ul className="usa-content-list">
          <li>a full-time or part-time job,</li>
          <li>
            <OverlayTrigger placement="top" overlay={
                <Tooltip id="social-security">
                {tooltiptext.socialsecurity} &nbsp;
                </Tooltip>
              }>
                <strong className="info-target">
                  Social Security
                  <Glyphicon glyph="question-sign" />
                </strong>
            </OverlayTrigger>
          &nbsp; benefits, if the child is blind or disabled, or is the beneficiary of another person’s Social Security benefits,
        </li>
        
          <li>spending money regularly received from extended family or friends, or</li>
          <li>money from a &nbsp;
          <OverlayTrigger placement="top" overlay={
                <Tooltip id="pension">
                {tooltiptext.pension} &nbsp;
                </Tooltip>
              }>
                <strong className="info-target">
                  pension fund
                  <Glyphicon glyph="question-sign" />
                </strong>
            </OverlayTrigger>
         &nbsp;, &nbsp;
          <OverlayTrigger placement="top" overlay={
                <Tooltip id="annuity">
                {tooltiptext.annuity} &nbsp;
                </Tooltip>
              }>
                <strong className="info-target">
                  annuity
                  <Glyphicon glyph="question-sign" />
                </strong>
            </OverlayTrigger>
          &nbsp;, or &nbsp;
          <OverlayTrigger placement="top" overlay={
                <Tooltip id="trust">
                {tooltiptext.trust} &nbsp;
                </Tooltip>
              }>
                <strong className="info-target">
                  trust
                  <Glyphicon glyph="question-sign" />
                </strong>
            </OverlayTrigger>
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
