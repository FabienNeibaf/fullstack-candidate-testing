import PropTypes from 'prop-types'
import React from 'react'
import { SORT_JOBS } from '../../constants/strings'
import { useDispatch, useSelector } from 'react-redux'

const Options = ({ value }) => {
  const dispatch = useDispatch()
  const { sorting } = useSelector((state) => state.jobs)

  const handleClick = (order) => () => {
    const nextSorting = { ...sorting, [value]: order }

    dispatch({ type: SORT_JOBS, sorting: nextSorting })
  }

  return (
    <ul className="sort-option-list absolute border border-gray-100 w-full text-center bg-white">
      <li className="my-1">
        <button
          className="px-2 bg-gray-100 rounded-sm"
          onClick={handleClick('asc')}
        >
          asc
        </button>
      </li>
      <li className="my-1">
        <button
          className="px-2 bg-gray-100 rounded-sm"
          onClick={handleClick('desc')}
        >
          desc
        </button>
      </li>
    </ul>
  )
}

Options.propTypes = {
  value: PropTypes.string.isRequired
}

const JobSortingOption = ({ value }) => (
  <li className="p-2 sort-option relative cursor-default hover:bg-gray-100">
    <span>{value}</span>
    <Options value={value} />
  </li>
)

JobSortingOption.propTypes = {
  value: PropTypes.string.isRequired
}

export { JobSortingOption }
