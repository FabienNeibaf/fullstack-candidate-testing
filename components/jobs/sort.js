import React from 'react'

import { JobSortingOption } from './sortingOption'

const JobSort = () => (
  <div className="hidden md:flex items-center">
    <span className="text-gray-400 pr-2">
      Sort by
    </span>
    <ul className="flex flex-auto">
      <JobSortingOption value="Location" />
      <JobSortingOption value="Role" />
      <JobSortingOption value="Department" />
      <JobSortingOption value="Education" />
      <JobSortingOption value="Experience" />
    </ul>
  </div>
)

export { JobSort }
