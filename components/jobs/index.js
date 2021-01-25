import React from 'react'

import { JobFilter } from './filter'
import { JobList } from './list'
import { JobSearch } from './search'

const Jobs = () => (
  <div>
    <JobSearch />
    <JobFilter />
    <JobList />
  </div>
)

export { Jobs }
