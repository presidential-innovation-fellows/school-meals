import React, { PropTypes } from 'react'

const SchoolYear = (props) => {
  return <span>{props.startYear}–{props.startYear + 1}</span>
}

SchoolYear.propTypes = {
  startYear: PropTypes.number
}

SchoolYear.defaultProps = {
  startYear: new Date().getFullYear()
}

export default SchoolYear
