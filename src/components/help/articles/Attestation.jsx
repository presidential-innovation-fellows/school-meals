import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { help } from './HelpText'
import WhatInformation from '../topics/WhatInformation'

export default class Attestation extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
      	<Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
        <Topic title={help.checkedTitle} body={help.checkedBody} />
        <WhatInformation />
        </ArticleFaqSection>
      </Article>
    )
  }
}
