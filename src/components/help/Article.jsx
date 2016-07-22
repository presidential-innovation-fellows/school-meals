import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Article extends Component {
  render() {
    return (
      <article>
        {this.props.children}
      </article>
    )
  }
}

export default Article
