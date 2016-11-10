import React, { Component, PropTypes, responsive, bordered } from 'react'
import Slide from '../Slide'
import SummaryLabel from './SummaryLabel'
import SummaryPersonCollection from './SummaryPersonCollection'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { numberFormat } from 'underscore.string'
import { assistanceProgramsVarArray, organization } from '../../../config'
import { fullName, toSentenceSerialArray } from '../../../helpers'

@observer
class Summary extends Component {
  get isValid() {
    return this.props.applicationData.certifiedCorrect
  }

  render() {
    const { applicationData } = this.props
    const { adults,
            contact,
            otherChildren,
            students } = applicationData
    const assistancePrograms = applicationData.assistancePrograms.applicable

    return (
      <Slide header="Summary"
             nextText="Submit"
             nextDisabled={!this.isValid}
             id="summary">
        <p className="usa-font-lead">Awesome, you finished!</p>
        <p>Here is a summary of the information you provided in the application. We encourage you to save or print this screen for your records. If everything looks good, click the "Submit" button at the bottom of the page.</p>

        <SummaryPersonCollection collection={students} id="students">
          Students attending {organization.name}
        </SummaryPersonCollection>

        <SummaryPersonCollection collection={otherChildren} id="other-children">
          Other children
        </SummaryPersonCollection>

        <SummaryPersonCollection collection={adults} id="adults">
          Adults
        </SummaryPersonCollection>

        <div>
          <SummaryLabel id="assistance-programs">
            Assistance program case numbers
          </SummaryLabel>

          <ul>
            {
              assistancePrograms.length ?
              assistancePrograms.map(program =>
                <li key={program.id}>
                  {program.name} — <strong>{program.caseNumber}</strong>
                </li>
              )
              :
              <li>(none)</li>
            }
          </ul>
        </div>

        {applicationData.showHousehold &&
         <div>
           <SummaryLabel>Total household income</SummaryLabel>
           ${
             numberFormat(
               parseFloat(applicationData.totalMonthlyHouseholdIncome, 10),
               2
             )
            }
           {' '}
           per month
         </div>
        }

        <SummaryLabel id="contact">Contact information</SummaryLabel>
        { fullName(applicationData.attestor) }
        {!!contact.address1 &&
         <span>
           <br />
           { contact.address1 }
         </span>
        }
        {!!contact.address2 &&
         <span>
           <br />
           { contact.address2 }
         </span>
        }
        {!!contact.city &&
         <span>
           <br />
           { contact.city },{' '}
         </span>
        }
        { contact.state }
        {' '}
        { contact.zip }
        {!!contact.phone &&
         <span>
           <br />
           { contact.phone }
         </span>
        }
        {!!contact.email &&
         <span>
           <br />
           { contact.email }
         </span>
        }

        <Checkboxes legend="Certification">
          <Checkbox name="certifiedCorrect" object={applicationData}>
            { applicationData.showHousehold ?
              <strong>
                I certify* that
                {' '}
                <span className="usa-label-big">
                  {applicationData.totalHouseholdMembers} people
                </span>
                are in my household and that our household income is about
                {' '}
                <span className="usa-label-big">
                  ${numberFormat(applicationData.totalMonthlyHouseholdIncome)}
                  {' '}
                  per month
                </span>
              </strong>
              : (assistancePrograms.length ?
                 <strong>
                   I certify* that my household participates in
                   {' '}
                   {toSentenceSerialArray(assistancePrograms.map(program => {
                      return (
                        <span className="usa-label-big" key={program.id}>
                          {program.accronym}
                        </span>
                      )
                    }))}
                 </strong>
                 :
                 <strong>
                   I certify* that the information on this page is correct to
                   the best of my knowledge.
                 </strong>
              )
            }
          </Checkbox>
        </Checkboxes>
        <p><small><em>*I understand that this information is given in connection with the receipt of Federal funds, and that school officials may verify (check) the information. I am aware that if I purposely give false information, my children may lose meal benefits. Deliberate misrepresentation of information may subject applicants to prosecution under applicable State and Federal law.</em></small></p>
      </Slide>
    )
  }
}

Summary.propTypes = {
  applicationData: PropTypes.object.isRequired
}

export default Summary
