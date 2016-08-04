import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { organization } from '../../config'

@observer
class Article extends Component {
  render() {
    return (
      <article>
        {this.props.children}
        <hr />
        <p>If you have any questions about the program or how to apply, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}).</p>
      </article>
    )
  }
}

export default Article
