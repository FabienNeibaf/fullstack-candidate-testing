import { reduce } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'

import { JobSort } from './sort'
import { JobSortingSelection } from './sortingSelection'

const JobListHeader = () => {
  const { list } = useSelector((state) => state.jobs)

  const total = reduce(list, (res, cur) => res += cur.total_jobs_in_hospital, 0)
  return (
    <header className="flex py-2 items-center flex-wrap">
      <div className="flex-auto space-x-2">
        <span className='font-bold'>{total}</span>
        <span>job postings</span>
      </div>
      <JobSort />
      <JobSortingSelection />
    </header>
  )
}

export { JobListHeader }
