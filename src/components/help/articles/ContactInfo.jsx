import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { help, define } from './HelpText'

//F42

export default class All extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.contactTitle} body={help.contactBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
