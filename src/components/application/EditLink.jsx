import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon } from 'react-bootstrap'
import Link from './Link'

@observer
class EditLink extends Component {
  render() {
    const { children, id } = this.props
    return (
      <span>
        {children && <Link id={id}>{children}</Link>}
        {' '}
        <Link id={id}>
          <Glyphicon glyph="edit" />
        </Link>
      </span>
    )
  }
}

EditLink.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.required
}

export default EditLink
