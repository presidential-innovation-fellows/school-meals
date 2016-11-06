import React from 'react'
import FormattedMessage from './application/FormattedMessage'
import { organization } from '../config'

export const tooltiptext = {
  letter: <FormattedMessage
    id="tooltip.letter"
    description="Tooltip text about letter requiring that all strudents are named."
    defaultMessage="Check that the letter includes all the students in the household, because they are eligible for free meals.  If not, contact the school to correct the mistake."
  />,
  threethings: <FormattedMessage
    id="tooltip.threethings"
    description="Tooltip text encouraging user to apply for program."
    defaultMessage="If you are unsure if you qualify, fill out an application and officials at {organizationName} will determine if you are eligible."
    values={{
      organizationName: organization.name
    }}
  />,
  usStatus: <FormattedMessage
    id="tooltip.usStatus"
    description="Tooltip text about this program not resulting in public charges."
    defaultMessage="The non-cash benefits received through the school meal programs are not subject to public charge consideration. You will not be deported, denied entry to the country, or denied permanent status because you apply for or receive school meal benefits."
  />,
  snap: 'The Supplemental Nutrition Assistance Program (SNAP) is a program that offers nutrition assistance to millions of eligible, low-income individuals and families.',
  tanf: 'The Temporary Assistance for Needy Families (TANF) program is designed to help needy familities achieve self-sufficiency by providing cash assistance, as well as other supports and services.',
  fdpir: 'The Food Distribution Program on Indian Reservations (FDPIR) is a Federal program that provides USDA foods to low-icome households, including the elderly, living on Indian reservations, and to Native American families residing in designated areas near reservations and in the State of Oklahoma.',
  household: 'A household includes grandparents or other extended family members that are living with you.  It also includes people that are away on a temporary basis, like kids that are away at college. It includes people regardless of age or whether they earn or receive income.',
  foster: 'Foster child(ren) are eligible for free school meal benefits.  This only applies to children who are formally placed by the State welfare agency or court in a caretaker household.',
  householdreminder: 'Remember, for the purposes of applying for school meal benefits, a household is defined as a group of people, related or unrelated, that usually live together and share income and expenses.',
  childincome: 'Income earned or received by all household members, incuding children, is included when determining eligibility for benefits.',
  socialsecurity: 'Monthly payments to people (or spouses, or dependent children of people) who are retired or disabled, but have worked and paid taxes into the Social Security system. Payments are based on your reported earnings. Also, upon death, survivors can collect benefits.',
  pension: 'A series of payments made to you after you retire from work.  Pension payments are made regularly and are based on such factors as years of service and prior compensation.',
  annuity: 'A series of payments under a contractmade at regular intervals over a period of more than one full year.  They can be either fixed (under which you receive a definite amount) or variable (not fixed). Annuities can be purchased by individuals alone, or with the help of an employer.',
  trust: 'In general, a relationship in which one person holds title to property, subject to an obligation to keep or use the property for the benefit of another.',
  currentAdult: 'Income earned or received in the current month, or in the month before the completion of this application. If your household’s current income is higher or lower than usual and does not fairly or accurately represent your household’s actual circumstances, see Help for more information.',
  currentChild: 'Income earned or received in the current month, or in the month before the completion of this application. If your child’s income is higher or lower than usual, see the FAQ "What if my income is not always the same?" in Help.',
  netIncome: 'Net income is total (or gross) income, minus taxes and deductions, as is commonly referred to as "take home pay".  See Help for more information.',
  basicPay: 'The base salary for a Military service member on active duty.',
  cashBonus: 'A lump sum of money awarded to an employee, either occasionally or periodically.',
  allowances: 'Allowances for off-base housing, such as the Basic Allowance for Housing (BAH), is to help service members cover the cost of housing in the private sector.',
  availableToHousehold: 'Include only the portion of the deployed service member’s income that is made available to the household.',
  socialSecurityInsurance: 'Provices cash to meet basic needs for food, clothing, and shelter to aged, blind, and disabled people who have little or no income.',
  cashAssistance: 'Cash benefits, including housing subsidies, from state or local government programs must be reported as household income.  If you have questions about whether to include benefits from a specific program, contact ',
  SSDI: 'Benefits paid to people who have worked long enough and paid Social Security taxes, but who can’t work because they have a medical condition that is expected to last at least one year or result in death.',
  regularCashPayments: 'For example, if parents or grandparents regularly help cover the cost of groceries, bills, or rent, that money is considered household income. See Help for more information.',
  selfEmployment: 'If you are self-employed, report income from work as a net amount. This is calculated by subtracting the total operating expenses of your business from its gross receipts or revenue. For more information see the definition for "Net income from self-employment" in Help.',
  SSI: 'Provides cash to meet basic needs for food, clothing, and shelter to aged, blind, and disabled people who have little or no income.',
  alimony: 'Payments received from a spouse or former spouse from whom you are divorced or legally separated.',
  childSupport: 'Payments received by one parent from another to cover the cost of raising a child.',
  unemployment: 'Payments from the government or a labor union to a person who is unemployed.',
  veteranBenefits: 'Benefits that are paid to veterans that have a service-connected disability and were not dishonorably discharged.',
  workersComp: 'Payments to cover lost wages and medical expenses of an employee who is injured on the job.',
  strikeBenefits: 'Compensation paid by a union to workers on strike.',
  blackLung: 'Payments and medical treatment for people that become disabled from Black Lung Disease from working in or around the nation’s coal mines.',
  railroad: 'Payments to qualified railroad employees that are retired or disabled.',
  monthlyIncomeSum: 'We calculated this number by converting all the income you reported into a monthly amount. Remember, this should be a gross amount, so it will be more than what you receive as take-home pay.',
  earnedInterest: 'See the FAQ "How do I know if I have income from earned interest?" in Help.',
  rental: 'See the FAQ "How should I report income from rented space or properties?" in Help.',
  military: 'See Help for information about sources of income in military that are and are not included as household income.',
  deployed: 'We ask because we only count the portion of a deployed service member’s income that is made available to the household.',
  gross: 'All money earned or received before deductions, such as income taxes, Social Security taxes, and insurance premiums.',
  eligibility: <FormattedMessage
    id="tooltip.eligibility"
    description="Tooltip text for getting help on program eligibility."
    defaultMessage="See Help for the Income Eligibility Guidelines for reduced price benefits."
  />,
  ssiChildren: 'Supplemental Security Income (SSI) provides cash to meet basic needs for food, clothing, and shelter to children younger than age 18 who have a physical or mental condition, or combination of conditions, that meets Social Security’s definition of disability for children, and if his or her income and resources fall within the eligibility limits.',
  ssSurvivor: 'Social Security survivor benefits are monthly payments to children of a deceased parent who was retired or disabled, but worked and paid taxes into the Social Security system.',
  pensionChildren: 'A child may receive payments from the pension of a deceased parent.',
  annuityChildren: 'A child may be the recipient of payments from an annuity. See Help for the definition of an annuity.',
  mckinney: 'Provides Federal money for homeless shelter programs and facilitates public school access for homeless children and youth.',
  mep: 'Provides services to children who have moved across school district lines, within the last three years, in order to accompany or join a parent or guardian who seeks or obtains temporary or seasonal work in argiculture or fishing.',
  runaway: 'Authorizes community-based runaway and homeless youth projects to provide temporary shelter and care to youth who are in need of temporary shelter, counseling, and aftercare services.',
  littleguy: '’',
}
