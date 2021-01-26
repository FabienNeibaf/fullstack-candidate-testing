import React from 'react'

import { JobFilter } from './filter'
import { JobList } from './list'
import { JobSearch } from './search'

const Jobs = () => (
  <div className="sm:p-4">
    <JobSearch />
    <div className="flex md:space-x-3 flex-wrap sm:flex-nowrap">
      <div className="hidden md:block md:w-96">
        <JobFilter show={true} />
      </div>
      <JobList />
    </div>
  </div>
)

export { Jobs }
