import { map } from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SORT_JOBS } from '../../constants/strings'

const JobSortingSelection = () => {
  const { sorting } = useSelector((state) => state.jobs)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: SORT_JOBS, sorting })
  }

  return (
    <ul className="p-2">
      {map(sorting, ({ value, option }) => (
        <li key={value}>
          <span>{value}</span>
          <span>{option}</span>
          <button onClick={handleClick(value)}>
            x
          </button>
        </li>
      ))}
    </ul>
  )
}

export { JobSortingSelection }
