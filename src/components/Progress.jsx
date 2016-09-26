import React, { Component, PropTypes } from 'react'
import Steps, { Step } from 'rc-steps'
import { observer } from 'mobx-react'
import { ProgressBar } from 'react-bootstrap'
import { allStudentsAreFHMR } from '../helpers'

@observer
class Progress extends Component {
  constructor (props) {
    super(props)
    this.oldPercent = 0
  }

  componentDidMount() {
    // roll our own event delegation to capture step clicks
    document.addEventListener('click', function(e) {
      for (let target=e.target; target && target!=this; target=target.parentNode) {
        // loop parent nodes from the target to the delegation node
        if (target.hasAttribute('data-hash')) {
          for (let i = 0; i < target.classList.length; i++) {
            if (target.classList[i] === 'rc-steps-status-finish' ||
                target.classList[i] === 'rc-steps-status-process') {
              window.location.hash = '#/' + target.getAttribute('data-hash')
              break
            }
          }
          break
        }
      }
    }, false)
  }

  get showHousehold() {
    return !this.props.applicationData.assistancePrograms.hasAny &&
           (!allStudentsAreFHMR(this.props.applicationData.students) ||
            this.props.applicationData.electToProvideIncome !== false)
  }

  get steps() {
    let result = []

    result.push({ title: 'Begin', 'data-hash': 'welcome' })
    result.push({ title: 'Students', 'data-hash': 'students' })
    result.push({ title: 'Programs', 'data-hash': 'assistance-programs' })

    if (this.showHousehold) {
      result.push({ title: 'Other Kids', 'data-hash': 'other-children' })
      result.push({ title: 'Adults', 'data-hash': 'adults' })
    }

    result.push({ title: 'Finish', 'data-hash': 'summary' })

    return result
  }

  // never returns a value less than a value that's been previously returned
  get percent() {
    const { currentSlideIndex, slides } = this.props.navigationData
    const newPercent = Math.round(100 * currentSlideIndex / (slides.length - 1))
    this.oldPercent = Math.max(this.oldPercent, newPercent)
    return this.oldPercent
  }

  render() {
    const { stepsCompleted } = this.props.navigationData

    return (
      <div className="progress-container">
        <div className="usa-grid">
          <div className="progress-mobile">
            <ProgressBar now={this.percent}
                         label={!!this.percent && `${this.percent}%`} />
          </div>
          <div className="progress-desktop">
            <Steps current={stepsCompleted}>
              {this.steps.map(step =>
                <Step {...step} key={step['data-hash']} />
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
  applicationData: PropTypes.shape({
    assistancePrograms: PropTypes.object.isRequired,
    students: PropTypes.object.isRequired
  }).isRequired
};

export default Progress
