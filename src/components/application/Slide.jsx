import React, { Component, PropTypes } from 'react'
import { Button, PageHeader, Panel } from 'react-bootstrap'

class Slide extends Component {
  constructor(props, context) {
    super(props, context);

    if (props.showBack) {
      this.back = (<Button onClick={props.handleBack}>
                     {props.backText}
                   </Button>)
    }

    if (props.showNext) {
      this.next = (<Button onClick={props.handleNext} bsStyle="primary">
                     {props.nextText}
                   </Button>)
    }
  }

  render() {
    return (
      <section>
        <PageHeader>{this.props.header}</PageHeader>

        <Panel>
          {this.props.children}

          <footer>
            {this.back}{' '}{this.next}
          </footer>
        </Panel>
      </section>
    )
  }
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  showBack: PropTypes.bool,
  showNext: PropTypes.bool,
  backText: PropTypes.string,
  nextText: PropTypes.string
}

Slide.defaultProps = {
  handleBack: () => {},
  handleNext: () => {},
  showBack: true,
  showNext: true,
  backText: 'Back',
  nextText: 'Continue'
}

export default Slide
