import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import IncomeSourceAmount from './IncomeSourceAmount'
import IncomeSourceFrequency from './IncomeSourceFrequency'
import { Row,
         Col,
         FormGroup,
         FormControl,
         ControlLabel,
         InputGroup,
         Radio } from 'react-bootstrap'

@observer
class IncomeSource extends Component {
  render() {
    const { name } = this.props
    const incomeSource = this.props.incomeSources[name]

    return (
      <div>
        <FormGroup>

          <Row>
            <Col xs={12} sm={8}>
              <ControlLabel>{this.props.children}</ControlLabel>
            </Col>
            <Col xs={12} sm={4}>
              <BooleanRadio name="has" object={incomeSource} inline />
            </Col>
          </Row>

          {incomeSource.has && <Row>
            <Col xs={12} sm={8}>
              <IncomeSourceAmount incomeSource={incomeSource} />
            </Col>
            <Col xs={12} sm={4}>
              <IncomeSourceFrequency incomeSource={incomeSource} />
            </Col>
          </Row>}

        </FormGroup>
      </div>
    )
  }
}

IncomeSource.propTypes = {
  incomeSources: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default IncomeSource
