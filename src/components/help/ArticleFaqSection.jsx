import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import ArticleSection from './ArticleSection'

@observer
class ArticleFaqSection extends Component {
  render() {
    const header =
      <FormattedMessage
          id="help.articleFaqSection.header"
          description="FAQ help section title."
          defaultMessage="Frequently Asked Questions"
      />

    return <ArticleSection header={header} {...this.props} />
  }
}

ArticleFaqSection.propTypes = {
  children: PropTypes.node,
  showLabel: PropTypes.bool
}

export default ArticleFaqSection
