import jQuery from 'jquery'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Accordion from '../../../node_modules/uswds/src/js/components/accordion';
import SearchTopics from "./SearchTopics";

@observer
class Article extends Component {
  componentDidMount() {
    // open the first help topic in an accordion by default
    document.getElementsByClassName('usa-accordion-button')[0]
            .setAttribute('aria-expanded', true)

    // taken from https://github.com/18F/web-design-standards/blob/c807e5be3a5786f575869c29145537bf4aa07584/src/js/start.js#L52
    // must unfortunately use jQuery since the USWDS internals expect it
    jQuery('.usa-accordion,.usa-accordion-bordered').each(function () {
      new Accordion(jQuery(this));
    });

    // always open a new help screen scrolled to the top
    document.getElementById('help-content').scrollTop = 0;
  }


  render() {
    return (
      <ul className="usa-accordion">

          {this.props.children}

      </ul>
    )
  }
}

export default Article
