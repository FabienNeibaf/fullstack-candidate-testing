import PropTypes from 'prop-types'
import React from 'react'

import { Rate } from '../rate'

const JobCard = ({ item }) => {
  if (!item) return null

  return (
    <li>
      <h4>{item.job_title}</h4>
      <p>
        {item.job_type}
        {' | '}
        <Rate value={item.salary_range[0]} /> - <Rate value={item.salary_range[1]} />
        {' | '}
        {item.city}
      </p>
      <div>
        <div>
          <p>
            <span>Department</span>
            <span>{item.department}</span>
          </p>
          <p>
            <span>Hours / shifts</span>
            <span>{item.hours} / {item.work_schedule}</span>
          </p>
          <p>
            <span>Summary</span>
            <span>{item.description}</span>
          </p>
        </div>
        <div>
          <button>Job details</button>
          <button>Save Job</button>
        </div>
      </div>
    </li>
  )
}

JobCard.propTypes = {
  item: PropTypes.shape().isRequired
}

export { JobCard }
