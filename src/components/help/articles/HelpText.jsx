import React from 'react'
import SchoolYear from '../../application/SchoolYear'
import { assistanceProgramsVar, hmrPrograms, organization } from '../../../config'
import { FormattedMessage } from 'react-intl'

export const help = {
  // Variables are paired by contentTitle and contentBody.
// F1 = PaperApp.jsx
// F2
  newAppTitle:
    <FormattedMessage
        id="help.articles.helpText.newAppTitle"
        description="Help text."
        defaultMessage="My child’s application was approved last year. Do I need to fill out a new one?"
    />,
  newAppBody:
    <FormattedMessage
        id="help.articles.helpText.newAppBody"
        description="Help text."
        defaultMessage="Yes. Eligibility for free or reduced price meals only lasts for one school year. However, eligibility for the previous year carries over for the first few days of the new school year, or until the new eligibility determination is made. Please complete a new application unless you received a letter from the school saying that your child is eligible for the upcoming {schoolYear} school year."
        values={{ schoolYear: <SchoolYear /> }}
    />,
// F3
  childAppTitle:
    <FormattedMessage
        id="help.articles.helpText.childAppTitle"
        description="Help text."
        defaultMessage="Do I need to fill out an application for each child?"
    />,
  childAppBody:
    <FormattedMessage
        id="help.articles.helpText.childAppBody"
        description="Help text."
        defaultMessage="No. Use one Free and Reduced Price School Meal Application for all students that attend school in {organizationName} in your household."
        values={{ organizationName: organization.name }}
    />,
// F4
  letterTitle:
    <FormattedMessage
        id="help.articles.helpText.letterTitle"
        description="Help text."
        defaultMessage="I received a letter from the school saying that my children were automatically approved for free meals for the upcoming {schoolYear} school year. Do I still need to complete an application?"
        values={{ schoolYear: <SchoolYear /> }}
    />,
  letterBody:
    <FormattedMessage
        id="help.articles.helpText.letterBody"
        description="Help text."
        defaultMessage="No, but please read the letter carefully. If any children in your household were missing from your eligibility notification letter, they are also eligible for free meals, so you should contact {organizationName} ({organizationPhone} / {organizationEmail} / {organizationAddress} ) immediately."
        values={{
          organizationName: organization.name,
          organizationPhone: organization.contact.phone,
          organizationEmail: organization.contact.email,
          organizationAddress: organization.contact.address
        }}
    />,
// F5
  applyLaterTitle:
    <FormattedMessage
        id="help.articles.helpText.applyLaterTitle"
        description="Help text."
        defaultMessage="If I don’t qualify now, may I apply later?"
    />,
  applyLaterBody:
    <FormattedMessage
        id="help.articles.helpText.applyLaterBody"
        description="Help text."
        defaultMessage="Yes, you may apply at any time during the school year.  For example, children with a parent or guardian who becomes unemployed may become eligible for free or reduced price meals if the household income drops below the income limit."
    />,
// F6
  localProgramTitle:
    <FormattedMessage
        id="help.articles.helpText.localProgramTitle"
        description="Help text."
        defaultMessage="My household participates in {snapFullname} and/or {tanfFullname}. Are my children eligible for free meals?"
        values={{
          snapFullname: assistanceProgramsVar.snap.fullName,
          tanfFullname: assistanceProgramsVar.tanf.fullName
        }}
    />,
  localProgramBody:
    <FormattedMessage
        id="help.articles.helpText.localProgramBody"
        description="Help text."
        defaultMessage="All children in households are eligible for free meals when at least one household member is receiving benefits from {snapFullname}, the Food Distribution Program on Indian Reservations (FDPIR), or {tanfFullName}. If you participate in other assistance programs, contact {organizationName} to see if you qualify for school meal benefits. You may qualify for free meals!"
        values={{
          snapFullname: assistanceProgramsVar.snap.fullName,
          tanfFullName: assistanceProgramsVar.tanf.fullName,
          organizationName: organization.name
        }}
    />,
// F7
  fosterQualifyTitle:
    <FormattedMessage
        id="help.articles.helpText.fosterQualifyTitle"
        description="Help text."
        defaultMessage="What if my household does not qualify for free or reduced price meal benefits based on income, but I have a foster child?"
    />,
  fosterQualifyBody:
    <FormattedMessage
        id="help.articles.helpText.fosterQualifyBody"
        description="Help text."
        defaultMessage="Foster children who are formally placed by the State welfare agency or court in a caretaker household are eligible for benefits regardless of household income."
    />,
// F8
  wicTitle:
    <FormattedMessage
        id="help.articles.helpText.wicTitle"
        description="Help text."
        defaultMessage="I get WIC. Can my children get free meals?"
    />,
  wicBody:
    <FormattedMessage
        id="help.articles.helpText.wicBody"
        description="Help text."
        defaultMessage="Participation in the Special Supplemental Nutrition Program for Women, Infants and Children, or WIC program, does not automatically qualify your children for free or reduced price school meals. You will need to qualify based on your household income by completing this application."
    />,
// F9
  headStartTitle:
    <FormattedMessage
        id="help.articles.helpText.headStartTitle"
        description="Help text."
        defaultMessage="My child attends Head Start. Is he/she eligible for free school meals and do I need to fill out an application?"
    />,
  headStartBody:
    <FormattedMessage
        id="help.articles.helpText.headStartBody"
        description="Help text."
        defaultMessage="Yes. Children enrolled in Head Start are automatically eligible for free meals. You do not need to submit an application for school meal benefits unless you are requesting benefits for other school age children in your household."
    />,
// F10
  otherProgramsTitle:
    <FormattedMessage
        id="help.articles.helpText.otherProgramsTitle"
        description="Help text."
        defaultMessage="My family needs more help. Are there other programs we might apply for?"
    />,
  otherProgramsBody:
    <FormattedMessage
        id="help.articles.helpText.otherProgramsBody"
        description="Help text."
        defaultMessage="To find out how to apply for {snapFullname} or other assistance benefits, contact {organizationName}."
        values={{
          organizationName: organization.name,
          snapFullname: assistanceProgramsVar.snap.fullName
        }}
    />,
// F11
  usCitizenTitle:
    <FormattedMessage
        id="help.articles.helpText.usCitizenTitle"
        description="Help text."
        defaultMessage="May I apply if someone in my household is not a U.S. citizen?"
    />,
  usCitizenBody:
    <FormattedMessage
        id="help.articles.helpText.usCitizenBody"
        description="Help text."
        defaultMessage="Yes. You, your children, or other household members do not have to be U.S. citizens to apply for free or reduced price meals."
    />,
// F12
  publicChargeTitle:
    <FormattedMessage
        id="help.articles.helpText.publicChargeTitle"
        description="Help text."
        defaultMessage="Will my child or I be subject to public charge if I apply for or receive school meal benefits?"
    />,
  publicChargeBody:
    <FormattedMessage
        id="help.articles.helpText.publicChargeBody"
        description="Help text."
        defaultMessage="No, the non-cash benefits received through the National School Lunch Program and School Breakfast Programs are not subject to public charge consideration. In other words, you will not be deported, denied entry to the country, or denied permanent status because you apply for or receive school meal benefits."
    />,
// F13
  checkedTitle:
    <FormattedMessage
        id="help.articles.helpText.checkedTitle"
        description="Help text."
        defaultMessage="Will the information I give be checked?"
    />,
  checkedBody:
    <FormattedMessage
        id="help.articles.helpText.FormattedMessage"
        description="Help text."
        defaultMessage="Yes, each application is reviewed by the district to determine eligibility. We may also ask you to send proof of your household’s income."
    />,
// F14 = WhatInformation.jsx
// F15 = Household.jsx
// F16
  sharedCustodyTitle:
    <FormattedMessage
        id="help.articles.helpText.sharedCustodyTitle"
        description="Help text."
        defaultMessage="What if I share custody of my child?"
    />,
  sharedCustodyBody:
    <FormattedMessage
        id="help.articles.helpText.sharedCustodyBody"
        description="Help text."
        defaultMessage="If time is split between houses, both parents may apply for benefits. If the eligibility statuses are different, the highest level of benefits will apply. For example, if you qualify for free meals but your child’s other parent does not, no matter which house your child is staying at, he or she can still receive free meals. However, if either parent chooses not to have your child receive free meal benefits while residing with them then that parent may simply pay for the meals."
    />,
// F17
  deployedTitle:
    <FormattedMessage
        id="help.articles.helpText.deployedTitle"
        description="Help text."
        defaultMessage="Should I include a member of our household on the application if they are currently deployed?"
    />,
  deployedBody:
    <FormattedMessage
        id="help.articles.helpText.deployedBody"
        description="Help text."
        defaultMessage="Yes. Members of the armed services who are activated or deployed are counted as household members. Any money made available by them or on their behalf for the household is included as income to the household with the exception of combat pay."
    />,
// F18
  permanentTitle:
    <FormattedMessage
        id="help.articles.helpText.permanentTitle"
        description="Help text."
        defaultMessage="I am the permanent guardian of a child. Do they automatically qualify for free meals as a foster child?"
    />,
  permanentBody:
    <FormattedMessage
        id="help.articles.helpText.permanentBody"
        description="Help text."
        defaultMessage="No. The foster status only applies to children who are formally placed by the State welfare agency or court in a caretaker household. It does not apply to informal arrangements, such as caretaker arrangements or to permanent guardianship placements, which may exist outside of State or court based systems. The child may still be eligible based on your household income, so we encourage you to complete an application."
    />,
// F19
  fosterTitle:
    <FormattedMessage
        id="help.articles.helpText.fosterTitle"
        description="Help text."
        defaultMessage="I adopted a foster child. Are they still eligible for free meals?"
    />,
  fosterBody:
    <FormattedMessage
        id="help.articles.helpText.fosterBody"
        description="Help text."
        defaultMessage="Congratulations on the adoption! And the answer is maybe. If your child was approved for free meals before the adoption went through, then your child is eligible to receive free meals for the rest of the school year. But next year the child will no longer eligible for free meals based on foster status, though they may still qualify based on household income, so we encourage you to submit an application."
    />,
// F20 = QualifyMigrant.jsx
// F21 = TBD for next release
// F22 = QualifyHomeless.jsx
// F23
  qualifyRunawayTitle:
    <FormattedMessage
        id="help.articles.helpText.qualifyRunawayTitle"
        description="Help text."
        defaultMessage="How do I know if a child qualifies as a runaway?"
    />,
  qualifyRunawayBody:
    <FormattedMessage
        id="help.articles.helpText.qualifyRunawayBody"
        description="Help text."
        defaultMessage="Any children living with you who have chosen to leave their prior family or household may qualify for free meals. Please contact {organizationName}."
        values={{ organizationName: organization.name }}
    />,
// F24 = WhatIncome.jsx
// F25
  childIncomeTitle:
    <FormattedMessage
        id="help.articles.helpText.childIncomeTitle"
        description="Help text."
        defaultMessage="What is child income?"
    />,
  childIncomeBody:
    <FormattedMessage
        id="help.articles.helpText.childIncomeBody"
        description="Help text."
        defaultMessage="Child income is money received from outside your household that is paid directly to your children. Many households do not have any child income."
    />,
// F26
  grossTitle:
    <FormattedMessage
        id="help.articles.helpText.grossTitle"
        description="Help text."
        defaultMessage="What is gross income?"
    />,
  grossBody:
    <FormattedMessage
        id="help.articles.helpText.grossBody"
        description="Help text."
        defaultMessage="Gross income is all money earned before deductions, such as income taxes, employee’s social security taxes, and insurance premiums. Gross income also includes money that is garnished from wages, or in the case of bankruptcy, income that is ordered to be paid to creditors."
    />,
// F27
  netTitle:
    <FormattedMessage
        id="help.articles.helpText.netTitle"
        description="Help text."
        defaultMessage="What is net income?"
    />,
  netBody:
    <FormattedMessage
        id="help.articles.helpText.netBody"
        description="Help text."
        defaultMessage="Commonly referred to as “take home pay,” net income is the amount of money you receive in your pay check. It is your total (or gross) income, minus taxes and deductions."
    />,
// F28 = NotTheSame.jsx
// F29
  militaryTitle:
    <FormattedMessage
        id="help.articles.helpText.militaryTitle"
        description="Help text."
        defaultMessage="We are in the military. Do we report our income differently?"
    />,
  militaryBody:
    <FormattedMessage
        id="help.articles.helpText.militaryBody"
        description="Help text."
        defaultMessage="Your basic pay and cash bonuses must be reported as income. If you get any cash value allowances for off-base housing, food, or clothing, (including BAH), it must also be included as income. However, if your housing is part of the Military Housing Privatization Initiative, do not include your housing allowance as income. Do not include payments from the Family Subsistence Supplemental Allowance (FSSA). Any additional combat pay resulting from deployment is also excluded from income. If the service member is deployed, include only the portion that is made available by them or on their behalf to the household as income."
    />,
// F30 = ReportCombat.jsx
// F31
  deipTitle:
    <FormattedMessage
        id="help.articles.helpText.deipTitle"
        description="Help text."
        defaultMessage="I get deployment extension incentive pay (DEIP). Should I report that as income in my application?"
    />,
  deipBody:
    <FormattedMessage
        id="help.articles.helpText.deipBody"
        description="Help text."
        defaultMessage="Maybe. If you are not deployed, then it is included in your household income, but if you are away from your home station, then you are exempt from including it as household income."
    />,
// F32
  fssaTitle:
    <FormattedMessage
        id="help.articles.helpText.fssaTitle"
        description="Help text."
        defaultMessage="What is the family subsistence supplemental allowance?"
    />,
  fssaBody:
    <FormattedMessage
        id="help.articles.helpText.fssaBody"
        description="Help text."
        defaultMessage="Family Subsistence Supplemental Allowance (FSSA) is available to service members living in overseas locations that make less than 130 percent of the federal poverty line, and benefits equal the total dollars required to bring household income to that level."
    />,
// F33
  earningsDifferencesTitle:
    <FormattedMessage
        id="help.articles.helpText.earningsDifferencesTitle"
        description="Help text."
        defaultMessage="What is the difference between earnings from a salary and earnings from wages?"
    />,
  earningsDifferencesBody:
    <FormattedMessage
        id="help.articles.helpText.earningsDifferencesBody"
        description="Help text."
        defaultMessage="A salary is an agreed-upon, fixed amount of money paid to an employee every year.  Employers pay salaries in different frequencies depending on the work, but often the frequency is monthly, twice a month, or every two weeks. Wages are also an agreed-upon payment for work. Employers usually pay wages at an hourly, daily or weekly frequency."
    />,
// F34
  selfEmployedTitle:
    <FormattedMessage
        id="help.articles.helpText.selfEmployedTitle"
        description="Help text."
        defaultMessage="What if I am self-employed?"
    />,
  selfEmployedBody:
    <FormattedMessage
        id="help.articles.helpText.selfEmployedBody"
        description="Help text."
        defaultMessage="If you are self-employed, report income from work as a net amount. This is calculated by subtracting the total operating expenses of your business from its gross receipts or revenue. For more information see the definition for ‘Net income from self-employment’."
    />,
// F35
  wagesSelfemploymentTitle:
    <FormattedMessage
        id="help.articles.helpText.wagesSelfemploymentTitle"
        description="Help text."
        defaultMessage="What if I have income from both wages and self-employment?"
    />,
  wagesSelfemploymentBody:
    <FormattedMessage
        id="help.articles.helpText.wagesSelfemploymentBody"
        description="Help text."
        defaultMessage="For a household with income from wages and self-employment, each amount must be listed separately. When there is a business loss, income from wages must not be reduced by the amount of the business loss. If income from self-employment is negative, you should report it as $0 (zero) on your application."
    />,
// F36
  govProgramTitle:
    <FormattedMessage
        id="help.articles.helpText.govProgramTitle"
        description="Help text."
        defaultMessage="What government program benefits should I include in my household income?"
    />,
  govProgramBody:
    <FormattedMessage
        id="help.articles.helpText.govProgramBody"
        description="Help text."
        defaultMessage="If you have questions about whether to include benefits from a specific program, contact {organizationName} ({organizationPhone} / {organizationEmail} / {organizationAddress})."
        values={{
          organizationName: organization.name,
          organizationPhone: organization.contact.phone,
          organizationEmail: organization.contact.email,
          organizationAddress: organization.contact.address
        }}
    />,
// F37
  rentalTitle:
    <FormattedMessage
        id="help.articles.helpText.rentalTitle"
        description="Help text."
        defaultMessage="How should I report income from rented space or properties?"
    />,
  rentalBody:
    <FormattedMessage
        id="help.articles.helpText.rentalBody"
        description="Help text."
        defaultMessage="If you receive income from a room or property that you rent out, you should report the net amount of income. In other words, take the total amount you receive in rent for one month (the gross income), and subtract the monthly cost of maintaining the property. If you have questions or need help figuring out how to estimate maintenance costs, contact {organizationName} ({organizationPhone} / {organizationEmail} / {organizationAddress})."
        values={{
          organizationName: organization.name,
          organizationPhone: organization.contact.phone,
          organizationEmail: organization.contact.email,
          organizationAddress: organization.contact.address
        }}
    />,
// F38
  interestTitle:
    <FormattedMessage
        id="help.articles.helpText.interestTitle"
        description="Help text."
        defaultMessage="How do I know if I have income from earned interest?"
    />,
  interestBody:
    <FormattedMessage
        id="help.articles.helpText.interestBody"
        description="Help text."
        defaultMessage="If you have money in a savings or investment account, you should have income from earned interest. Interest payments are usually paid out on a quarterly basis, or four times per year. You should see any earned interest on your savings or investment account statement."
    />,
// F39
  seasonalTitle:
    <FormattedMessage
        id="help.articles.helpText.seasonalTitle"
        description="Help text."
        defaultMessage="How should I report my income if I work on a seasonal basis?"
    />,
  seasonalBody:
    <FormattedMessage
        id="help.articles.helpText.seasonalBody"
        description="Help text."
        defaultMessage="If you work on a seasonal basis and your household’s current, gross income is higher or lower than usual and does not fairly or accurately represent your household’s actual circumstances, see the ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ question in the HELP. If you have additional questions, contact {organizationName} ({organizationPhone} / {organizationEmail} / {organizationAddress}), and they will help you figure out your household’s annual rate of income based on USDA guidelines."
        values={{
          organizationName: organization.name,
          organizationPhone: organization.contact.phone,
          organizationEmail: organization.contact.email,
          organizationAddress: organization.contact.address
        }}
    />,
// F40
  noIncomeTitle:
    <FormattedMessage
        id="help.articles.helpText.noIncomeTitle"
        description="Help text."
        defaultMessage="What if some household members have no income to report?"
    />,
  noIncomeBody:
    <FormattedMessage
        id="help.articles.helpText.noIncomeBody"
        description="Help text."
        defaultMessage="You should still list these household members on your application.  Household members may not earn or receive some of the types of income we ask you to report, or they may not receive income at all. Remember your eligibility determination is based on both household income and household size. For more information on who to include in your application, see the FAQ “WHO SHOULD I INCLUDE IN MY HOUSEHOLD?”"
    />,
// F41
  ssnTitle:
    <FormattedMessage
        id="help.articles.helpText.ssnTitle"
        description="Help text."
        defaultMessage="What if I do not have a Social Security number?"
    />,
  ssnBody:
    <FormattedMessage
        id="help.articles.helpText.ssnBody"
        description="Help text."
        defaultMessage="Don’t worry, you don’t need to have a Social Security number to receive free or reduced price benefits."
    />,
// F42
  contactTitle:
    <FormattedMessage
        id="help.articles.helpText.contactTitle"
        description="Help text."
        defaultMessage="Do I have to provide my contact information?"
    />,
  contactBody:
    <FormattedMessage
        id="help.articles.helpText.contactBody"
        description="Help text."
        defaultMessage="No, but it is very helpful to have your contact information in case we need to get in touch with you about your application. Also, if your contact information changes in the future, please let us know so that we can maintain up-to-date information for your household throughout the year."
    />,
// F43
  disagreeTitle:
    <FormattedMessage
        id="help.articles.helpText.disagreeTitle"
        description="Help text."
        defaultMessage="What if I disagree with the school’s decision about my application?"
    />,
  disagreeBody:
    <FormattedMessage
        id="help.articles.helpText.disagreeBody"
        description="Help text."
        defaultMessage="You should talk to school officials. You also may ask for a hearing by calling or writing to {organizationName} ({organizationPhone} / {organizationEmail} / {organizationAddress})."
        values={{
          organizationName: organization.name,
          organizationPhone: organization.contact.phone,
          organizationEmail: organization.contact.email,
          organizationAddress: organization.contact.address
        }}
    />
}

