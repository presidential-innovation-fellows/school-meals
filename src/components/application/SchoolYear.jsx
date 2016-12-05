import React, { PropTypes } from 'react'
import { schoolYear } from '../../config'

const SchoolYear = (props) => {
  return <span>{`${props.startYear}–${props.startYear + 1}`}</span>
}

SchoolYear.propTypes = {
  startYear: PropTypes.number
}

SchoolYear.defaultProps = {
  startYear: schoolYear || new Date().getFullYear()
}

export default SchoolYear
