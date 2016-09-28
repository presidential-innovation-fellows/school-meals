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

  getChildrenArray(){
    let childArray = []
    let children = this.props.children

    /* Object.keys(children).forEach(function(key){
      let child = children[key]
      childArray.push(child);
    })
    */
    console.log("Printing out Help Children...\n")

    for (var i in children){

      console.log(children[i]);
      if (children[i] != null && typeof(children[i].type) != "undefined"){
        console.log(children[i].type.name);
      }
    }

    console.log("Finished Printing!\n")
    return (childArray);
  }




  render() {
    return (
      <ul className="usa-accordion">
        {/* <ul className="usa-accordion"> */}
          {this.props.children}
          { this.getChildrenArray() }

        {/* </ul> */}
      </ul>
    )
  }
}

export default Article
