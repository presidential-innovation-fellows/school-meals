import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class ArticleSection extends Component {
  render() {
    return (
      <section>
        { this.props.showLabel &&
          <bodyLabels>
            {this.props.header}
          </bodyLabels>
        }

        {this.props.children}
      </section>
    )
  }
}

ArticleSection.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  showLabel: PropTypes.bool
}

ArticleSection.defaultProps = {
  showLabel: true
}

export default ArticleSection
