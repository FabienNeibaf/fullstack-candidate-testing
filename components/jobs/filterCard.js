import PropTypes from 'prop-types'
import React from 'react'

const JobFilterCard = ({ category, options }) => (
  <li>
    <h4>{category}</h4>
    <ul>
      {options.map((option) => (
        <li key={option.key}>
          <button>
            <span>{option.key}</span>
            <span>{option.doc_count}</span>
          </button>
        </li>
      ))}
    </ul>
  </li>
)

JobFilterCard.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    doc_count: PropTypes.number.isRequired,
  })).isRequired
}

export { JobFilterCard }
