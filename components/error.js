import PropTypes from 'prop-types'
import React from 'react'

const Error = ({ message }) => {
  if (!message) return null

  return (
    <div>
      {message}
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string
}

export { Error }
