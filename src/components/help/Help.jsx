import React, { Component, PropTypes } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { organization } from '../../config'
import classNames from 'classnames'
import SearchTopics from './SearchTopics'
import SlideTopics from './SlideTopics'
import { FormattedMessage } from 'react-intl'

@observer
class Help extends Component {
  @observable isSearching = false

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleClick(e) {
    // Home grown event delegation.
    switch (e.target.classList[0]) {
      case 'cd-panel':
      case 'cd-panel-close':
        this.handleHideHelp()
        break
      default:
        break
    }
  }

  handleHideHelp() {
    // Wrap in conditional to mitigate strange bug.
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
          <h1>
            <FormattedMessage
                id="help.title"
                description="Text for the title bar of the help area."
                defaultMessage="Help"
            />
          </h1>
          <a className="cd-panel-close" onClick={this.handleHideHelp}>
            <FormattedMessage
                id="help.close"
                description="Text for the link to close the help area."
                defaultMessage="Close"
            />
          </a>
        </header>

        <div className="cd-panel-container">
          <div className="cd-panel-content" id="help-content">
            <SearchTopics onChange={this.handleSearchChange} />
            { !this.isSearching &&
              <SlideTopics article={article} />
            }

            <footer>
              <p>
                <FormattedMessage
                    id="help.footer"
                    description="Footer text for the help area."
                    defaultMessage="If you have any questions about the program or how to apply, contact {organizationName} ({organizationContactInfo})."
                    values={{
                      organizationName: organization.name,
                      organizationContactInfo: `${organization.contact.phone} / ${organization.contact.email} / ${organization.contact.address}`
                    }}
                />
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
