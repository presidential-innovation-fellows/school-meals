import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import Form from './Form'
import IncomeSourceAmount from './IncomeSourceAmount'
import IncomeSourceFrequency from './IncomeSourceFrequency'
import IncomeSourceHourlyPeriod from './IncomeSourceHourlyPeriod'
import IncomeSourceSummary from './IncomeSourceSummary'

@observer
class IncomeSource extends Component {
  render() {
    const { name } = this.props
    const incomeSource = this.props.incomeSources[name]

    return (
      <div>
        <Form>
          <label>{this.props.children}</label>
          <BooleanRadio name="has" object={incomeSource} />

          {incomeSource.has &&
           <div className="income-source-details">
             <div>
               <IncomeSourceAmount incomeSource={incomeSource} />
               <IncomeSourceFrequency incomeSource={incomeSource} />
             </div>
             {incomeSource.frequency === 'hourly' &&
              <div>
                <IncomeSourceAmount incomeSource={incomeSource}
                                    fieldName="hourlyHours"
                                    placeholder="Hours"
                                    prepend="" />
                <IncomeSourceHourlyPeriod incomeSource={incomeSource} />
              </div>
             }
             <IncomeSourceSummary incomeSource={incomeSource} />
           </div>
          }
        </Form>
      </div>
    )
  }
}

IncomeSource.propTypes = {
  incomeSources: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default IncomeSource
