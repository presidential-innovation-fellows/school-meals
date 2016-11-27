import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class SerialList extends Component {
  render() {
    const { className, idProp, items, intersection, mapFunc } = this.props
    const delim = ','
    const finalWord = intersection ?
      <FormattedMessage
          id="app.serialList.intersectionDelim"
          description="Final delimiter for an intersecting list."
          defaultMessage="or"
      /> :
          <FormattedMessage
              id="app.serialList.unionDelim"
              description="Final delimiter for a union list."
              defaultMessage="and"
          />

    return (
      <span>
        {items.map((item, i) => {
          return (
            <span key={idProp ? item[idProp] : i}>
              <span className={className}>{mapFunc(item)}</span>
              {(i < items.length - 1) && (items.length > 2) && delim}
              {(i < items.length - 1) && (items.length > 1) && ' '}
              {(i === items.length - 2) && (items.length > 1) && finalWord}
              {(i === items.length - 2) && (items.length > 1) && ' '}
            </span>
          )
        })}
      </span>
    )
  }
}

SerialList.propTypes = {
  idProp: PropTypes.string,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  intersection: PropTypes.bool,
  mapFunc: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

SerialList.defaultProps = {
  intersection: false,
  mapFunc: item => item
}

export default SerialList
