import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import QualifyMigrant from '../topics/QualifyMigrant'
import QualifyHomeless from '../topics/QualifyHomeless'
import Household from '../topics/Household'
import { define, help } from './HelpText'

export default class OtherPrograms extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <QualifyMigrant />
          <QualifyHomeless />
          <Topic title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
          <Household />
          <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
          <Topic title={help.usCitizenTitle} body={help.usCitizenBody} />
          <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
          <Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
          <Topic title={help.childAppTitle} body={help.childAppBody} />
        </ArticleFaqSection>
        <ArticleDefinitionSection>
          <Topic title={define.mckinneyTerm} body={define.mckinneyDef} />
          <Topic title={define.mepTerm} body={define.mepDef} />
          <Topic title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
