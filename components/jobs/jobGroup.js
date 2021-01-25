import { map } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { JobGroupItem } from './jobGroupItem'

const JobGroup = ({ jobs }) => (
  <ul>
    {map((jobs), (group) => <JobGroupItem key={group.name} group={group} />)}
  </ul>
)

JobGroup.propTypes = {
  jobs: PropTypes.array.isRequired
}

export { JobGroup }
