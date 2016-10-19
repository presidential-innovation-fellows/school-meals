import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

@observer
class AdultIncomeOverview extends Component {
  get isValid() {
    const incomeTypes = this.props.person.incomeTypes

    if (incomeTypes.military.isApplicable &&
        incomeTypes.military.isDeployed == null) {
      return false
    }

    for (let incomeType in incomeTypes) {
      if (incomeTypes[incomeType].isApplicable == null) {
        return false
      }
    }

    return true
  }

  render() {
    const { person } = this.props
    const name = informalName(person)

    return(
      <Slide header={name} id={`income/${person.id}`}
             helpArticle="adult-income-overview" nextDisabled={!this.isValid}>

        <p>This page is all about {name}.</p>

        <p>
          On questions about income, all amounts should be {name}’s &nbsp;
            <Tooltipcomp id="current" text={tooltiptext.currentAdult} target="current" />
          &nbsp;, <strong>gross income</strong>.
        </p>

        <p>
          <dfn>Gross income</dfn> means <strong>all money earned or received <em>before</em> deductions</strong> such as income taxes, social security taxes, and insurance premiums. You should not report &nbsp;
          <Tooltipcomp id="net-income" text={tooltiptext.netIncome} target="net income" />
          &nbsp; , which is the amount of money received in a pay check.
          </p>

        <IncomeTypeFormGroup person={person} incomeTypeName="military">
          Is <strong>{name}</strong> in the &nbsp;
          <Tooltipcomp id="military" text={tooltiptext.military} target="military" />
          &nbsp;?
        </IncomeTypeFormGroup>

        { person.incomeTypes.military.isApplicable &&
          <IncomeTypeFormGroup person={person} incomeTypeName="military"
                               boolAttribute="isDeployed" validate={false}>
            Is <strong>{name}</strong> currently 
            <Tooltipcomp id="deployed" text={tooltiptext.deployed} target="deployed" />
            &nbsp;?
          </IncomeTypeFormGroup>
        }

        <IncomeTypeFormGroup person={person} incomeTypeName="employment">
          Does <strong>{name}</strong> have earnings from work including salary, wages, tips, commissions, &nbsp;
            <Tooltipcomp id="cashBonus" text={tooltiptext.cashBonus} target="cash bonuses" />
          &nbsp; or net income from &nbsp;
            <Tooltipcomp id="selfEmployment" text={tooltiptext.selfEmployment} target="self-employment" />
          &nbsp;{person.incomeTypes.military.isApplicable && ', not including earnings from the military'}?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="publicAssistance">
          Does <strong>{name}</strong> have income from public assistance including Supplemental Security Income &nbsp; 
            <Tooltipcomp id="SupplementalSecurityIncome" text={tooltiptext.SSI} target="(SSI)" />
          &nbsp;, or&nbsp;
            <Tooltipcomp id="cashAssistance" text={tooltiptext.cashAssistance} target="cash assistance" />
          &nbsp; or housing subsidies from state or local government?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="spousal">
          Does <strong>{name}</strong> have income from &nbsp;
            <Tooltipcomp id="alimony" text={tooltiptext.alimony} target="alimony" />
          &nbsp; or &nbsp;
            <Tooltipcomp id="childSupport" text={tooltiptext.childSupport} target="child support" />
          &nbsp; ?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="unemployment">
          Does <strong>{name}</strong> have income from &nbsp;
            <Tooltipcomp id="unemployment" text={tooltiptext.unemployment} target="unemployment benefits" />
          &nbsp;, &nbsp;
            <Tooltipcomp id="veteranBenefits" text={tooltiptext.veteranBenefits} target="Veteran's benefits" />
          &nbsp;, &nbsp;
            <Tooltipcomp id="workersCompensation" text={tooltiptext.workersComp} target="worker's compensation" />
          &nbsp;, &nbsp;
            <Tooltipcomp id="strikeBenefits" text={tooltiptext.strikeBenefits} target="strike benefits" />
          &nbsp;, or Social Security Disability Insurance &nbsp;
            <Tooltipcomp id="SSDI" text={tooltiptext.SSDI} target="(SSDI)" />
          &nbsp;?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="retirement">
          Does <strong>{name}</strong> have retirement income from Social Security (including survivor benefits, &nbsp;
            <Tooltipcomp id="blackLungBenefits" text={tooltiptext.blackLung} target="Black Lung Benefits" />
          &nbsp; and &nbsp;
            <Tooltipcomp id="railroadRetirement" text={tooltiptext.railroad} target="Railroad Retirement" />
          &nbsp; ) or &nbsp;
            <Tooltipcomp id="pensions" text={tooltiptext.pension} target="pensions" />
          &nbsp;?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="other">
          Does <strong>{name}</strong> have other sources of income including &nbsp;
            <Tooltipcomp id="regularCashPayments" text={tooltiptext.regularCashPayments} target="regular cash payments" />
          &nbsp; from outside the household, &nbsp;
            <Tooltipcomp id="rental" text={tooltiptext.rental} target="rental income" />
          &nbsp;,&nbsp; 
            <Tooltipcomp id="earnedInterest" text={tooltiptext.earnedInterest} target="earned interest" />
          &nbsp;, investment income and &nbsp;
            <Tooltipcomp id="annuities" text={tooltiptext.annuity} target="annuities" />
          &nbsp; , or any other source of income available to pay for children’s school meals?
        </IncomeTypeFormGroup>

      </Slide>
    )
  }
}

AdultIncomeOverview.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdultIncomeOverview
