import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help } from './HelpText'
import Standard from '../TopicStandard'
import WhatInformation from '../topics/WhatInformation'
import Household from '../topics/Household'
import IEG from '../topics/IEG'

export default class BeforeYouBegin extends Component {
  render() {
    return (
      <Article>
        <Standard title={help.newAppTitle} body={help.newAppBody} />
        <Standard title={help.childAppTitle} body={help.childAppBody} />
        <Standard title={help.letterTitle} body={help.letterBody} />
        <Standard title={help.applyLaterTitle} body={help.applyLaterBody} />
        <Standard title={help.localProgramTitle} body={help.localProgramBody} />
        <Standard title={help.fosterQualifyTitle} body={help.fosterQualifyBody} />
        <Standard title={help.wicTitle} body={help.wicBody} />
        <Standard title={help.headStartTitle} body={help.headStartBody} />
        <Standard title={help.otherProgramsTitle} body={help.otherProgramsBody} />
        <Standard title={help.usCitizenTitle} body={help.usCitizenBody} />
        <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
        <Standard title={help.checkedTitle} body={help.checkedBody} />
        <WhatInformation />
        <Household />
        <Standard title={help.disagreeTitle} body={help.disagreeBody} />
        <bodyLabels>Definitions</bodyLabels>
        <IEG />
      </Article>
    )
  }
}
