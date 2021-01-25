import PropTypes from 'prop-types'
import React from 'react'

const Rate = ({ value }) => {
  if (!value) return null

  return (
    <span>
      ${value}
    </span>
  )
}

Rate.propTypes = {
  value: PropTypes.number
}

export { Rate }
