import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

import Welcome from './Welcome'
import BeforeYouBegin from './BeforeYouBegin'
import Attestation from './Attestation'
import AssistancePrograms from './AssistancePrograms'
import OtherPrograms from './OtherPrograms'
import OtherChildren from './OtherChildren'
import ChildIncome from './ChildIncome'
import Adults from './Adults'
import AdultIncomeOverview from './AdultIncomeOverview'
import MilitaryIncome from './MilitaryIncome'
import EmploymentIncome from './EmploymentIncome'
import PublicAssistanceIncome from './PublicAssistanceIncome'
import SpousalIncome from './SpousalIncome'
import UnemploymentIncome from './UnemploymentIncome'
import RetirementIncome from './RetirementIncome'
import OtherIncome from './OtherIncome'
import Signature from './Signature'

import { toSentenceSerial } from 'underscore.string'
import { assistancePrograms, localPrograms, organization } from '../../../config'

import SchoolYear from '../../application/SchoolYear'
import ApplyLater from '../topics/ApplyLater'

import { schoolYear } from '../../../helpers'
import Household from '../topics/Household'
import SharedCustody from '../topics/SharedCustody'

export default class All extends Component {
  render() {
    const assistanceProgramList =
      toSentenceSerial(assistancePrograms, ', ', ' or ')

    return (
      <Article>
        {/* Welcome Topics */}
        <Topic title="Can I apply using a paper application?">
          <p>
            Yes. If you would like to apply using the paper application, you can print it from <a href={organization.paperApplication.url} target="_blank">here</a> or contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}) to request an application. Then return the completed application to:
          </p>
          <p>
            {organization.name}
            <br />
            {organization.paperApplication.address}
            <br />
            {organization.paperApplication.phone}
            <br />
            {organization.paperApplication.email}
          </p>
        </Topic>

        <Topic title="What information will I need to fill out the application?">
          <p>You may not need all this information, but if you have it handy, it will make the application process faster.</p>
          <ul>
            <li>If you participate in {assistanceProgramList} you will need to know your case number (not your card or account number).</li>
            <li>
              If you do not participate in any of the above assistance program, you will need to report your total household income. In that case…
              <ul>
                <li>if anyone in your house has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different than the amount in your paycheck.</li>
                <li>if anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments.</li>
                <li>you may also need to reference other financial documents for additional sources of income.</li>
              </ul>
            </li>
          </ul>
          <p>Still not sure if you have everything you need? Don’t worry. The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then.</p>
        </Topic>

        {/* BeforeYouBegin topics */}
        <Topic title="My child's application was approved last year. Do I need to fill out a new one?">
          <p>
            Yes. Eligibility for free or reduced price meals only lasts for one school year. However, eligibility for the previous year carries over for the first few days of the new school year, or until the new eligibility determination is made. Please complete a new application unless you received a letter from the school saying that your child is eligible for the upcoming <SchoolYear /> school year.
          </p>
        </Topic>

        <Topic title="Do I need to fill out an application for each child?">
          <p>
            No. Use one Free and Reduced Price School Meals Application for all students that attend {organization.name} in your household.
          </p>
        </Topic>

        <ApplyLater />

        {/* Attestation topics */}
        <Topic title="Will the information I give be checked?">
          <p>
            Yes, each application is reviewed by the district to determine eligibility. We may also ask you to send proof of your household’s income.
          </p>
        </Topic>

