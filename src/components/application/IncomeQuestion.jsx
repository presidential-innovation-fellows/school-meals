import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import IncomeQuestionAmount from './IncomeQuestionAmount'
import IncomeQuestionFrequency from './IncomeQuestionFrequency'
import { Row,
         Col,
         FormGroup,
         FormControl,
         ControlLabel,
         InputGroup,
         Radio } from 'react-bootstrap'

@observer
class IncomeQuestion extends Component {
  render() {
    const { name } = this.props
    const income = this.props.incomeObject[name]

    return (
      <div>
        <FormGroup>

          <Row>
            <Col xs={12} sm={8}>
              <ControlLabel>{this.props.children}</ControlLabel>
            </Col>
            <Col xs={12} sm={4}>
              <BooleanRadio name="has" object={income} inline />
            </Col>
          </Row>

          {income.has && <Row>
            <Col xs={12} sm={8}>
              <IncomeQuestionAmount income={income} fieldName="amount" />
            </Col>
            <Col xs={12} sm={4}>
              <IncomeQuestionFrequency income={income} fieldName="frequency" />
            </Col>
          </Row>}

        </FormGroup>
      </div>
    )
  }
}

IncomeQuestion.propTypes = {
  incomeObject: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default IncomeQuestion
