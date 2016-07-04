import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { assistancePrograms as programNames } from '../../../config'
import { toSentenceSerial } from 'underscore.string'
import { FormGroup,
         FormControl,
         ControlLabel,
         InputGroup,
         Well
       } from 'react-bootstrap'

@observer
class AssistancePrograms extends Component {
  render() {
    const { students } = this.props

    const assistanceProgramList =
          toSentenceSerial(programNames, ', ', ' or ')

    return (
      <Slide header="Assistance Programs">
        <p>If anyone in your household participates in {assistanceProgramList}, then <strong>{students.informalList}</strong> {students.length === 1 ? 'is' : 'are'} eligible for free school meals.</p>
          <Well>
            A household is defined as a group of people, related or unrelated, that usually live together and share income and expenses.
            <br />
            <br />
            This includes grandparents or other extended family members that are living with you. It also includes people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college. It includes people regardless of age or whether they earn or receive income.
            <br />
            <br />
            If you need more detailed information, see the ‘WHO SHOULD I INCLUDE IN MY HOUSEHOLD?’ question in the FAQs.
          </Well>

          <p>Does anyone in your household (including you) currently participate in {assistanceProgramList}?</p>

{/*
          {programNames.map((programName, i) =>
            <FormGroup key={i} controlId={'assistancePrograms-' + i}>
              <ControlLabel>{programName}</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>
                  <input type="checkbox" aria-label={programName} />
                </InputGroup.Addon>
                <PureInput
                  type="text"
                  placeholder={programName + ' case number'}
                />
              </InputGroup>
              <FormControl.Feedback />
            </FormGroup>
          )}
*/}
      </Slide>
    )
  }
}

AssistancePrograms.propTypes = {

  /*
  assistancePrograms: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired
  */
}

export default AssistancePrograms
