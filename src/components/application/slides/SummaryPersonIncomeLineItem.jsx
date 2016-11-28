import React, { Component, PropTypes } from 'react'
import EditLink from '../EditLink'
import HourlyPeriodLabel from '../HourlyPeriodLabel'
import IncomeAmount from '../IncomeAmount'
import { observer } from 'mobx-react'
import { FormattedMessage, defineMessages } from 'react-intl'

@observer
class SummaryPersonIncomeLineItem extends Component {
  messages = {
    child: defineMessages({
      job: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.child.job',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Full or part-time job'
      },
      socialSecurity: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.child.socialSecurity',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'SSI or Social Security'
      },
      friendsFamily: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.child.friendsFamily',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Friends or family'
      },
      pensionAnnuityTrust: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.child.pensionAnnuityTrust',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Pension, annuity, or trust'
      },
      other: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.child.other',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Other income source'
      }

    }),
    military: defineMessages({
      basic: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.military.basic',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Military basic pay'
      },
      cashBonus: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.military.cashBonus',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Military cash bonus'
      },
      allowance: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.military.allowance',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Military allowance'
      }

    }),
    employment: defineMessages({
      salaryWages: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.employment.salaryWages',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Salary / Wages'
      },
      tips: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.employment.tips',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Tips'
      },
      commission: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.employment.commission',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Commission'
      },
      cashBonus: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.employment.cashBonus',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Cash bonus'
      },
      selfEmployment: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.employment.selfEmployment',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Net income from self-employment'
      }
    }),
    publicAssistance: defineMessages({
      ssi: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.publicAssistance.ssi',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Supplemental Security Income (SSI)'
      },
      stateLocal: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.publicAssistance.stateLocal',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Cash assistance program'
      }

    }),
    spousal: defineMessages({
      alimony: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.spousal.alimony',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Alimony'
      },
      childSupport: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.spousal.childSupport',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Child support'
      }
    }),
    unemployment: defineMessages({
      unemployment: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.unemployment.unemployment',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Unemployment benefits'
      },
      workersComp: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.unemployment.workersComp',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Worker’s compensation'
      },
      strike: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.unemployment.strike',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Strike benefits'
      },
      ssdi: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.unemployment.ssdi',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Social Security Disability Insurance (SSDI)'
      },
      veteran: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.unemployment.veteran',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Veteran’s benefits'
      }
    }),
    retirement: defineMessages({
      socialSecurity: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.retirement.socialSecurity',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Social Security'
      },
      privatePension: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.retirement.privatePension',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Pension'
      }
    }),
    other: defineMessages({
      regularCashPayments: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.other.regularCashPayments',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Regular cash payments'
      },
      rentalIncome: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.other.rentalIncome',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Rental income'
      },
      earnedInterest: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.other.earnedInterest',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Earned interest'
      },
      investmentIncome: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.other.investmentIncome',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Investment income'
      },
      annuity: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.other.annuity',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Annuity'
      },
      other: {
        id: 'app.slides.summaryPersonIncomeLineItem.description.other.other',
        description: 'Short income source description used on Summary page.',
        defaultMessage: 'Other income source'
      }
    })
  }

  render() {
    const { person, lineItem } = this.props
    const { amount, frequency, source, type } = lineItem

    return (
      <li>
        <FormattedMessage {...this.messages[type][source]} />
        {' — '}
        {amount && frequency &&
        <IncomeAmount
            amount={parseFloat(amount, 10)}
            decimals={2}
            frequency={frequency}
        />
        }
        {' '}
        {lineItem.frequency === 'hourly' && lineItem.hourlyPeriod &&
        <span>
           ({lineItem.hourlyHours}{' '}
          <HourlyPeriodLabel period={lineItem.hourlyPeriod} />)
         </span>
        }
        {' '}
        <EditLink id={`income/${person.id}/${lineItem.type}`} />
      </li>
    )
  }
}

SummaryPersonIncomeLineItem.propTypes = {
  lineItem: PropTypes.object.isRequired
}

export default SummaryPersonIncomeLineItem
