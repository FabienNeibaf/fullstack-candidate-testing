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
        <p className="md:flex items-center space-x-2">
          <span className="align-middle">{item.job_type}</span>
          <span className="align-middle">{' | '}</span>
          <span className="align-middle">
            <Rate value={item.salary_range[0]} /> - <Rate value={item.salary_range[1]} />
          </span>
          <span className="align-middle">{' | '}</span>
          <span className="align-middle">{item.city}</span>
          <span className="md:flex-auto" />
          <span className="inline-block align-middle">{moment(item.created).fromNow()}</span>
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
