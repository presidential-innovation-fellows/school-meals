import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon } from 'react-bootstrap'
import SummaryEditLink from './SummaryEditLink'
import Link from '../Link'

@observer
class SummaryLabelContent extends Component {
  render() {
    return (
      <span>
        {this.props.id
         ?
         <span key={this.props.id}>
           <Link id={this.props.id}>{this.props.children}</Link>
           {' '}
           <Link id={this.props.id}>
             <Glyphicon glyph="edit" />
           </Link>
         </span>
         :
         <span>this.props.children</span>
        }
      </span>
    )
  }
}

SummaryLabelContent.propTypes = {
  id: PropTypes.string
}

export default SummaryLabelContent
