import PropTypes from 'prop-types'
import React from 'react'

const JobFilterCard = ({ category, options }) => (
  <li className="bg-white mb-4 p-4 border border-gray-200">
    <h4 className="uppercase font-bold">
      {category.replace('_', ' ')}
    </h4>
    <ul className="pl-0">
      {options.map((option) => (
        <li key={option.key}>
          <button className="text-left py-1">
            <span>{option.key}</span>
            <span className="text-gray-400 p-2">
              {option.doc_count}
            </span>
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
