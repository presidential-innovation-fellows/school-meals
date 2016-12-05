import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Topic extends Component {
  render() {
    const { body, children, title } = this.props
    const id = shortid.generate()

    return (
      <li>
        <button
            className="usa-accordion-button"
            aria-controls={`amendment-${id}`}
        >
          {title || '--- HELP ---'}
        </button>
        <div id={`amendment-${id}`} className="usa-accordion-content">
          {body || children}
        </div>
      </li>
    )
  }
}

Topic.propTypes = {
  body: PropTypes.node,
  title: PropTypes.node
}

export default Topic
