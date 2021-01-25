// import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, map } from 'lodash'

import { JobGroupItem } from './jobGroupItem'

const JobGroup = () => {
  const { list } = useSelector((state) => state.jobs)

  if (isEmpty(list)) return null

  return (
    <ul>
      {map((list), (group) => <JobGroupItem key={group.name} group={group} />)}
    </ul>
  )
}

export { JobGroup }
