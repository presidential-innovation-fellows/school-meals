import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import EditLink from '../EditLink'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class AdultIncomeOverview extends Component {
  get isValid() {
    const incomeTypes = this.props.person.incomeTypes

    if (incomeTypes.military.isApplicable &&
        incomeTypes.military.isDeployed === null) {
      return false
    }

    for (const incomeType in incomeTypes) {
      if (incomeTypes[incomeType].isApplicable === null) {
        return false
      }
    }

    return true
  }

  render() {
    const { person } = this.props
    const name = informalName(person)
    const linkId = person.isAttestor ? 'attestation' : 'adults'

    return (
      <Slide
          header={name} id={`income/${person.id}`}
          helpArticle="adult-income-overview" nextDisabled={!this.isValid}
      >

        <p>
          <FormattedMessage
              id="app.slides.adultIncomeOverview.adultsInto"
              description="Intro Paragraph"
              defaultMessage="This page is all about {adult}."
              values={{
                adult: <EditLink id={linkId}>{name}</EditLink>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.adultIncomeOverview.income"
              description="Income intro"
              defaultMessage="On questions about income, all amounts should be {adult}’s {tooltip}, {grossIncome}."
              values={{
                adult: name,
                tooltip: <Tooltip text={tooltiptext.currentAdult}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.current"
                      description="Intro Paragraph"
                      defaultMessage="current"
                  />
                </Tooltip>,
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
          <FormattedMessage
              id="app.slides.adultIncomeOverview.grossIncomeDefinition"
              description="Definition of gross income."
              defaultMessage="Gross income means all money earned or received before deductions such as income taxes, social security taxes, and insurance premiums. You should not report {netIncome}, which is the amount of money received in a pay check."
              values={{
                netIncome: <Tooltip id="net-income" text={tooltiptext.netIncome}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.netIncome"
                      description="Phrase: net income"
                      defaultMessage="net income"
                  />
                </Tooltip>
              }}
          />


        </p>

        <IncomeTypeFormGroup person={person} incomeTypeName="military">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.militaryQuestion"
              description="Is adult in military"
              defaultMessage="Is {adult} in the {tooltip}?"
              values={{
                adult: <strong>{name}</strong>,
                tooltip: <Tooltip text={tooltiptext.military}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.military"
                      description="military"
                      defaultMessage="military"
                  />
                </Tooltip>
              }}
          />
        </IncomeTypeFormGroup>

        { person.incomeTypes.military.isApplicable &&
          <IncomeTypeFormGroup
              person={person}
              incomeTypeName="military"
              boolAttribute="isDeployed"
              validate={false}
          >
            <FormattedMessage
                id="app.slides.adultIncomeOverview.deployedQuestion"
                description="Is adult deployed"
                defaultMessage="Is {adult} currently {tooltip}?"
                values={{
                  adult: <strong>{name}</strong>,
                  tooltip: <Tooltip text={tooltiptext.deployed}>
                    <FormattedMessage
                        id="app.slides.adultIncomeOverview.deployed"
                        description="deployed"
                        defaultMessage="deployed"
                    />
                  </Tooltip>
                }}
            />
          </IncomeTypeFormGroup>
        }

        <IncomeTypeFormGroup person={person} incomeTypeName="employment">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.employmentQuestion"
              description="Is adult employed"
              defaultMessage="Does {adult} have earnings from work including salary, wages, tips, commissions, {tooltip} or net income from {tooltip2}"
              values={{
                adult: <strong>{name}</strong>,
                tooltip: <Tooltip text={tooltiptext.cashBonus}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.cashBonus"
                      description="cash bonuses"
                      defaultMessage="cash bonuses"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.selfEmployment}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.selfEmployment"
                      description="self-employment"
                      defaultMessage="self-employment"
                  />
                </Tooltip>
              }}
          />
          {person.incomeTypes.military.isApplicable && ', not including earnings from the military'}?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="publicAssistance">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.publicAssistanceIncome"
              description="Is adult receiving public assistance income?"
              defaultMessage="Does {adult} have income from public assistance including Supplemental Security Income {tooltip}, or {tooltip2} or housing subsidies from state or local government?"
              values={{
                adult: <strong>{name}</strong>,
                tooltip: <Tooltip text={tooltiptext.SSI}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.ssi"
                      description="SSI"
                      defaultMessage="(SSI)"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.cashAssistance}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.cashAssistance"
                      description="cash assistance"
                      defaultMessage="cash assistance"
                  />
                </Tooltip>
              }}
          />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="spousal">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.spousalIncome"
              description="Is adult receiving spousal income?"
              defaultMessage="Does {adult} have income from {tooltip} or {tooltip2}?"
              values={{
                adult: <strong>{name}</strong>,
                tooltip: <Tooltip text={tooltiptext.alimony}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.alimony"
                      description="alimony"
                      defaultMessage="alimony"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.childSupport}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.childSupport"
                      description="child support"
                      defaultMessage="child support"
                  />
                </Tooltip>
              }}
          />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="unemployment">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.unemploymentIncome"
              description="Is adult receiving unemployment income?"
              defaultMessage="Does {adult} have income from {tooltip}, {tooltip2}, {tooltip3}, {tooltip4}, or Social Security Disability Insurance {tooltip5}?"
              values={{
                adult: <strong>{name}</strong>,
                tooltip: <Tooltip text={tooltiptext.unemployment}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.unemployment"
                      description="unemployment benefits"
                      defaultMessage="unemployment benefits"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.veteranBenefits}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.veteranBenefits"
                      description="Veteran's benefits"
                      defaultMessage="Veteran's benefits"
                  />
                </Tooltip>,
                tooltip3: <Tooltip text={tooltiptext.workersComp}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.workersComp"
                      description="worker's compensation"
                      defaultMessage="worker's compensation"
                  />
                </Tooltip>,
                tooltip4: <Tooltip text={tooltiptext.strikeBenefits}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.strikeBenefits"
                      description="strike benefits"
                      defaultMessage="strike benefits"
                  />
                </Tooltip>,
                tooltip5: <Tooltip text={tooltiptext.SSDI}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.ssdi"
                      description="SSDI"
                      defaultMessage="(SSDI)"
                  />
                </Tooltip>
              }}
          />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="retirement">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.retirementIncome"
              description="Is adult receiving retirement income?"
              defaultMessage="Does {adult} have retirement income from Social Security (including survivor benefits, {tooltip} and {tooltip2}) or {tooltip3}?"
              values={{
                adult: <strong>{name}</strong>,
                tooltip: <Tooltip text={tooltiptext.blackLung}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.blackLung"
                      description="Black Lung Benefits"
                      defaultMessage="Black Lung Benefits"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.railroad}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.railroad"
                      description="Railroad Retirement"
                      defaultMessage="Railroad Retirement"
                  />
                </Tooltip>,
                tooltip3: <Tooltip text={tooltiptext.pension}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.pension"
                      description="pensions"
                      defaultMessage="pensions"
                  />
                </Tooltip>
              }}
          />
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="other">
          <FormattedMessage
              id="app.slides.adultIncomeOverview.otherIncome"
              description="Is adult receiving otherincome?"
              defaultMessage="Does {adult} have other sources of income including {tooltip} from outside the household, {tooltip2}, {tooltip3}, investment income and {tooltip4}, or any other source of income available to pay for children’s school meals?"
              values={{
                adult: <strong>{name}</strong>,
                tooltip: <Tooltip text={tooltiptext.regularCashPayments}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.regularCashPayments"
                      description="regular cash payments"
                      defaultMessage="regular cash payments"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.rental}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.rental"
                      description="rental income"
                      defaultMessage="rental income"
                  />
                </Tooltip>,
                tooltip3: <Tooltip text={tooltiptext.earnedInterest}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.earnedInterest"
                      description="earned interest"
                      defaultMessage="earned interest"
                  />
                </Tooltip>,
                tooltip4: <Tooltip text={tooltiptext.annuity}>
                  <FormattedMessage
                      id="app.slides.adultIncomeOverview.annuity"
                      description="annuities"
                      defaultMessage="annuities"
                  />
                </Tooltip>
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
