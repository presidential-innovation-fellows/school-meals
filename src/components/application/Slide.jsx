import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Button, Form, PageHeader, Panel } from 'react-bootstrap'

@observer
class Slide extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleBack = this.handleBack.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  handleBack() {
    this.context.navigationData.back()
  }

  handleNext() {
    this.context.navigationData.next()
  }

  render() {
    return (
      <section className="slide" id={this.props.id}>
        <PageHeader>
          {this.props.header}
          {' '}
          <small>{this.props.headerSmall}</small>
        </PageHeader>

        <Panel>
          <Form>
            {this.props.children}

            <footer>
              {this.props.showBack &&
               <Button onClick={this.handleBack}
                       disabled={this.props.backDisabled}>
                 {this.props.backText}
               </Button>}
               {' '}
               {this.props.showNext &&
                <Button onClick={this.handleNext}
                        disabled={this.props.nextDisabled}
                        bsStyle="primary">
                  {this.props.nextText}
                </Button>}
            </footer>
          </Form>
        </Panel>
      </section>
    )
  }
}

Slide.contextTypes = {
  navigationData: PropTypes.shape({
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }).isRequired
};

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  headerSmall: PropTypes.string,
  showBack: PropTypes.bool,
  showNext: PropTypes.bool,
  backDisabled: PropTypes.bool,
  nextDisabled: PropTypes.bool,
  backText: PropTypes.string,
  nextText: PropTypes.string
}

Slide.defaultProps = {
  showBack: true,
  showNext: true,
  backDisabled: false,
  nextDisabled: false,
  backText: 'Back',
  nextText: 'Continue'
}

export default Slide
