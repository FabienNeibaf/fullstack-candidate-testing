import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchJobs } from '../../requests'
import { SET_JOBS, SET_JOB_FILTER } from '../../constants/strings'

const JobFilterCard = ({ category, options }) => {
  const dispatch = useDispatch()
  const jobCategory = useSelector((state) => state.jobs.filter.category)

  const handleClick = (value) => () => {
    const filter = { category: { key: category, value } }
    dispatch({ type: SET_JOB_FILTER, filter })
    fetchJobs(filter)
      .then(updateState)
      .catch(console.log)
  }

  const updateState = (data) => {
    if (!data) return

    dispatch({ type: SET_JOBS, data })
  }

  return (
    <li className="bg-white mb-4 p-4 border border-gray-200">
      <h4 className=" px-1 uppercase font-bold">
        {category.replace('_', ' ')}
      </h4>
      <ul className="pl-0">
        {options.map((option) => {
          const style = jobCategory?.key === category && jobCategory?.value === option.key
            ? 'bg-blue-200'
            : ''
          return (
            <li key={option.key} className={style}>
              <button className="text-left p-1 w-full" onClick={handleClick(option.key)}>
                <span>{option.key}</span>
                <span className="text-gray-400 p-2">
                  {option.doc_count}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

JobFilterCard.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    doc_count: PropTypes.number.isRequired,
  })).isRequired
}

export { JobFilterCard }
