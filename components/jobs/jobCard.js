import moment from 'moment-timezone'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Rate } from '../rate'
import { JobCardDetails } from './jobCardDetails'

const JobCard = ({ item }) => {
  const [viewDetails, setViewDetails] = useState(false)

  const handleClick = () => {
    setViewDetails(!viewDetails)
  }

  if (!item) return null

  return (
    <li className="border-t px-3 border-gray-200">
      <button className="py-3 text-left w-full" onClick={handleClick}>
        <h4 className="font-bold">
          {item.job_title}
        </h4>
        <p className="flex items-center space-x-2">
          <span>{item.job_type}</span>
          <span>|</span>
          <span>
            <Rate value={item.salary_range[0]} /> - <Rate value={item.salary_range[1]} />
          </span>
          <span>|</span>
          <span>{item.city}</span>
          <span className="flex-auto" />
          <span>{moment(item.created).fromNow()}</span>
        </p>
      </button>
      <JobCardDetails item={item} show={viewDetails} />
    </li>
  )
}

JobCard.propTypes = {
  item: PropTypes.shape().isRequired
}

export { JobCard }
