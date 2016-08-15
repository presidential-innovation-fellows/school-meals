import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon } from 'react-bootstrap'
import Button from './Button'

@observer
class Slide extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleBack = this.handleBack.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleHelp = this.handleHelp.bind(this)
  }

  handleBack() {
    this.context.navigationData.back()
  }

  handleNext() {
    this.context.navigationData.next()
  }

  handleHelp() {
    this.context.helpData.showArticle(this.props.helpArticle || this.props.id)
  }

  render() {
    return (
      <section className="slide" id={this.props.id}
               data-begins-section={this.props.beginsSection}>

        <div className="usa-content slide-content">
          <h1>
            {this.props.header}
            {this.props.showHelp &&
             <a onClick={this.handleHelp} title="Help" className="help-button">
               <Glyphicon glyph="question-sign" />
             </a>
            }
          </h1>

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
          </footer>
        </div>
      </section>
    )
  }
}

Slide.contextTypes = {
  navigationData: PropTypes.shape({
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }).isRequired,
  helpData: PropTypes.shape({
    article: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
  }).isRequired
};

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  showHelp: PropTypes.bool,
  helpArticle: PropTypes.string,
  showBack: PropTypes.bool,
  showNext: PropTypes.bool,
  backDisabled: PropTypes.bool,
  nextDisabled: PropTypes.bool,
  backText: PropTypes.string,
  nextText: PropTypes.string,
  beginsSection: PropTypes.bool
}

Slide.defaultProps = {
  showHelp: true,
  showBack: true,
  showNext: true,
  backDisabled: false,
  nextDisabled: false,
  backText: 'Back',
  nextText: 'Continue'
}

export default Slide
