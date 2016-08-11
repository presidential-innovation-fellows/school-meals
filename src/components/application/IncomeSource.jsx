import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { humanize } from 'underscore.string'
import BooleanRadio from './BooleanRadio'
import Form from './Form'
import IncomeSourceAmount from './IncomeSourceAmount'
import IncomeSourceFrequency from './IncomeSourceFrequency'
import IncomeSourceHourlyPeriod from './IncomeSourceHourlyPeriod'

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
           <div>
             <IncomeSourceAmount incomeSource={incomeSource} />
             <IncomeSourceFrequency incomeSource={incomeSource} />
             {incomeSource.frequency === 'hourly' &&
              <div>
                <IncomeSourceAmount incomeSource={incomeSource}
                                    fieldName="hourlyHours"
                                    placeholder="Hours" />
                <IncomeSourceHourlyPeriod incomeSource={incomeSource} />
              </div>
             }
             {incomeSource.frequency && !!incomeSource.amount &&
              (incomeSource.frequency !== 'hourly' ||
               !!incomeSource.hourlyHours && !!incomeSource.hourlyPeriod) &&
              <span className="usa-label income-source-total">
                ${incomeSource.amount *
                  (incomeSource.frequency === 'hourly' ?
                   incomeSource.hourlyHours : 1)}
                {' '} {incomeSource.frequency === 'hourly' ?
                       `per ${incomeSource.hourlyPeriod}` :
                       humanize(incomeSource.frequency)}
              </span>
             }
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
