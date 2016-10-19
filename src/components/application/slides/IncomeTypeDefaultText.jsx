import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

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
          NOTE: Remember to report &nbsp;
          <Tooltipcomp id="currentAdult" text={tooltiptext.currentAdult} target="current" />
          &nbsp;, &nbsp;
          <Tooltipcomp id="gross" text={tooltiptext.gross} target="gross" />
          &nbsp; income.
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
