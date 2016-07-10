import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Button, Form, PageHeader, Panel } from 'react-bootstrap'
import { backSlide, nextSlide } from '../../helpers'

@observer
class Slide extends Component {
  render() {
    return (
      <section className="slide">
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
               <Button onClick={this.props.handleBack}
                       disabled={this.props.backDisabled}>
                 {this.props.backText}
               </Button>}
               {' '}
               {this.props.showNext &&
                <Button onClick={this.props.handleNext}
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

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  headerSmall: PropTypes.string,
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  showBack: PropTypes.bool,
  showNext: PropTypes.bool,
  backDisabled: PropTypes.bool,
  nextDisabled: PropTypes.bool,
  backText: PropTypes.string,
  nextText: PropTypes.string
}

Slide.defaultProps = {
  handleBack: backSlide,
  handleNext: nextSlide,
  showBack: true,
  showNext: true,
  backDisabled: false,
  nextDisabled: false,
  backText: 'Back',
  nextText: 'Continue'
}

export default Slide
