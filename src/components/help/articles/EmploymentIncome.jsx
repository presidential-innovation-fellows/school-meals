import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

export default class EmploymentIncome extends Component {
  render() {
    return (
      <Article>
        <Topic title="Current income">
          <p>
            Current income is income earned or received in the current month, or in the month before the completion of this application.
          </p>
        </Topic>
        <Topic title="Salary">
          <p>
            A salary is an agreed-upon and regular compensation for employment that may be paid in any frequency, but is usually paid on a monthly basis, not on an hourly, daily or piece-work basis.
          </p>
        </Topic>
        <Topic title="Wages">
          <p>
            Wages are an amount of money that a worker is paid for work or services by the hour, day or week.
          </p>
        </Topic>
        <Topic title="Tips">
          <p>
            Tips are income earned by service professionals that are not paid by an employer, but by patrons or customers for services, such as gratuity at a restaurant.
          </p>
        </Topic>
        <Topic title="Commissions">
          <p>
            Commissions are an amount of money that a worker is paid based on the level of sales he or she made.
          </p>
        </Topic>
        <Topic title="Cash bonus">
          <p>
            A cash bonus is a lump sum of money awarded to an employee, either occasionally or periodically.
          </p>
        </Topic>
        <Topic title="Self-employment">
          <p>
            Income from self-employment should be reported as your current net income, equal to gross revenue (income) minus business expenses. Gross revenue (income) includes the total income from goods sold or services rendered by the business, or the value of all products sold.
          </p>
          <ul>
            <li>Deductible business expenses include the cost of goods purchased; rent; utilities; depreciation charges; wages and salaries paid; and business taxes;</li>
            <li>Non-deductible business expenses include the value of salable merchandise used by the proprietors of retail businesses; and personal, Federal, State, or local income taxes;</li>
            <li>Net income for self-employed farmers is figured by subtracting the farmer’s operating expenses from the gross revenue (income). Gross income includes money received from the rental of farm land, buildings, or equipment to others; and incidental receipts from the sale of items such as wood, sand, or gravel. Operating expenses include cost of feed, fertilizer, seed, and other farming supplies; cash wages paid to farmhands; depreciation charges; cash rent; interest on farm mortgages; farm building repairs; and farm taxes.</li>
          </ul>
          <p>
            If your current net income is not your usual income, you may use last year’s income as a basis to report net income, or refer to the question ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ in the HELP.  If you have income from both wages and self-employment, see the help question ‘WHAT IF I HAVE INCOME FROM BOTH WAGES AND SELF-EMPLOYMENT?’ for more information.
          </p>
        </Topic>

        <Topic title="What is the difference between earnings from a salary and earnings from wages?">
          <p>A salary is an agreed-upon, fixed amount of money paid to an employee every year. Salaries may be paid in any frequency, but are usually paid on a monthly basis. Wages are also payment for work, but are agreed upon and paid on an hourly, daily or weekly basis.</p>
        </Topic>

        <Topic title="Do I need to report income from tips, commissions and cash bonuses?">
          <p>
            Yes. Income from tips, commissions and cash bonuses is considered household income and should be reported in your application.
          </p>
          <p>
            If your earnings from tips and commissions vary a lot from month to month, see the ‘WHAT IF MY INCOME IS NOT ALWAYS THE SAME?’ question in the HELP.
          </p>
        </Topic>

        <Topic title="What if I am self-employed?">
          <p>
            If you are self-employed, report income from work as a net amount. This is calculated by subtracting the total operating expenses of your business from its gross receipts or revenue.
          </p>
          <p>
            For more information, see ‘Self-employment’ in the HELP section.
          </p>
        </Topic>

        <Topic title="What if I have income from both wages and self-employment?">
          <p>
            For a household with income from wages and self-employment, each amount must be listed separately. When there is a business loss, income from wages must not be reduced by the amount of the business loss. If income from self-employment is negative, you should report it as $0 (zero) on your application.
          </p>
        </Topic>

        <Topic title="">
          <p></p>
        </Topic>

        <Topic title="">
          <p></p>
        </Topic>
      </Article>
    )
  }
}
