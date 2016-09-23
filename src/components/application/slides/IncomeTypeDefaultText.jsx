import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'

@observer
class IncomeTypeDefaultText extends Component {
  render() {
    const { person, showMilitaryCaveat } = this.props

    return(
      <div>
        <p className="usa-font-lead">
          Does <strong>{informalName(person)}</strong> have income from the following sources{!!showMilitaryCaveat && ', not including earnings from the military that were already reported'}?
        </p>

        <p>
          NOTE: Remember to report current, gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
        </p>
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
