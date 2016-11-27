import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { help } from './HelpText'
import WhatInformation from '../topics/WhatInformation'
import Household from '../topics/Household'
import Ieg from '../topics/Ieg'

export default class BeforeYouBegin extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.newAppTitle} body={help.newAppBody} />
          <Topic title={help.childAppTitle} body={help.childAppBody} />
          <Topic title={help.letterTitle} body={help.letterBody} />
          <Topic title={help.applyLaterTitle} body={help.applyLaterBody} />
          <Topic title={help.localProgramTitle} body={help.localProgramBody} />
          <Topic title={help.fosterQualifyTitle} body={help.fosterQualifyBody} />
          <Topic title={help.wicTitle} body={help.wicBody} />
          <Topic title={help.headStartTitle} body={help.headStartBody} />
          <Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
          <Topic title={help.usCitizenTitle} body={help.usCitizenBody} />
          <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
          <Topic title={help.checkedTitle} body={help.checkedBody} />
          <WhatInformation />
          <Household />
          <Topic title={help.disagreeTitle} body={help.disagreeBody} />
        </ArticleFaqSection>
        <ArticleDefinitionSection>
          <Ieg />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
