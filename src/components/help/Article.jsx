import jQuery from 'jquery'
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Accordion from '../../../node_modules/uswds/src/js/components/accordion';

@observer
class Article extends Component {
  constructor(props) {
    super(props)
    this.ref = this.ref.bind(this)
  }

  ref(ul) {
    this.ul = ul
    return null
  }

  componentDidMount() {
    // Taken in part from https://github.com/18F/web-design-standards/blob/c807e5be3a5786f575869c29145537bf4aa07584/src/js/start.js#L52
    new Accordion(jQuery(this.ul)) // eslint-disable-line no-new

    // Always open a new help screen scrolled to the top.
    document.getElementById('help-content').scrollTop = 0
  }

  render() {
    return (
      <ul className="usa-accordion" ref={this.ref}>
        {this.props.children}
      </ul>
    )
  }
}

export default Article
