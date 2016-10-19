import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import WhatIsGross from '../topics/WhatIsGross'
import WhatIsNet from '../topics/WhatIsNet'
import NotTheSame from '../topics/NotTheSame'

export default class ChildIncome extends Component {
  render() {
    return (
      <Article>
//        <Topic>
//          <p>Current income is income earned or received in the current month, or in the month before the completion of this application.</p>
//          <p>Social Security Disability Insurance (SSDI) are benefits paid to people who have worked long enough and paid Social Security taxes, but who can’t work because they have a medical condition that is expected to last at least one year or result in death.</p>
//          <p>A pension is generally a series of payments made to you after you retire from work. Pension payments are made regularly and are based on such factors as years of service and prior compensation.</p>
//          <p>An annuity is a series of payments under a contract made at regular intervals over a period of more than one full year. They can be either fixed (under which you receive a definite amount) or variable (not fixed). Annuities can be purchased by individuals alone, or with the help of an employer.</p>
//          <p>A trust is, in general, a relationship in which one person holds title to property, subject to an obligation to keep or use the property for the benefit of another.</p>
//        </Topic>
//included
        <Topic title="What is child income?">
          <p>
            Child income is money received from <em>outside</em> your household that is paid directly to your children. Many households do not have any child income.
          </p>
        </Topic>
//!!OMITTED!!
        <WhatIsGross />
        <WhatIsNet />
        <NotTheSame />
      </Article>
    )
  }
}
