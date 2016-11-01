import React from 'react'
import Slide from '../Slide'
import SchoolYear from '../SchoolYear'
import { assistancePrograms, organization, assistanceProgramsVar } from '../../../config'
import { toSentenceSerial } from 'underscore.string'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

@observer
class BeforeYouBegin extends React.Component {
  constructor (props) {
    super(props)
    this.handleCheckItOut = this.handleCheckItOut.bind(this)
  }

  @observable showExtraContent = false

  handleCheckItOut() {
    this.showExtraContent = true
  }

  render() {
    const assistanceProgramList =
      toSentenceSerial(assistancePrograms, ', ', ' or ')

    const threethings = tooltiptext.threethingsfirst + ' ' + organization.name + ' ' + tooltiptext.threethingssecond

    return (
      <Slide header="Before you begin..." id="before-you-begin">
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.beforeYouBegin.subheading"
              description="Introductory tagline."
              defaultMessage="there are a few things you should know."
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.householdPrograms"
              description="Hist that you can skip most of application with a household program."
              defaultMessage="If you received a &nbsp;{tooltip}&nbsp; from the school saying that your children were automatically approved (directly certified) for free meals for the {schoolYear} school year because someone in your household participates in {assistanceProgramList} then you do not need to submit an application."
              values={{
                tooltip: <Tooltipcomp id="letter" text={tooltiptext.letter} target="letter" />,
                schoolYear: <SchoolYear />,
                assistanceProgramList: assistanceProgramList
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.oneApplication"
              description="Only need one application for your household"
              defaultMessage="We need only one application for all the children in your household that attend {organizationName}."
              values={{
                organizationName: organization.name,
              }}
          />
        </p>

        <p>
          <strong>
            <Tooltipcomp id="eligibility" text={tooltiptext.eligibility} target="Eligibility" />&nbsp;
            <FormattedMessage
                id="app.slides.beforeYouBegin.mealEligibilityDescription"
                description="Only need one application for your household"
                defaultMessage="for free or reduced price school meal benefits is based on any one of these"
            />&nbsp;
            <Tooltipcomp id="threethings" text={threethings} target="three things:" />
          </strong>
        </p>

        <ul className="usa-content-list">
          <li>
            <FormattedMessage
                id="app.slides.beforeYouBegin.eligibility1"
                description="Eligibility List item"
                defaultMessage="your total household income and size in the month the application is filled out, or the month before, or"
            />
          </li>

          <li>
            <FormattedMessage
                id="app.slides.beforeYouBegin.eligibility2"
                description="Eligibility List item"
                defaultMessage="your child’s individual status as foster, homeless, migrant or runaway, or"
            />
          </li>

          <li>
            <FormattedMessage
                id="app.slides.beforeYouBegin.eligibility3"
                description="Eligibility List item"
                defaultMessage="participation in an assistance program by any member of your household"
            />
          </li>
        </ul>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.status"
              description="citizenship or immigration doesn't affect status"
              defaultMessage="Your &nbsp;{tooltip}&nbsp; does not affect your eligibility for free and reduced price benefits."
              values={{
                tooltip: <Tooltipcomp id="status" text={tooltiptext.status} target="US citizenship or immigration status" />
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.questions"
              description="Click the question mark icons"
              defaultMessage="If you have questions at any point during the application, click the question mark icon to get help with the current section."
          />
        </p>

        <FormattedMessage
            id="app.slides.beforeYouBegin.thingsNeeded"
            description="Things you'll need."
            defaultMessage="{things}"
            values={{
              things: <h2>Things you'll need</h2>
            }}
        />

        <p>
          <FormattedMessage
              id="app.slides.beforeYouBegin.thingsNeededMore"
              description="List of things needed"
              defaultMessage="Lastly, we compiled a list of the information you might need to complete the application. {checkitOut}"
              values={{
                checkitOut: <a onClick={this.handleCheckItOut}>Check it out!</a>
              }}
          />
        </p>

        {!!this.showExtraContent &&
         <div>



           <p>
             <FormattedMessage
                 id="app.slides.beforeYouBegin.informationHandy"
                 description="Handy Information Lead"
                 defaultMessage="If you have this information handy, it will make the application process fast and easy."
             />
           </p>

           <FormattedMessage
               id="app.slides.beforeYouBegin.listOfThings"
               description="Things you'll need."
               defaultMessage="{list}"
               values={{
                 list:
                      <ul className="usa-content-list">
                        <li>If you participate in &nbsp;
                          <Tooltipcomp id="snap" text={tooltiptext.snap} target={assistanceProgramsVar.snap.accronym} />, &nbsp;
                          <Tooltipcomp id="tanf" text={tooltiptext.tanf} target={assistanceProgramsVar.tanf.accronym} />, or &nbsp;
                          <Tooltipcomp id="fdpir" text={tooltiptext.fdpir} target={assistanceProgramsVar.fdpir.accronym} /> &nbsp; you will need to know your case number (not your card or account number).
                        </li>
                        <li>
                          If you do not participate in any of the above assistance programs, you will need to report your total household income. In that case…
                          <ul>
                            <li>if anyone in your house has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different from the amount you actually receive in your paycheck.</li>
                            <li>if anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments.</li>
                            <li>you may also need to reference other financial documents for additional sources of income.</li>
                          </ul>
                        </li>
                      </ul>
               }}
           />

           <p>
             <FormattedMessage
                 id="app.slides.beforeYouBegin.notSure"
                 description="reassuring message for worried people"
                 defaultMessage="Still not sure if you have everything you need? Don’t worry! The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then."
             />
           </p>
         </div>
        }
      </Slide>
    )
  }
}

export default BeforeYouBegin
