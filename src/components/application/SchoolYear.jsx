import React, { PropTypes } from 'react'
import { schoolYear } from '../../helpers'

const SchoolYear = (props) => {
  return <span>{schoolYear(props.startYear)}</span>
}

SchoolYear.propTypes = {
  startYear: PropTypes.number
}

SchoolYear.defaultProps = {
  startYear: new Date().getFullYear()
}

export default SchoolYear
