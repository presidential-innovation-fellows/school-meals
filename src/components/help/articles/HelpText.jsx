import React, { Component, PropTypes } from 'react'
import { schoolYear } from '../../../helpers'
import { organization, localPrograms, assistancePrograms } from '../../../config'
import { toSentenceSerial } from 'underscore.string'

const assistanceProgramList = toSentenceSerial(assistancePrograms, ', ', ' or ')

export const help = {
  //variables are paired by contentTitle and contentBody;
  ssiTitle: 'Is supplemental security income (SSI) included in my household income?',
  ssiBody: 'Yes. SSI benefits should be reported as household income in your application for school meal benefits.',

  govProgramTitle: 'What government program benefits should I include in my household income?',
  govProgramBody: 'If you have questions about whether to include benefits from a specific program, contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ').',

  childSupportTitle: 'Are my alimony and child support payments considered household income?',
  childSupportBody: 'Yes. Income from alimony and child support payments are considered household income and should be reported in your application for school meal benefits.',

  unemploymentBenefitsTitle: 'Do I need to report unemployment benefits, worker’s comp, social security disability insurance (SSDI) or Black Lung benefit payments in my household income?',
  unemploymentBenefitsBody: 'Yes. Even if you are currently unemployed or not working, if you or anyone in your household receives unemployment benefits, worker’s comp payments, SSDI, or Black Lung benefits, you must report that in your application for school meal benefits.',

  retirementBenefitsTitle: 'Are retirement benefits, such as Social Security, railroad retirement, or private pensions, considered household income?',
  retirementBenefitsBody: 'Yes. Income from public (government) or private (non-government) retirement plans are considered household income and should be reported in your application for school meal benefits.',

  rentalTitle: 'How should I report income from rented space or properties?',
  rentalBody: 'If you receive income from a room or property that you rent out, you should report the net amount of income. In other words, take the total amount you receive in rent for one month (the gross income), and subtract the monthly cost of maintaining the property. If you have questions or need help figuring out how to estimate maintenance costs, contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ').' ,

  interestTitle: 'How do I know if I have income from earned interest?',
  interestBody: 'If you have money in a savings or investment account, you should have income from earned interest. Interest payments are usually paid out on a quarterly basis, or four times per year. You should see any earned interest on your savings or investment account statement.',

  annuityTitle: 'What is an annuity and how do I know if I have income from one?',
  annuityBody: 'An annuity is a series of payments under a contract made at regular intervals over a period of more than one full year. They can be either fixed (under which you receive a definite amount) or variable (not fixed). Annuities can be purchased by individuals alone, or with the help of an employer. If you are unsure whether you have income from an annuity, you should contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ').',

  seasonalTitle: 'How should I report my income if I work on a seasonal basis?',
  seasonalBody: 'If you work on a seasonal basis and your household’s current, gross income is higher or lower than usual and does not fairly or accurately represent your household’s actual circumstances, see the ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ question in the HELP. If you have additional questions, contact '  + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ')' + ', and they will help you figure out your household’s annual rate of income based on USDA guidelines.',
//F29
  militaryTitle: 'We are in the military. Do we report our income differently?',
  militaryBody: 'Your basic pay and cash bonuses must be reported as income. If you get any cash value allowances for off-base housing, food, or clothing, (including BAH), it must also be included as income. However, if your housing is part of the Military Housing Privatization Initiative, do not include your housing allowance as income. Do not include payments from the Family Subsistence Supplemental Allowance (FSSA). Any additional combat pay resulting from deployment is also excluded from income. If the service member is deployed, include only the portion that is made available by them or on their behalf to the household as income.',
//F17
  deployedTitle: 'Should I include a member of our household on the application if they are currently deployed?',
  deployedBody: 'Yes. Members of the armed services who are activated or deployed are counted as household members. Any money made available by them or on their behalf for the household is included as income to the household with the exception of combat pay.',
//F8
  wicTitle: 'I get WIC. Can my children get free meals?',
  wicBody: 'Participation in the Special Supplemental Nutrition Program for Women, Infants and Children, or WIC program, does not automatically qualify your children for free or reduced price school meals. You will need to qualify based on your household income by completing this application.',
//F10
  otherProgramsTitle: 'My family needs more help. Are there other programs we might apply for?',
  otherProgramsBody: 'To find out how to apply for ' + localPrograms.snap.name + 'or other assistance benefits, contact your local assistance office at ' + localPrograms.snap.localContact + ' or call ' + localPrograms.snap.stateHotline + '.',
//F9
  headStartTitle: 'My child attends head start. Is he/she eligible for free school meals and do I need to fill out an application?',
  headStartBody: 'Yes. Children enrolled in Head Start are automatically eligible for free meals. You do not need to submit an application for school meal benefits unless you are requesting benefits for other school age children in your household.',
//F4
  letterTitle: 'I received a letter from the school saying that my children were automatically approved for free meals for the upcoming ' + schoolYear() + ' school year. Do I still need to complete an application?',
  letterBody: 'No, but please read the letter carefully. If any children in your household were missing from your eligibility notification letter, they are also eligible for free meals, so you should contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ') immediately.',
//F6
  localProgramTitle: 'My household participates in ' + localPrograms.snap.name + ' and/or ' + localPrograms.tanf.name + '. Are my children eligible for free meals?',
  localProgramBody: 'All children in households are eligible for free meals when at least one household member is receiving benefits from ' + localPrograms.snap.name + ' , the Food Distribution Program on Indian Reservations (FDPIR), or ' + localPrograms.tanf.name + '. If you participate in other assistance programs, contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ') to see if they qualify for you for school meal benefits. You may qualify for free meals!',
//F13
  checkedTitle: 'Will the information I give be checked?',
  checkedBody: 'Yes, each application is reviewed by the district to determine eligibility. We may also ask you to send proof of your household’s income.',
//F2
  newAppTitle: 'My child’s application was approved last year. Do I need to fill out a new one?',
  newAppBody: 'Yes. Eligibility for free or reduced price meals only lasts for one school year. However, eligibility for the previous year carries over for the first few days of the new school year, or until the new eligibility determination is made. Please complete a new application unless you received a letter from the school saying that your child is eligible for the upcoming ' + <schoolYear /> + ' school year.',
//F3
  childAppTitle: 'Do I need to fill out an application for each child?',
  childAppBody: 'No. Use one Free and Reduced Price School Meals Application for all students that attend ' + organization.name + ' in your household.',
//F25
  childIncomeTitle: 'What is child income?',
  childIncomeBody: 'Child income is money received from outside your household that is paid directly to your children. Many households do not have any child income.',
//F33
  earningsDifferencesTitle: 'What is the difference between earnings from a salary and earnings from wages?',
  earningsDifferencesBody: 'A salary is an agreed-upon, fixed amount of money paid to an employee every year.  Employers pay salaries in different frequencies depending on the work, but often the frequency is monthly, twice a month, or every two weeks. Wages are also an agreed-upon payment for work. Employers usually pay wages at an hourly, daily or weekly frequency.',
//delete
  reportTipsTitle: 'Do I need to report income from tips, commissions and cash bonuses?',
  reportTipsBody: {
    first: 'Yes. Income from tips, commissions and cash bonuses is considered household income and should be reported in your application.',
    second:'If your earnings from tips and commissions vary a lot from month to month, see the ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ question in the HELP.',
  },
//F35
  wagesSelfemploymentTitle: 'What if I have income from both wages and self-employment?',
  wagesSelfemploymentBody: 'For a household with income from wages and self-employment, each amount must be listed separately. When there is a business loss, income from wages must not be reduced by the amount of the business loss. If income from self-employment is negative, you should report it as $0 (zero) on your application.',

  combatPayTitle: 'Do I need to report my combat pay as income on my application?',
  combatPayBody: {
    first: 'No, as long as the following conditions are met:',
    second: 'It was received in addition to basic pay;',
    third: 'It was received for the deployment to or service in an area designated as a combat zone; and',
    fourth: 'It was not received prior to deployment to or service in the designated combat zone.',
    fifth: 'If any of these conditions are not met, you should report the amount as military basic pay.',
  },
//F31
  deipTitle: 'I get deployment extension incentive pay (DEIP). Should I report that as income in my application?',
  deipBody: 'Maybe. If you are not deployed, then it is included in your household income, but if you are away from your home station, then you are exempt from including it as household income.',
//F32
  fssaTitle: 'What is the family subsistence supplemental allowance?',
  fssaBody: 'Family Subsistence Supplemental Allowance (FSSA) is available to service members living in overseas locations that make less than 130 percent of the federal poverty line, and benefits equal the total dollars required to bring household income to that level.',
//F7
  fosterQualifyTitle: 'What if my household does not qualify for free or reduced price meal benefits based on income, but I have a foster child?',
  fosterQualifyBody: 'Foster children who are formally placed by the State welfare agency or court in a caretaker household are eligible for benefits regardless of household income.',
//delete and include as separate file
  hmrTitle: 'How do I know if my children qualify as homeless, migrant, or runaway?',
  hmrBody: {
    first: 'Your children may qualify as homeless, migrant, or runaway if…',
    second: 'your household lacks a permanent address,',
    third: 'you are staying together in a shelter, hotel, or other temporary housing arrangement,',
    fourth: 'your family relocates on a seasonal basis,',
    fifth: 'or any children living with you who have chosen to leave their prior family or household.',
    sixth: 'If you believe children in your household meet one or more of these descriptions and you haven’t been told your children will get free meals, please call or e-mail ' + localPrograms.homelessness.contact + ' to confirm their eligibility.',
  },
//F18
  permanentTitle: 'I am the permanent guardian of a child. Do they automatically qualify for free meals as a foster child?',
  permanentBody: 'No. The foster status only applies to children who are formally placed by the State welfare agency or court in a caretaker household. It does not apply to informal arrangements, such as caretaker arrangements or to permanent guardianship placements, which may exist outside of State or court based systems. The child may still be eligible based on your household income, so we encourage you to complete an application.',
//F19
  fosterTitle: 'I adopted a foster child. Are they still eligible for free meals?',
  fosterBody: 'Congratulations on the adoption! And the answer is maybe. If your child was approved for free meals before the adoption went through, then your child is eligible to receive free meals for the rest of the school year. But next year the child will no longer eligible for free meals based on foster status, though they may still qualify based on household income, so we encourage you to submit an application.',

  ssnTitle: 'What if I do not have a Social Security number?',
  ssnBody: 'Don’t worry, you don’t need to have a Social Security number to receive free or reduced price benefits.',
//F11
  usCitizenTitle: 'May I apply if someone in my household is not a U.S. citizen?',
  usCitizenBody: 'Yes. You, your children, or other household members do not have to be U.S. citizens to apply for free or reduced price meals.',
//F12
  publicChargeTitle: 'Will my child or I be subject to public charge if I apply for or receive school meal benefits?',
  publicChargeBody: 'No, the non-cash benefits received through the National School Lunch Program and School Breakfast Programs are not subject to public charge consideration. In other words, you will not be deported, denied entry to the country, or denied permanent status because you apply for or receive school meal benefits.',

//F5
  applyLaterTitle: 'If I don’t qualify now, may I apply later?',
  applyLaterBody: 'Yes, you may apply at any time during the school year.  For example, children with a parent or guardian who becomes unemployed may become eligible for free or reduced price meals if the household income drops below the income limit.',

  noIncomeTitle: 'What if some household members have no income to report?',
  noIncomeBody: 'You should still list these household members on your application.  Household members may not earn or receive some of the types of income we ask you to report, or they may not receive income at all. Remember your eligibility determination is based on both household income and household size.',

  irregularIncomeTitle: 'What if my income is not always the same?',
  irregularIncomeBody: 'If your income is different this month than a normal month because of overtime, holiday pay, missing a couple of shifts at work, or some other unexpected reason, put down what you would have made if those things hadn’t happened. For example, if you normally make $1000 each month, but you missed some work last month and only made $900, put down that you make $1000 per month. Similarly, if you normally make $500 per month, but you worked overtime and made $750, put down that you make $500 per month.',
//F16
  sharedCustodyTitle: 'What if I share custody of my child?',
  sharedCustodyBody: 'If time is split between houses, both parents may apply for benefits. If the eligibility statuses are different, the highest level of benefits will apply. For example, if you qualify for free meals but your child’s other parent does not, no matter which house your child is staying at, he or she can still receive free meals. However, if either parent chooses not to have your child receive free meal benefits while residing with them then that parent may simply pay for the meals.',
//F26
  grossTitle: 'What is gross income?',
  grossBody: 'Gross income is all money earned before deductions, such as income taxes, employee’s social security taxes, and insurance premiums. Gross income also includes money that is garnished from wages, or in the case of bankruptcy, income that is ordered to be paid to creditors.',
//F27
  netTitle: 'What is net income?',
  netBody: 'Commonly referred to as "take home pay," net income is the amount of money you receive in your pay check. It is your total (or gross) income, minus taxes and deductions.',
}

export const define = {
	//variables are paired by contentTerm contentDef
	currentTerm: 'Current income',
	currentDef: 'Current income is income earned or received in the current month, or in the month before the completion of this application.',

	ssdiTerm: 'Social Security Disability Insurance (SSDI)',
	ssdiDef: 'Social Security Disability Insurance (SSDI) are benefits paid to people who have worked long enough and paid Social Security taxes, but who can’t work because they have a medical condition that is expected to last at least one year or result in death.',

	pensionTerm: 'Pension',
	pensionDef: 'A pension is generally a series of payments made to you after you retire from work. Pension payments are made regularly and are based on such factors as years of service and prior compensation.',

	annuityTerm: 'Annuity',
	annuityDef: 'An annuity is a series of payments under a contract made at regular intervals over a period of more than one full year. They can be either fixed (under which you receive a definite amount) or variable (not fixed). Annuities can be purchased by individuals alone, or with the help of an employer.',

	trustTerm: 'Trust',
	trustDef: 'A trust is, in general, a relationship in which one person holds title to property, subject to an obligation to keep or use the property for the benefit of another.',

  salaryTerm: 'Salary',
  salaryDef: 'A salary is an agreed-upon and regular compensation for employment that may be paid in any frequency, but is usually paid on a monthly basis, not on an hourly, daily or piece-work basis.',

  wagesTerm: 'Wages',
  wagesDef: 'Wages are an amount of money that a worker is paid for work or services by the hour, day or week.',

  tipsTerm: 'Tips',
  tipsDef: 'Tips are income earned by service professionals that are not paid by an employer, but by patrons or customers for services, such as gratuity at a restaurant.',

  commissionsTerm: 'Commissions',
  commissionsDef: 'Commissions are an amount of money that a worker is paid based on the level of sales he or she made.',

  cashBonusTerm: 'Cash Bonus',
  cashBonusDef: 'A cash bonus is a lump sum of money awarded to an employee, either occasionally or periodically.',

  selfemploymentTerm: 'Self-employment',
  selfemploymentDef: {
    first: 'Income from self-employment should be reported as your current net income, equal to gross revenue (income) minus business expenses. Gross revenue (income) includes the total income from goods sold or services rendered by the business, or the value of all products sold.',
    second: 'Deductible business expenses include the cost of goods purchased; rent; utilities; depreciation charges; wages and salaries paid; and business taxes;',
    third: 'Non-deductible business expenses include the value of salable merchandise used by the proprietors of retail businesses; and personal, Federal, State, or local income taxes',
    fourth: 'Net income for self-employed farmers is figured by subtracting the farmer’s operating expenses from the gross revenue (income). Gross income includes money received from the rental of farm land, buildings, or equipment to others; and incidental receipts from the sale of items such as wood, sand, or gravel. Operating expenses include cost of feed, fertilizer, seed, and other farming supplies; cash wages paid to farmhands; depreciation charges; cash rent; interest on farm mortgages; farm building repairs; and farm taxes.',
    fifth: 'If your current net income is not your usual income, you may use last year’s income as a basis to report net income, or refer to the question ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ in the HELP.  If you have income from both wages and self-employment, see the help question ‘WHAT IF I HAVE INCOME FROM BOTH WAGES AND SELF-EMPLOYMENT?’ for more information.',
  },

  militaryBasicTerm: 'Military basic pay',
  militaryBasicDef: 'Military basic pay is the base salary for a Military service member on active duty and counts for part of total military income. Basic Pay is electronically distributed on the 1st and 15th of every month, and should be reported as ‘twice monthly income’.',

  allowancesTerm: 'Allowances',
  allowancesDef: 'Allowances for off-base housing, such as the Basic Allowance for Housing (BAH), is to help service members cover the cost of housing in the private sector.',

  regularCashTerm: 'Regular cash payments',
  regularCashDef: {
    first: 'Regular cash payments from outside the household is money regularly received from extended family or friends that do not live with you.  For example, if parents or grandparents regularly help cover the cost of groceries, bills, or rent, that money is considered household income and should be reported in your application for school meal benefits.',
    second: 'One-time payments should not be reported as current, monthly income since they are not received on a regular basis. However, if you receive a one-time payment, such as from an award, settlement, inheritance or prize winnings, and then regularly draw on that money for living expenses later on, the amount withdrawn should be reported in your application for school meal benefits in the space for ‘Any other income available to pay for children’s school meals’.',
  },

  earnedInterestTerm: 'Earned interest',
  earnedInterestDef: 'Earned interest is a fee that is paid for the use of another person’s money. It is usually a percentage of the amount borrowed.',

  ssiTerm: 'Supplemental Security Income (SSI)',
  ssiDef: {
    first: 'Supplemental Security Income (SSI) provides cash to meet basic needs for food, clothing, and shelter to aged, blind, and disabled people who have little or no income.',
    second: 'Benefits that are paid to veterans that have a service-connected disability and were not dishonorably discharged.',
  },

  cashAssistanceTerm: 'Cash assistance',
  cashAssistanceDef: 'Income in the form of cash benefits, including housing subsidies, from state or local government programs should be reported as household income. If you have questions about whether to include benefits from a specific program, contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ').',

  socialSecurityTerm: 'Social Security',
  socialSecurityDef: 'Social Security retirement benefits are payments to people (or family members of people) who are age 62 or older who have worked and paid taxes into the Social Security system.',

  blackLungTerm: 'Black Lung Benefits',
  blackLungDef: 'Black Lung benefits provide payments and medical treatment for people that became disabled from black lung disease from working in or around the nation’s coal mines.',

  railroadRetirementTerm: 'Railroad Retirement',
  railroadRetirementDef: 'Railroad retirement benefits are payments to qualified railroad employees that are retired or disabled.',

  alimonyTerm: 'Alimony',
  alimonyDef: 'Alimony is income from payments paid by a spouse or former spouse from whom you are divorced or legally separated.',

  childSupportTerm: 'Child support',
  childSupportDef: 'Child support payments are payments from one parent to another to cover the cost of raising a child. Child support should be reported as adult income, rather than child income.',

  strikeBenefitsTerm: 'Strike benefits',
  strikeBenefitsDef: 'Strike benefits are compensation paid by a union to workers on strike.',

  unemploymentTerm: 'Unemployment benefits',
  unemploymentDef: 'Unemployment benefits are payments from the government or a labor union to a person who is unemployed.',

  workersCompTerm: 'Worker’s compensation',
  workersCompDef: 'Worker’s compensation benefits are payments to cover lost wages and medical expenses of an employee who is injured on the job.',

  veteransBenefitsTerm: 'Verteran’s benefits',
  veteransBenefitsDef: 'Benefits that are paid to veterans that have a service-connected disability and were not dishonorably discharged.',
}

//F1 = PaperApp.jsx
//F14 = WhatInformation.jsx
//F15 = Household.jsx
//F20 = Write this as single article
//F21 = TBD for next release
//F22 = Write this as single article
//F23 ???
//F24 ???
//F28 = Write this as single article
//F30 = Write this as single article
//F34 ???
//F36 STOP
