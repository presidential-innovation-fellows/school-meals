import React, { Component, PropTypes } from 'react'
import SummaryEditLink from './SummaryEditLink'
import FrequencyLabel from '../FrequencyLabel'
import HourlyPeriodLabel from '../HourlyPeriodLabel'
import { observer } from 'mobx-react'
import { numberFormat } from 'underscore.string'
import { FormattedMessage } from 'react-intl'

@observer
class SummaryPersonIncome extends Component {
  get description() {
    const { type, source } = this.props.income

    switch (type) {
      case 'child':
        switch (source) {
          case 'job':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.child.job"
                  description="Short income source description used on Summary page."
                  defaultMessage="Full or part-time job"
              />
            )
          case 'socialSecurity':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.child.socialSecurity"
                  description="Short income source description used on Summary page."
                  defaultMessage="SSI or Social Security"
              />
            )
          case 'friendsFamily':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.child.friendsFamily"
                  description="Short income source description used on Summary page."
                  defaultMessage="Friends or family"
              />
            )
          case 'pensionAnnuityTrust':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.child.pensionAnnuityTrust"
                  description="Short income source description used on Summary page."
                  defaultMessage="Pension, annuity, or trust"
              />
            )
          case 'other':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.child.other"
                  description="Short income source description used on Summary page."
                  defaultMessage="Other income source"
              />
            )
        }
      case 'military':
        switch (source) {
          case 'basic':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.military.basic"
                  description="Short income source description used on Summary page."
                  defaultMessage="Military basic pay"
              />
            )
          case 'cashBonus':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.military.cashBonus"
                  description="Short income source description used on Summary page."
                  defaultMessage="Military cash bonus"
              />
            )
          case 'allowance':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.military.allowance"
                  description="Short income source description used on Summary page."
                  defaultMessage="Military allowance"
              />
            )
        }
      case 'employment':
        switch (source) {
          case 'salaryWages':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.employment.salaryWages"
                  description="Short income source description used on Summary page."
                  defaultMessage="Salary / Wages"
              />
            )
          case 'tips':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.employment.tips"
                  description="Short income source description used on Summary page."
                  defaultMessage="Tips"
              />
            )
          case 'commission':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.employment.commission"
                  description="Short income source description used on Summary page."
                  defaultMessage="Commission"
              />
            )
          case 'cashBonus':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.employment.cashBonus"
                  description="Short income source description used on Summary page."
                  defaultMessage="Cash bonus"
              />
            )
          case 'selfEmployment':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.employment.selfEmployment"
                  description="Short income source description used on Summary page."
                  defaultMessage="Net income from self-employment"
              />
            )
        }
      case 'publicAssistance':
        switch (source) {
          case 'ssi':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.publicAssistance.ssi"
                  description="Short income source description used on Summary page."
                  defaultMessage="Supplemental Security Income (SSI)"
              />
            )
          case 'stateLocal':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.publicAssistance.stateLocal"
                  description="Short income source description used on Summary page."
                  defaultMessage="Cash assistance program"
              />
            )
        }
      case 'spousal':
        switch (source) {
          case 'alimony':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.spousal.alimony"
                  description="Short income source description used on Summary page."
                  defaultMessage="Alimony"
              />
            )
          case 'childSupport':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.spousal.childSupport"
                  description="Short income source description used on Summary page."
                  defaultMessage="Child support"
              />
            )
        }
      case 'unemployment':
        switch (source) {
          case 'unemployment':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.unemployment.unemployment"
                  description="Short income source description used on Summary page."
                  defaultMessage="Unemployment benefits"
              />
            )
          case 'workersComp':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.unemployment.workersComp"
                  description="Short income source description used on Summary page."
                  defaultMessage="Worker’s compensation"
              />
            )
          case 'strike':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.unemployment.strike"
                  description="Short income source description used on Summary page."
                  defaultMessage="Strike benefits"
              />
            )
          case 'ssdi':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.unemployment.ssdi"
                  description="Short income source description used on Summary page."
                  defaultMessage="Social Security Disability Insurance (SSDI)"
              />
            )
          case 'veteran':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.unemployment.veteran"
                  description="Short income source description used on Summary page."
                  defaultMessage="Veteran’s benefits"
              />
            )
        }
      case 'retirement':
        switch (source) {
          case 'socialSecurity':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.retirement.socialSecurity"
                  description="Short income source description used on Summary page."
                  defaultMessage="Social Security"
              />
            )
          case 'privatePension':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.retirement.privatePension"
                  description="Short income source description used on Summary page."
                  defaultMessage="Pension"
              />
            )
        }
      case 'other':
        switch (source) {
          case 'regularCashPayments':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.other.regularCashPayments"
                  description="Short income source description used on Summary page."
                  defaultMessage="Regular cash payments"
              />
            )
          case 'rentalIncome':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.other.rentalIncome"
                  description="Short income source description used on Summary page."
                  defaultMessage="Rental income"
              />
            )
          case 'earnedInterest':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.other.earnedInterest"
                  description="Short income source description used on Summary page."
                  defaultMessage="Earned interest"
              />
            )
          case 'investmentIncome':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.other.investmentIncome"
                  description="Short income source description used on Summary page."
                  defaultMessage="Investment income"
              />
            )
          case 'annuity':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.other.annuity"
                  description="Short income source description used on Summary page."
                  defaultMessage="Annuity"
              />
            )
          case 'other':
            return(
              <FormattedMessage
                  id="app.slides.summaryPersonIncome.description.other.other"
                  description="Short income source description used on Summary page."
                  defaultMessage="Other income source"
              />
            )
        }
    }
  }

  render() {
    const { person, income } = this.props

    return (
      <li>
        {this.description}
        {' '}
        ${numberFormat(parseFloat(income.amount, 10), 2)}
        {' '}
        {income.frequency && <FrequencyLabel frequency={income.frequency} />}
        {' '}
        {income.frequency === 'hourly' && income.hourlyPeriod &&
         <span>
           ({income.hourlyHours}{' '}
           <HourlyPeriodLabel period={income.hourlyPeriod} />)
         </span>
        }
        {' '}
        <SummaryEditLink id={`income/${person.id}/${income.type}`} />
      </li>
    )
  }
}

SummaryPersonIncome.propTypes = {
  income: PropTypes.object.isRequired
}

export default SummaryPersonIncome
