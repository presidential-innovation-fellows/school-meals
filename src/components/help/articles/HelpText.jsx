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
}