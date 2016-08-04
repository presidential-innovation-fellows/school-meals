import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import Household from '../topics/Household'
import SharedCustody from '../topics/SharedCustody'
import { localPrograms } from '../../../config'

export default class OtherPrograms extends Component {
  render() {
    return (
      <Article>
        <Topic>
          <p>
            Even if your household is not eligible for free or reduced price meal benefits based on income, your foster child(ren) are still eligible for benefits. The foster status only applies to children who are formally placed by the State welfare agency or court in a caretaker household.
          </p>
        </Topic>

        <Topic title="What if my household does not qualify for free or reduced price meal benefits based on income, but I have a foster child, or a child who meets the definition for homeless, migrant or runaway?">
          <p>
            Children who are foster, or meet the definition of homeless, migrant, or runaway are still eligible for benefits regardless of household income.
          </p>
          <p>
            Wondering if your child qualifies as homeless, migrant or runaway? See "HOW DO I KNOW IF MY CHILDREN QUALIFY AS HOMELESS, MIGRANT, OR RUNAWAY?"
          </p>
        </Topic>

        <Topic title="How do I know if my children qualify as homeless, migrant, or runaway?">
          <p>
            Your children may qualify as homeless, migrant, or runaway if…
          </p>
          <ul>
            <li>your household lacks a permanent address,</li>
            <li>you are staying together in a shelter, hotel, or other temporary housing arrangement,</li>
            <li>your family relocates on a seasonal basis,</li>
            <li>or any children living with you who have chosen to leave their prior family or household.</li>
          </ul>
          <p>
            If you believe children in your household meet one or more of these descriptions and you haven’t been told your children will get free meals, please call or e-mail { localPrograms.homelessness.contact } to confirm their eligibility.
          </p>
        </Topic>

        <Topic title="I am the permanent guardian of a child. Do they automatically qualify for free meals as a foster child?">
          <p>
            No. The foster status only applies to children who are formally placed by the State welfare agency or court in a caretaker household. It does not apply to informal arrangements, such as caretaker arrangements or to permanent guardianship placements, which may exist outside of State or court based systems. The child may still be eligible based on your household income, so we encourage you to complete an application.
          </p>
        </Topic>

        <Topic title="I adopted a foster child. Are they still eligible for free meals?">
          <p>
            Congratulations on the adoption! And the answer is maybe. If your child was approved for free meals before the adoption went through, then your child is eligible to receive free meals for the rest of the school year. But next year the child will no longer eligible for free meals based on foster status, though they may still qualify based on household income, so we encourage you to submit an application.
          </p>
        </Topic>

        <Household />
        <SharedCustody />
      </Article>
    )
  }
}
