import { map, pick } from 'lodash'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'

import { getInitials } from '../../utils/string'
import { JobCard } from './jobCard'
import { sortJobItems } from '../../helpers/jobs'

const JobGroupItem = ({ group }) => {
  const [viewDetails, setViewDetails] = useState(false)
  const { sorting } = useSelector((state) => state.jobs)

  const handleClick = () => {
    setViewDetails(!viewDetails)
  }

  if (!group?.items) return null

  const items = sortJobItems(
    group.items, pick(sorting, ['Role', 'Department', 'Education', 'Experience'])
  )
  return (
    <li className="mt-3">
      <button
        className="px-3 py-2.5 w-full border-none text-left"
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
        {viewDetails && map(items, (item) => <JobCard key={item.job_id} item={item} />)}
      </ul>
    </li>
  )
}

JobGroupItem.propTypes = {
  group: PropTypes.shape().isRequired
}

export { JobGroupItem }
