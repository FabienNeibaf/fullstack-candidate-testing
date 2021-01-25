import { map } from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { getInitials } from '../../utils/string'
import { JobCard } from './jobCard'

const JobGroupItem = ({ group }) => {
  const [viewDetails, setViewDetails] = useState(false)

  const handleClick = () => {
    setViewDetails(!viewDetails)
  }
  if (!group?.items) return null

  return (
    <li className="mt-3">
      <button
        className="px-3 py-2.5 border-none text-left"
        onClick={handleClick}
      >
        <h4 className="flex space-x-2 items-center">
          <span className={
            'bg-gray-300 rounded-md py-2 w-8 font-bold text-white leading-none text-center'
          }>
            {getInitials(group.name)}
          </span>
          <span>
            {group.total_jobs_in_hospital} jobs for {group.name}
          </span>
        </h4>
      </button>
      <ul>
        {viewDetails && map(group.items, (item) => <JobCard key={item.job_id} item={item} />)}
      </ul>
    </li>
  )
}

JobGroupItem.propTypes = {
  group: PropTypes.shape().isRequired
}

export { JobGroupItem }
