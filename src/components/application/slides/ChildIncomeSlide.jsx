import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Alert from '../Alert'
import Button from '../Button'
import IncomeSource from '../IncomeSource'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { incomeTypeIsValid, informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class ChildIncomeSlide extends Component {
  @computed get allSourcesFalse() {
    const sources = this.props.person.incomeTypes.child.sources

    for (const key in sources) {
      if (sources[key].has !== false) {
        return false
      }
    }

    return true
  }

  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.child
    const incomeSources = incomeType.sources
    const name = informalName(person)
    const missingIncomeTitle =
      <FormattedMessage
          id="app.slides.childIncomeSlide.missingIncomeTitle"
          description="Missing Income alert title"
          defaultMessage="Missing Income"
      />

    return (
      <Slide
          header={name}
          id={`income/${person.id}/child`}
          helpArticle="child-income"
          nextDisabled={!incomeTypeIsValid(incomeType)}
      >

        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.childIncomeSlide.intro"
              description="Introductory paragraph."
              defaultMessage="Does {child} have income from any of the following sources?"
              values={{
                child: <strong>{name}</strong>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.childIncomeSlide.incomeReported"
              description="Income reported should be child's."
              defaultMessage="Income reported here should be the child’s {tooltip}, {gross}  income."
              values={{
                tooltip: <Tooltip text={tooltiptext.currentChild} >
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.current"
                      description="current"
                      defaultMessage="current"
                  />
                </Tooltip>,
                gross: <em>
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.gross"
                      description="gross"
                      defaultMessage="gross"
                  />
                </em>
              }}
          />
        </p>

        <p className="well">
          <FormattedMessage
              id="app.slides.childIncomeSlide.childGross"
              description="Gross Income definition."
              defaultMessage="{grossIncome}  means all money earned or received before deductions, such as income taxes, social security taxes, and insurance premiums. You should not report net income, which is the amount of money received in a pay check. Net income is total (or gross) income, minus taxes and deductions, and is commonly referred to as “take home pay”."
              values={{
                grossIncome: <dfn>
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.grossIncome"
                      description="Gross income"
                      defaultMessage="Gross income"
                  />
                </dfn>
              }}
          />
        </p>

        <IncomeSource
            incomeSources={incomeSources} name="job"
            showHourly={true} showAnnual={false}
        >
          <FormattedMessage
              id="app.slides.childIncomeSlide.moneyEarned"
              description="Money earned from a full or part-time job"
              defaultMessage="Money earned from a full or part-time job"
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
          <FormattedMessage
              id="app.slides.childIncomeSlide.supplementalIncome"
              description="Supplemental income"
              defaultMessage="Supplemental Security Insurance {tooltip} or Social Security {tooltip2}"
              values={{
                tooltip: <Tooltip text={tooltiptext.ssiChildren} >
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.ssiChildren"
                      description="SSI"
                      defaultMessage="(SSI)"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.ssSurvivor} >
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.ssSurvivor"
                      description="survivor benefits"
                      defaultMessage="survivor benefits"
                  />
                </Tooltip>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="friendsFamily">
          <FormattedMessage
              id="app.slides.childIncomeSlide.regularCash"
              description="Regular Cash Payments"
              defaultMessage="{tooltip} from extended family or friends outside the household"
              values={{
                tooltip: <Tooltip text={tooltiptext.regularCashPayments} >
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.regularCashPayments"
                      description="Money regularly received"
                      defaultMessage="Money regularly received"
                  />
                </Tooltip>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="pensionAnnuityTrust">
          <FormattedMessage
              id="app.slides.childIncomeSlide.pensionAnnuityTrust"
              description="Pensions annuities & trusts"
              defaultMessage="{tooltip}, {tooltip2}, or {tooltip3}"
              values={{
                tooltip: <Tooltip text={tooltiptext.pensionChildren} >
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.pensionChildren"
                      description="Pension"
                      defaultMessage="Pension"
                  />
                </Tooltip>,
                tooltip2: <Tooltip text={tooltiptext.annuityChildren} >
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.annuityChildren"
                      description="annuity"
                      defaultMessage="annuity"
                  />
                </Tooltip>,
                tooltip3: <Tooltip text={tooltiptext.trust} >
                  <FormattedMessage
                      id="app.slides.childIncomeSlide.trust"
                      description="trust"
                      defaultMessage="trust"
                  />
                </Tooltip>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="other">
          <FormattedMessage
              id="app.slides.childIncomeSlide.otherIncome"
              description="other income"
              defaultMessage="Any other source of income"
          />
        </IncomeSource>

        { this.allSourcesFalse &&
          <Alert heading={missingIncomeTitle}>
            <FormattedMessage
                id="app.slides.childIncomeSlide.missingIncome"
                description="Missing Income Alert"
                defaultMessage="On a previous page, you indicated that {child} receives income. Please enter this income above or correct your previous answer."
                values={{
                  child: <strong>{name}</strong>
                }}
            />
            <br />
            <Button
                className="usa-button-gray"
                slideId="child-income"
            >
              <FormattedMessage
                  id="app.slides.childIncomeSlide.changeAnswer"
                  description="Change Answer"
                  defaultMessage="Change previous answer"
              />
            </Button>
          </Alert>
        }
      </Slide>
    )
  }
}

ChildIncomeSlide.propTypes = {
  person: PropTypes.object.isRequired
}

export default ChildIncomeSlide