        {/* AssistancePrograms topics */}
        <Topic title={`I received a letter from the school saying that my children were automatically approved for free meals for the upcoming ${schoolYear()} school year. Do I still need to complete an application`}>
          <p>
            No, but please read the letter carefully. If any children in your household were missing from your eligibility notification letter, they are also eligible for free meals, so you should contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}) immediately.
          </p>
        </Topic>

        <Topic title={`My household participates in ${localPrograms.snap.name} and/or ${localPrograms.tanf.name}. Are my children eligible for free meals?`}>
          <p>
            All children in households are eligible for free meals when at least one household member is receiving benefits from {localPrograms.snap.name}, the Food Distribution Program on Indian Reservations (FDPIR), or {localPrograms.tanf.name}. If you participate in other assistance programs, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}) to see if they qualify for you for school meal benefits.
          </p>
        </Topic>

        <Topic title="I get WIC. Can my children get free meals?">
          <p>
            Participation in the Special Supplemental Nutrition Program for Women, Infants and Children, or WIC program, does not automatically qualify your children for free or reduced price school meals. You will need to qualify based on your household income by completing this application.
          </p>
        </Topic>

        <Topic title="My family needs more help. Are there other programs we might apply for?">
          <p>
            To find out how to apply for {localPrograms.snap.name} or other assistance benefits, contact your local assistance office at {localPrograms.snap.localContact} or call {localPrograms.snap.stateHotline}.
          </p>
        </Topic>

        <Topic title="My child attends head start. Is he/she eligible for free school meals and do I need to fill out an application?">
          <p>
            Yes. Children enrolled in Head Start are automatically eligible for free meals. You do not need to submit an application for school meal benefits unless you are requesting benefits for other school age children in your household.
          </p>
        </Topic>

        <Household />
        <SharedCustody />
        {/* OtherPrograms topics */}
        <Topic>
          <p>
            Even if your household is not eligible for free or reduced price meal benefits based on income, your foster child(ren) are still eligible for benefits. The foster status only applies to children who are formally placed by the State welfare agency or court in a caretaker household.
          </p>
        </Topic>

        <Topic title="What if my household does not qualify for free or reduced price meal benefits based on income, but I have a foster child, or a child who meets the definition for homeless, migrant or runaway?">
          <p>
            Children who are foster, or meet the definition of homeless, migrant, or runaway are still eligible for benefits regardless of household income.
          </p>
          <p>
            Wondering if your child qualifies as homeless, migrant or runaway? See "HOW DO I KNOW IF MY CHILDREN QUALIFY AS HOMELESS, MIGRANT, OR RUNAWAY?"
          </p>
        </Topic>

        <Topic title="How do I know if my children qualify as homeless, migrant, or runaway?">
          <p>
            Your children may qualify as homeless, migrant, or runaway if…
          </p>
          <ul>
            <li>your household lacks a permanent address,</li>
            <li>you are staying together in a shelter, hotel, or other temporary housing arrangement,</li>
            <li>your family relocates on a seasonal basis,</li>
            <li>or any children living with you who have chosen to leave their prior family or household.</li>
          </ul>
          <p>
            If you believe children in your household meet one or more of these descriptions and you haven’t been told your children will get free meals, please call or e-mail { localPrograms.homelessness.contact } to confirm their eligibility.
          </p>
        </Topic>

        <Topic title="I am the permanent guardian of a child. Do they automatically qualify for free meals as a foster child?">
          <p>
            No. The foster status only applies to children who are formally placed by the State welfare agency or court in a caretaker household. It does not apply to informal arrangements, such as caretaker arrangements or to permanent guardianship placements, which may exist outside of State or court based systems. The child may still be eligible based on your household income, so we encourage you to complete an application.
          </p>
        </Topic>

        <Topic title="I adopted a foster child. Are they still eligible for free meals?">
          <p>
            Congratulations on the adoption! And the answer is maybe. If your child was approved for free meals before the adoption went through, then your child is eligible to receive free meals for the rest of the school year. But next year the child will no longer eligible for free meals based on foster status, though they may still qualify based on household income, so we encourage you to submit an application.
          </p>
        </Topic>

        <Household />
        <SharedCustody />
        {/* OtherChildren topics */}
        {/* ChildIncome topics */}
        {/* Adults topics */}
        {/* AdultIncomeOverview topics */}
        {/* MilitaryIncome topics */}
        {/* EmploymentIncome topics */}
        {/* PublicAssistanceIncome topics */}
        {/* SpousalIncome topics */}
        {/* UnemploymentIncome topics */}
        {/* RetirementIncome topics */}
        {/* OtherIncome topics */}
        {/* Signature topics */}
      </Article>
    )
  }
}
