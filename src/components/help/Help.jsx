import React, { Component, PropTypes } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../config'
import classNames from 'classnames'
import SearchTopics from './SearchTopics'
import SlideTopics from './SlideTopics'

@observer
class Help extends Component {
  @observable isSearching = false

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
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
    // wrap in conditional to mitigate strange bug
    if (this) {
      this.props.helpData.isVisible = false
    }
  }

  handleSearchChange(searchVal) {
    this.isSearching = !!searchVal
  }

  render() {
    const { article, isVisible } = this.props.helpData
    const classes = classNames(
      'cd-panel',
      'from-right',
      { 'is-visible': isVisible }
    )

    return (
      <asside className={classes} onClick={this.handleClick} id="help">
        <header className="cd-panel-header">
          <h1>Help</h1>
          <a className="cd-panel-close" onClick={this.hideHelp}>Close</a>
        </header>

        <div className="cd-panel-container">
          <div className="cd-panel-content" id="help-content">
            <SearchTopics onChange={this.handleSearchChange} />
            { !this.isSearching &&
              <SlideTopics article={article} />
            }

            <footer>
              <p>
                If you have any questions about the program or how to apply, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).
              </p>
            </footer>
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
