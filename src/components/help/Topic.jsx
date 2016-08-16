import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Topic extends Component {
  render() {
    const { title } = this.props
    const id = shortid.generate()

    return (
      <li>
        <button className="usa-accordion-button"
                aria-controls={`amendment-${id}`}>
          {title || '--- HELP ---'}
        </button>
        <div id={`amendment-${id}`} className="usa-accordion-content">
          {this.props.children}
        </div>
      </li>
    )
  }
}

Topic.propTypes = {
  title: PropTypes.string
}

export default Topic
