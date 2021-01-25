import PropTypes from 'prop-types'
import React from 'react'

import { JobSort } from './sort'

const JobListHeader = ({ total }) => (
  <header>
    <div>
      {total} job postings
    </div>
    <JobSort />
  </header>
)

JobListHeader.propTypes = {
  total: PropTypes.number.isRequired
}

export { JobListHeader }
