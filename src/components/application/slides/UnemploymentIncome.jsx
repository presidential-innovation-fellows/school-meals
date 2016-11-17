import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import {FormattedMessage} from 'react-intl'

@observer
class UnemploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.unemployment
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "unemployment",
      label: "Unemployment Income",
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="unemployment">
           <Tooltipcomp text={tooltiptext.unemployment}>
              <FormattedMessage
                  id="app.slides.unemploymentIncome.unemployment"
                  description="Unemployment benefits"
                  defaultMessage="Unemployment benefits"
              />
           </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="workersComp">
          <Tooltipcomp text={tooltiptext.workersComp}>
              <FormattedMessage
                  id="app.slides.unemploymentIncome.workersComp"
                  description="Worker’s compensation"
                  defaultMessage="Worker’s compensation"
              />
           </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="strike">
          <Tooltipcomp text={tooltiptext.strikeBenefits}>
              <FormattedMessage
                  id="app.slides.unemploymentIncome.strikeBenefits"
                  description="Strike benefits"
                  defaultMessage="Strike benefits"
              />
           </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="ssdi">
        <FormattedMessage
              id="app.slides.unemploymentIncome.ssdi"
              description="Social Security Disability Insurance"
              defaultMessage="Social Security Disability Insurance &nbsp;{tooltip}"
              values={{
                tooltip:
                        <Tooltipcomp text={tooltiptext.SSDI}>
                          <FormattedMessage
                            id="app.slides.unemploymentIncome.ssdiToolTip"
                            description="(SSDI)"
                            defaultMessage="(SSDI)"
                          />
                        </Tooltipcomp>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="veteran">
          <Tooltipcomp text={tooltiptext.veteranBenefits}>
              <FormattedMessage
                  id="app.slides.unemploymentIncome.veteranBenefits"
                  description="Veteran’s benefits"
                  defaultMessage="Veteran’s benefits"
              />
           </Tooltipcomp>
        </IncomeSource>
      </IncomeType>
    )
  }
}

UnemploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default UnemploymentIncome
