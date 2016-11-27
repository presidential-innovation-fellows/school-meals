import jQuery from 'jquery'
import React, { Component, PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import All from './articles/All'

class SearchTopics extends Component {
  constructor() {
    super()

    this.state = {
      searchVal: ''
    }

    this.setSearchVal = this.setSearchVal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setSearchVal('')
  }

  handleChange(event) {
    this.setSearchVal(event.target.value)
  }

  setSearchVal(searchVal) {
    const $container = jQuery('.searchable-help-topics')

    this.setState({ searchVal })

    if (this.props.onChange) {
      this.props.onChange(searchVal)
    }

    if (searchVal) {
      $container.show()

      jQuery('ul.usa-accordion > section > li', $container).each(function() {
        if (jQuery(this).text().search(new RegExp(searchVal, 'i')) < 0) {
          jQuery(this).hide()
        } else {
          jQuery(this).show()
        }
      })
    } else {
      $container.hide()
    }
  }

  render() {
    return (
      <div>
        <div role="search">
          <input
              id="search-field-small"
              type="search"
              name="search"
              placeholder="Search term"
              value={this.state.searchVal}
              onChange={this.handleChange}
          />
        </div>

        <div className="searchable-help-topics">
          <bodyLabels>
            <FormattedMessage
                id="help.searchResults"
                description="Search results help section title."
                defaultMessage="Search Results"
            />
          </bodyLabels>
          { this.state.searchVal && <All showLabels={false} /> }
        </div>
      </div>
    )
  }
}

SearchTopics.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchTopics
