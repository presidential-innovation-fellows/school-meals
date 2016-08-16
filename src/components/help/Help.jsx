import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { organization } from '../../config'
import classNames from 'classnames'

import Welcome from './articles/Welcome'
import BeforeYouBegin from './articles/BeforeYouBegin'
import Attestation from './articles/Attestation'
import AssistancePrograms from './articles/AssistancePrograms'
import OtherPrograms from './articles/OtherPrograms'
import OtherChildren from './articles/OtherChildren'
import ChildIncome from './articles/ChildIncome'
import Adults from './articles/Adults'
import AdultIncomeOverview from './articles/AdultIncomeOverview'
import MilitaryIncome from './articles/MilitaryIncome'
import EmploymentIncome from './articles/EmploymentIncome'
import PublicAssistanceIncome from './articles/PublicAssistanceIncome'
import SpousalIncome from './articles/SpousalIncome'
import UnemploymentIncome from './articles/UnemploymentIncome'
import RetirementIncome from './articles/RetirementIncome'
import OtherIncome from './articles/OtherIncome'
import Signature from './articles/Signature'

import All from './articles/All'

@observer
class Help extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // home grown event delegation
    switch (e.target.classList[0]) {
      case 'cd-panel':
      case 'cd-panel-close':
        this.hideHelp()
    }
  }

  hideHelp() {
    // wrap in conditional to mitigate strange bug
    if (this) {
      this.props.helpData.isVisible = false
    }
  }

  render() {
    const { article, isVisible } = this.props.helpData
    const classes = classNames(
      'cd-panel',
      'from-right',
      { 'is-visible': isVisible }
    )

    return (
      <asside className={classes} onClick={this.handleClick} id="help">
        <header className="cd-panel-header">
          <h1>Help</h1>
          <a className="cd-panel-close" onClick={this.hideHelp}>Close</a>
        </header>

        <div className="cd-panel-container">
          <div className="cd-panel-content" id="help-content">
            {(() => {
               switch (article) {
                 case 'welcome':                 return <Welcome />
                 case 'before-you-begin':        return <BeforeYouBegin />
                 case 'attestation':             return <Attestation />
                 case 'assistance-programs':     return <AssistancePrograms />
                 case 'other-programs':          return <OtherPrograms />
                 case 'other-children':          return <OtherChildren />
                 case 'child-income':            return <ChildIncome />
                 case 'adults':                  return <Adults />
                 case 'adult-income-overview':   return <AdultIncomeOverview />
                 case 'military-income':         return <MilitaryIncome />
                 case 'employment-income':       return <EmploymentIncome />
                 case 'publicAssistance-income': return <PublicAssistanceIncome />
                 case 'spousal-income':          return <SpousalIncome />
                 case 'unemployment-income':     return <UnemploymentIncome />
                 case 'retirement-income':       return <RetirementIncome />
                 case 'other-income':            return <OtherIncome />
                 case 'ssn':                     return <Signature />
                 case 'summary':                 return <All />
                 default:                        return <All />;
               }
             })()}
            <footer>
              <p>
                If you have any questions about the program or how to apply, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).
              </p>
            </footer>
          </div>
        </div>
      </asside>
    )
  }
}

Help.propTypes = {
  helpData: PropTypes.shape({
    isVisible: PropTypes.bool.isRequired,
    article: PropTypes.string.isRequired
  }).isRequired
};

export default Help
