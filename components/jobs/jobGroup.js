import { map } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { JobCard } from './jobCard'

const JobGroup = ({ jobs }) => (
  <ul>
    {map((jobs), (group) => (
      <li key={group.name}>
        <h4>
          {group.total_jobs_in_hospital} jobs for {group.name}
        </h4>
        <ul>
          {map(group.items, (item) => <JobCard key={item.job_id} item={item} />)}
        </ul>
      </li>
    ))}
  </ul>
)

JobGroup.propTypes = {
  jobs: PropTypes.array.isRequired
}

export { JobGroup }
