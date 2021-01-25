import PropTypes from 'prop-types'
import React from 'react'

import { JobSort } from './sort'

const JobListHeader = ({ total }) => (
  <header className="flex py-2 items-center">
    <div>
      <span className='font-bold'>{total} </span>
      job postings
    </div>
    <JobSort show="hidden" />
  </header>
)

JobListHeader.propTypes = {
  total: PropTypes.number.isRequired
}

export { JobListHeader }
