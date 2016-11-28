import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import Steps, { Step } from 'rc-steps'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'
import { ProgressBar } from 'react-bootstrap'

@observer
class Progress extends Component {
  constructor(props) {
    super(props)
    this.oldPercent = 0
    this.handleClick = this.handleClick.bind(this)
    this.disableNavigation = this.disableNavigation.bind(this)
    this.enableNavigation = this.enableNavigation.bind(this)
  }

  get isNavigationEnabled() {
    return !this.props.navigationData.isOnFinalSlide
  }

  get clickElement() {
    return document.getElementById('progress-desktop')
  }

  handleClick(e) {
    // Roll our own event delegation to capture step clicks.
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      // Loop parent nodes from the target to the delegation node.
      if (target.hasAttribute('data-hash')) {
        for (let i = 0; i < target.classList.length; i++) {
          if (target.classList[i] === 'rc-steps-status-finish' ||
              target.classList[i] === 'rc-steps-status-process') {
            window.location.replace(`#/${target.getAttribute('data-hash')}`)
            break
          }
        }
        break
      }
    }
  }

  disableNavigation() {
    this.clickElement.removeEventListener('click', this.handleClick)
  }

  enableNavigation() {
    this.clickElement.addEventListener('click', this.handleClick)
  }

  componentDidUpdate() {
    if (this.isNavigationEnabled) {
      this.enableNavigation()
    } else {
      this.disableNavigation()
    }
  }

  get steps() {
    const result = []

    result.push({
      'data-hash': 'welcome',
      'title': <FormattedMessage
          id="progress.begin"
          description="Text for the Begin progress bar step."
          defaultMessage="Begin"
               />
    })

    result.push({
      'data-hash': 'students',
      'title': <FormattedMessage
          id="progress.students"
          description="Text for the Students progress bar step."
          defaultMessage="Students"
               />
    })

    result.push({
      'data-hash': 'assistance-programs',
      'title': <FormattedMessage
          id="progress.assistancePrograms"
          description="Text for the Programs progress bar step."
          defaultMessage="Programs"
               />
    })

    if (this.props.applicationData.showHousehold) {
      result.push({
        'data-hash': 'other-children',
        'title': <FormattedMessage
            id="progress.otherKids"
            description="Text for the Other Kids progress bar step."
            defaultMessage="Other Kids"
                 />
      })

      result.push({
        'data-hash': 'adults',
        'title': <FormattedMessage
            id="progress.adults"
            description="Text for the Adults progress bar step."
            defaultMessage="Adults"
                 />
      })
    }

    result.push({
      'data-hash': 'summary',
      'title': <FormattedMessage
          id="progress.summary"
          description="Text for the Summary progress bar step."
          defaultMessage="Summary"
               />
    })

    return result
  }

  // Never returns a value less than a value that's been previously returned.
  get percent() {
    const { currentSlideIndex, slides } = this.props.navigationData
    const newPercent = Math.round(100 * currentSlideIndex / (slides.length - 1))
    this.oldPercent = Math.max(this.oldPercent, newPercent)
    return this.oldPercent
  }

  render() {
    const { stepsCompleted } = this.props.navigationData
    const localeCode = this.props.localeData.code
    const desktopClassNames = {
      'progress-desktop': true,
      'navigation-enabled': this.isNavigationEnabled
    }

    return (
      <div className="progress-container">
        <div className="usa-grid">
          <div className="progress-mobile">
            <ProgressBar
                now={this.percent}
                label={!!this.percent && `${this.percent}%`}
            />
          </div>
          <div className={classnames(desktopClassNames)} id="progress-desktop">
            <Steps current={stepsCompleted}>
              {this.steps.map(step =>
                <Step {...step} key={localeCode + step['data-hash']} />
               )}
            </Steps>
          </div>
        </div>
      </div>
    )
  }
}

Progress.propTypes = {
  navigationData: PropTypes.shape({
    stepsCompleted: PropTypes.number
  }).isRequired,
  localeData: PropTypes.shape({
    code: PropTypes.string
  }).isRequired,
  applicationData: PropTypes.shape({
    showHousehold: PropTypes.bool.isRequired
  }).isRequired
};

export default Progress
