import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

import Welcome from './articles/Welcome'

@observer
class Help extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // home grown event delegation
    switch (e.target.classList[0]) {
      case 'cd-panel':
      case 'cd-panel-close':
        this.hideHelp()
    }
  }

  hideHelp() {
    this.props.helpData.isVisible = false
  }

  render() {
    const { article, isVisible } = this.props.helpData
    const classes = classNames(
      'cd-panel',
      'from-right',
      { 'is-visible': isVisible }
    )

    return (
      <asside className={classes} onClick={this.handleClick}>
        <header className="cd-panel-header">
          <h1>Help</h1>
          <a className="cd-panel-close" onClick={this.hideHelp}>Close</a>
        </header>

        <div className="cd-panel-container">
          <div className="cd-panel-content">
            {(() => {
               switch (article) {
                 case 'welcome': return <Welcome />
                 default: return '';
               }
             })()}
          </div>
        </div>
      </asside>
    )
  }
}

Help.propTypes = {
  helpData: PropTypes.shape({
    isVisible: PropTypes.bool.isRequired,
    article: PropTypes.string.isRequired
  }).isRequired
};

export default Help
