import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Well } from 'react-bootstrap'

@observer
class IncomeTypeDefaultText extends Component {
  render() {
    const { person } = this.props

    return(
      <div>
        <p>
          Does <strong>{person.firstName}</strong> have earnings from the following sources?
        </p>

        <Well>
          NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
        </Well>
      </div>
    )
  }
}

IncomeTypeDefaultText.propTypes = {
  person: PropTypes.object.isRequired
}

export default IncomeTypeDefaultText
