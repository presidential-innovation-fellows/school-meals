import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import ArticleSection from './ArticleSection'

@observer
class ArticleDefinitionSection extends Component {
  render() {
    const header =
      <FormattedMessage
          id="help.articleDefinitionSection.header"
          description="Definition help section title."
          defaultMessage="Definitions"
      />

    return <ArticleSection header={header} {...this.props} />
  }
}

ArticleDefinitionSection.propTypes = {
  children: PropTypes.node,
  showLabel: PropTypes.bool
}

export default ArticleDefinitionSection
