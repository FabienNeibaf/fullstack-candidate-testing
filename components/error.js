import PropTypes from 'prop-types'
import React from 'react'

const Error = ({ message }) => {
  if (!message) return null

  return (
    <div className="text-red-600 p-2 bg-red-100 rounded-md">
      {message}
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string
}

export { Error }
