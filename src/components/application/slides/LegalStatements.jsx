import React from 'react'
import Slide from '../Slide'
import { FormattedMessage } from 'react-intl'

const LegalStatements = () => {
  const headerText =
    <FormattedMessage
        id="app.slides.legalStatements.header"
        description="Text for the header of the slide."
        defaultMessage="Legal Statements"
    />

  return (
    <Slide header={headerText} id="legal-statements">
      <p className="usa-font-lead">
        <FormattedMessage
            id="app.slides.legalStatements.almostDone"
            description="Almost done"
            defaultMessage="Almost done! Please read and acknowledge the following legal statements."
        />
      </p>
      <h2>
        <FormattedMessage
            id="app.slides.legalStatements.useOfStatement"
            description="{usda} Use of info statement"
            defaultMessage="Use of Information Statement"
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </h2>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.nationalSchoolLunchAct"
            description="National School Lunch Act"
            defaultMessage="The Richard B. Russell National School Lunch Act requires the information on this application. You do not have to give the information, but if you do not submit all needed information, we cannot approve your child for free or reduced price meals. You must include the last four digits of the social security number of the adult household member who signs the application. The social security number is not required when you apply on behalf of a foster child or you list a Supplemental Nutrition Assistance Program (SNAP), Temporary Assistance for Needy Families (TANF) Program or Food Distribution Program on Indian Reservations (FDPIR) case number or other FDPIR identifier for your child or when you indicate that the adult household member signing the application does not have a social security number. We will use your information to determine if your child is eligible for free or reduced price meals, and for administration and enforcement of the lunch and breakfast programs."
        />
      </p>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.shareInfo"
            description="tool may share info"
            defaultMessage="We may share your eligibility information with education, health, and nutrition programs to help them evaluate, fund, or determine benefits for their programs, auditors for program reviews, and law enforcement officials to help them look into violations of program rules."
        />
      </p>

      <h2>
        <FormattedMessage
            id="app.slides.legalStatements.nondiscrimination"
            description="Non-Discrimination Statement"
            defaultMessage="{usda} Non-Discrimination Statement"
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </h2>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.fedCivilRights"
            description="Civil rights paragraph"
            defaultMessage="In accordance with Federal civil rights law and U.S. Department of Agriculture {usda} civil rights regulations and policies, the {usda}, its Agencies, offices, and employees, and institutions participating in or administering {usda} programs are prohibited from discriminating based on race, color, national origin, religion, sex, gender identity (including gender expression), sexual orientation, disability, age, marital status, family/parental status, income derived from a public assistance program, political beliefs, or reprisal or retaliation for prior civil rights activity, in any program or activity conducted or funded by {usda}  (not all bases apply to all programs). Remedies and complaint filing deadlines vary by program or incident."
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </p>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.disabilities"
            description="Persons with disabilities"
            defaultMessage="Persons with disabilities who require alternative means of communication for program information (e.g., Braille, large print, audiotape, American Sign Language, etc.) should contact the responsible Agency or {usda}'s TARGET Center at (202) 720-2600 (voice and TTY) or contact {usda} through the Federal Relay Service at (800) 877-8339. Additionally, program information may be made available in languages other than English."
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </p>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.fileComplaint"
            description="to file a complaint..."
            defaultMessage="To file a program discrimination complaint, complete the {usda} Program Discrimination Complaint Form, AD-3027, found online at How to File a Program Discrimination Complaint and at any {usda} office or write a letter addressed to {usda} and provide in the letter all of the information requested in the form. To request a copy of the complaint form, call (866) 632-9992. Submit your completed form or letter to {usda} by: (1) mail: U.S. Department of Agriculture, Office of the Assistant Secretary for Civil Rights, 1400 Independence Avenue, SW, Washington, D.C. 20250-9410; (2) fax: (202) 690-7442; or (3) email: program.intake@usda.gov."
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </p>
      <p>
        <FormattedMessage
            id="app.slides.legalStatements.equalOpportunity"
            description="USDA is an equal opportunity..."
            defaultMessage="{usda} is an equal opportunity provider, employer, and lender."
            values={{
              usda: <abbr title="United States Department of Agriculture">USDA</abbr>
            }}
        />
      </p>
    </Slide>
  )
}

export default LegalStatements
