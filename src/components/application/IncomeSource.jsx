import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import Form from './Form'
import IncomeSourceSingle from './IncomeSourceSingle'
import AdditionalIncome from './IncomeSourceAdditional'

@observer
class IncomeSource extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(fieldName, value, incomeSource) {
    incomeSource[fieldName] = value

    if (!value) {
      incomeSource.amount = ''
      incomeSource.frequency = ''
      incomeSource.hourlyHours = ''
      incomeSource.hourlyPeriod = ''
      incomeSource.more = []
    }
  }

  render() {
    const { name, showHourly, showAnnual } = this.props
    const incomeSource = this.props.incomeSources[name]

    return (
      <div>
        <Form>
          <label>{this.props.children}</label>
          <BooleanRadio name="has"
                        object={incomeSource}
                        onChange={this.onChange}
          />

          {incomeSource.has &&
           <div className="income-source-details">

              <IncomeSourceSingle incomeSource={incomeSource} showHourly={showHourly} showAnnual={showAnnual}/>

              <AdditionalIncome incomeSource={incomeSource} showHourly={showHourly} showAnnual={showAnnual}/>

           </div>
          }
        </Form>
      </div>
    )
  }
}

IncomeSource.propTypes = {
  incomeSources: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  showHourly: PropTypes.bool,
  showAnnual: PropTypes.bool
}

IncomeSource.defaultProps = {
  showHourly: false,
  showAnnual: false
}

export default IncomeSource
