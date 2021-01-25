import PropTypes from 'prop-types'
import React from 'react'
import { JobSortingOption } from './sortingOption'
import { JobSortingSelection } from './sortingSelection'

const JobSort = ({ show }) => (
  <div className={`items-center ${show}`}>
    <span className="text-gray-400 pr-2">
      Sort by
    </span>
    <ul className="flex">
      <JobSortingOption value="Location" />
      <JobSortingOption value="Role" />
      <JobSortingOption value="Department" />
      <JobSortingOption value="Education" />
      <JobSortingOption value="Experience" />
    </ul>
    <JobSortingSelection />
  </div>
)

JobSort.propTypes = {
  show: PropTypes.string.isRequired
}

export { JobSort }