export const define = {
  // Variables are paired by contentTerm contentDef.
// D1 = IEG.jsx
// D2
  mckinneyTerm:
    <FormattedMessage
        id="help.articles.helpText.mckinneyTerm"
        description="Help text."
        defaultMessage="{mckinneyShortName}"
        values={{ mckinneyShortName: hmrPrograms.mckinney.shortName }}
    />,
  mckinneyDef:
    <FormattedMessage
        id="help.articles.helpText.mckinneyDef"
        description="Help text."
        defaultMessage="{mckinneyFullName} provides Federal money for homeless shelter programs and facilitates public school access for homeless children and youth."
        values={{
          mckinneyFullName: hmrPrograms.mckinney.fullName
        }}
    />,
// D3
  mepTerm:
    <FormattedMessage
        id="help.articles.helpText.mepTerm"
        description="Help text."
        defaultMessage=" {mepFullName} ({mepAccronym})"
        values={{
          mepFullName: hmrPrograms.mep.fullName,
          mepAccronym: hmrPrograms.mep.accronym }}
    />,
  mepDef:
    <FormattedMessage
        id="help.articles.helpText.mepDef"
        description="Help text."
        defaultMessage="{mepAccronym} provides services to children who have moved across school district lines, within the last three years, in order to accompany or join a parent or guardian who seeks or obtains temporary or seasonal work in agriculture or fishing."
        values={{ mepAccronym: hmrPrograms.mep.accronym }}
    />,
// D4
  runawayHomelessActTerm:
    <FormattedMessage
        id="help.articles.helpText.runawayHomelessActTerm"
        description="Help text."
        defaultMessage="{programRunaway}"
        values={{ programRunaway: hmrPrograms.runaway }}
    />,
  runawayHomelessActDef:
    <FormattedMessage
        id="help.articles.helpText.runawayHomelessActDef"
        description="Help text."
        defaultMessage="{programRunaway} authorizes community-based runaway and homeless youth projects to provide temporary shelter and care to runaway or otherwise homeless youth who are in need of temporary shelter, counseling, and aftercare services."
        values={{ programRunaway: hmrPrograms.runaway }}
    />,
// D5
  currentTerm:
    <FormattedMessage
        id="help.articles.helpText.currentTerm"
        description="Help text."
        defaultMessage="Current income"
    />,
  currentDef:
    <FormattedMessage
        id="help.articles.helpText.currentDef"
        description="Help text."
        defaultMessage="Current income is income earned or received in the current month, or in the month before the completion of this application."
    />,
// D6
  cashBonusTerm:
    <FormattedMessage
        id="help.articles.helpText.cashBonusTerm"
        description="Help text."
        defaultMessage="Cash Bonus"
    />,
  cashBonusDef:
    <FormattedMessage
        id="help.articles.helpText.cashBonusDef"
        description="Help text."
        defaultMessage="A cash bonus is a lump sum of money awarded to an employee, either occasionally or periodically."
    />,
// D7 = NetSelfEmployment.jsx
// D8
  ssiTerm:
    <FormattedMessage
        id="help.articles.helpText.ssiTerm"
        description="Help text."
        defaultMessage="Supplemental Security Income (SSI)"
    />,
  ssiDef:
    <FormattedMessage
        id="help.articles.helpText.ssiDef"
        description="Help text."
        defaultMessage="Supplemental Security Income (SSI) provides cash to meet basic needs for food, clothing, and shelter to aged, blind, and disabled people who have little or no income."
    />,
// D9
  cashAssistanceTerm:
    <FormattedMessage
        id="help.articles.helpText.cashAssistanceTerm"
        description="Help text."
        defaultMessage="Cash assistance from state or local government"
    />,
  cashAssistanceDef:
    <FormattedMessage
        id="help.articles.helpText.cashAssistanceDef"
        description="Help text."
        defaultMessage="Income in the form of cash benefits, including housing assistance, from state or local government programs should be reported as household income. If you have questions about whether to include benefits from a specific program, contact {organizationName} ({organizationPhone} / {organizationEmail} / {organizationAddress})."
        values={{
          organizationName: organization.name,
          organizationPhone: organization.contact.phone,
          organizationEmail: organization.contact.email,
          organizationAddress: organization.contact.address
        }}
    />,
// D10
  alimonyTerm:
    <FormattedMessage
        id="help.articles.helpText.alimonyTerm"
        description="Help text."
        defaultMessage="Alimony"
    />,
  alimonyDef:
    <FormattedMessage
        id="help.articles.helpText.alimonyDef"
        description="Help text."
        defaultMessage="Alimony is income from payments paid by a spouse or former spouse from whom you are divorced or legally separated."
    />,
// D11
  childSupportTerm:
    <FormattedMessage
        id="help.articles.helpText.childSupportTerm"
        description="Help text."
        defaultMessage="Child support"
    />,
  childSupportDef:
    <FormattedMessage
        id="help.articles.helpText.childSupportDef"
        description="Help text."
        defaultMessage="Child support payments are payments received by one parent from another to cover the cost of raising a child."
    />,
// D12
  unemploymentTerm:
    <FormattedMessage
        id="help.articles.helpText.unemploymentTerm"
        description="Help text."
        defaultMessage="Unemployment benefits"
    />,
  unemploymentDef:
    <FormattedMessage
        id="help.articles.helpText.unemploymentDef"
        description="Help text."
        defaultMessage="Unemployment benefits are payments from the government or a labor union to a person who is unemployed."
    />,
// D13
  workersCompTerm:
    <FormattedMessage
        id="help.articles.helpText.workersCompTerm"
        description="Help text."
        defaultMessage="Worker’s compensation"
    />,
  workersCompDef:
    <FormattedMessage
        id="help.articles.helpText.workersCompDef"
        description="Help text."
        defaultMessage="Worker’s compensation benefits are payments to cover lost wages and medical expenses of an employee who is injured on the job."
    />,
// D14
  strikeBenefitsTerm:
    <FormattedMessage
        id="help.articles.helpText.strikeBenefitsTerm"
        description="Help text."
        defaultMessage="Strike benefits"
    />,
  strikeBenefitsDef:
    <FormattedMessage
        id="help.articles.helpText.strikeBenefitsDef"
        description="Help text."
        defaultMessage="Strike benefits are compensation paid by a union to workers on strike."
    />,
// D15
  ssdiTerm:
    <FormattedMessage
        id="help.articles.helpText.ssdiTerm"
        description="Help text."
        defaultMessage="Social Security Disability Insurance (SSDI)"
    />,
  ssdiDef:
    <FormattedMessage
        id="help.articles.helpText.ssdiDef"
        description="Help text."
        defaultMessage="Social Security Disability Insurance (SSDI) are benefits paid to people who have worked long enough and paid Social Security taxes but who can’t work because they have a medical condition that is expected to last at least one year or result in death."
    />,
// D16
  veteransBenefitsTerm:
    <FormattedMessage
        id="help.articles.helpText.veteransBenefitsTerm"
        description="Help text."
        defaultMessage="Verteran’s benefits"
    />,
  veteransBenefitsDef:
    <FormattedMessage
        id="help.articles.helpText.veteransBenefitsDef"
        description="Help text."
        defaultMessage="Benefits that are paid to veterans that have a service-connected disability and were not dishonorably discharged."
    />,
// D17
  socialSecurityTerm:
    <FormattedMessage
        id="help.articles.helpText.socialSecurityTerm"
        description="Help text."
        defaultMessage="Social Security benefits"
    />,
  socialSecurityDef:
    <FormattedMessage
        id="help.articles.helpText.socialSecurityDef"
        description="Help text."
        defaultMessage="Social Security retirement benefits are monthly payments to people (or spouses, or dependent children of people) who are retired or disabled, but have worked and paid taxes into the Social Security system. Payments are based on your reported earnings. Also, upon death, survivors can collect benefits."
    />,
// D18
  blackLungTerm:
    <FormattedMessage
        id="help.articles.helpText.blackLungTerm"
        description="Help text."
        defaultMessage="Black Lung benefits"
    />,
  blackLungDef:
    <FormattedMessage
        id="help.articles.helpText.blackLungDef"
        description="Help text."
        defaultMessage="Black Lung benefits provide monthly payments and medical treatment for people that became disabled from black lung disease from working in or around the nation’s coal mines."
    />,
// D19
  railroadRetirementTerm:
    <FormattedMessage
        id="help.articles.helpText.railroadRetirementTerm"
        description="Help text."
        defaultMessage="Railroad Retirement benefits"
    />,
  railroadRetirementDef:
    <FormattedMessage
        id="help.articles.helpText.railroadRetirementDef"
        description="Help text."
        defaultMessage="Railroad retirement benefits provide retirement and disability annuities for qualified railroad employees, spouse annuities for their wives or husbands, and survivor benefits for the families of deceased employees who were insured under the Railroad Retirement Act."
    />,
// D20 = RegularCash.jsx
// D21
  pensionTerm:
    <FormattedMessage
        id="help.articles.helpText.pensionTerm"
        description="Help text."
        defaultMessage="Pension"
    />,
  pensionDef:
    <FormattedMessage
        id="help.articles.helpText.pensionDef"
        description="Help text."
        defaultMessage="A pension is generally a series of payments made to you after you retire from work. Pension payments are made regularly and are based on such factors as years of service and prior compensation."
    />,
// D22
  annuityTerm:
    <FormattedMessage
        id="help.articles.helpText.annuityTerm"
        description="Help text."
        defaultMessage="Annuity"
    />,
  annuityDef:
    <FormattedMessage
        id="help.articles.helpText.annuityDef"
        description="Help text."
        defaultMessage="An annuity is a series of payments under a contract made at regular intervals over a period of more than one full year. They can be either fixed (under which you receive a definite amount) or variable (not fixed). Annuities can be purchased by individuals alone, or with the help of an employer."
    />,
// D23
  trustTerm:
    <FormattedMessage
        id="help.articles.helpText.trustTerm"
        description="Help text."
        defaultMessage="Trust"
    />,
  trustDef:
    <FormattedMessage
        id="help.articles.helpText.trustDef"
        description="Help text."
        defaultMessage="A trust is, in general, a relationship in which one person holds title to property, subject to an obligation to keep or use the property for the benefit of another."
    />,
// D24
  ssiChildrenTerm:
    <FormattedMessage
        id="help.articles.helpText.ssiChildrenTerm"
        description="Help text."
        defaultMessage="Supplemental Security Income (SSI) for children"
    />,
  ssiChildrenDef:
    <FormattedMessage
        id="help.articles.helpText.ssiChildrenDef"
        description="Help text."
        defaultMessage="Supplemental Security Income (SSI) provides cash to meet basic needs for food, clothing, and shelter to children younger than age 18 who have a physical or mental condition, or combination of conditions, that meets Social Security’s definition of disability for children, and if his or her income and resources fall within the eleigibility limits."
    />,
// D25
  ssSurvivorTerm:
    <FormattedMessage
        id="help.articles.helpText.ssSurvivorTerm"
        description="Help text."
        defaultMessage="Social Security survivor benefits"
    />,
  ssSurvivorDef:
    <FormattedMessage
        id="help.articles.helpText.ssSurvivorDef"
        description="Help text."
        defaultMessage="Social Security survivor benefits are monthly payments to children of a deceased parent who was retired or disabled, but worked and paid taxes into the Social Security system."
    />,
// D26
  pensionBeneficiaryTerm:
    <FormattedMessage
        id="help.articles.helpText.pensionBeneficiaryTerm"
        description="Help text."
        defaultMessage="Pension beneficiary or survivor"
    />,
  pensionBeneficiaryDef:
    <FormattedMessage
        id="help.articles.helpText.pensionBeneficiaryDef"
        description="Help text."
        defaultMessage="A child may receive payments from a pension of a deceased parent."
    />,
// D27
  annuityChildrenTerm:
    <FormattedMessage
        id="help.articles.helpText.annuityChildrenTerm"
        description="Help text."
        defaultMessage="Annuity for a child"
    />,
  annuityChildrenDef:
    <FormattedMessage
        id="help.articles.helpText.annuityChildrenDef"
        description="Help text."
        defaultMessage="A child may be the recipient of payments from an annuity.  See Help for the definition of an annuity."
    />

}
