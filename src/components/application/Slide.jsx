import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Button from './Button'
import FormattedMessage from './FormattedMessage'

@observer
class Slide extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleBack = this.handleBack.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleJump = this.handleJump.bind(this)
  }

  handleBack() {
    this.context.navigationData.back()
  }

  handleNext() {
    this.context.navigationData.next()
  }

  handleJump() {
    this.context.navigationData.jump()
  }

  render() {
    const { navigationData } = this.context
    const props = {
      className: "slide",
      id: this.props.id,
      'data-begins-section': this.props.beginsSection,
      'data-help-article': this.props.helpArticle || this.props.id,
    }

    if (this.props.nextDisabled) {
      props['data-incomplete'] = true
    }

    return (
      <section {...props}>

        <div className="usa-content slide-content">
          {this.props.header && <h1>{this.props.header}</h1>}

          {this.props.children}

          <footer>
            {
              this.props.showBack &&
              <Button onClick={this.handleBack}
                      disabled={this.props.backDisabled}
                      className="usa-button-outline">
                {this.props.backText}
              </Button>
            }
            {this.props.showBack && this.props.showNext && ' '}
            {
              this.props.showNext &&
              <Button onClick={this.handleNext}
                      disabled={this.props.nextDisabled}>
                {this.props.nextText}
             </Button>
            }
            {
              navigationData.canJump &&
              <Button onClick={this.handleJump}
                      className="usa-button-primary-alt jump-button">
                Resume →
             </Button>
            }
          </footer>
        </div>
      </section>
    )
  }
}

Slide.contextTypes = {
  helpData: PropTypes.shape({
    article: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
  }).isRequired,
  navigationData: PropTypes.shape({
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    jump: PropTypes.func.isRequired,
    canJump: PropTypes.bool.isRequired
  }).isRequired
}

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  helpArticle: PropTypes.string,
  showBack: PropTypes.bool,
  showNext: PropTypes.bool,
  backDisabled: PropTypes.bool,
  nextDisabled: PropTypes.bool,
  backText: PropTypes.node,
  nextText: PropTypes.node,
  beginsSection: PropTypes.bool
}

Slide.defaultProps = {
  showBack: true,
  showNext: true,
  backDisabled: false,
  nextDisabled: false,
  backText:
    <FormattedMessage
        id="app.slide.backButton"
        description="Default text for button to move back a slide."
        defaultMessage="Back"
    />,
  nextText:
    <FormattedMessage
        id="app.slide.nextButton"
        description="Default text for button to move forward a slide."
        defaultMessage="Continue"
    />
}

export default Slide
