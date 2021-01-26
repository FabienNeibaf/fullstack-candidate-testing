import { map } from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SORT_JOBS } from '../../constants/strings'

const JobSortingSelection = () => {
  const { sorting } = useSelector((state) => state.jobs)
  const dispatch = useDispatch()

  const handleClick = (value) => () => {
    const nextSorting = { ...sorting }
    delete nextSorting[value]
    dispatch({ type: SORT_JOBS, sorting: nextSorting })
  }

  return (
    <ul className="flex flex-none p-2 w-full items-center flex-wrap justify-end">
      {map(sorting, (order, value) => (
        <li
          key={value}
          className="flex px-2 py-1 items-center space-x-1 border border-gray-200 rounded-md m-1"
        >
          <span>{value}</span>
          <span className="px-1 pb-0.5 bg-gray-400 rounded-md text-white">{order}</span>
          <button
            onClick={handleClick(value)}
            className="bg-gray-500 text-white w-4 h-4 rounded-full leading-none"
          >
            <span className="inline-block relative bottom-0.5">x</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export { JobSortingSelection }
