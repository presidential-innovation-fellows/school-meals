import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import IncomeSourceAmount from './IncomeSourceAmount'
import IncomeSourceFrequency from './IncomeSourceFrequency'
import IncomeSourceHourlyPeriod from './IncomeSourceHourlyPeriod'
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
              <BooleanRadio name="has" object={incomeSource} />
            </Col>
          </Row>

          {incomeSource.has &&
           <div>
             <Row>
               <Col xs={5} sm={8}>
                 <IncomeSourceAmount incomeSource={incomeSource} />
               </Col>
               <Col xs={7} sm={4}>
                 <IncomeSourceFrequency incomeSource={incomeSource} />
               </Col>
             </Row>
             {incomeSource.frequency === 'hourly' &&
              <Row>
                <Col xs={5} sm={8}>
                  <IncomeSourceAmount incomeSource={incomeSource}
                                      fieldName="hourlyHours"
                                      placeholder="Hours"
                                      addon="" />
                </Col>
                <Col xs={7} sm={4}>
                  <IncomeSourceHourlyPeriod incomeSource={incomeSource} />
                </Col>
              </Row>
             }
           </div>
          }

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
