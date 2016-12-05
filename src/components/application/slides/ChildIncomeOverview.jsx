import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class ChildIncomeOverview extends Component {
  get isValid() {
    return this.props.allChildren
      .map(child => child.incomeTypes.child.isApplicable !== null)
      .reduce((a, b) => a && b, true)
  }

  render() {
    const { allChildren } = this.props

    const pluralizedChildrenIncome = (allChildren.length === 1 ?
      <FormattedMessage
          id="app.slides.childIncomeOverview.singleChildIncome"
          description="Possessive phrase for a single child's income."
          defaultMessage="child's income"
      /> :
          <FormattedMessage
              id="app.slides.childIncomeOverview.multipleChildIncome"
              description="Possessive phrase for multiple children's income."
              defaultMessage="children's income"
          />
    )

    return (
      <Slide nextDisabled={!this.isValid} id="child-income">

        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.childIncomeOverview.intro"
              description="Introductory paragraph."
              defaultMessage="The next few questions are about your {tooltip}."
              values={{
                tooltip: <Tooltip text={tooltiptext.childincome}>
                  {pluralizedChildrenIncome}
                </Tooltip>
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.childIncomeOverview.sources"
              description="income Source List beginning"
              defaultMessage="Some common sources of income for children are:"
          />
        </p>
        <ul className="usa-content-list">
          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.fullOrPartJob"
                description="Full-/part-time job"
                defaultMessage="a full-time or part-time job,"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.socialSecurity"
                description="Social Security"
                defaultMessage="{socialSecurity} benefits, if the child is disabled, or is the {beneficiary} of another person’s Social Security benefits,"
                values={{
                  socialSecurity: <Tooltip text={tooltiptext.ssiChildren}>
                    <FormattedMessage
                        id="app.slides.childIncomeOverview.social"
                        description="social"
                        defaultMessage="Social Security"
                    />
                  </Tooltip>,
                  beneficiary: <Tooltip text={tooltiptext.ssSurvivor}>
                    <FormattedMessage
                        id="app.slides.childIncomeOverview.benefit"
                        description="benefit"
                        defaultMessage="beneficiary"
                    />
                  </Tooltip>
                }}
            />
          </li>

          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.money"
                description="money regularly received"
                defaultMessage="money regularly received from extended family or friends outside the household, or"
            />
          </li>
          <li>
            <FormattedMessage
                id="app.slides.childIncomeOverview.moneyFrom"
                description="money From pension, annuity, or trust"
                defaultMessage="money from a {pension}, {annuity}, or {trust}"
                values={{
                  pension: <Tooltip text={tooltiptext.pensionChildren}>
                    <FormattedMessage
                        id="app.slides.childIncomeOverview.pension"
                        description="pension"
                        defaultMessage="pension"
                    />
                  </Tooltip>,
                  annuity: <Tooltip text={tooltiptext.annuityChildren}>
                    <FormattedMessage
                        id="app.slides.childIncomeOverview.annuity"
                        description="annuity"
                        defaultMessage="annuity"
                    />
                  </Tooltip>,
                  trust: <Tooltip text={tooltiptext.trust}>
                    <FormattedMessage
                        id="app.slides.childIncomeOverview.trust"
                        description="trust"
                        defaultMessage="trust"
                    />
                  </Tooltip>
                }}
            />
          </li>
        </ul>

        <p>
          <FormattedMessage
              id="app.slides.childIncomeOverview.exclusions"
              description="Message about which types of child income to exclude from reporting."
              defaultMessage="Do not include infrequent earnings, such as income from occasional baby-sitting or mowing lawns."
          />
        </p>

        {allChildren.map(child =>
          <IncomeTypeFormGroup
              person={child}
              key={child.id}
              incomeTypeName="child"
          >
            <FormattedMessage
                id="app.slides.childIncomeOverview.label"
                description="Question asking if child has income sources."
                defaultMessage="Does {child} have income from any of these, or any other, sources?"
                values={{
                  child: <strong>{informalName(child)}</strong>
                }}
            />
          </IncomeTypeFormGroup>
        )}
      </Slide>
    )
  }
}

ChildIncomeOverview.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncomeOverview
