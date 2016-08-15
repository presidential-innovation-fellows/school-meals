import React, { Component, PropTypes } from 'react'
import Alert from '../Alert'
import Button from '../Button'
import Slide from '../Slide'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { incomeTypeIsValid, informalName } from '../../../helpers'

@observer
class IncomeType extends Component {
  @computed get allSourcesFalse() {
    const { person, name } = this.props
    const sources = person.incomeTypes[name].sources

    for (let key in sources) {
      if (sources[key].has !== false) {
        return false
      }
    }

    return true
  }

  render() {
    const { person, name, label, showDefaultText, showMilitaryCaveat } = this.props
    const incomeType = person.incomeTypes[name]
    const defaultTextProps = { person, showMilitaryCaveat }
    const personName = informalName(person)
    return(
      <Slide header={personName}
             id={`income/${person.id}/${name}`}
             helpArticle={`${name}-income`}
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        {showDefaultText && <IncomeTypeDefaultText {...defaultTextProps} />}
        {this.props.children}

        { this.allSourcesFalse &&
          <Alert heading="Missing Income">
            On a previous page, you indicated
            that <strong>{personName}</strong> receives income from
            one of the above sources. Please enter this income above or
            correct your previous answer.
            <br />
            <Button slideId={`income/${person.id}`}
                    className="usa-button-gray">Change previous answer</Button>
          </Alert>
        }
      </Slide>
    )
  }
}

IncomeType.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showDefaultText: PropTypes.bool,
  showMilitaryCaveat: PropTypes.bool
}

IncomeType.defaultProps = {
  showDefaultText: true,
  showMilitaryCaveat: false
}

export default IncomeType
