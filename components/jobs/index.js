import React from 'react'

import { JobFilter } from './filter'
import { JobList } from './list'
import { JobSearch } from './search'

const Jobs = () => (
  <div className="sm:p-4">
    <JobSearch />
    <div className="flex space-x-3 flex-wrap sm:flex-nowrap">
      <JobFilter />
      <JobList />
    </div>
  </div>
)

export { Jobs }
