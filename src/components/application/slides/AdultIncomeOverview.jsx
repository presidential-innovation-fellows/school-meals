import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import {FormattedMessage} from 'react-intl'

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

        <p>
        <FormattedMessage
              id="app.slides.adultIncomeOverview.adultsInto"
              description="Intro Paragraph"
              defaultMessage="This page is all about {adult}."
              values={{
              adult: name
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.adultIncomeOverview.income"
              description="Income intro"
              defaultMessage="On questions about income, all amounts should be {adult}’s &nbsp;{tooltip}&nbsp;,{grossIncome}."
              values={{
              adult: name,
              tooltip: <Tooltipcomp text={tooltiptext.currentAdult}>
                        <FormattedMessage
                            id="app.slides.adultIncomeOverview.current"
                            description="Intro Paragraph"
                            defaultMessage="current"
                        />
                       </Tooltipcomp>,
              grossIncome: <strong>
                      <FormattedMessage
                            id="app.slides.adultIncomeOverview.grossIncome"
                            description="gross income"
                            defaultMessage="gross income"
                        />
                      </strong>
              }}
          />
        </p>

        <p>
          <dfn>Gross income</dfn> means <strong>all money earned or received <em>before</em> deductions</strong> such as income taxes, social security taxes, and insurance premiums. You should not report &nbsp;
          <Tooltipcomp id="net-income" text={tooltiptext.netIncome} target="net income" />
          &nbsp; , which is the amount of money received in a pay check.
          </p>

        <IncomeTypeFormGroup person={person} incomeTypeName="military">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.militaryQuestion"
              description="Is adult in military"
              defaultMessage="Is {adult} in the &nbsp;{tooltip}&nbsp;?"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.military}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.military"
                        description="military"
                        defaultMessage="military"
                    />
                  </Tooltipcomp>
              }}
          />
        </IncomeTypeFormGroup>

        { person.incomeTypes.military.isApplicable &&
          <IncomeTypeFormGroup person={person} incomeTypeName="military"
                               boolAttribute="isDeployed" validate={false}>
            <FormattedMessage
              id="app.slides.adultIncomeOverview.deployedQuestion"
              description="Is adult deployed"
              defaultMessage="Is {adult} currently &nbsp;{tooltip}&nbsp;?"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.deployed}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.deployed"
                        description="deployed"
                        defaultMessage="deployed"
                    />
                    </Tooltipcomp>
                  }}
              />
          </IncomeTypeFormGroup>
        }

        <IncomeTypeFormGroup person={person} incomeTypeName="employment">
        <FormattedMessage
              id="app.slides.adultIncomeOverview.employmentQuestion"
              description="Is adult employed"
              defaultMessage="Does {adult} have earnings from work including salary, wages, tips, commissions, {tooltip}&nbsp; or net income from &nbsp;{tooltip2}&nbsp;"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.cashBonus}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.cashBonus"
                        description="cash bonuses"
                        defaultMessage="cash bonuses"
                    />
                    </Tooltipcomp>,
              tooltip2: <Tooltipcomp text={tooltiptext.selfEmployment}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.selfEmployment"
                        description="self-employment"
                        defaultMessage="self-employment"
                    />
                    </Tooltipcomp>
                  }}
        />
        {person.incomeTypes.military.isApplicable && ', not including earnings from the military'}?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="publicAssistance">
        <FormattedMessage
              id="app.slides.adultIncomeOverview.publicAssistanceIncome"
              description="Is adult receiving public assistance income?"
              defaultMessage="Does {adult} have income from public assistance including Supplemental Security Income &nbsp;{tooltip}&nbsp;, or&nbsp;{tooltip2}&nbsp; or housing subsidies from state or local government?"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.SSI}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.ssi"
                        description="SSI"
                        defaultMessage="(SSI)"
                    />
                    </Tooltipcomp>,
              tooltip2: <Tooltipcomp text={tooltiptext.cashAssistance}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.cashAssistance"
                        description="cash assistance"
                        defaultMessage="cash assistance"
                    />
                    </Tooltipcomp>
                  }}
        />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="spousal">
        <FormattedMessage
              id="app.slides.adultIncomeOverview.spousalIncome"
              description="Is adult receiving spousal income?"
              defaultMessage="Does {adult} have income from &nbsp;{tooltip}&nbsp; or &nbsp;{tooltip2}&nbsp; ?"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.alimony}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.alimony"
                        description="alimony"
                        defaultMessage="alimony"
                    />
                    </Tooltipcomp>,
              tooltip2: <Tooltipcomp text={tooltiptext.childSupport}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.childSupport"
                        description="child support"
                        defaultMessage="child support"
                    />
                    </Tooltipcomp>
                  }}
        />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="unemployment">
        <FormattedMessage
              id="app.slides.adultIncomeOverview.unemploymentIncome"
              description="Is adult receiving unemployment income?"
              defaultMessage="Does {adult} have income from &nbsp;{tooltip}&nbsp;, &nbsp;{tooltip2}&nbsp;, &nbsp;{tooltip3}&nbsp;, &nbsp;{tooltip4}&nbsp;, or Social Security Disability Insurance &nbsp;{tooltip5}&nbsp;?"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.unemployment}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.unemployment"
                        description="unemployment benefits"
                        defaultMessage="unemployment benefits"
                    />
                    </Tooltipcomp>,
              tooltip2: <Tooltipcomp text={tooltiptext.veteranBenefits}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.veteranBenefits"
                        description="Veteran's benefits"
                        defaultMessage="Veteran's benefits"
                    />
                    </Tooltipcomp>,
              tooltip3: <Tooltipcomp text={tooltiptext.workersComp}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.workersComp"
                        description="worker's compensation"
                        defaultMessage="worker's compensation"
                    />
                    </Tooltipcomp>,
              tooltip4: <Tooltipcomp text={tooltiptext.strikeBenefits}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.strikeBenefits"
                        description="strike benefits"
                        defaultMessage="strike benefits"
                    />
                    </Tooltipcomp>,
              tooltip5: <Tooltipcomp text={tooltiptext.SSDI}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.ssdi"
                        description="SSDI"
                        defaultMessage="(SSDI)"
                    />
                    </Tooltipcomp>
                  }}
        />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="retirement">
        <FormattedMessage
              id="app.slides.adultIncomeOverview.retirementIncome"
              description="Is adult receiving retirement income?"
              defaultMessage="Does {adult} have retirement income from Social Security (including survivor benefits, &nbsp;{tooltip}&nbsp; and &nbsp;{tooltip2}&nbsp; ) or &nbsp;{tooltip3}&nbsp;?"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.blackLung}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.blackLung"
                        description="Black Lung Benefits"
                        defaultMessage="Black Lung Benefits"
                    />
                    </Tooltipcomp>,
              tooltip2: <Tooltipcomp text={tooltiptext.railroad}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.railroad"
                        description="Railroad Retirement"
                        defaultMessage="Railroad Retirement"
                    />
                    </Tooltipcomp>,
              tooltip3: <Tooltipcomp text={tooltiptext.pension}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.pension"
                        description="pensions"
                        defaultMessage="pensions"
                    />
                    </Tooltipcomp>
                  }}
        />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="other">
        <FormattedMessage
              id="app.slides.adultIncomeOverview.otherIncome"
              description="Is adult receiving otherincome?"
              defaultMessage="Does {adult} have other sources of income including &nbsp;{tooltip}&nbsp; from outside the household, &nbsp;{tooltip2}&nbsp;,&nbsp;{tooltip3}&nbsp;, investment income and &nbsp;{tooltip4}&nbsp; , or any other source of income available to pay for children’s school meals?"
              values={{
              adult:<strong>{name}</strong>,
              tooltip:<Tooltipcomp text={tooltiptext.regularCashPayments}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.regularCashPayments"
                        description="regular cash payments"
                        defaultMessage="regular cash payments"
                    />
                    </Tooltipcomp>,
              tooltip2: <Tooltipcomp text={tooltiptext.rental}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.rental"
                        description="rental income"
                        defaultMessage="rental income"
                    />
                    </Tooltipcomp>,
              tooltip3: <Tooltipcomp text={tooltiptext.earnedInterest}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.earnedInterest"
                        description="earned interest"
                        defaultMessage="earned interest"
                    />
                    </Tooltipcomp>,
              tooltip4: <Tooltipcomp text={tooltiptext.annuity}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.annuity"
                        description="annuities"
                        defaultMessage="annuities"
                    />
                    </Tooltipcomp>
                  }}
        />
        </IncomeTypeFormGroup>

      </Slide>
    )
  }
}

AdultIncomeOverview.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdultIncomeOverview
