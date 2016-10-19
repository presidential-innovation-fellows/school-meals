import React, { Component, PropTypes } from 'react'
import { organization, localPrograms } from '../../../config'
import { schoolYear } from '../../../helpers'

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

  militaryTitle: 'We are in the military. Do we report our income differently?',
  militaryBody: 'Your basic pay and cash bonuses must be reported as income. If you get any cash value allowances for off-base housing, food, or clothing, (including BAH), it must also be included as income. However, if your housing is part of the Military Housing Privatization Initiative, do not include your housing allowance as income. Do not include payments from the Family Subsistence Supplemental Allowance (FSSA). Any additional combat pay resulting from deployment is also excluded from income. If the service member is deployed, include only the portion that is made available by them or on their behalf to the household as income.',

  deployedTitle: 'Should I include a member of our household on the application if they are currently deployed?',
  deployedBody: 'Yes. Members of the armed services who are activated or deployed are counted as household members. Any money made available by them or on their behalf for the household is included as income to the household with the exception of combat pay.',

  wicTitle: 'I get WIC. Can my children get free meals?',
  wicBody: 'Participation in the Special Supplemental Nutrition Program for Women, Infants and Children, or WIC program, does not automatically qualify your children for free or reduced price school meals. You will need to qualify based on your household income by completing this application.',

  otherProgramsTitle: 'My family needs more help. Are there other programs we might apply for?',
  otherProgramsBody: 'To find out how to apply for ' + localPrograms.snap.name + 'or other assistance benefits, contact your local assistance office at ' + localPrograms.snap.localContact + ' or call ' + localPrograms.snap.stateHotline + '.',

  headStartTitle: 'My child attends head start. Is he/she eligible for free school meals and do I need to fill out an application?',
  headStartBody: 'Yes. Children enrolled in Head Start are automatically eligible for free meals. You do not need to submit an application for school meal benefits unless you are requesting benefits for other school age children in your household.',

  letterTitle: 'I received a letter from the school saying that my children were automatically approved for free meals for the upcoming ' + schoolYear() + ' school year. Do I still need to complete an application?',
  letterBody: 'No, but please read the letter carefully. If any children in your household were missing from your eligibility notification letter, they are also eligible for free meals, so you should contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ') immediately.',

  localProgramTitle: 'My household participates in ' + localPrograms.snap.name + ' and/or ' + localPrograms.tanf.name + '. Are my children eligible for free meals?',
  localProgramBody: 'All children in households are eligible for free meals when at least one household member is receiving benefits from ' + localPrograms.snap.name + ' , the Food Distribution Program on Indian Reservations (FDPIR), or ' + localPrograms.tanf.name + '. If you participate in other assistance programs, contact ' + organization.name +  ' (' + organization.contact.phone + ' / ' + organization.contact.email + ' / ' + organization.contact.address + ') to see if they qualify for you for school meal benefits.',

  checkedTitle: 'Will the information I give be checked?',
  checkedBody: 'Yes, each application is reviewed by the district to determine eligibility. We may also ask you to send proof of your household’s income.',

  newAppTitle: 'My child’s application was approved last year. Do I need to fill out a new one?',
  newAppBody: 'Yes. Eligibility for free or reduced price meals only lasts for one school year. However, eligibility for the previous year carries over for the first few days of the new school year, or until the new eligibility determination is made. Please complete a new application unless you received a letter from the school saying that your child is eligible for the upcoming ' + <schoolYear /> + ' school year.',

  childAppTitle: 'Do I need to fill out an application for each child?',
  childAppBody: 'No. Use one Free and Reduced Price School Meals Application for all students that attend ' + organization.name + ' in your household.',

  childIncomeTitle: 'What is child income?',
  childIncomeBody: 'Child income is money received from <em>outside</em> your household that is paid directly to your children. Many households do not have any child income.',

  earningsDifferencesTitle: 'What is the difference between earnings from a salary and earnings from wages?',
  earningsDifferencesBody: 'A salary is an agreed-upon, fixed amount of money paid to an employee every year. Salaries may be paid in any frequency, but are usually paid on a monthly basis. Wages are also payment for work, but are agreed upon and paid on an hourly, daily or weekly basis.',
//incomplete, contains formatting
  reportTipsTitle: 'Do I need to report income from tips, commissions and cash bonuses?',
  reportTipsBody: 'Yes. Income from tips, commissions and cash bonuses is considered household income and should be reported in your application.' + <p> + 'If your earnings from tips and commissions vary a lot from month to month, see the ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ question in the HELP.' + </p>,

  wagesSelfemploymentTitle: 'What if I have income from both wages and self-employment?',
  wagesSelfemploymentBody: 'For a household with income from wages and self-employment, each amount must be listed separately. When there is a business loss, income from wages must not be reduced by the amount of the business loss. If income from self-employment is negative, you should report it as $0 (zero) on your application.',
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

//incomplete, contains formatting
  selfemploymentTerm: 'Self-employment',
  selfemploymentDef: 'Income from self-employment should be reported as your current net income, equal to gross revenue (income) minus business expenses. Gross revenue (income) includes the total income from goods sold or services rendered by the business, or the value of all products sold.',


}