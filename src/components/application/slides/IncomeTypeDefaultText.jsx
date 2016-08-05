import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Well } from 'react-bootstrap'

@observer
class IncomeTypeDefaultText extends Component {
  render() {
    const { person, showMilitaryCaveat } = this.props

    return(
      <div>
        <p>
          Does <strong>{person.firstName}</strong> have earnings from the following sources{!!showMilitaryCaveat && ', not including earnings from the military that were already reported'}?
        </p>

        <Well>
          NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
        </Well>
      </div>
    )
  }
}

IncomeTypeDefaultText.propTypes = {
  person: PropTypes.object.isRequired,
  showMilitaryCaveat: PropTypes.bool
}

IncomeTypeDefaultText.defaultProps = {
  showMilitaryCaveat: false
}

export default IncomeTypeDefaultText
